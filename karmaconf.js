module.exports = {
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
        type: 'in-memory'
    },
    port: 9876,
    colors: true,
    browsers: ['PhantomJS'],
    singleRun: true
};