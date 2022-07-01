module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['standard', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "jest/valid-expect": 0
  },
  ignorePatterns: ["*.test.js"]
}
