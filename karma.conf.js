process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function(config) {
  config.set({

    frameworks: ['requirejs', 'qunit'],

    files: [
        {pattern: 'src/**/*.js', included: false},
        {pattern: 'test/**/*.js', included: false},
        'src/app.js',
        'test/qunit_suite/suite.js',
    ],

    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: true,

    reporters: ['progress', 'coverage', 'junit', 'html'],
    preprocessors: { 'src/**/*.js': ['coverage'] },

    coverageReporter: {
      // specify a common output directory
      dir: 'reports/test/coverage',
      reporters: [
        // reporters not supporting the `file` property
        { type: 'html', subdir: 'report-html' },
        //{ type: 'lcov', subdir: 'report-lcov' },
        // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        //{ type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
        { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
        //{ type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
        //{ type: 'text', subdir: '.', file: 'text.txt' },
        //{ type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
      ]
    },

    junitReporter: {
      outputDir: 'reports/test/junit/', // results will be saved as $outputDir/$browserName.xml
      outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: 'Things Test Suite', // suite will become the package name attribute in xml testsuite element
      useBrowserName: true, // add browser name to report and classes names
      nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
      properties: {}, // key value pair of properties to add to the <properties> section of the report
      xmlVersion: '1' // use '1' if reporting to be per SonarQube 6.2 XML format
    },

    htmlReporter: {
      outputFile: 'reports/test/html/units.html',

      // Optional
      pageTitle: 'Unit Tests Report',
      subPageTitle: 'Things Test Suite',
	  groupSuites: true,
	  useCompactStyle: true,
      useLegacyStyle: false
    },
  });
};
