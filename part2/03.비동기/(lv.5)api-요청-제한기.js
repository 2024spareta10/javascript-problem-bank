/**
 * [(lv.5)api-요청-제한기.js]
 *
 * 1) createRateLimiter 함수를 작성하세요.
 * 2) 주어진 시간(timeWindow) 내에 최대 maxRequests번까지 요청을 처리해야 합니다.
 * 3) 요청이 제한을 초과하면, 큐에 대기시켰다가 순차적으로 처리하세요.
 * 4) 모든 요청은 Promise로 처리되어야 합니다.
 *
 * 힌트:
 * 1. 큐를 사용하여 대기 중인 요청을 관리하세요
 * 2. 요청 시간을 기록하여 timeWindow 내의 요청 수를 추적하세요
 * 3. setTimeout을 활용하여 제한된 요청을 지연 실행하세요
 * 4. Promise를 사용하여 비동기 처리를 구현하세요
 *
 * 예시:
 * const rateLimitedRequest = createRateLimiter(2, 1000); // 1초에 최대 2개 요청
 *
 * // 동시에 3개 요청
 * Promise.all([
 *   rateLimitedRequest(() => fetch('/api/1')), // 즉시 실행
 *   rateLimitedRequest(() => fetch('/api/2')), // 즉시 실행
 *   rateLimitedRequest(() => fetch('/api/3'))  // 1초 후 실행
 * ]);
 *
 * @param {number} maxRequests - 최대 허용 요청 수
 * @param {number} timeWindow - 시간 윈도우 (ms)
 * @returns {(fn: () => Promise<any>) => Promise<any>}
 */

function createRateLimiter(maxRequests, timeWindow) {
  //   // 최근 실행된 요청의 타임스탬프를 저장
  //   const requestTimestamps = [];
  //   // 제한에 걸린 요청을 대기시키기 위한 큐 (객체 배열: { fn, resolve, reject })
  //   const queue = [];
  //   // 대기 큐 처리를 위한 타이머 id
  //   let timer = null;
  //   // timeWindow 내에 시간이 지난 타임스탬프는 제거하는 헬퍼 함수
  //   function cleanupTimestamps() {
  //     const now = Date.now();
  //     while (
  //       requestTimestamps.length &&
  //       now - requestTimestamps[0] >= timeWindow
  //     ) {
  //       requestTimestamps.shift();
  //     }
  //   }
  //   // 큐에 대기 중인 요청들을 조건에 맞게 실행하는 함수
  //   function processQueue() {
  //     cleanupTimestamps();
  //     // 큐에 대기중인 요청들을 처리할 수 있는 만큼 처리
  //     while (queue.length > 0 && requestTimestamps.length < maxRequests) {
  //       const { fn, resolve, reject } = queue.shift();
  //       requestTimestamps.push(Date.now());
  //       // fn()이 Promise를 반환하더라도 안정적으로 처리할 수 있도록 Promise.resolve를 사용
  //       Promise.resolve().then(fn).then(resolve).catch(reject);
  //     }
  //     // 만약 큐에 아직 처리해야 할 요청이 남아있다면, 다음 실행 가능 시점을 계산하여 setTimeout 예약
  //     if (queue.length > 0) {
  //       const now = Date.now();
  //       // 다음 실행 가능 시점: 가장 오래된 타임스탬프가 timeWindow가 지난 후
  //       const delay = Math.max(timeWindow - (now - requestTimestamps[0]), 0);
  //       timer = setTimeout(processQueue, delay);
  //     } else {
  //       timer = null;
  //     }
  //   }
  //   // 반환되는 함수는 요청을 처리하는 함수
  //   return function rateLimitedRequest(fn) {
  //     return new Promise((resolve, reject) => {
  //       cleanupTimestamps();
  //       // 현재 timeWindow 내에 요청 실행 횟수가 maxRequests 미만이면 즉시 실행
  //       if (requestTimestamps.length < maxRequests) {
  //         requestTimestamps.push(Date.now());
  //         Promise.resolve().then(fn).then(resolve).catch(reject);
  //       } else {
  //         // 그렇지 않으면 큐에 요청을 저장
  //         queue.push({ fn, resolve, reject });
  //         // 아직 대기 타이머가 없다면 다음 가능한 시점에 큐를 처리하도록 타이머 예약
  //         if (!timer) {
  //           const now = Date.now();
  //           const delay = Math.max(timeWindow - (now - requestTimestamps[0]), 0);
  //           timer = setTimeout(processQueue, delay);
  //         }
  //       }
  //     });
  //   };
  // 이런 구현이 맞나...
}

// export 를 수정하지 마세요.
export { createRateLimiter };
