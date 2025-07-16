const tsConfig = require('./tsconfig.json');
const tsConfigPaths = require('tsconfig-paths');

// Configura los paths de TypeScript
tsConfigPaths.register({
  baseUrl: tsConfig.compilerOptions.baseUrl,
  paths: tsConfig.compilerOptions.paths
});

module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'features/step-definitions/*.ts',
      'features/support/*.ts'
    ],
    format: [
      'progress-bar',
      'html:cucumber-report.html'
    ]
  }
}