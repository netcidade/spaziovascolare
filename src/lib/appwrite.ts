import { Client, Databases, Account, Storage, Query, ID } from 'appwrite';

// ── Configuração ──────────────────────────────────────
export const APPWRITE_ENDPOINT = 'https://appwrite.netcidade.com/v1';
export const APPWRITE_PROJECT  = 'spazio-vascolare';

// Collection IDs — crie no Appwrite Console e coloque aqui
export const COLLECTIONS = {
  TREATMENTS : 'tratamentos',
  SURGERIES  : 'cirurgias',
  POSTS      : 'blog_posts',
  SETTINGS   : 'site_settings',
  QUIZ       : 'quiz',
};

export const DATABASE_ID = 'spazio-vascolare';

// ── Cliente ────────────────────────────────────────────
export const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT);

export const account   = new Account(client);
export const databases = new Databases(client);
export const storage   = new Storage(client);

// ── Helpers ────────────────────────────────────────────

/** Tratamentos */
export async function getTreatments() {
  const res = await databases.listDocuments(DATABASE_ID, COLLECTIONS.TREATMENTS, [
    Query.orderAsc('order'),
    Query.equal('active', true),
  ]);
  return res.documents;
}

export async function getTreatment(id: string) {
  return databases.getDocument(DATABASE_ID, COLLECTIONS.TREATMENTS, id);
}

export async function getTreatmentBySlug(slug: string) {
  const res = await databases.listDocuments(DATABASE_ID, COLLECTIONS.TREATMENTS, [
    Query.equal('slug', slug),
    Query.equal('active', true),
  ]);
  return res.documents[0] ?? null;
}

export async function upsertTreatment(id: string | null, data: Record<string, unknown>) {
  if (id) return databases.updateDocument(DATABASE_ID, COLLECTIONS.TREATMENTS, id, data);
  return databases.createDocument(DATABASE_ID, COLLECTIONS.TREATMENTS, ID.unique(), data);
}

export async function deleteTreatment(id: string) {
  return databases.deleteDocument(DATABASE_ID, COLLECTIONS.TREATMENTS, id);
}

/** Cirurgias */
export async function getSurgeries() {
  const res = await databases.listDocuments(DATABASE_ID, COLLECTIONS.SURGERIES, [
    Query.orderAsc('order'),
    Query.equal('active', true),
  ]);
  return res.documents;
}

export async function upsertSurgery(id: string | null, data: Record<string, unknown>) {
  if (id) return databases.updateDocument(DATABASE_ID, COLLECTIONS.SURGERIES, id, data);
  return databases.createDocument(DATABASE_ID, COLLECTIONS.SURGERIES, ID.unique(), data);
}

export async function deleteSurgery(id: string) {
  return databases.deleteDocument(DATABASE_ID, COLLECTIONS.SURGERIES, id);
}

export async function getSurgeryBySlug(slug: string) {
  const res = await databases.listDocuments(DATABASE_ID, COLLECTIONS.SURGERIES, [
    Query.equal('slug', slug),
    Query.equal('active', true),
  ]);
  return res.documents[0] ?? null;
}

/** Blog */
export async function getPosts(limit = 20) {
  const res = await databases.listDocuments(DATABASE_ID, COLLECTIONS.POSTS, [
    Query.orderDesc('published_at'),
    Query.equal('published', true),
    Query.limit(limit),
  ]);
  return res.documents;
}

export async function getAllPostsAdmin() {
  const res = await databases.listDocuments(DATABASE_ID, COLLECTIONS.POSTS, [
    Query.orderDesc('$createdAt'),
    Query.limit(100),
  ]);
  return res.documents;
}

export async function getPostsByCategory(category: string, limit = 10) {
  const res = await databases.listDocuments(DATABASE_ID, COLLECTIONS.POSTS, [
    Query.equal('category', category),
    Query.equal('published', true),
    Query.orderDesc('published_at'),
    Query.limit(limit),
  ]);
  return res.documents;
}

export async function getPost(slug: string) {
  const res = await databases.listDocuments(DATABASE_ID, COLLECTIONS.POSTS, [
    Query.equal('slug', slug),
    Query.equal('published', true),
  ]);
  return res.documents[0] ?? null;
}

export async function upsertPost(id: string | null, data: Record<string, unknown>) {
  if (id) return databases.updateDocument(DATABASE_ID, COLLECTIONS.POSTS, id, data);
  return databases.createDocument(DATABASE_ID, COLLECTIONS.POSTS, ID.unique(), data);
}

export async function deletePost(id: string) {
  return databases.deleteDocument(DATABASE_ID, COLLECTIONS.POSTS, id);
}

/** Quiz / FAQ Geral */
export async function getQuizzes(page?: string) {
  const queries = [Query.orderAsc('order')];
  if (page) queries.push(Query.equal('page', page));
  
  const res = await databases.listDocuments(DATABASE_ID, COLLECTIONS.QUIZ, queries);
  return res.documents;
}

export async function upsertQuiz(id: string | null, data: Record<string, unknown>) {
  if (id) return databases.updateDocument(DATABASE_ID, COLLECTIONS.QUIZ, id, data);
  return databases.createDocument(DATABASE_ID, COLLECTIONS.QUIZ, ID.unique(), data);
}

export async function deleteQuiz(id: string) {
  return databases.deleteDocument(DATABASE_ID, COLLECTIONS.QUIZ, id);
}

/** Configurações do Site (com Cache & Timeout para velocidade) */
let _settingsCache: any = null;

export async function getSiteSettings() {
  if (_settingsCache) return _settingsCache;

  // Timeout de 1.5s para não travar o carregamento do site
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 1500);

  try {
    const res = await fetch(
      `${APPWRITE_ENDPOINT}/databases/${DATABASE_ID}/collections/${COLLECTIONS.SETTINGS}/documents/main`,
      { 
        headers: { 'X-Appwrite-Project': APPWRITE_PROJECT },
        signal: controller.signal 
      }
    );
    clearTimeout(timeoutId);

    if (res.ok) {
      _settingsCache = await res.json();
      return _settingsCache;
    }
  } catch (e) {
    console.error('Erro ao buscar site_settings (Timeout ou Rede):', e);
  } finally {
    clearTimeout(timeoutId);
  }
  return null;
}

/** Auth */
export async function loginAdmin(email: string, password: string) {
  return account.createEmailPasswordSession(email, password);
}

export async function logoutAdmin() {
  return account.deleteSession('current');
}

export async function getCurrentUser() {
  try { return await account.get(); }
  catch { return null; }
}

export { ID, Query };
