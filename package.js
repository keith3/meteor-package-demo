Package.describe({
  name: 'lufeng:package-demo',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A meteor package demo.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/keith3/meteor-package-demo',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.addFiles('server.js', 'server');
  api.export('fs', 'server');

  api.addFiles('client.js', 'client');
  api.export('resolution', 'client');

  api.addFiles('validator-common.js', ['server', 'client']);
  api.export('validator', ['server', 'client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lufeng:package-demo');
  api.addFiles('package-demo-tests.js');
});
