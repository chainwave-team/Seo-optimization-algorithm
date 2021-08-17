module.exports = {
	rootDir: 'src',
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['jest-extended', 'jest-sorted']
};
