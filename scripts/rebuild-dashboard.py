import os

file_path = r'd:\_app\future-spazio-v2\src\pages\admin\dashboard.astro'

# Definindo ícones como constantes ASCII
EDIT_SVG = '<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"pointer-events:none\"><path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"/><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"/></svg>'
DEL_SVG  = '<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"pointer-events:none\"><polyline points=\"3 6 5 6 21 6\"/><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"/><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"/><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"/></svg>'
LINK_SVG = '<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"></path><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"></path></svg>'

with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Substituir o que sobrou de corrompido
import re

# Corrigir botões de ação com regex para pegar o que estiver entre as aspas do título e o fechamento da tag
# Exemplo: title="Editar">âœ ï¸ </button>
text = re.sub(r'title="Editar">.*?<\/button>', f'title="Editar">{EDIT_SVG}</button>', text)
text = re.sub(r'title="Excluir">.*?<\/button>', f'title="Excluir">{DEL_SVG}</button>', text)
text = re.sub(r'title="Ver post".*?>.*?<\/a>', f'title="Ver post" style="display:flex;align-items:center;justify-content:center">{LINK_SVG}</a>', text)

# Corrigir palavras com encoding quebrado
text = text.replace('Ã­', 'í').replace('Ã§Ã£o', 'ção').replace('Ã¡', 'á').replace('Ãª', 'ê').replace('Ã³', 'ó').replace('Ãº', 'ú')
text = text.replace('TÃ­tulo', 'Título').replace('AÃ§Ãµes', 'Ações').replace('visÃ­vel', 'visível').replace('Ã cone', 'Ícone').replace('descriÃ§Ã£o', 'descrição')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(text)

print("Dashboard reconstruído e limpo!")
