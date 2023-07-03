// Jest configuration for file-loader

module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg|woff|woff2|ttf|eot|ico)$':
      'jest-file-loader',
  },
};
