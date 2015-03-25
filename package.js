Package.describe({
  name: "jackyqiu:meteor-jvectormap",
  summary: "Plugin for embedding vector maps with reach API and methods for data visualization to the web-pages.",
  version: "2.0.2",
  git: "https://github.com/qunxyz/meteor-jvectormap.git"
});

Package.onUse(function (api) {
  api.versionsFrom("1.5");

  api.use('jquery', 'client');

  api.use("mizzao:build-fetcher@0.2.0", 'client');

  api.add_files('jvectormap.fetch.json', 'client');
});
