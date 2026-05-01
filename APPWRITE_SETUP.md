# 🗄️ Appwrite Setup — Spazio Vascolare

## Acesso
- **Console**: https://appwrite.netcidade.com
- **Projeto**: Nonaca (ou crie um novo)

---

## 1. Criar o Database

1. Vá em **Databases** → **Create Database**
2. **Name**: `Spazio Vascolare`
3. **Database ID**: `spazio_vascolare` ← importante! usar exatamente esse ID

---

## 2. Criar as Collections

### Collection: `tratamentos`
**Collection ID**: `tratamentos`

| Atributo      | Tipo    | Required | Default |
|---------------|---------|----------|---------|
| icon          | String  | No       | —       |
| order         | Integer | No       | 99      |
| title         | String  | **Yes**  | —       |
| subtitle      | String  | No       | —       |
| description   | String  | **Yes**  | —       |
| duration      | String  | No       | —       |
| recovery      | String  | No       | —       |
| active        | Boolean | No       | true    |
| highlight     | Boolean | No       | false   |

**Indexes**: `order` (ASC), `active` (EQ)

---

### Collection: `cirurgias`
**Collection ID**: `cirurgias`

| Atributo      | Tipo    | Required | Default |
|---------------|---------|----------|---------|
| number        | String  | No       | —       |
| order         | Integer | No       | 99      |
| title         | String  | **Yes**  | —       |
| description   | String  | **Yes**  | —       |
| duration      | String  | No       | —       |
| recovery      | String  | No       | —       |
| anesthesia    | String  | No       | —       |
| active        | Boolean | No       | true    |

**Indexes**: `order` (ASC), `active` (EQ)

---

### Collection: `blog_posts`
**Collection ID**: `blog_posts`

| Atributo      | Tipo     | Required | Default |
|---------------|----------|----------|---------|
| title         | String   | **Yes**  | —       |
| slug          | String   | **Yes**  | —       |
| excerpt       | String   | **Yes**  | —       |
| content       | String   | No       | —       |
| category      | String   | No       | —       |
| published_at  | String   | No       | —       |
| cover_url     | String   | No       | —       |
| published     | Boolean  | No       | true    |

**Indexes**: `slug` (EQ, unique), `published` (EQ), `published_at` (DESC)

---

### Collection: `quiz`
**Collection ID**: `quiz`

| Atributo  | Tipo    | Required | Default |
|-----------|---------|----------|---------|
| page      | String  | **Yes**  | —       |
| order     | Integer | No       | 99      |
| question  | String  | **Yes**  | —       |
| answer    | String  | **Yes**  | —       |
| active    | Boolean | No       | true    |

**Indexes**: `page` (EQ), `order` (ASC)

---

### Collection: `site_settings`
**Collection ID**: `site_settings`

> Armazena um único documento com ID `main` contendo todas as configurações de contato do site.

| Atributo       | Tipo   | Required | Descrição                          |
|----------------|--------|----------|------------------------------------|
| whatsapp       | String | No       | Número WhatsApp com DDI (ex: 5543991502223) |
| phone          | String | No       | Telefone fixo formatado            |
| email          | String | No       | E-mail de contato                  |
| address        | String | No       | Endereço completo                  |
| city           | String | No       | Bairro / Cidade                    |
| cep            | String | No       | CEP                                |
| maps           | String | No       | URL do Google Maps                 |
| maps_embed     | String | No       | src do iframe embed do Google Maps |
| hours_weekday  | String | No       | Horário seg–sex                    |
| hours_sat      | String | No       | Horário sábado                     |
| hours_sun      | String | No       | Horário domingo/feriados           |
| hours_obs      | String | No       | Observação sobre horários          |
| instagram      | String | No       | URL Instagram                      |
| facebook       | String | No       | URL Facebook                       |
| youtube        | String | No       | URL YouTube                        |
| linkedin       | String | No       | URL LinkedIn                       |

**Permissões**: Leitura `Any`, Escrita `Users`  
**Não precisa de index** — acesso direto pelo ID `main`.

---

## 3. Permissões das Collections

Para cada collection, configure em **Settings → Permissions**:

- **Leitura**: `Any` (para o site público poder ler)
- **Criação/Edição/Exclusão**: `Users` (apenas usuários autenticados)

---

## 4. Criar o usuário Admin

1. Vá em **Auth** → **Users** → **Create User**
2. Preencha e-mail e senha do administrador
   - **Login**: `admin@spaziovascolare.com.br`
   - **Senha (Lembrete)**: *supermercado*
3. Esse usuário será usado para fazer login em `/admin`

---

## 5. Ajustar as configurações no código

Abra `src/lib/appwrite.ts` e confirme:

```ts
export const APPWRITE_ENDPOINT = 'https://appwrite.netcidade.com/v1';
export const APPWRITE_PROJECT  = 'SEU_PROJECT_ID'; // copie do console
export const DATABASE_ID       = 'spazio_vascolare';
```

Também ajuste nos scripts inline de:
- `src/pages/admin/index.astro`
- `src/pages/admin/dashboard.astro`

Substitua `'nonaca'` pelo Project ID correto copiado do console.

---

## 6. CORS — Adicionar domínio

No Appwrite Console → **Settings do Projeto** → **Platforms**:
- Clique em **Add Platform** → **Web App**
- **Hostname**: `spaziovascolare.com.br` (e `localhost` para dev)

---

## ✅ Pronto!

Após a configuração, acesse `/admin` para gerenciar todo o conteúdo do site.
