import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const refs = vm.runInNewContext(fs.readFileSync(path.join(root, 'references-data.js'), 'utf8') + '\npaperReferences');
function tex(text) {
  return String(text).replace(/&/g, '\\&').replace(/_/g, '\\_').replace(/%/g, '\\%')
    .replace(/π/g, '$\\pi$').replace(/₀/g, '0').replace(/₅/g, '5')
    .replace(/č/g, "{\\v c}").replace(/í/g, "{\\'i}").replace(/é/g, "{\\'e}");
}
const entries = Object.entries(refs).sort(([, a], [, b]) => a.sortKey.localeCompare(b.sortKey, 'en'));
const output = entries.map(([key, ref]) => {
  const fields = { author: ref.authors.map(a => ref.corporate ? '{' + tex(a) + '}' : tex(a)).join(' and '), title: '{' + tex(ref.title) + '}' };
  if (ref.entryType === 'inproceedings') fields.booktitle = tex(ref.venue);
  if (ref.entryType === 'article') fields.journal = tex(ref.venue);
  if (ref.year) fields.year = ref.year;
  for (const field of ['volume', 'number', 'pages', 'series', 'doi']) if (ref[field]) fields[field] = tex(ref[field]);
  if (ref.eprint) {
    // ieeenat_fullname does not print eprint, so retain it in howpublished.
    fields.howpublished = `arXiv preprint arXiv:${ref.eprint}`;
    fields.eprint = ref.eprint; fields.archivePrefix = 'arXiv'; fields.note = `Version ${ref.version}`;
  }
  if (ref.corporate) { fields.howpublished = `\\url{${ref.url}}`; fields.note = `Official software/documentation. Accessed ${ref.accessed}`; }
  fields.url = ref.url;
  return `@${ref.entryType}{${key},\n` + Object.entries(fields).map(([f, v]) => `  ${f} = {${v}}`).join(',\n') + '\n}';
});
fs.writeFileSync(path.join(root, 'references.bib'), '% AirSpark bibliography; generated from references-data.js.\n% Final numbering and formatting are controlled by the conference author kit.\n\n' + output.join('\n\n') + '\n');
console.log(`Built ${entries.length} BibTeX entries.`);
