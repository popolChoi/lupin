

module.exports = {
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules
  // 룰 검토 완료
  rules: {
    // HTML 컴포넌트는 강제하지 않음
    'react/button-has-type': ['off', {
      button: true,
      submit: true,
      reset: false,
    }],

    // defaultProps를 권장 하지만 강제하지 않음
    'react/default-props-match-prop-types': ['off', { allowRequiredDefaults: false }],

    // destructuring을 권장하지만 강제하지 않음
    'react/destructuring-assignment': ['off', 'always'],

    // 공통 컴포넌트의 자동 문서화를 위해 해제
    'react/forbid-foreign-prop-types': ['off', { allowInPropTypes: true }],

    // array와 any는 제한하지만 object는 사용성과 생산성 때문에 강제하지 않음
    'react/forbid-prop-types': ['warn', {
      forbid: ['any', 'array'],
      checkContextTypes: false,
      checkChildContextTypes: false,
    }],

    // 불필요한 boolean prop을 넘기지 않도록 제한
    'react/jsx-boolean-value': ['warn', 'never', { always: [] }],

    // jsx 중괄호에 공백을 안넣도록 권장하지만 강제하지 않음
    'react/jsx-curly-spacing': ['off', 'never', { allowMultiline: true }],

    // '=' 양옆에 공백을 넣지 않도록 권장하지만 강제하지 않음
    'react/jsx-equals-spacing': ['off', 'never'],

    // jsx 확장자 미사용
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],

    // JSX props 줄바꿈 스타일 강제하지 않음
    'react/jsx-first-prop-new-line': ['off', 'multiline-multiprop'],

    // JSX의 컴포넌트를 멀티라인으로 사용 시 라인당 props 최대 개수는 2개이다.
    'react/jsx-max-props-per-line': ['error', { maximum: 2, when: 'multiline' }],

    // Fragment 사용법에 대해 제한하지 않음
    'react/jsx-fragments': 'off',

    // HTML 영역은 강제하지 않음
    'react/jsx-no-target-blank': ['off', { enforceDynamicLinks: 'always' }],

    // 라인에 단일 구문 사용을 권장하나 제한하지 않음
    'react/jsx-one-expression-per-line': ['off', { allow: 'single-child' }],

    // FIXME: Erorr로 할지 Warn으로 할지
    'react/jsx-tag-spacing': ['warn', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],

    // FIXME: Erorr로 할지 Warn으로 할지
    'react/jsx-uses-vars': 'warn',

    // jsx가 다중라인일때 소괄호로 감싸도록 강제하지만 arrow, 조건문는 강제하지 않음
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'ignore',
      condition: 'ignore',
      logical: 'parens-new-line',
      prop: 'ignore',
    }],

    // 배열 항목 key에 index 사용을 비권장 하지만 제한하지 않음
    'react/no-array-index-key': 'off',

    // dangerouslySetInnerHTML 사용 시 조심해야 하지만 제한하지 않음
    'react/no-danger': 'off',

    // 파일당 하나의 컴포넌트 정의를 권장 하지만 제한하지는 않음
    'react/no-multi-comp': ['off', { ignoreStateless: true }],

    // 함수형, 클래스형 둘다 사용
    'react/prefer-stateless-function': ['off', { ignorePureComponents: true }],

    // prop types를 권장하지만 강제하지 않음
    'react/prop-types': ['off', {
      ignore: ['match', 'location', 'history', 'children'],
      customValidators: [],
      skipUndeclared: false,
    }],

    // defaultProps를 권장하지만 강제하지 않음
    'react/require-default-props': ['off', { forbidDefaultForRequired: true }],

    // 여유있는 기준으로 강제
    'react/sort-comp': ['error', {
      order: [
        'props',
        'static-methods',
        'instance-variables',
        'lifecycle',
        'instance-methods',
        'everything-else',
        // '/^on.+$/',
        // 'getters',
        // 'setters',
        // '/^(get|set|is)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'rendering',
      ],
      groups: {
        props: [
          'displayName',
          'propTypes',
          'defaultProps',
        ],
        lifecycle: [
          // 'displayName',
          // 'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          // 'defaultProps',
          'state',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],
        rendering: [
          '/^render.+$/',
          'render'
        ],
      },
    }],

    // propTypes에서 required는 처음에, 콜백(on~)은 마지막에 정의하도록 순서 제한
    'react/sort-prop-types': ['error', {
      ignoreCase: true,
      callbacksLast: true,
      requiredFirst: true,
      sortShapeProp: true,
      noSortAlphabetically: true,
    }],
  },
};
