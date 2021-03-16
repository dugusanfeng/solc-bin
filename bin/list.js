
var soljsonSources = [
  "soljson-v0.8.2+commit.b770a684.js",
  "soljson-v0.7.6+commit.c217223d.js",
  "soljson-v0.6.12+commit.4cffc863.js",
  "soljson-v0.5.17+commit.b6e443d8.js",
  "soljson-v0.4.26+commit.60076b06.js"
];
var soljsonReleases = {
  "0.8.2": "soljson-v0.8.2+commit.b770a684.js",
  "0.7.6": "soljson-v0.7.6+commit.c217223d.js",
  "0.6.12": "soljson-v0.6.12+commit.4cffc863.js",
  "0.5.17": "soljson-v0.5.17+commit.b6e443d8.js",
  "0.4.26": "soljson-v0.4.26+commit.60076b06.js"
};

if (typeof(module) !== 'undefined')
  module.exports = {
    'allVersions': soljsonSources,
    'releases': soljsonReleases
  };
