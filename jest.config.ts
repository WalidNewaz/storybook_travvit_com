// Jest configuration for file-loader

module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg|woff|woff2|ttf|eot|ico)$':
      'jest-file-loader',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
  // Exclude directories or paths from test coverage
  coveragePathIgnorePatterns: [
    '/node_modules/',  // Exclude any files within node_modules directory
    'src/interfaces/',
    'src/lib/',
    'src/pages/',
    'src/stories/',
    'src/types/',
    'src/utils/',
    'src/hooks/',
    'src/components/ReactNative/',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
