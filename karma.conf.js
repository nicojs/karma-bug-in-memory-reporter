module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/**/*.js',
            'test/**/*.js'
        ],
        preprocessors: {
            'src/**/*.js': 'coverage'
        },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            reporters: [{
                type: 'text'
            }, {
                type: 'html'
            }]
        },
        port: 9876,
        colors: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        autoWatch: false
    });
};