const reporter = require('cucumber-html-reporter');

var options = {
  brandTitle: 'swag shop prices',
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber_report.json',
  output: 'reports/cucumber_report.html',
  storeScreenshots: false,
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    Sprint: 'automation guild',
  },
};
reporter.generate(options);
