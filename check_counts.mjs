import { createServer } from 'vite';

async function check() {
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });
  
  const mod = await vite.ssrLoadModule('./src/data/questions/index.ts');
  const allQ = mod.ALL_QUESTIONS;
  
  console.log('=== REAL ALL_QUESTIONS AFTER DEDUPLICATION ===');
  console.log('Total unique in ALL_QUESTIONS:', allQ.length);
  
  const byCategory = {};
  for (const q of allQ) {
    byCategory[q.categoryId] = (byCategory[q.categoryId] || 0) + 1;
  }
  console.log('Unique Questions By Category:');
  for (const [cat, count] of Object.entries(byCategory)) {
    console.log(`  ${cat.padEnd(25)}: ${count}`);
  }
  
  await vite.close();
}

check().catch(console.error);
