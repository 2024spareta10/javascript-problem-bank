/**
 * [(lv.3)날짜-사이-일수-계산하기.js]
 *
 * 1) daysBetween 함수는 두 날짜 문자열(date1, date2)을 인자로 받습니다.
 * 2) 각 문자열은 "YYYY-MM-DD" 포맷이라고 가정합니다.
 * 3) 두 날짜가 며칠 차이가 나는지(절댓값) 정수로 반환하세요.
 *
 * 예시) daysBetween("2025-01-01", "2025-01-05") => 4
 *
 * @param {string} date1
 * @param {string} date2
 * @returns {number}
 */

function daysBetween(date1, date2) {
  let diff = (Date.parse(date1) - Date.parse(date2)) / 86400000;
  return diff >= 0 ? diff : -diff;
}

// export 를 수정하지 마세요.
export { daysBetween };
