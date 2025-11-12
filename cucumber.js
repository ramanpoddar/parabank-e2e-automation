export default {
  default: {
    require: [
      'src/steps/**/*.js'
    ],
    requireModule: ['@babel/register'],
    format: [
      'progress-bar',
      'html:test-results/cucumber-report.html',
      'json:test-results/cucumber-report.json'
    ],
    formatOptions: { snippetInterface: 'async-await' },
    parallel: 2,
  },
};
