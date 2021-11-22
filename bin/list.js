
var soljsonSources = [
  "soljson-v0.8.6+commit.915f2fcc.js",
  "soljson-v0.7.6+commit.6cb3c108.js",
  "soljson-v0.6.12+commit.8946da9f.js",
  "soljson-v0.5.17+commit.40d7687e.js",
  "soljson-v0.4.26+commit.ecbb1517.js"
];
var soljsonReleases = {
  "0.8.6": "soljson-v0.8.6+commit.915f2fcc.js",
  "0.7.6": "soljson-v0.7.6+commit.6cb3c108.js",
  "0.6.12": "soljson-v0.6.12+commit.8946da9f.js",
  "0.5.17": "soljson-v0.5.17+commit.40d7687e.js",
  "0.4.26": "soljson-v0.4.26+commit.ecbb1517.js"
};

if (typeof(module) !== 'undefined')
  module.exports = {
    'allVersions': soljsonSources,
    'releases': soljsonReleases
  };
