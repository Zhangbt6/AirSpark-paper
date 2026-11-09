// Run after build-figures.py, with sharp available via Node's module lookup.
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');
const root = path.resolve(__dirname, '..', 'figures');
(async () => {
  for (const name of fs.readdirSync(root).filter(name => name.endsWith('.svg') && (!process.argv.includes('--zh') || name.endsWith('-zh.svg')))) {
    await sharp(path.join(root, name), { density: 144 })
      .png().toFile(path.join(root, name.replace('.svg', '.png')));
    console.log(`Exported ${name} at 2x resolution`);
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
