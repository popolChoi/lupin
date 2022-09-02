
module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true,
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    // "plugins": ["react", "prettier"],
    "plugins": ['import', 'flowtype', 'jsx-a11y', 'react', 'react-hooks', 'babel'],
    "extends": [
      "airbnb",
      "./rules/possibleErrors.js",
      "./rules/bestPractices.js",
      "./rules/variables.js",
      "./rules/node.js",
      "./rules/stylisticIssues.js",
      "./rules/ecmaScript6.js",
      "./rules/imports.js",
      "./rules/react.js",
      "./rules/jsx.js",
      "./rules/babel.js",
    ],
    "rules": {
      // "prettier/prettier": "error"
    },
  };