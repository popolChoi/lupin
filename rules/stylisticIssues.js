

module.exports = {
  rules: {
    // 20. 할 차례
    'array-bracket-spacing': 'off',
    'block-spacing': ['warn', 'always'],
    'brace-style': 'off',
    camelcase: ['warn', { properties: 'never' }],


    // 멀티라인에서 마지막 쉼표를 항상 넣지만, functions는 jsx에서 편의성을 위해 체크하지 않음
    'comma-dangle': ['warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],

    'comma-spacing': ['warn', { before: false, after: true }],
    'comma-style': ['warn', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      }
    }],
    'computed-property-spacing': 'off',

    'eol-last': ['warn', 'always'],

    // 함수 소괄호 형태 제한하지 않음
    'function-paren-newline': ['off', 'consistent'],

    'func-call-spacing': ['warn', 'never'],

    // 권장하나 강제하지 않음
    'implicit-arrow-linebreak': ['off', 'beside'],

    'key-spacing': ['warn', { beforeColon: false, afterColon: true }],

    'keyword-spacing': ['warn', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],
    'linebreak-style': 'off',

    // 클래스 속성은 사이에 라인을 넣지만, 단일라인은 예외
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    'max-len': ['warn', 150, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'new-cap': ['warn', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    // 체이닝 호출의 줄바꿈을 강제하지 않는다.
    'newline-per-chained-call': ['off', { ignoreChainWithDepth: 2 }],

    'no-else-return': 'off',

    // 혼란스러울 수 있는 연산자에 대해 괄호없이 사용하는것을 제한한다.
    'no-mixed-operators': ['warn', {
      // the list of arthmetic groups disallows mixing `%` and `**`
      // with other arithmetic operators.
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['**', '+'],
        ['**', '-'],
        ['**', '*'],
        ['**', '/'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],
    'no-multiple-empty-lines': ['warn', { max: 3, maxEOF: 1, maxBOF: 2 }],
    'no-plusplus': 'off',
    'no-trailing-spaces': ['warn', { skipBlankLines: true, ignoreComments: false }],
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': ['warn', { defaultAssignment: false }],
    'no-whitespace-before-property': 'warn',
    'nonblock-statement-body-position': ['warn', 'beside', { overrides: {} }],

    'object-curly-spacing': ['warn', 'always', { arraysInObjects: false, objectsInObjects: false }],

    // FIXME
    'object-curly-newline': ['warn', {
      ObjectExpression: { minProperties: 10, consistent: true },
      ObjectPattern: { minProperties: 10, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 10, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 10, multiline: true, consistent: true },
    }],

    // 객체 속성의 줄바꿈 형식을 제한하지 않음
    'object-property-newline': ['off', { allowAllPropertiesOnSameLine: false }],

    'one-var': ['warn', 'never'],

    // 연산자 줄바꿈은 연산자 앞에서 한다.
    'operator-linebreak': ['warn', 'before', { overrides: { '=': 'none', '?': 'after', ':': 'ignore' }}],

    'padded-blocks': 'off',
    'quote-props': ['warn', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // 문자열은 기본으로 홑따옴표를 사용하되 템플릿 리터럴을 허용한다.
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

    // 세미콜론은 항상 넣도록 강제한다.
    semi: ['error', 'always'],

    'space-before-blocks': 'warn',
    'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],

    // 주석에 공백을 제한하지 않는다.
    'spaced-comment': ['off', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
        balanced: true,
      }
    }],

    'space-infix-ops': 'warn',
    'space-in-parens': 'off',
  },
};
