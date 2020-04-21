// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-sabarivka-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      include: [
          // Specify include pattern(s) first
          'src/**/*.(ts|js)',
          // Then specify "do not include" patterns (note `!` sign on the beginning of each statement)
          '!src/main.(ts|js)',
          '!src/**/*.spec.(ts|js)',
          '!src/**/*.conf.(ts|js)',
          '!src/**/*.module.(ts|js)',
          '!src/**/environment*.(ts|js)'
      ]
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage/angular-testing'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
      thresholds: {
        statements: 50,
        lines: 50,
        branches: 5,
        functions: 30
      }
    },
    reporters: ['progress', 'sabarivka', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
