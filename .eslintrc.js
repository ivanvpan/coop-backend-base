module.exports = {
  plugins: [
    '@typescript-eslint', // basic plugin for typescript
    'import', // required by airbnb to, for example, prevent importing of modules not in package.json
    'prettier', // prettier for eslint
  ],
  extends: [
    'airbnb-typescript/base', // non-react airbnb rules
    'prettier', // disables rules that conflict with prettier
    'plugin:prettier/recommended', // prettier rule checking
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // prevent implicit `any` in a variety of contexts
  ],
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-param-reassign': 'error', // prevent mutation of function parameters
    'no-console': 'error', // prevent console.log
    '@typescript-eslint/no-explicit-any': 'error', // prevent explicit `any`
  },
}
