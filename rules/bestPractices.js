

module.exports = {
  rules: {
    // Array api에서 리턴 강제하지 않음. map은 forEach 대용으로도 많이 사용하기 때문
    'array-callback-return': ['off', { allowImplicit: true }],

    // 클래스 메소드와 객체 메소드를 목적에 따라 사용하도록 제한하지 않음
    'class-methods-use-this': ['off', {
      exceptMethods: [
        'componentDidMount',
        'shouldComponentUpdate',
        'getSnapshotBeforeUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        'componentDidCatch',
        'render',
      ],
    }],

    // FIXME: alert 직접 쓸지 여부 결정 필요
    'no-alert': 'off',

    'no-case-declarations': 'warn',

    'no-else-return': 'off',
    // TODO: no-multi-spaces 할 차례

    // 필요시 정렬을 하기 위해 제한하지 않음
    'no-multi-spaces': ['off', {
      ignoreEOLComments: false,
    }],

    // 함수 파라미터 재할당 제한하지 않음
    'no-param-reassign': ['off', { props: false }],

    'no-return-assign': 'off',

    radix: 'warn',
  },
};
