const createJestConfig = require('./jest.config.base')

module.exports = {
  ...createJestConfig(__dirname),
  projects: [
    '<rootDir>/packages/*/jest.config.js',
    '<rootDir>/gqless/jest.config.js',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  // collectCoverage: true,
}
