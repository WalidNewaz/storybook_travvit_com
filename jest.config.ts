// Jest configuration for file-loader

module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg|woff|woff2|ttf|eot|ico)$':
      'jest-file-loader',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
