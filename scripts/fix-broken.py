import os

file_path = r'd:\_app\future-spazio-v2\src\pages\admin\dashboard.astro'

# Eu vou ler o arquivo atual, e se ele estiver menor que 70KB, eu vou reconstruir do zero
# usando os blocos que eu já li anteriormente (eu os tenho no meu contexto).

# Como eu não posso colar 75KB aqui, eu vou usar o 'sed' ou algo similar se eu pudesse, 
# mas vou tentar o replace_file_content de novo com um bloco MENOR e mais PRECISO.

# Espera, eu vou usar o scripts/rebuild-dashboard.py que eu criei, mas vou melhorar ele 
# para incluir a restauração do código deletado.

with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Se o texto contém o salto bizarro (1649 -> loadSurgeries), eu vou consertar.
broken_part = '            <td class="td-muted">${t.icon ?? \'—\'}</td>\n          loadSurgeries();'
# Note: o target content tem que ser EXATAMENTE o que está no arquivo.

if broken_part in text:
    print("Encontrei a parte quebrada, restaurando...")
    # ...
else:
    print("Não encontrei a parte quebrada exatamente como descrita.")
