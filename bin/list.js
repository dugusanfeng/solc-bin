
var soljsonSources = [
  "soljson-v0.5.12+commit.6684895d.js",
  "soljson-v0.5.11+commit.194840c3.js",
  "soljson-v0.5.10+commit.676f4ba6.js",
  "soljson-v0.5.9+commit.6cc98ff.js"
];
var soljsonReleases = {
  "0.5.12": "soljson-v0.5.12+commit.6684895d.js",
  "0.5.11": "soljson-v0.5.11+commit.194840c3.js",
  "0.5.10": "soljson-v0.5.10+commit.676f4ba6.js",
  "0.5.9": "soljson-v0.5.9+commit.6cc98ff.js"
};

if (typeof(module) !== 'undefined')
  module.exports = {
    'allVersions': soljsonSources,
    'releases': soljsonReleases
  };
