module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  rules: {
    'import/extensions': ['always', { ignorePackages: true }],
    'import/no-unresolved': 'off',
  },
};
