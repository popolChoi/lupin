

module.exports = {
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules
  // 룰 검토 완료
  rules: {
    // mes-shared에서 가져오는 공용 라이브러리때문에 강제하지 않음
    'import/no-extraneous-dependencies': 'off',

    // export 형태 강제하지 않음
    'import/no-named-as-default': 'off',

    // export 형태 강제하지 않음
    'import/no-named-as-default-member': 'off',

    // 존재하지 않는 모듈 사용 체크 TODO: ignore 목록 추가
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true, ignore: ['\@mes', '\@/', '\@resource', '\-shared', '\-loader', 'resource'] }],

    // 소스코드 (뷰어용) import 때문에 제한하지 않음
    'import/no-webpack-loader-syntax': 'off',

    // export 형태 강제하지 않음
    'import/prefer-default-export': 'off',
  },
};
