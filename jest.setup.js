const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Usa Babel para transformar los archivos
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // Ajusta si usas alias en tus importaciones
  },
};

module.exports = createJestConfig(customJestConfig);
