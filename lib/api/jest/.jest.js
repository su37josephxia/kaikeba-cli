module.exports = {
    // setupFiles: [
    //   './test/setup.js',
    // ],
    moduleFileExtensions: [
      'js',
      'jsx',
    ],
    testPathIgnorePatterns: [
      '/node_modules/',
    ],
    testRegex: '.*\\.test\\.js$',
    collectCoverage: false,
    collectCoverageFrom: [
      'src/**/*.{js}',
    ],
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",
      "\\.(css|less|scss)$": "<rootDir>/src/__mocks__/styleMock.js"
    },
    transform: {
      "^.+\\.js$": "babel-jest"
    },
  };
  