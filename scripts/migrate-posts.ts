import { Client, Databases, Account, ID, Query } from 'appwrite';

const APPWRITE_ENDPOINT = 'https://appwrite.netcidade.com/v1';
const APPWRITE_PROJECT = 'nonaca';
const DATABASE_ID = 'spazio-vascolare';
const POSTS_COLLECTION = 'blog_posts';

// Configura o client
const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT);

const account = new Account(client);
const databases = new Databases(client);

// Helper para remover tags HTML do excerpt
function stripHtml(html: string) {
  return html.replace(/<[^>]*>?/gm, '').replace(/\[&hellip;\]/g, '...').trim();
}

async function run() {
  console.log('Iniciando migração de posts...');

  try {
    // 1. Autenticar como admin
    console.log('Autenticando...');
    try {
      await account.createEmailPasswordSession('gerencia@netcidade.com', 'Snds@1972');
      console.log('Autenticado com sucesso!');
    } catch (e: any) {
      if (e.message.includes('creation is prohibited when a session is active')) {
        console.log('Sessão já estava ativa.');
      } else {
        throw e;
      }
    }

    // 2. Buscar posts do WordPress com os relacionamentos embeddados (imagem e categoria)
    console.log('Buscando posts do WordPress...');
    const wpUrl = 'https://spaziovascolare.com.br/wp-json/wp/v2/posts?per_page=100&_embed';
    const wpRes = await fetch(wpUrl);
    const wpPosts = await wpRes.json();

    console.log(`Encontrados ${wpPosts.length} posts. Começando inserção no Appwrite...`);

    let count = 0;
    // 3. Iterar e inserir
    for (const post of wpPosts) {
      // Tentar pegar a imagem de capa (featured media)
      let coverUrl = '';
      if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
        coverUrl = post._embedded['wp:featuredmedia'][0].source_url || '';
      }

      // Tentar pegar o nome da categoria
      let category = 'Geral';
      if (post._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][0]) {
        const cats = post._embedded['wp:term'][0];
        if (cats.length > 0) {
          category = cats[0].name;
        }
      }

      const data = {
        title: post.title.rendered,
        slug: post.slug,
        excerpt: stripHtml(post.excerpt.rendered),
        content: post.content.rendered,
        category: category,
        published_at: post.date,
        cover_url: coverUrl,
        published: true
      };

      try {
        // Verifica se já existe um post com este slug para evitar duplicidade
        const existing = await databases.listDocuments(DATABASE_ID, POSTS_COLLECTION, [
          Query.equal('slug', post.slug)
        ]);

        if (existing.documents.length > 0) {
          // Atualiza o existente
          await databases.updateDocument(
            DATABASE_ID,
            POSTS_COLLECTION,
            existing.documents[0].$id,
            data
          );
          console.log(`Atualizado: ${post.title.rendered}`);
        } else {
          // Cria novo
          await databases.createDocument(
            DATABASE_ID,
            POSTS_COLLECTION,
            ID.unique(),
            data
          );
          console.log(`Criado: ${post.title.rendered}`);
        }
        count++;
      } catch (err: any) {
        console.error(`Erro ao inserir o post "${post.title.rendered}":`, err.message);
      }
    }

    console.log(`Migração concluída! ${count} posts processados.`);
  } catch (error) {
    console.error('Erro geral durante a migração:', error);
  } finally {
    try {
      await account.deleteSession('current');
    } catch (_) { }
  }
}

run();
