

module.exports = {
  rules: {
    'arrow-body-style': ['warn', 'as-needed', { requireReturnForObjectLiteral: false }],

    // 가이드만
    'arrow-parens': 'off',

    // 'arrow-parens': ['warn', 'as-needed', { requireForBlockBody: true }],

    'arrow-spacing': ['warn', { before: true, after: true }],

    // 가이드만
    'prefer-destructuring': 'off',

    // 가이드만
    'prefer-template': 'off',

    // 가이드만
    'template-curly-spacing': 'off',
  },
};
