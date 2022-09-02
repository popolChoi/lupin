

module.exports = {
  // 룰 검토 완료
  rules: {
    // console 미사용을 권장하지만, 제한하지 않음
    'no-console': 'off',

    // 사용자체를 제한하지는 않고 빌드 시 포함되지 않도록 경고만
    'no-debugger': 'warn',

    // prototype 메소드 호출을 제한하지 않는다.
    'no-prototype-builtins': 'off',
  },
};
