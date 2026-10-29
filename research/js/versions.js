/*
 * versions.js - the versions CCSbench holds, and how they descend from one another.
 *
 * CCSbench runs in editable mode (SW.BENCH.editable === true in config.js), so a
 * user's own project is built in the browser through Settings ▸ Bench (kit/project.js)
 * and the builder (kit/builder.js). The single version declared here is a scaffold
 * so the kit boots; the sample corpus from CCS-WB-classic will land in Stage 1,
 * once bench-kit's runtime-versions API is released.
 */
(function (root) {
  'use strict';

  var SRC = '../source/';
  var L = root.SWVersionList || require('../kit/versionlist.js'), files = L.files;

  var VERSIONS = [
    { id: 'v1', label: 'A new project', date: '2026', sort: 20260101, authors: 'You',
      fork: 'main', status: 'recovered', medium: 'Source files',
      summary: 'A placeholder version. Open Settings ▸ Bench to rename this bench and define your own. The sample corpus from CCS-WB-classic (FLOW-MATIC through Apollo 11) lands in Stage 1 of the project builder.',
      build: files('v1/', [{ src: 'README.txt', role: 'doc' }]) }
  ];

  var DIALECTS = { text: { label: 'Source text (read, not run)', options: {} } };

  VERSIONS.forEach(function (v) {
    v.dialect = 'text';
    v.buildNotes = (v.buildNotes || []).map(function (t) { return { by: 'log', who: 'build log', date: '', text: t }; });
  });

  var PARENT = {};
  var WITNESS = {};
  var ALSO = {};
  var INFLUENCE = {};
  var LINES = [
    { id: 'main', label: 'The main line', tip: 'v1' }
  ];

  var api = L({ versions: VERSIONS, src: SRC, dialects: DIALECTS, lines: LINES,
                 parent: PARENT, witness: WITNESS, also: ALSO, influence: INFLUENCE });
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.SWVersions = api;
})(this);
