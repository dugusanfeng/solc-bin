
var soljsonSources = [
  "soljson-v0.8.6+commit.661d7834.js",
  "soljson-v0.7.6+commit.24c9f341.js",
  "soljson-v0.6.12+commit.5edbeb02.js",
  "soljson-v0.5.17+commit.84979a1f.js",
  "soljson-v0.4.26+commit.cd564d2f.js"
];
var soljsonReleases = {
  "0.8.6": "soljson-v0.8.6+commit.661d7834.js",
  "0.7.6": "soljson-v0.7.6+commit.24c9f341.js",
  "0.6.12": "soljson-v0.6.12+commit.5edbeb02.js",
  "0.5.17": "soljson-v0.5.17+commit.84979a1f.js",
  "0.4.26": "soljson-v0.4.26+commit.cd564d2f.js"
};

if (typeof(module) !== 'undefined')
  module.exports = {
    'allVersions': soljsonSources,
    'releases': soljsonReleases
  };
