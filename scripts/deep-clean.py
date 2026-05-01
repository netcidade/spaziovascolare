import os

file_path = r'd:\_app\future-spazio-v2\src\pages\admin\dashboard.astro'

with open(file_path, 'rb') as f:
    content = f.read()

# Substituir sequências de bytes conhecidas que estão corrompidas
# âœ ï¸  (Pencil)
content = content.replace(b'\xc3\xa2\xc5\x93\x20\xc3\xaf\xc2\xb8\x8f', b'#EDIT_ICON#')
content = content.replace(b'\xc3\xa2\xc5\x93\xef\xbf\xbd\xef\xbf\xbd', b'#EDIT_ICON#')

# ðŸ—‘ï¸  (Trash)
content = content.replace(b'\xc3\xb0\xc5\xb8\xe2\x80\x94\xe2\x80\x98\xc3\xaf\xc2\xb8\x8f', b'#DEL_ICON#')

# ðŸ”— (Link)
content = content.replace(b'\xc3\xb0\xc5\xb8\xe2\x80\x9d\xe2\x80\x94', b'#LINK_ICON#')

# Outros caracteres comuns
replacements = {
    b'\xc3\xa2\xe2\x82\xac\xe2\x80\x9d': b'--', # â€”
    b'\xc3\xa2\xc5\x93\xe2\x80\xa2': b'x',     # âœ•
    b'\xc3\xa3\xc2\xad': b'i',                # Ã­
    b'\xc3\xa7\xc3\xa3': b'ca',               # Ã§Ã£
    b'\xc3\xa3\xc2\xba': b'u',                # Ãº
    b'\xc3\x83\xc2\xad': b'i',                # Ã­
    b'\xc3\x83\xc2\xa7\xc3\x83\xc2\xa3': b'ca',
    b'\xc3\x83\xc2\xb3': b'o',
    b'\xc3\x83\xc2\xa1': b'a',
    b'\xc3\x83\xc2\xaa': b'e',
}

for old, new in replacements.items():
    content = content.replace(old, new)

# Agora converter para string e fazer limpezas de texto
text = content.decode('utf-8', errors='ignore')

# Ícones SVG limpos (ASCII)
edit_svg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>'
del_svg  = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>'
link_svg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>'

text = text.replace('#EDIT_ICON#', edit_svg)
text = text.replace('#DEL_ICON#', del_svg)
text = text.replace('#LINK_ICON#', link_svg)

# Corrigir palavras específicas que sobraram
text = text.replace('Ã­', 'í').replace('Ã§Ã£o', 'ção').replace('Ã¡', 'á').replace('Ãª', 'ê').replace('Ã³', 'ó').replace('Ãº', 'ú')
text = text.replace('TÃ­tulo', 'Título').replace('AÃ§Ãµes', 'Ações').replace('visÃ­vel', 'visível').replace('Ã cone', 'Ícone')

# Limpar comentários decorativos corrompidos
import re
text = re.sub(r'/\* â•.*? \*/', '', text)
text = re.sub(r'/\* â”.*? \*/', '', text)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(text)

print("Dashboard limpo com sucesso!")
