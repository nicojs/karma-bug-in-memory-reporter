var karmaConfig = require('./karmaconf')
var karma = require('karma');

var server = new karma.Server(karmaConfig, function (exitCode) {
});

server.on('coverage_complete', (browser, coverageReport) => {
    console.log('Coverage report: ', JSON.stringify(coverageReport));
});

server.start();
