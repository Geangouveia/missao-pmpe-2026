import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

console.log('🚀 Iniciando deploy para o GitHub Pages (gh-pages)...');

// 1. Build do projeto
console.log('📦 Gerando build de produção...');
execSync('cmd /c "npm run build"', { stdio: 'inherit' });

// 2. Prepara index temporário do Git
const gitDir = path.resolve('.git');
const tempIndex = path.join(gitDir, 'temp_deploy_index');
if (fs.existsSync(tempIndex)) fs.unlinkSync(tempIndex);

const distDir = path.resolve('dist');

try {
  console.log('🌲 Indexando arquivos da pasta dist...');
  execSync(`git --git-dir="${gitDir}" --work-tree="${distDir}" add --force -A`, {
    env: { ...process.env, GIT_INDEX_FILE: tempIndex },
    stdio: 'inherit'
  });

  const treeHash = execSync(`git --git-dir="${gitDir}" write-tree`, {
    env: { ...process.env, GIT_INDEX_FILE: tempIndex }
  }).toString().trim();

  console.log('✅ Hash da árvore:', treeHash);

  // Obtém o commit anterior de gh-pages
  let parentCommit = '';
  try {
    execSync('git fetch origin gh-pages', { stdio: 'inherit' });
    parentCommit = execSync('git rev-parse origin/gh-pages').toString().trim();
    console.log('📌 Último commit em gh-pages:', parentCommit);
  } catch {
    console.log('ℹ️ Nenhum commit anterior encontrado em gh-pages');
  }

  const commitMsg = 'feat: liberacao total do cronograma de estudos para todos e remocao definitiva do anuncio promocional';
  const commitCmd = parentCommit
    ? `git commit-tree ${treeHash} -p ${parentCommit} -m "${commitMsg}"`
    : `git commit-tree ${treeHash} -m "${commitMsg}"`;

  const newCommit = execSync(commitCmd).toString().trim();
  console.log('🎉 Novo commit criado:', newCommit);

  console.log('📤 Enviando para origin/gh-pages (Novo repositório seguro)...');
  execSync(`git push origin ${newCommit}:refs/heads/gh-pages`, { stdio: 'inherit' });

  try {
    console.log('📤 Sincronizando com o link oficial dos alunos (oficial/gh-pages)...');
    execSync(`git push oficial ${newCommit}:refs/heads/gh-pages`, { stdio: 'inherit' });
  } catch (e) {
    console.warn('Aviso ao sincronizar oficial:', e.message);
  }

  // Atualiza branch local gh-pages se existir
  try {
    execSync(`git branch -f gh-pages ${newCommit}`);
  } catch {
    // Ignora se não conseguir atualizar branch local
  }

  console.log('====================================================');
  console.log('✅ DEPLOY CONCLUÍDO COM SUCESSO NO LINK OFICIAL!');
  console.log('🔗 URL: https://geangouveia.github.io/missao-pmpe-2026/');
  console.log('====================================================');
} catch (error) {
  console.error('❌ Erro durante o deploy:', error.message);
  process.exit(1);
} finally {
  if (fs.existsSync(tempIndex)) {
    fs.unlinkSync(tempIndex);
  }
}
