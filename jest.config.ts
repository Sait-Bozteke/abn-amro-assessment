module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.(t|j)s$': 'ts-jest', // Use ts-jest to transform TypeScript files
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(t|j)s$', // Match TypeScript and JavaScript test files
  moduleFileExtensions: ['vue', 'ts', 'js'], // Add 'ts' for TypeScript
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
  coverageReporters: ['text', 'json-summary'],
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
};
