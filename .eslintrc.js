module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier/@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js','.jsx','.ts','.tsx']
      }
    }
  }
};
