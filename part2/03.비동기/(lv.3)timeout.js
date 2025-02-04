/**
 * [(lv.3)timeout.js]
 *
 * 1) timeOut 함수는 첫 번째 인자로 받은 Promise가,
 *    두 번째 인자로 받은 시간(ms) 안에 끝나지 않으면
 *    "timeout"을 reject하는 Promise를 반환해야 합니다.
 * 2) Promise.race를 사용하세요.
 *
 * @param {Promise<any>} promise - 대기할 Promise
 * @param {number} ms - 제한 시간(밀리초)
 * @returns {Promise<any>} - 제한 시간 내 완료되면 resolve, 아니면 "timeout"으로 reject
 */

// TODO: timeOut 함수를 작성해주세요.
async function timeOut(promise, ms) {
  let reject = new Promise((reject) => {
    setTimeout(() => reject("timeout"), ms);
  });
  const timeout = setTimeout(_, ms);
  return Promise.race([promise, reject]).then((val) => console.log(val));
}
const promise = new Promise((resolve) =>
  setTimeout(() => resolve("늦게 성공"), 100)
);
const timeoutPromise = timeOut(promise, 200);

// export 를 수정하지 마세요.
export { timeOut };
