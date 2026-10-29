/* config.js - CCSbench's defaults for bench-kit (research/kit). Loaded after
 * kit/base.js, before the rest of the kit and the bench's own scripts.
 *
 * CCSbench runs with editable: true, so the user sets name, title, references,
 * language and GitHub locations through Settings ▸ Bench (kit/project.js); the
 * values here are the initial defaults a brand-new browser sees.
 *
 * annotationTypes: true gives the six Critical Code Studies types inherited
 * from CCS-WB-classic (Observation, Question, Metaphor, Pattern, Context,
 * Critique), stored as the tag type:<id>.
 */
(function (root) {
  'use strict';
  root.SW.BENCH = {
    name: 'CCSbench',
    title: 'CCSbench',
    slug: 'ccsbench',
    store: 'ccsbench.',
    editable: true,
    annotationTypes: true,
    samples: true,
    base: 'https://computational-hermeneutics.github.io/CCSbench/research/',
    repo: 'https://github.com/Computational-Hermeneutics/CCSbench',
    refs: { names: { v1: 'CCS1' }, prefix: 'CCS-', dir: 'source' },
    forks: [['main', 'Versions']],
    start: 'v1',
    lang: 'plain',
    comment: '#',
    routine: '^\\s*(?:def|class|function)\\s+(\\w+)',
    caseFold: false,
    entry: 'main',
    about: {
      icon: '<img src="img/icon.svg" alt="" width="40" height="40">',
      author: 'David M. Berry', citeAuthor: 'Berry, D. M.',
      purpose: 'A workbench for the close reading of code as cultural artefact. CCSbench is the bench-kit-based successor to <a href="https://github.com/Computational-Hermeneutics/CCS-WB-classic">CCS-WB-classic</a>, a scholarly instrument for the Critical Code Studies method: read a program, attach typed annotations to its lines, record repairs when a source needs mending, compare files and versions, and publish the finished reading as a static bench.',
      inside: 'A project the user builds in the browser: files held exactly as given, with annotations (six types: Observation, Question, Metaphor, Pattern, Context, Critique) and repair records (hibi / yobitsugi / kake, after the forms of kintsugi) kept alongside, never written back into the held files.',
      sources: 'The files the user brings in. The sample corpus from CCS-WB-classic (FLOW-MATIC 1958 through Apollo 11 Comanche055 1969) will land in the builder’s blank project when bench-kit Stage 1 (runtime versions) is released.',
      code: 'https://github.com/Computational-Hermeneutics/CCSbench',
      doi: '10.5281/zenodo.23764690',
      doiVersion: '10.5281/zenodo.23764691',
      catalogue: { skip: [], held: 'held as source' }
    },
    theme: { label: 'CCSbench', note: 'light text on a dark ground (the default)' },
    accent: { dark: '#c48b7a', light: '#8d2b3f' },
    hands: [],
    group: '',
    relation: 'CCSbench, ',
    topShare: false,
    settings: {
      tour: 'A few stops through reading, annotating and repairing; about a minute.',
      groupHint: 'Annotations can be shared through a Hypothesis group: paste its link or ID, and a personal API token (hypothes.is/account/developer). Without them, annotations are kept as drafts in this browser and can be exported or published later.',
      groupPlaceholder: 'https://hypothes.is/groups/…',
      themeHint: 'The colours of the whole bench. The ◐ button in the top bar switches between your last light and dark themes.'
    },
    tag: 'ccsb:',
    tagsHint: 'e.g. era, platform, author',
    joinCard: '',
    annoHelp: {
      manual: 'https://en.wikipedia.org/wiki/Critical_code_studies', manualName: 'Critical code studies',
      start: 'the opening of the reading', search: 'ELIZA',
      refA: 'CCS1, source.py:6–20', refB: 'CCS1, support.py:9–14',
      noteA: 'A note on the opening lines…', noteB: 'The same point in another file…', quoteA: 'A note on the opening lines…',
      boxA: 'source.py, lines 6–20', boxB: 'support.py, lines 9–14',
      tryText: 'The source is read by `main`', code: '`main`',
      caption: 'A link from one annotation to another. The linked annotation lists it under Linked from.'
    },
    compare: { comment: '#', normalised: false, reading: 'Reading',
               supplied: ['support files', 'Include the support files, not only the program files'] },
    comparePrefix: 'CCSbench: ',
    genealogy: { set: ['v1'], line: 'main', lineNames: { main: 'The main line' } },
    figureNum: { print: '#8d2b3f', paper: '#8d2b3f', phosphor: '#c48b7a' },
    paratexts: { org: 'Computational-Hermeneutics', repo: 'ccsbench_paratexts', cache: 'ccsbench-paratexts' },
    examples: { date: 'e.g. 1965, or June 1965', archive: 'e.g. Computer History Museum', versions: 'e.g. v1',
                refs: 'e.g. [REF: CCS1, source.py:12]', publisher: 'e.g. MIT Press', finding: 'F1' },
    stemma: { root: 'v1', lostBetween: {}, skip: [], lostOnTrunk: false },
    edition: {
      built: function () { return ['Read as', 'Source text, divided into lines']; },
      layout: function (raw) { return String(raw).replace(/\t/g, '        '); },
      words: false,
      files: ['all files', 'Include the support and documentation files, not only the program files']
    },
    refHelp: {
      example: '[REF: CCS1, source.py:12–14]',
      about: '<p><b>CCS</b>, then the version (<b>1</b>); then the file (<b>source.py</b>) and the lines (<b>12–14</b>).</p>',
      more: '<p>Shorter forms: the version alone, <span class="mono">[REF: CCS1]</span>; a whole file, <span class="mono">[REF: CCS1, source.py]</span>.</p>',
      form: 'Form: [REF: CCS<version>, <file>:<lines>], e.g. [REF: CCS1, source.py:12–14].',
      versions: { title: 'The versions', all: true }
    },
    sitemap: true,
    reading: {
      intro: 'Where to begin on reading code as a cultural text.',
      menu: 'Critical code studies',
      groups: [
        ['Critical code studies', [
          'Marino, M. C. (2020) <i>Critical Code Studies</i>. Cambridge, MA: The MIT Press.',
          'Berry, D. M. (2011) <i>The Philosophy of Software: Code and Mediation in the Digital Age</i>. Basingstoke: Palgrave Macmillan.',
          'Berry, D. M. and Marino, M. C. (2024) ‘Reading ELIZA: Critical Code Studies in Action’, <i>Electronic Book Review</i>. Available at: <a href="https://electronicbookreview.com/essay/reading-eliza-critical-code-studies-in-action/" target="_blank" rel="noopener">https://electronicbookreview.com/essay/reading-eliza-critical-code-studies-in-action/</a>.']
        ]
      ]
    }
  };
})(typeof window !== 'undefined' ? window : globalThis);
