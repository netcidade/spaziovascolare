/**
 * Centraliza todas as chamadas de API usadas no painel administrativo.
 * Utiliza as constantes já definidas em `src/lib/appwrite.ts` para evitar
 * hard‑coding de endpoint, project e collection IDs.
 */

import { APPWRITE_ENDPOINT, APPWRITE_PROJECT, DATABASE_ID, COLLECTIONS } from './appwrite.ts';

// ---------- Utilitários ----------
export const getHeaders = () => ({
  'Content-Type': 'application/json',
  'X-Appwrite-Project': APPWRITE_PROJECT,
  'x-fallback-cookies': localStorage.getItem('cookieFallback') || ''
});

/**
 * Wrapper genérico para chamadas `fetch` ao Appwrite.
 */
export async function call(path: string, opts: RequestInit = {}): Promise<any> {
  const res = await fetch(`${APPWRITE_ENDPOINT}${path}`, {
    ...opts,
    credentials: 'include',
    headers: { ...getHeaders(), ...opts.headers }
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Erro de rede');
  }
  if (res.status === 204) return null;
  return res.json().catch(() => null);
}

export function slugify(text: string): string {
  return text.toString().toLowerCase().trim()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

export function toast(msg: string): void {
  const container = document.getElementById('toasts');
  if (!container) return;
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

export const uniqueId = (): string =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

// ---------- Ícones ----------
export const EDIT_SVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
export const DEL_SVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`;
export const LINK_SVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>`;

// ---------- RENDERING ----------
export function renderT() {
  const el = document.getElementById('tableT');
  const data = (window as any).dataT || [];
  if (!el) return;
  el.innerHTML = data.map((d: any) => `
    <tr>
      <td style="font-family:var(--font-mono)">${d.order}</td>
      <td style="font-weight:700">${d.title}</td>
      <td style="color:var(--text-muted);font-size:0.8rem">${d.subtitle || '—'}</td>
      <td><span class="badge ${d.active ? 'badge--ok' : 'badge--wait'}">${d.active ? 'Ativo' : 'Off'}</span></td>
      <td>
        <div class="row-actions">
          <button class="btn-icon" onclick="editT('${d.$id}')">${EDIT_SVG}</button>
          <button class="btn-icon" onclick="deleteDoc('${COLLECTIONS.TREATMENTS}', '${d.$id}')">${DEL_SVG}</button>
        </div>
      </td>
    </tr>
  `).join('') || '';
}

export function renderS() {
  const el = document.getElementById('tableS');
  const data = (window as any).dataS || [];
  if (!el) return;
  el.innerHTML = data.map((d: any) => `
    <tr>
      <td style="font-family:var(--font-mono)">${d.order}</td>
      <td style="font-weight:700">${d.title}</td>
      <td style="color:var(--text-muted);font-size:0.8rem">${d.duration || '—'}</td>
      <td><span class="badge ${d.active ? 'badge--ok' : 'badge--wait'}">${d.active ? 'Ativo' : 'Off'}</span></td>
      <td>
        <div class="row-actions">
          <button class="btn-icon" onclick="editS('${d.$id}')">${EDIT_SVG}</button>
          <button class="btn-icon" onclick="deleteDoc('${COLLECTIONS.SURGERIES}', '${d.$id}')">${DEL_SVG}</button>
        </div>
      </td>
    </tr>
  `).join('') || '';
}

export function renderP() {
  const el = document.getElementById('tableP');
  const data = (window as any).dataP || [];
  if (!el) return;
  el.innerHTML = data.map((d: any) => `
    <tr>
      <td style="font-weight:700">${d.title}</td>
      <td style="font-family:var(--font-mono);font-size:0.75rem">${d.category}</td>
      <td style="color:var(--text-muted);font-size:0.8rem">${d.published_at ? new Date(d.published_at).toLocaleDateString() : '—'}</td>
      <td><span class="badge ${d.published ? 'badge--ok' : 'badge--wait'}">${d.published ? 'Live' : 'Draft'}</span></td>
      <td>
        <div class="row-actions">
          <button class="btn-icon" onclick="editP('${d.$id}')">${EDIT_SVG}</button>
          <a href="/blog/${d.slug}" target="_blank" class="btn-icon">${LINK_SVG}</a>
          <button class="btn-icon" onclick="deleteDoc('${COLLECTIONS.POSTS}', '${d.$id}')">${DEL_SVG}</button>
        </div>
      </td>
    </tr>
  `).join('') || '';
}

export function renderQ() {
  const el = document.getElementById('tableQ');
  const data = (window as any).dataQ || [];
  if (!el) return;
  el.innerHTML = data.map((d: any) => `
    <tr>
      <td style="font-family:var(--font-mono)">${d.order}</td>
      <td style="text-transform:uppercase;font-size:0.75rem;font-weight:700">${d.page}</td>
      <td style="font-weight:700">${d.question}</td>
      <td><span class="badge ${d.active ? 'badge--ok' : 'badge--wait'}">${d.active ? 'Ativo' : 'Off'}</span></td>
      <td>
        <div class="row-actions">
          <button class="btn-icon" onclick="editQ('${d.$id}')">${EDIT_SVG}</button>
          <button class="btn-icon" onclick="deleteDoc('${COLLECTIONS.QUIZ}', '${d.$id}')">${DEL_SVG}</button>
        </div>
      </td>
    </tr>
  `).join('') || '';
}

// ---------- API de Dashboard ----------

export async function loadStats(): Promise<void> {
  try {
    const [t, s, p, q] = await Promise.all([
      call(`/databases/${DATABASE_ID}/collections/${COLLECTIONS.TREATMENTS}/documents?limit=0`),
      call(`/databases/${DATABASE_ID}/collections/${COLLECTIONS.SURGERIES}/documents?limit=0`),
      call(`/databases/${DATABASE_ID}/collections/${COLLECTIONS.POSTS}/documents?limit=0`),
      call(`/databases/${DATABASE_ID}/collections/${COLLECTIONS.QUIZ}/documents?limit=0`)
    ]);
    
    const setStat = (id: string, val: any) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val.toString();
    };

    setStat('count-t', t.total);
    setStat('count-s', s.total);
    setStat('count-p', p.total);
    setStat('count-q', q.total);
  } catch (e) { console.error('Stats load error:', e); }
}

export async function loadAll(): Promise<void> {
  try {
    const [t, s, p, q] = await Promise.all([
      call(`/databases/${DATABASE_ID}/collections/${COLLECTIONS.TREATMENTS}/documents?limit=100&orderAttributes[]=order&orderTypes[]=ASC`),
      call(`/databases/${DATABASE_ID}/collections/${COLLECTIONS.SURGERIES}/documents?limit=100&orderAttributes[]=order&orderTypes[]=ASC`),
      call(`/databases/${DATABASE_ID}/collections/${COLLECTIONS.POSTS}/documents?limit=100&orderAttributes[]=%24createdAt&orderTypes[]=DESC`),
      call(`/databases/${DATABASE_ID}/collections/${COLLECTIONS.QUIZ}/documents?limit=100&orderAttributes[]=order&orderTypes[]=ASC`)
    ]);
    
    (window as any).dataT = t.documents; 
    (window as any).dataS = s.documents; 
    (window as any).dataP = p.documents; 
    (window as any).dataQ = q.documents;

    renderT(); renderS(); renderP(); renderQ();
  } catch (e) { 
    console.error('Data load error:', e);
    toast('Erro ao carregar dados'); 
  }
}

export async function loadSettings(): Promise<void> {
  const SETTINGS_DOC_ID = 'main';
  const SETTINGS_FIELDS = ['whatsapp','phone','email','address','city','cep','maps','hours_weekday','hours_sat','hours_sun','hours_obs','instagram','facebook','youtube','linkedin','maps_embed'];
  try {
    const doc = await call(`/databases/${DATABASE_ID}/collections/${COLLECTIONS.SETTINGS}/documents/${SETTINGS_DOC_ID}`);
    SETTINGS_FIELDS.forEach(key => {
      const el = document.getElementById(`cfg_${key}`) as HTMLInputElement;
      if (el && doc[key] !== undefined) el.value = doc[key] || '';
    });
  } catch (e) {}
}

export function initTabs(): void {
  const links = document.querySelectorAll('.nav-link[data-tab]');
  links.forEach(l => {
    l.addEventListener('click', () => {
      links.forEach(x => x.classList.remove('active'));
      l.classList.add('active');
      const tab = (l as HTMLElement).dataset.tab;
      document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
      const target = document.getElementById(`tab-${tab}`);
      if (target) target.classList.add('active');
      const title = document.getElementById('tabTitle');
      if (title) title.textContent = (l as HTMLElement).textContent;
    });
  });
}

export function initEditors(): void {
  // @ts-ignore
  if (typeof Quill === 'undefined') return;
  const qConfig = { 
    theme: 'snow', 
    modules: { 
      toolbar: [
        ['bold', 'italic', 'underline'], 
        [{ 'list': 'ordered'}, { 'list': 'bullet' }], 
        ['link', 'clean']
      ] 
    } 
  };

  const editors = ['editorT', 'editorS', 'editorP', 'editorExc', 'editorSubT', 'editorSubS'];
  
  editors.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    // Criar botão de alternância HTML
    const btn = document.createElement('button');
    btn.innerHTML = '‹/› HTML';
    btn.className = 'btn-html-toggle';
    btn.type = 'button';
    el.parentElement?.insertBefore(btn, el);

    const quill = new (window as any).Quill('#' + id, qConfig);
    const name = id.replace('editor', 'quill');
    (window as any)[name] = quill;

    // Lógica do Toggle
    let isHtml = false;
    const txt = document.createElement('textarea');
    txt.className = 'html-editor-area hidden';
    el.parentElement?.appendChild(txt);

    btn.onclick = () => {
      isHtml = !isHtml;
      // Encontrar a toolbar do Quill (geralmente é o elemento anterior ao editor)
      const toolbar = el.previousElementSibling;
      
      if (isHtml) {
        txt.value = quill.root.innerHTML;
        el.style.display = 'none';
        if (toolbar && toolbar.classList.contains('ql-toolbar')) {
          (toolbar as HTMLElement).style.display = 'none';
        }
        txt.classList.remove('hidden');
        btn.textContent = '👁️ Visual';
      } else {
        quill.root.innerHTML = txt.value;
        el.style.display = 'block';
        if (toolbar && toolbar.classList.contains('ql-toolbar')) {
          (toolbar as HTMLElement).style.display = 'block';
        }
        txt.classList.add('hidden');
        btn.textContent = '‹/› HTML';
      }
    };
  });
}

export async function deleteDoc(coll: string, id: string): Promise<void> {
  if (!confirm('Tem certeza que deseja excluir?')) return;
  try {
    await call(`/databases/${DATABASE_ID}/collections/${coll}/documents/${id}`, { method: 'DELETE' });
    toast('Excluído com sucesso!');
    loadAll(); loadStats();
  } catch (e) { toast('Erro ao excluir'); }
}

// Bridge
(window as any).deleteDoc = deleteDoc;
(window as any).renderT = renderT;
(window as any).renderS = renderS;
(window as any).renderP = renderP;
(window as any).renderQ = renderQ;
