import { Client, Databases, Account } from 'appwrite';

const APPWRITE_ENDPOINT = 'https://appwrite.netcidade.com/v1';
const APPWRITE_PROJECT = 'spazio-vascolare';
const DATABASE_ID = 'spazio-vascolare';

const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT);

const account = new Account(client);
const databases = new Databases(client);

async function check() {
  try {
    await account.createEmailPasswordSession('gerencia@netcidade.com', 'Snds@1972');
    
    let posts = await databases.listDocuments(DATABASE_ID, 'blog_posts', []);
    
    let cats: any = {};
    for (let p of posts.documents) {
      cats[p.category] = (cats[p.category] || 0) + 1;
    }
    console.log(cats);
    
    await account.deleteSession('current');
  } catch(e) {
    console.error(e);
  }
}

check();
