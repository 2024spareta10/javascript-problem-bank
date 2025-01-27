/**
 * [(lv.3)검색어-캐싱하기.js]
 *
 * updateTopKeywords(keywords):
 *   1) 여러 검색어가 들어올 때, 많이 검색된 순으로 상위 10개까지만 저장하세요.
 *   2) 중복 키워드는 1회만 노출되도록 하세요.
 *   3) 기존 캐시를 모두 지우고, 새로운 결과만 캐시에 저장하세요.
 * getTopKeywords():
 *   1) 현재 저장된 상위 10개 키워드를 반환하세요.
 *
 * keywords example : ["banana", "apple", "apple", "orange", "banana", "banana"]
 * @param {string[]} keywords - 검색된 키워드 배열
 * @returns {void}
 */

let topKeywordsCache = [];

function updateTopKeywords(keywords) {
  // TODO
  keywords.sort();
  let target;
  let cnt = 0;
  let ans = [];
  keywords.forEach((obj) => {
    if (target !== obj) {
      target ? ans.push([target, cnt]) : 0;
      target = obj;
      cnt = 0;
    }
    cnt++;
  });
  ans.push([target, cnt]);
  ans.sort((a, b) => {
    return b[1] - a[1];
  });
  cnt = 0;
  topKeywordsCache = [];
  ans.forEach((keyword) => {
    cnt++;
    if (cnt <= 10) {
      topKeywordsCache.push(keyword[0]);
    }
  });
}

function getTopKeywords() {
  // TODO
  return topKeywordsCache || [];
}

// export를 수정하지 마세요.
export { topKeywordsCache, updateTopKeywords, getTopKeywords };
