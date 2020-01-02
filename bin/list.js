
var soljsonSources = [
  "soljson-v0.5.12+commit.6684895d.js",
  "soljson-v0.5.11+commit.194840c3.js",
  "soljson-v0.5.10+commit.676f4ba6.js",
  "soljson-v0.5.9+commit.6cc98ff.js",
  "soljson-v0.5.8+commit.385f01c4.js",
  "soljson-v0.5.7+commit.a95877b2.js",
  "soljson-v0.5.6+commit.5266b02d.js"
];
var soljsonReleases = {
  "0.5.12": "soljson-v0.5.12+commit.6684895d.js",
  "0.5.11": "soljson-v0.5.11+commit.194840c3.js",
  "0.5.10": "soljson-v0.5.10+commit.676f4ba6.js",
  "0.5.9": "soljson-v0.5.9+commit.6cc98ff.js",
  "0.5.8": "soljson-v0.5.8+commit.385f01c4.js",
  "0.5.7": "soljson-v0.5.7+commit.a95877b2.js",
  "0.5.6": "soljson-v0.5.6+commit.5266b02d.js"
};

if (typeof(module) !== 'undefined')
  module.exports = {
    'allVersions': soljsonSources,
    'releases': soljsonReleases
  };
