/*
cucumber-js was prepared by copying maunal from this blog (works as of 31.03.2023):
https://www.indiumsoftware.com/blog/automation-using-playwright-library-with-cucumber-js/
*/

let options = [
  '--require-module ts-node/register',
  '--require ./steps/*.steps.ts',
  '--format progress',
  '--format json:./reports/cucumber_report.json',
].join(' ');

let run_features = ['./features/', options].join(' ');

module.exports = {
  test_runner: run_features,
};
