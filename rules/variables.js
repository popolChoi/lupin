

module.exports = {
  // 룰 검토 완료
  rules: {
    // 상위 스코프에 정의된 변수명 사용 제한하지 않음
    'no-shadow': 'off',

    // FIXME: airbnb와 기준이 같으니 체크 후 필요시 삭제 or warn
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
  },
};
