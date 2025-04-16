// jest.config.ts
// import type { Config } from 'jest';

// const config: Config = {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   transform: {
//     '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
//   },
//   moduleNameMapper: {
//     '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
//     '^@/(.*)$': '<rootDir>/src/$1', // adjust if using path aliases
//   },
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//   testPathIgnorePatterns: ['/node_modules/', '/dist/'],
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
// };

// export default config;

export default {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },

  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.ts',
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
