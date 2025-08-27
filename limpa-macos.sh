#!/bin/bash
# Script para limpar arquivos temporários do macOS (.DS_Store e ._*)

echo "🔍 Limpando arquivos indesejados do macOS..."

# Apagar .DS_Store e ._*
find . -name ".DS_Store" -delete
find . -name "._*" -delete

# Garantir que o Git ignore esses arquivos
if [ ! -f .gitignore ]; then
  echo ".gitignore não encontrado, criando..."
  touch .gitignore
fi

# Adicionar regras ao .gitignore se ainda não existirem
grep -qxF '.DS_Store' .gitignore || echo '.DS_Store' >> .gitignore
grep -qxF '._*' .gitignore || echo '._*' >> .gitignore

# Atualizar staging (remover arquivos já rastreados)
git rm --cached -r .DS_Store 2>/dev/null
git rm --cached -r '._*' 2>/dev/null

echo "✅ Limpeza concluída!"
echo "Agora você pode commitar a limpeza:"
echo "   git add .gitignore"
echo "   git commit -m 'chore: limpeza de arquivos macOS'"
