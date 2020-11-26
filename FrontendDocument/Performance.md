# Performance

- https://web.dev/learn/
- https://developers.google.com/web/fundamentals/performance/get-started
- https://ko.reactjs.org/docs/optimizing-performance.html
- https://www.youtube.com/watch?v=G1IWq2blu8c
- https://www.youtube.com/watch?v=cpE1dwJgS4c
- https://developers.google.com/web/tools/chrome-devtools/evaluate-performance?hl=ko
- https://developers.google.com/web/tools/chrome-devtools/memory-problems?hl=ko

---

## 목차

1. Overview
2. RAIL Model

- **Loading Performance**
  1. Overview
  2. Get Started
     - 성능 측정
     - Text Content
     - Graphical Content
     - HTTP Requests
     - HTTP Caching
     - Wrap-up and Demo
  3. Speed Tools
  4. 탐색 및 리소스 타이밍으로 실제 로딩 성능 평가
  5. 사용자 중심 성능 지표
  6. 낮은 대역폭 및 높은 지연 시간 이해
  7. 콘텐츠 효율성 최적화
     - 개요
     - 불필요한 다운로드 제거
     - 텍스트 기반 자산의 인코딩 및 전송 크기 최적화
     - 이미지 최적화
     - 이미지 최적화 자동화
     - 애니메이션 GIF를 비디오로 바꾸기
     - 자바스크립트 시작 최적화
     - 타사 JavaScript 로드
     - 웹 글꼴 최적화
     - HTTP 캐싱
     - 클라이언트 힌트를 사용해 사용자에게 적응
     - Save-Data로 빠르고 가벼운 애플리케이션 제공
  8. JavaScript 최적화
     - 트리쉐이킹으로 JavaScript 페이로드 줄이기
     - 코드분할로 JavaScript 페이로드 줄이기
  9. 동일한 리소스를 두번 로드 하지않기
     - Offline Cookbook
     - 웹 스토리지
       - 개요
       - PWA를 위한 Offline Storage
       - Cache API 사용
       - IndexedDB 모범 사례
     - Offline UX Considerations
  10. 지연로드 리소스
      - 이미지 및 비디오
  11. 신중하게 로드하는 주문
      - 중요한 렌더링 경로
        - 개요
        - 개체 모델 구성
        - 렌더 트리 구성, 레이아웃 및 페인트
        - 렌더링 차단 CSS
        - JavaScript로 상호 작용 추가
        - 중요한 렌더링 경로 측정
        - 중요한 렌더링 경로 성능 분석
        - 중요한 렌더링 경로 최적화
        - PageSpeed 규칙 및 권장 사항
  12. PRPL 패턴
  13. 자원 우선 순위
  14. 웹팩을 사용한 웹 성능 최적화
      - 소개
      - 프론트엔드 크기 줄이기
      - 장기 캐싱 활용
      - 앱 모니터링 및 분석
      - 결론
- **Rendering Performance**
  1. 개요
  2. JavaScript 실행 최적화
  3. 스타일 계산의 범위와 복잡성 감소
  4. 복잡한 레이아웃을 피하고 레이아웃 thrashing
  5. 페인트 복잡성 단순화 및 페인트 영역 감소
  6. 합성기 전용 속성 고수 및 레이어 수 관리
  7. 입력 핸들러 디바운스
- **Audit your site**
  1. 개요
  2. 사전 작업
  3. 사이트 보안 확인
  4. 성능 측정
  5. 결과 공류
  6. 다음 단계

---

## 1. Overview(속도가 중요한 이유)

1. 성능은 사용자 유지
2. 성능은 전환율 개선
3. 성능은 사용자 경험에 관한 것
4. 성능은 사람에 관한 것
   - 데이터 요금
   - 위기상황(병원, 클리닉, 위기 센터)
5. 웹 사이트 속도 개선
   - Core Web Vitals : https://web.dev/vitals/#core-web-vitals
   - Fast Loading : https://web.dev/fast/

## 2. RAIL Model

- RAIL은 사용자 중심 성능 모델.
- RAIL은 웹 앱 수명주기의 Response, Animation, Idle, Load 4가지 부분을 나타냄.
- 사용자는 네트워크 상태와 하드웨어에 따라 성능 지연을 다르게 인식함.

1. Response : 50ms 이내에 이벤트 처리
   - 100ms 이내에 응답을 보장하기 위해 50ms 이내에 사용자 입력 처리(버튼 클릭, 폼 컨트롤 전환, 애니메이션 시작 등)
   - 가능하면 백그라운드에서 작업
   - 50ms 이상 걸리는 작업의 경우 피드백 제공
   - 애플리케이션 Idle 작업 시간 동안 권장 되는 50ms 청크에서 작업을 수행하는 경우 해당 작업 청크 중 하나에서 발생하는 경우 입력이 최대 50ms 동안 대기열에 추가 될 수 있기 때문에 나머지 50ms만 실제 입력 처리에 사용할 수 있다고 가정하는 것이 안전함
2. Animation : 10ms 프레임 생성
   - 각 프레임 최대예산은 16ms이나 브라우저는 각 프레임을 렌더링하는데 약 6ms가 필요하므로 프레임당 10ms의 지침이 필요함
3. Idle : Idle 시간 최대화
   - Idle 시간을 최대화해 페이지가 사용자 입력에 50ms 이내에 응답할 확률을 높임.
4. Load : 5초 이내에 콘텐츠를 제공하고 상호작용
   - 빠르게 로드 되는 사이트는 평균 세션이 길고 이탈률이 낮으며 광고 조회 가능성이 높음.
5. RAIL 측정 도구
   - **Chrome DevTools**
     - https://developers.google.com/web/tools/chrome-devtools/evaluate-performance
   - **Lighthouse**
   - **WebPageTest**

---

## **Loading Performance**

### 1. Overview

1. 로딩 시간 관련 키워드
   - 페이지 포기
   - 충성도
   - 방문율
   - 전환율
   - SEO
2. 목표
   - TTI(Time To Interactivity), FMP(First Meanful Paint) 항목을 사용해 성능 정량화
   - 웹 성능 측정 항목 개념 및 용어
     - https://developers.google.com/web/updates/2017/06/user-centric-performance-metrics

### 2. Get Started

#### 2-1. 속도 측정 방법

1. 실험실 데이터 vs 필드 데이터
   - **실험실 데이터**
     - 사전 정의된 장치 및 네트워크 설정을 사용해 제어된 환경에서 수집된 성능 데이터
     - 재현 가능한 결과와 디버깅 환경을 제공하나 실제 병목현상을 포작하지 못할 수 있으며 실제 페이지 KPI와 관계없음
   - **필드 데이터**
     - 사용자가 경험한 실제 페이지로드에서 수집된 성능 데이터
     - 실제 사용자 모니터링 또는 RUM
     - 실제 사용자 경험을 캡처하고 비지니스 KPI와의 관계를 파악할 수 있으나 제한된 메트릭 세트와 제한된 디버깅 기능을 가지고 있음
2. 도구
   - 실험실 데이터 : Lighthouse
   - 필드 데이터 : Chrome 사용자 환경 보고서(CrUX)
   - 기타 도구 : PageSpeed Insights, Chrome DevTools

#### 2-2. Text Content

1. 배포 코드와 개발 코드 분리
   - 배포코드는 minify해야함
   - 개발 파일을 실수로 minify한 경우 http://unminify.com/
2. 코드 축소
   - 공백과 불필요한 문자를 제거해 텍스트 리소스 압축
   - Kangax HTML Mifier, Minifier , webpack용 node module...
3. 텍스트 리소스 압축
   - 서버가 전체 파일 세트를 자동으로 압축하도록 Gzip 사용.
   - Gzip은 최대 70%까지 압축할 수 있음.
   - 이미지와 같이 개별적으로 압축된 텍스트가 아닌 리소스를 Gzipping하면 일반적으로 크기가 크게 줄어들지 않음.
   - Giz은 데스크톱, 브라우저 기반 로컬 압축과 달리 서버에서 작동해서 지정한 특정 파일 형식을 식별하고 처리함. 모든 최신 브라우저는 HTTP 요청에 대해 Gzip 압축을 지원하지만 요청시 압축된 리소스를 제공하도록 서버를 올바르게 구성해야함. 서버 유형에 따라 설정 요구 사항이 다름.
   - 서버에서 Gzip을 활성화 한후 실제로 압축파일을 제공하는지 확인하는 방법
     - http://www.gidnetwork.com/tools/gzip-test.php
4. 라이브러리 사용 감소

#### 2-3. Graphical Content

- HTTPArchive에서 이미지가 평균 웹 사이트 콘텐츠의 약 50%를 차지한다고 함.

1. 불필요한 이미지 제거
   - 가장 빠른 이미지는 다운로드 할 필요가 없는 이미지
2. 적절한 이미지 유형 선택
   - PNG : 클립 아트, 선 그리기, 투명도
   - JPG : 사진
   - GIF : 애니메이션
   - 사진 이미지의 경우 PNG(무손실 압축)과 JPG(손실 압축)은 시각적 차이가 크게 없음.
3. 이미지 메타 데이터 제거
   - 웹 사이트 이미지에서 불필요한 메타 데이터 제거
   - VerExif 사용
4. 이미지 크기 조정
   - 용도에 따라 이미지 크기 조정
   - 중요한 것만 표시하도록 이미지 자르기
   - 이미지 품질 감소
     - paint.net, XNConvert, ImageOptim, Resizelt, PicResize, Gimp
5. 이미지 압축
   - https://tinypng.com/

#### 2-4. HTTP Requests

- 다운로드 크기를 줄이는 것 외에도 다운로드 빈도 줄이기
- 페이지에 필요한 구성요소를 줄이면 HTTP 요청수가 비례해서 줄어듬. 콘텐츠를 더 효율적으로 구성하는 것을 의미함.

1. 텍스트 리소스 결합
   - 각각의 파일을 결합해 여러번의 요청 대신 하나의 요청으로 시간 절약
   - **주의사항**
     - CSS의 경우 캐스케이드 우선순위 때문에 이후 규칙이 이전 규칙을 재정의할 수 있음. 충돌하는 규칙을 찾아서 더 구체적인 선택자를 적절하게 적용해야 함.
     - JavaScript의 경우 함수 이름이 같거나 이름이 동일한 변수의 범위를 적극적으로 찾아야함
2. 그래픽 리소스 결합
   - sprite(css 배경위치지정을 사용)로 이미지를 하나의 파일로 결합
3. 주의사항
   - 위와 같이 물리적으로 파일 결합시 HTTP/2에서는 원하는 결과를 얻지 못할 수 있음
   - 주로 서버 요청이 HTTP/2에서 더 빠르기 때문에 요청을 제거하기 위해 파일결합은 실제로 생산적이지 않을 수 있음.
   - 요청을 저장할때 정적 리소스와 동적 리소를 결합하면 동적 부분을 가져오기 위해 정적인 부분을 강제로 다시 로드하여 캐싱 효과에 부정적인 영향을 미칠 수 있음.
4. 자바스크립트 위치 및 인라인 푸시
   - **스크립트 위치**
     - head 태그에 넣을 경우 페이지가 표시 될 때까지 스크립트가 거의 실행되지 않으나 로드되는 동안 페이지 렌더링을 불필요하게 차단하게 됨.
     - 닫는 body 태그 바로 앞에 스크립트 참조를 넣을 경우 페이지 콘텐츠를 로드하고 렌더링 한 다음 사용자가 초기 콘텐츠를 인식하는 동안 스크립트를 다운로드 하게 됨.
   - **인라인 푸시**
     - head 태그의 script 블록에 중요한 사전 렌더링 스크립트를 배치
     - 적은 양의 코드를 검색하기 위한 별도의 HTTP 요청을 피하고 HTML 페이지의 수십바이트의 적은 비용으로 스크립트가 즉시 실행되도록함.
5. 요약

#### 2-5. HTTP Caching

- 브라우저가 웹 페이지 처음 로드시 페이지 리소스가 HTTP 캐시에 저장됨. 이후 해당 페이지에 접속하면 캐시에서 이전에 가져온 리소스를 찾아 디스크에서 검색할 수 있음. 이는 네트워크에서 다운로드하는 것보다 빠름.
- HTTP 캐싱은 IETF 사양에 따라 표준화되어 있으나 브라우저에는 콘텐츠 획득,저장,유지방식이 다른 여러 캐시가 있을 수 있음
- 처음 방문시 해당 페이지에 대해 캐시된 리소스가 없는 상태로 접속함. 재방문시에도 수동 삭제, 브라우저 자동 설정, 새 페이지 강제로드 시 캐시된 리소스가 많지 않을 수 있음.
- 캐시 사용을 최대화해 재방문 속도를 높여야함.

1. 캐싱 활성화
   - 캐싱은 특정 페이지 리소스가 변경되는 빈도 또는 빈도 측면에서 분류해 작동함. 사이트 로고 이미지는 거의 변경되지 않으나 사이트 스크립트는 며칠마다 변경될 수 있음.
   - 브라우저 캐싱은 실제로 프록시 캐시, CDN 캐시와 같은 클라이언트와 서버 중간 지점에서 발생할 수 있음.
2. 캐시 헤더

- cache-control, expires
  - **캐시 제어**
    - no-cache
    - no-store
    - public
    - private
    - max-age
  - **캐싱 만료**
- 캐싱을 적극적으로 사용하되 사이트 리소스 업데이트시 기존 캐시를 변경하는 방법을 사용해야함.

#### 2-6. Wrap-up and Demo

1. 테스트 도구
2. 원본 페이지
3. 텍스트 내용
4. 그래픽 콘텐츠
5. HTTP 요청
6. 지금 모두 함께
7. 요약

### 3. Speed Tools

1. 성능에 대한 일반적인 신화
   - **신화1**
     - 단일 메트릭으로 사용자 경험 포착
   - **신화2**
     - 단일 대표 사용자로 사용자 경험 캡처
   - **신화3**
     - 내 웹 사이트가 빠르게 로드되므로 사용자에게 빠르게 로드됨.
2. 실험실 데이터와 현장 데이터 이해
   - **실험실 데이터**
     - Lighthouse, WebPageTest
     - 사전 정의된 장치 및 네트워크 설정을 사용해 제어된 환경에서 수집된 성능 데이터
     1. 장점
        - 성능 문제 디버깅에 유용
        - UX에 대한 포괄적이고 깊은 가시성
        - 재현 가능한 테스트 및 디버깅 환경
     2. 단점
        - 실제 병목 현상을 포착하지 못할 수 있음
        - 실제 페이지 KPI와 연관시킬 수 없음
   - **필드 데이터**
     - Chrome 사용자 환경 보고서, PageSpeed Insights
     1. 장점
        - 실제 사용자 경험 캡처
        - 비지니스 핵심 성과 지표와의 상관 관계 지원
     2. 단점
        - 제한된 측정 항목 집합
        - 제한된 디버깅 기능
3. 다른 성능 도구
   - **Lighthouse**
   - **WebPageTest**
   - **TestMySite**
   - **PageSpeed Insights**
   - **Speed Scorecard**
   - **Impact Calculator**
   - **Chrome DevTools**

### 4. 탐색 및 리소스 타이밍으로 실제 로딩 성능 평가

-

1. 브라우저의 네트워크 요청을 이해하는데 도움이 되는 API

   - window.performance
   - Waterfall 차트에서 볼 수 있음

   ```javascript
   // Get Navigation Timing entries:
   performance.getEntriesByType('navigation');

   // Get Resource Timing entries:
   performance.getEntriesByType('resource');
   ```

2. 네트워크 요청의 수명과시기

- Chrome DevTool의 Network 패널

  - **DNS 조회**
    - 사용자가 URL을 요청하면 도메인을 IP주소로 변환하기 위해 DNS가 쿼리되는데 여러 요인에 따라 상당한 시간이 소요될 수도 있음. - 탐색 및 리소스 타이밍은 모두 두가지 DNS 관련 메트릭을 노출함
    - domainLookupStart, domainLookupEnd
    ```javascript
    // Measuring DNS lookup time
    var pageNav = performance.getEntriesByType('navigation')[0];
    var dnsTime = pageNav.domainLookupEnd - pageNav.domainLookupStart;
    ```
  - **연결 협상**

    - 서버가 리소스를 클라이언트에 보내기 전에 항목을 분류 할 때 대기 시간이 발생. HTTPS는 TLS 시간도 포함됨.
    - connectStart : 클라이언트가 서버에 대한 연결을 열때
    - secureConnectionStart : 클라이언트가 TLS 협상을 시작할때
    - connectEnd : 연결협상이 종료되면 표시(TLS 시간 포함)

      ```javascript
      // Quantifying total connection time
      var pageNav = performance.getEntriesByType('navigation')[0];
      var connectionTime = pageNav.connectEnd - pageNav.connectStart;
      var tlsTime = 0; // <-- Assume 0 by default

      // Did any TLS stuff happen?
      if (pageNav.secureConnectionStart > 0) {
        // Awesome! Calculate it!
        tlsTime = pageNav.connectEnd - pageNav.secureConnectionStart;
      }
      ```

  - **요청 및 응답**

    - 페이지 속도에 영향을 미치는 요소
      1. 외부 요인 : 연결 대기 시간 및 대역폭
      2. 내재적 요인 : 서버 및 클라이언트 측 아키텍처, 리소스 크기 등
    - 요청 및 응답 측정 항목
      - fetchStart : 브라우저가 리소스 가져오기를 시작 할 때
      - workerStart : 이벤트 핸들러 내에서 서비스 워커로부터 요청을 가져올때
      - requestStart : 브라우저가 네트워크 요청을 발행할 때
      - responseStart : 응답의 첫번째 바이트가 도착할때
      - responseEnd : 응답의 마지막 바이트가 도착할때
    - 캐시 검색시간을 염두에 두고 리소스 다운로드 시간 측정

      ```javascript
      // Cache seek plus response time
      var pageNav = performance.getEntriesByType('navigation')[0];
      var fetchTime = pageNav.responseEnd - pageNav.fetchStart;

      // Service worker time plus response time
      var workerTime = 0;

      if (pageNav.workerStart > 0) {
        workerTime = pageNav.responseEnd - pageNav.workerStart;
      }
      ```

      ```javascript
      // Request time only (excluding unload, redirects, DNS, and connection time)
      var requestTime = pageNav.responseStart - pageNav.requestStart;

      // Response time only (download)
      var responseTime = pageNav.responseEnd - pageNav.responseStart;

      // Request + response time
      var requestResponseTime = pageNav.responseEnd - pageNav.requestStart;
      ```

  - **기타**

    1. 문서 언로드
       - 새 페이지 로드 전에 브라우저가 일부 관리 작업을 수행하는 경우
       - 탐색 타이밍에만 적용됨
       - unload, unloadEventStart, unloadEventEnd
    2. 리디렉션
       - redirectStart, redirectEnd
    3. 문서 처리
       - HTML 문서가 로드되면 브라우저가 문서를 처리하는데 걸리는 시간
       - 탐색 타이밍에만 적용됨
       - domInteractive, domContentLoadedEventStart, domContentLoadedEventEnd, domComplete.
    4. 로딩 중
       - 문서, 리소스가 완전히 로드되면 브라우저는 load 이벤트를 발생시킴.
       - 탐색 시간에만 적용됨.
       - loadEventStart, loadEventEnd
    5. 문서 및 리소스 크기

       - transferSize : HTTP 헤더를 포함한 리소스 총 크기
       - encodedBodySize : HTTP 헤더를 제외한 리소스 압축된 크기
       - decodedBodySize : HTTP 헤더를 제외한 리소스 압축 해제된 크기

       ```javascript
       // HTTP header size
       var pageNav = performance.getEntriesByType('navigation')[0];
       var headerSize = pageNav.transferSize - pageNav.encodedBodySize;

       // Compression ratio
       var compressionRatio = pageNav.decodedBodySize / pageNav.encodedBodySize;
       ```

3. 애플리케이션 코드에서 타이밍 획득

   - **타이밍을 수동으로 잡는 다른 방법**
     - getEntriesByType 외 두가지 다른 방법
     1. getEntriesByName
        - 탐색 및 리소스 타이밍의 경우 문서 또는 리소스 URL으로 성능 항목을 가져옴.
        ```javascript
        // Get timing data for an important hero image
        var heroImageTime = performance.getEntriesByName(
          'https://somesite.com/images/hero-image.jpg'
        );
        ```
     2. getEntries
        - getEntriesByType, getEntriesByName과 달리 getEntries는 기본적으로 성능 항목 버퍼에 모든 것을 가져옴.
        ```javascript
        // Get timing data for all entries in the performance entry buffer
        var allTheTimings = performance.getEntries();
        ```
   - **PerformanceObserver를 사용하여 성능 항목 수신**

     - getEntriesByType의 문제점
       1. 항목이 많은 배열에 대한 루프는 주 스레드를 묶음
       2. 루프는 루프가 실행되었을 때 사용 가능한 성능 항목만 캡처함. 타이머를 통해 성능 항목 버퍼를 주기적으로 폴링하는 것은 비용이 많이 들고 버벅 거림을 유발할 수 있음.
     - PerformanceObserver는 이러한 문제를 해결하기 위해 만들어짐. Mutation or Intersection Observer와 유사한 관찰자 패턴을 사용해 새 성능 항목이 기록 될 때마다 실행되는 콜백을 할당 할 수 있음.

       ```javascript
       // Instantiate the performance observer
       var perfObserver = new PerformanceObserver(function (list, obj) {
         // Get all the resource entries collected so far
         // (You can also use getEntriesByType/getEntriesByName here)
         var entries = list.getEntries();

         // Iterate over entries
         for (var i = 0; i < entries.length; i++) {
           // Do the work!
         }
       });

       // Run the observer
       perfObserver.observe({
         // Polls for Navigation and Resource Timing entries
         entryTypes: ['navigation', 'resource'],
       });
       ```

       - IE, Edge는 PerformanceObserver를 모두 지원하지 않음.
         ```javascript
         // Should we even be doing anything with perf APIs?
         if ('performance' in window) {
           // OK, yes. Check PerformanceObserver support
           if ('PerformanceObserver' in window) {
             // Observe ALL the performance entries!
           } else {
             // WOMP WOMP. Find another way. Or not.
           }
         }
         ```

   - **타이밍 잡기**
     1. Timing-Allow-Origin 헤더 설정
     2. HTTP/1의 Connection: Keep-Alive 고려
     3. 브라우저 API 지원 여부 확인
        ```javascript
        if (performance.getEntriesByType('navigation').length > 0) {
          // Yay, we have Navigation Timing stuff!
        }
        ```

4. Phoning home

   - **navigator.sendBeacon**

     - 성능 항목 수집 후 분석할 장소로 보내기 위해 navigatoer.sendBeacon을 사용해 비차단 방식으로 요청을 보낼 수 있음.

     ```javascript
     // Caution: If you have a _lot_ of performance entries, don't send _everything_ via getEntries. This is just an example.
     let rumData = JSON.stringify(performance.getEntries()));

     // Check for sendBeacon support:
     if ('sendBeacon' in navigator) {
     // Beacon the requested
     if (navigator.sendBeacon('/analytics', rumData)) {
         // sendBeacon worked! We're good!
     } else {
         // sendBeacon failed! Use XHR or fetch instead
     }
     } else {
     // sendBeacon not available! Use XHR or fetch instead
     }
     ```

5. 마무리
   - 프론트에서 매트릭을 계산하지 말고 백엔드로 계산된 데이터를 보내서 저장.
   - API가 제공하는 모든 측정 항목을 저장할 필요 없음.

### 5. 사용자 중심 성능 지표

- 사용자에 따라 성능은 상대적으로 느껴진다.(디바이스 차이, 네트워크 차이, 사이트 상호작용, 사이트 로드시간 차이)
- 성능의 객관적인 기준을 정의한 것이 메트릭이다.

1. 메트릭 정의
   - 웹 역사적으로 성능은 load 이벤트로 측정되었는데, load 이벤트가 발생시기가 반드시 사용자가 느끼는 성능과 일치하는 것은 아님.
   - **측정 항목 구성 전 확인 사항**
     - 서버가 응답을 했고, 탐색이 성공적으로 시작되는지
     - 충분한 콘텐츠가 렌더링 되었는지
     - 사용자가 페이지와 상호작용할 수 있는지
     - 상호작용에서 지연 및 버벅 거림이 없는지
2. 메트릭 측정 방법
   - 성능 메트릭 두가지 측정 방법
     1. 실험실 : 제어된 환경에서 페이지 로드 시뮬레이션.
     2. 필드 : 실제 사용자가 실제 페이지를 로드하고 상호작용.
   - **실험실**
     - 새로운 기능이 프로덕션에 출시 되기 전에 실제 사용자에 대해 성능 측정을 할 수 없으므로 실험실에서 테스트.
   - **필드**
     - 실제 사용자가 사이트를 로드하고 상호작용할 때 성능을 측정하는 것으로 실제 사용자 모니터링 or RUM 이라고 함.
3. 메트릭 유형
   - 페이지의 모든 성능 특성을 캡처하기 위해서 하나의 메트릭으로는 할 수 없고 여러 유형의 메트릭을 고려해야함.
     - **인지된 로드 속도** : 페이지 모든 시각적 요소 로드 및 렌더링 하는 속도
     - **로드 응답성** : 구성 요소가 사용자 상호작용에 빠르게 응답하기 위해 페이지가 필요한 JavaScript 코드를 로드하고 실행할 수 있는 속도
     - **런타임 응답성** : 사용자 상호 작용에 얼마나 빨리 응답 하는지
     - **시각적 안정성** : 페이지 요소의 예상가능하고 상호작용을 방해하지 않는지
     - **부드러움** : 전환과 애니메이션이 일관된 프레임 속도로 렌더링되고 다음 상태로 유동적으로 흐르는지
4. 측정 할 중요한 측정 항목
   - 모든 성능 측정 항목이 포함되어 있는지는 않음 (런타임 응답, 부드러움)
   - **FCP(First Contentful Paint)** : 페이지로드가 시작된 시점부터 페이지 콘텐츠 일부가 화면에 렌더링 될 때까지의 시간 측정(실험실, 필드)
   - **LCP(Largest Contentful Paint)** : 페이지로드가 시작된 시점부터 가장 큰 텍스트 블록 또는 이미지 요소가 화면에 렌더링 될 때까지의 시간(실험실, 필드)
   - **FID(First Input Delay)** : 사용자가 사이트와 처음 상호 작용할 때부터 브라우저가 실제로 사용할 수 있는 시간(필드)
   - **TTI(Time to Interactive)** : 페이지가 로드되기 시작하고 시각적으로 렌더링 될 때 까지의 시간 측정. 초기 스크립트가 로드되었으며 사용자 입력에 신속하게 응답할 수 있어야 함.(실험실)
   - **TBT(Total Blocking Time)** : 입력 응답을 방지 할 수 있을만큼 메인 스레드가 차단 된 FCP와 TTI 사이의 총 시간 측정.(실험실)
   - **CLS(Cumulative Layout Shift)** : 페이지 로드가 되기 시작하는 시점과 수명주기 상태가 숨김으로 변경되는 시점 사이에 발생하는 모든 예기치 않은 레이아웃 이동의 누적 점수.(실험실, 필드)
5. 맞춤 측정 항목
   - 위의 메트릭으로 대부분의 사이트 성능 특성을 일반적으로 이해할 수 있으며, 공통 집합으로 경쟁 업체와 비교할 수 있음.
   - 특정 사이트의 고유한 성능 메트릭을 위해 추가적으로 필요한 경우가 있음.
   - https://web.dev/custom-metrics/
   - **사용자 지정 메트릭 API**
     - User Timing API
     - Long Tasks API
     - Element Timing API
     - Navigation Timing API
     - Resource Timing API
     - Server Timing API

### 6. 낮은 대역폭 및 높은 지연 시간 이해

1. 낮은 대역폭과 높은 지연 시간으로 테스트

- 불안전한 연결 상태에서 사이트를 사용하는 것을 이해하기 위해 도구를 통해 낮은 대역폭과 높은 지연 시간을 에뮬레이션하고 시뮬레이션 할 수 있음.
  - **네트워크 조절 에뮬레이션**
    1. 브라우저 도구
       - Chrome DevTools의 Network 패널의 사전 설정, 사용자 지정 설정을 사용해 업로드/다운로드 속도 및 왕복 시간으로 사이트를 테스트
         - https://developers.google.com/web/tools/chrome-devtools/network-performance
    2. 시스템 도구
       - Mac Xcode용 Network Link Conditioner
    3. 장치 에뮬레이션
       - Android Emulator
       - iPhone : Network Link Conditioner
  - **다른 위치 및 네트워크에서 테스트**
    - 연결 성능은 서버위치와 네트워크 유형에 따라 다름.
    1. WebPageTest
    2. Fiddler
  - **손상된 네트워크에서 테스트**
    - 소프트웨어 및 하드웨어 프록시를 사용하면 대역폭 조절, 패킷 지연 및 임의 패킷 손실과 같은 문제가 있는 모바일 네트워크 조건을 에뮬레이션 할 수 있음. 공유 프록시 또는 손상된 네트워크를 통해 개발자 팀은 실제 네트워크 테스트를 워크플로에 통합 할 수 있음
    1. ATC(Augmented Traffic Control)
       - 트래픽을 형성하고 손상된 네트워크 조건을 에뮬레이션하는데 사용하는 BSD 라이엔스 애플리케이션 세트
    2. Charles
       - HTTP/ HTTPS 프록시하는데 사용할 수 있는 대역폭과 시간 조정.

2. 불안정한 연결 및 lie-fi 처리
   - **lie-fi란**
     - 브라우저는 어떤 이유로든 연결되지 않은 경우 연결되어있는 것처럼 작동함.
     - 잘못 해석 된 연결은 브라우저가 적절한 대체 방법을 포기하고 선택하는 대신 리소스 검색을 계속 시도하기 때문에 좋지 않은 경험을 초래함. 이는 오프라인 보다 더 안좋음.
     - lie-fi는 사람들이 고정 광대역에서 벗어나 모바일로 이동함에 따라 더 큰 문제가 됨.(모바일 인터넷 사용률 계속 증가)
   - **시간 제한을 사용해 간헐적인 연결 처리**
     - 과거에는 간헐적 연결을 테스트하는데 XHR을 사용.
     - 현재는 서비스 워커에서 workbox를 사용해 네트워크 시간 제한을 설정.
       ```javascript
       workboxSW.router.registerRoute(
         '/path/to/image',
         workboxSW.strategies.networkFirst({ networkTimeoutSeconds: 3 })
       );
       ```

### 7. 콘텐츠 효율성 최적화

#### 7-1. 개요

- 높은 성능을 위해 각 바이트 전달을 최적화해야 함.
- HTTP Archive(http://httparchive.org/)에서 웹 리소스 다운로드 바이트 수 증가 추세를 확인할 수 있는데 매년 총 바이트 및 요청은 증가하고 있음. 이에 따라 인터넷 속도도 빨라지고 있으나 여전히 사용자는 데이터 한도 및 비용이 많이 발생하게 됨.
- 웹은 데스크탑과 달리 별도 설치과정 없이 사용할 수 있으나 다양한 리소스를 가져와야 하며 이는 최대 메가 바이트 일 수 있는데 웹 사용자 경험을 위해 수백 밀리 초내에 가져올 수 있어야 함.
- 콘텐츠 효율성 최적화를 위해 불필요한 다운로드 제거, 압축을 통한 리소스의 전송 인코딩 최적화, 중복 다운로드 제거를 위한 캐싱 활용 등을 사용해야 함.

#### 7-2. 불필요한 다운로드 제거

- 가장 빠르고 최적화 된 리소스는 전송되지 않는 리소스로 불필요한 리소스를 제거해야 함.
- 불필요한 다운로드 제거를 결정하지 위해 신중한 생각와 측정이 필요함. 이를 위해 페이지의 모든 자산에 대한 정기적인 인벤토리를 작성하고 확인할 것.

#### 7-3. 텍스트 기반 자산의 인코딩 및 전송 크기 최적화

1. 데이터 압축 101
   - 불필요한 리소스 제거 후 브라우저가 다운해야하는 나머지 리소스(텍스트, 이미지, 글꼴 등)를 압축해야함.
2. 축소 : 전처리 및 상황별 최적화
   - 콘텐츠 별 최적화는 제공되는 리소스 크기를 크게 줄임
   - 콘텐츠 별 최적화는 빌드/릴리스 주기의 일부로 가장 잘 적용됨.
3. Gzip을 사용한 텍스트 압축
   - Gzip은 CSS, JavaScript, HTML과 같은 텍스트 기반 자산에서 가장 잘 작동함.
   - 모든 최신 브라우저는 Gzip 압축을 지원하며 자동으로 요청함.
   - Gzip 압축을 사용하도록 서버를 구성
   - 일부 CDN은 Gzip이 활성화되었는지 확인
   - 콘텐츠 별 최적화 적용(minify) -> Gzip으로 압축
   - Chrome DevTools Network 패널에서 Gzip 작동 확인
   - 때때로 Gzip은 자산 크기를 증가 시킴. 자산이 매우 작고 Gzip 사전의 오버헤드가 압축 절감보다 높거나 리소스가 이미 잘 압축된 경우에 발생함. 이를 위해 일부 서버에서는 최소 파일 크기 임계값을 지정할 수 있음.

#### 7-4. 이미지 최적화

1. 올바른 이미지 형식 선택
   - **이미지 제거 고려**
     - 텍스트 인코딩 된 이미지
     - 불필요한 이미지
   - **이미지 대체 기술 고려**
     - CSS 효과 및 CSS 애니메이션
     - 웹 글꼴 사용
   - **올바른 이미지 형식 선택**
     1. 벡터 그래픽
        - 선,점, 다각형을 사용
        - **장점**
          - 로고, 텍스트, 아이콘과 같은 단순한 기하학적 모양으로 구성된 이미지에 이상적
          - 모든 해상도 및 확대/축소 설정에서 선명하므로 다양한 크기로 표시해야하는 고해상도 화면 및 자산에 이상적인 형식
        - **단점**
          - 장면이 복잡한 경우(사진) SVG 마크업 양은 많으며 사실적으로 보이지 않을 수 있음
     2. 래스터 그래픽
        - 직사각형 격재 내 각 픽셀의 개별 값 인코딩
        - **장점**
          - 장면이 복잡한 경우(사진)
        - **단점**
          - 해상도, 확대/축소에 좋지 않음. 이를 위해 여러 버전의 래스터 이미지를 저장해야함.
   - **고해상도 화면의 의미**
     - 픽셀은 CSS 픽셀과 장치 픽셀이 잇는데 단일 CSS 픽셀은 단일 장치 픽셀에 대응하거나 여러 장치 픽셀에 의해 지원 될 수 있음.
     - 장치 픽셀이 많을수록 더 선명하게 표시됨.
     - 높은 DPI(HiDPI) 화면 단점
       - 이미지 자산은 더 높은 장치 픽셀 수를 활용하기 위해 더 많은 세부 정보가 필요함. 이때 벡터 이미지가 이상적이고 레스터 이미지는 픽셀 단위로 이미지 데이터를 인코딩 하기 때문에 픽셀 수가 많을수록 래스터 이미지 파일 크기도 커짐. 래스터 이미지가 필요한 경우 반응형 이미지 제공.
   - **다양한 래스터 이미지 형식의 특징**
     - 가능하면 WebP를 사용하고 불가능할때 PNG, JPEG를 고려.
2. 올바른 압축 수준 선택
   - **벡터 이미지 최적화**
     - SVGO를 사용해 SVG 파일 최소화. 필요하지 않은 레이어 정보, 주석 및 XML 네임 스페이스 같은 메타 데이터 제거.
     - SVG는 XML 기반 형식으로 Gzip 압축 가능
   - **손실 압축 vs 무손실 압축**
   - **이미지 최적화 체크 리스트**
     - 벡터 형식 선호
     - SVG 자산 축소 및 압축
     - 이전 래스터 형식보다 WebP 선호
     - 적절한 래스터 이미지 형식 선택
     - 래스터 형식 품질 설정
     - 불필요한 이미지 메타 데이터 제거
     - 크기가 조정된 이미지 제공
     - 자동화
3. Imagemin을 사용해 이미지 압축

   - **측정**
     - Lighthouse 보고서에서 Efficiently encode images 확인(현재 JPEG 형식으로만 이미지를 압축할 수 있는 기회에 대해 보고함)
   - **Imagemin**

     1. 플러그인
        - Imagemin은 플러그인 중심으로 구축됨.
        - 플러그인 선택시 손실, 무손실 여부를 고려해야 하는데 무손실은 데이터가 손실되지 않고 손실은 파일크기를 줄이지만 이미지 품질을 떨어뜨릴 수 있음.
        - 손실 플러그인을 사용하는 것이 좋음
        - JPEG, PNG, GIF, SVG, WebP 에 대한 손실, 무손실 플러그인이 있음.
     2. Imagemin CLI
        - imagemin-gifsicle, imagemin-jpegtran, imagemin-optipng, imagemin-pngquant 및 imagemin-svgo의 5 가지 플러그인과 함께 작동
        - Imagemin은 입력의 이미지 형식에 따라 적절한 플러그인을 사용
        - imagemin images/\* --out-dir=images(원본 파일 덮어씀)
     3. Imagemin npm 모듈

        ```javascript
        const imagemin = require('imagemin');
        const imageminMozjpeg = require('imagemin-mozjpeg');

        (async () => {
          const files = await imagemin(
            ['source_dir/*.jpg', 'another_dir/*.jpg'],
            {
              destination: 'destination_dir',
              plugins: [imageminMozjpeg({ quality: 50 })],
            }
          );
          console.log(files);
        })();
        ```

        - Webpack Imagemin (https://web.dev/codelab-imagemin-webpack/)

4. 더 빠른 페이지로드를 위해 애니메이션 GIF를 비디오로 대체
   - **측정**
   - **MPEG 비디오 만들기**
   - **WebM 동영상 만들기**
   - **차이점 비교**
   - **GIF 이미지를 비디오로 교체**
   - https://web.dev/codelab-replace-gifs-with-video/
5. 반응형 이미지 제공

   - **이미지 크기 조정**

     - sharp npm 패키지와 ImageMagick CLI 도구가 있음
     - sharp는 이미지 크기 조정 자동화에 적합
     - ImageMagick은 일회용 이미지 크기 조정

     1. sharp

        ```javascript
        const sharp = require('sharp');
        const fs = require('fs');
        const directory = './images';

        fs.readdirSync(directory).forEach((file) => {
          sharp(`${directory}/${file}`)
            .resize(200, 100) // width, height
            .toFile(`${directory}/${file}-small.jpg`);
        });
        ```

     2. ImageMagick
        - convert -resize 33% flower.jpg flower-small.jpg

   - **여러 이미지 버전 제공**
     - 여러 이미지 버전을 지정하면 브라우저가 가장 적합한 버전을 선택함. src, srcset, sizes 속성 사용.
       ```html
       <img
         src="flower-large.jpg"
         srcset="flower-small.jpg 480w, flower-large.jpg 1080w"
         sizes="50vw"
       />
       ```
   - **테스트**
     - Lightouse에서 누락된 이미지 확인. 크기를 조정해야하는 이미지를 나열함.

6. 올바른 크기로 이미지 제공
   - **잘못된 크기 이미지 식별**
     - Lighthouse 에서 크기를 조정해야하는 이미지 확인
   - **올바른 이미지 크기 결정**
     1. 좋은 접근 방식
     2. 더 나은 접근 방식
   - **이미지 크기 조정**
     - sharp
     - ImageMagick
   - **확인**
     - Lighthouse 감사
7. WebP 이미지 사용
   - **WebP를 사용해야 하는 이유**
   - **이미지를 WebP로 변환**
     1. cwebp
     2. Imagemin WebP Plugin
   - **WebP 이미지 제공**
     - 최신 브라우저에는 WebP를 제공하고 이전 브라우저에는 대체 이미지 제공
     - picture, source, img
       ```html
       <picture>
         <source type="image/webp" srcset="flower.webp" />
         <source type="image/jpeg" srcset="flower.jpg" />
         <img src="flower.jpg" alt="" />
       </picture>
       ```
   - **WebP 사용 확인**
     - Lighthouse
8. 이미지 CDN을 사용해 이미지 최적화
   - **이미지 CDN을 사용하는 이유**
     - 이미지 CDN으로 전환하면 이미지 파일 크기를 40~80% 줄일 수 있음.
   - **이미지 CDN이란**
     - 필요에 따라 새버전의 이미지를 생성함.
     - 빌드 스크립트보다 개별 클라이언트에 대해 크게 사용자 정의된 이미지를 만드는데 더 적합함.
     - 이미지 URL에 크기, 형식, 품질과 같은 매개변수를 사용해 이미지 CDN에 요청함
       - /dog.jpg?size=small
       - /dog.jpg?crop=circle
       - /dog.jpg?format=webp
   - **이미지 CDN을 최적화 옵션을 표시하는 URL을 사용하는 방법**
     - URL 형식은 이미지 CDN에 따라 다르나 모두 비슷한 기능을 가지고 있음
       - https://my-site.example-cdn.com/dasiy.jpg?key=s18dfgKd&quality=auto&size=300w400h&format=webp
     1. Origin
        - 자체 도메인 or 이미지 CDN의 도메인
          - 자체 도메인 사용시 URL 변경이 필요하지 않으므로 이미지 CDN을 쉽게 전환 할 수 있음.
        - 타사 CDN은 일반적으로 유료로 사용자 지정 도메인을 사용하는 옵션을 제공함
     2. Image
     3. Security Key
     4. Transformations
   - **이미지 CDN 유형**
     1. 자체 관리 이미지 CDN
        - 자체 인프라를 유지 관리하는 엔지니어가 있는 사이트에 적합.
        - Thumbor는 현재 사용할 수 있는 유일한 자체 관리 이미지 CDN. 오픈 소스이며 무료로 사용할 수 있으나 상용 CDN보다 기능이 적음.
     2. 타사 이미지 CDN
        - 클라우드 제공 업체가 유료로 이미지 CDN을 제공함.
   - **이미지 CDN 선택**
     - 비용, 지원, 문서화, 설정, 마이그레이션을 고려해 이미지 CDN 선택.

#### 7-5. 이미지 최적화 자동화

#### 7-6. 애니메이션 GIF를 비디오로 바꾸기

#### 7-7. 자바스크립트 시작 최적화

- 더 적은 JavaScript를 제공하면 네트워크 전송 시간이 줄어들고 코드 압축 해제에 소요 시간이 줄어들며 구문 분석하고 컴파일하는 시간이 줄어듬.

1. 회로망
   - **JavaScript 네트워크 전송 비용 줄이는 방법**
     1. 사용자에게 필요한 코드만 보내기
        - Code Splitting(Webpack)
     2. 축소
        - ES5 : UglifyJS
        - ES6+ : babel minify
     3. 압축
        - Brotli ~ q11 > Gzip
     4. 사용하지 않는 코드 제거
        - DevTool code coverage를 사용해 제거하거나 느리게 로드할 수 있는 코드 식별
        - Webpack Bundle을 분석해 불필요한 종속성을 줄이기.
        - Three Shaking
        - Closure Compiler
        - lodash-babel-plugin
        - Webpack ContextReplacementPlugin
     5. 네트워크 트립을 최소화하기 위한 캐싱 코드
        - HTTP 캐싱 사용. 스크립트의 최적 수명을 max-age로 결정하고 유효성 검사 토큰 ETag를 제공해 변경되지 않은 바이트 전송을 방지
        - Server Worker 캐싱을 사용해 V8 code caching 기능 사용
        - 장기 캐싱을 사용해 변경되지 않은 리소스를 가져올 필요 없음. Webpack 파일 이름 해싱.
2. 파싱/컴파일
   - 다운로드 후 JavaScript의 가장 큰 비용 중 하나는 JS 엔진이 이 코드를 구문 분석/컴파일 하는 시간임.
   - Chrome DevTools Performance 패널에서 노란색 확인.
   - DevTool의 Bottom-Up을 사용하면 Parse, Complie과 같은 단계에서 쇼요된 시간을 볼 수 있음.
   - 파싱/컴파일 시간이 길어지면 사용자가 사이트와 상호작용할 수 있는 시간이 크게 지연됨. JavaScript는 동등한 크기의 이미지, 웹 글꼴보다 브라우저가 처리하는 비용이 더 큼.
   - **JavScript vs 이미지**
     - 이미지는 메인스레드를 차단하지 않으며 디코딩 및 래스터화 되는 동안 인터페이스가 상호작용하는 것을 방지하지 않음.
     - JS는 구문 분석, 컴파일 및 실행 비용으로 인해 상호 작용을 지연시킬 수 있음.
3. 실행 시간
   - 자바스크립트 실행은 메인 스레드에서 발생해야하는 작업 중 하나로 실행 시간이 길면 상호작용 할 수 있는 시간이 늘어 날 수 있음.
4. 기타 비용
   - **GC**
     - GC로 인해 페이지 버벅 거림, 일시 중지 되는 것처럼 보일 수 있음.
     - 브라우저가 메모리를 회수하면 JS 실행이 일시 중지 되므로 자주 GC가 동작하는 브라우저가 더 자주 실행을 일시중지 할 수 있음.
     - 메모리 누수 및 빈번한 GC 일시 중지 피하기
   - **런타임 중 오래 실행되는 JavaScript**
     - 메인스레드를 차단해 페이지가 응답하지 않을 수 있음.
     - 작업을 더 작은 조각으로 나누기 위해 requestAnimationFrame() or requestIdleCallback() 사용.
5. JavaScript 전달 비용을 줄이기위한 패턴

- 경로기반 청킹 or PRPL 패턴
  - **PRPL**
    - PRPL(Push, Render, Pre-cache, Lazy-load)은 공격적인 코드 분할 및 캐싱을 통해 상호작용을 최적화하는 패턴.
  - **프로그레시브 부트스트랩**

6. 결론
   - 전송 크기는 저사양 네트워크에 중요함. CPU 바운드 장치의 경우 구문 분석 시간이 중요함.

#### 7-8. 타사 JavaScript 로드

- **타사 스크립트를 주의해야 하는 이유**
  - 성능 문제
  - 프라이버시 문제
  - 보안 문제
  - 예측할 수 없는 업데이트
  - 의도하지 않은 결과 발생
- 이상적으로 타사 스크립트가 중요한 렌더링 경로에 영향을 주지 않도록 하는 것이 좋음.

1. 타사 스크립트란
   - 타사 스크립트 예
     - 소셜 공유 버튼
     - 비디오 플레이어 삽입
     - iframe 광고
     - 분석 및 메트릭 스크립트
     - 실험용 A/B 테스트 스크립트
     - 도우미 라이브러리
2. 페이지에서 타사 스크립트 식별 방법

- Chrome DevTools, PageSpeed Insights, WebPageTest 등에서 값 비싼 타사 스크립트를 확인 할 수 있음.
  - **Chrome DevTools 타사 스크립트 배지**
    - Network Panel에서 타사 강조 표시를 지원함.
    - third party badges 입력해서 기능 활성화

3. 페이지에서 타사 스크립트 영향측정
   - **Lighthouse 부팅 시간 감사**
     - JavaScript 부팅 시간 감사로 스크립트 구문 분석, 컴파일, 평가 시간이 많은 스크립트를 강조할 수 있음. CPU를 많이 사용하는 타사 스크립트를 검색하는데 유용함.
   - **Lighthouse 네트워크 페이로드 감사**
     - 페이지로드 시간을 늦출 수 있는 네트워크 요청 식별.
   - **Chrome DevTools 네트워크 요청 차단**
     - 네트워크 패널 -> 요청에 마우스 오른쪽 버튼 클릭 -> Block request URL
   - **Chrome DevTools 성능 패널**
     - Performacnce 패널의 Bottom-Up
     - 타사 스크립트 영향 측정 워크플로우
       1. 네트워크 패널에서 페이지 로드 시간 측정
       2. 문제 타사 스크립트의 URL, 도메인 차단
       3. 페이지 새로 고침 후 개선된 점 호가인
   - **WebPageTest로 타사 태그의 영향 측정**
   - **Long Tasks를 사용해 값 비싼 iframe 감지**
4. 효율적인 타사 스크립트 로드
   - **비동기 또는 지연 사용**
   - **리소스 힌트를 사용해 연결 설정 시간 단축**
   - **iframe이 있는 샌드박스 스크립트**
   - **자체 호스팅 타사 스크립트**
   - **사용자의 작은 샘플 A/B 테스트**
   - **지연로드 타사 리소스**
   - **분석은 복잡함**
5. 피해야할 타사 스크립트 패턴
   - **document.write() 피하기**
   - **태그 관리자를 사용하되 현명하게 사용하기**
   - **전역 범위를 오염시키는 스크립트 피하기**
6. 완화 전략
7. 결론

#### 7-9. 웹 글꼴 최적화

1. 글꼴로드 중 보이지 않는 텍스트 방지
2. WebFont 로딩 및 렌더링 최적화
3. WebFont 크기 줄이기

#### 7-10. HTTP 캐싱

1. 브라우저 호환성
2. HTTP 캐시의 작동원리
3. 요청 헤더 : 기본값 유지
4. 응답 헤더 : 웹 서버 구성
5. 어떤 응답 헤더 값을 사용해야하는지
6. 요약
7. 추가팁

#### 7-11. 클라이언트 힌트를 사용해 사용자에게 적응

1. 콘텐츠 협상에 관한 모든 것
2. 옵트 인
3. 모든 클라이언트 힌드
   - **장치 힌트**
   - **네트워크 힌트**
4. 모두 함께 묶기
   - **반응형 이미지**
   - **느린 네트워크에서 사용자 지원**
5. 캐시에 유의
6. 서비스 워커의 클라이언트 힌트

#### 7-12. Save-Data로 빠르고 가벼운 애플리케이션 제공

1. 경량 페이지의 필요성
2. Save-Data 요청 헤더
3. 브라우저 지원
4. Save-Data 설정 감지
5. 구현 팁 및 모범 사례
6. 조리법
   - **서버 측 코드에서 저장 데이터 확인**
   - **고해상도 화면에 저해상도 이미지 제공**
   - **중요하지 않은 이미지 생략**
   - **필수가 아닌 웹 글꼴 생략**
   - **서버 푸시 옵트 아웃**

### 8. JavaScript 최적화

#### 8-1. 트리쉐이킹으로 JavaScript 페이로드 줄이기

1. 트리쉐이킹이란
2. 트리쉐이킹 기회 찾기
3. Babel이 ES6 모듈을 CommonJS 모듈로 트랜스파일하지 못하도록 하기
4. 부작용 염두
5. 필요한 것만 가져오기
6. 작업이 잘 안될때

#### 8-2. 코드분할로 JavaScript 페이로드 줄이기

1. 측정

### 9. 동일한 리소스를 두번 로드 하지않기

#### 9-1. Offline Cookbook

1. 캐시 머신-리소스 저장시기
2. 캐시 지속성
3. 제안 제공-요청에 대한 응답
4. 합치기

#### 9-2. 웹 스토리지

##### 9-2-1. 개요

1. 스토리지 분류
   - **데이터 모델**
   - **Persistence**
   - **브라우저 지원**
   - **업무**
   - **동기화/비동기**
2. Chrome DevTools에서 저장소 디버깅

##### 9-2-2. PWA를 위한 Offline Storage

1. 사용기술
2. 다른 저장 메커니즘
3. 저장 용량
4. 사용가능한 저장 용량 확인
5. 할당량 초과 처리방법
6. 삭제 작동 방식
7. IndexedDB에 래퍼를 사용해하는 이유
8. 결론

##### 9-2-3. Cache API 사용

1. 구현 가능한 곳
2. 저장할 수 있는 것
3. 캐시 생성 및 열기
4. 캐시에 추가
5. 캐시에서 검색
6. 항목 삭제
7. 캐시 삭제

##### 9-2-4. IndexedDB 모범 사례

1. 앱을 에측 가능한 상태로 유지
   - **모든 플랫폼에서 모든 것을 IndexedDB에 저장할 수 있는 것은 아님**
   - **저장소에 쓰기가 실패할 수 있음**
   - **저장된 데이터는 사용자에 의해 수정 또는 삭제되었을 수 있음**
   - **저장된 데이터가 오래되었을 수 있음**
2. 앱 성능 유지

#### 9-3. Offline UX Considerations

### 10. 지연로드 리소스

#### 10-1. 이미지 및 비디오

1. 지연 로딩을 사용하여 로딩 속도 향상
2. 지연 로딩 이미지
3. 지연 로딩 비디오
4. 웹용 브라우저 수준 이미지 지연 로딩
5. lazysizes를 사용하여 이미지 지연로드

### 11. 신중하게 로드하는 주문

#### 11-1. 중요한 렌더링 경로

##### 11-1-1. 개요

1. 중요한 렌더링 경로

##### 11-1-2. 개체 모델 구성

1. DOM
2. CSSOM

##### 11-1-3. 렌더 트리 구성, 레이아웃 및 페인트

##### 11-1-4. 렌더링 차단 CSS

##### 11-1-5. JavaScript로 상호 작용 추가

1. 파서 차단과 비동기 JavaScript

##### 11-1-6. 중요한 렌더링 경로 측정

1. Lighthouse로 페이지 감사
2. Navigation Timing API로 코드 계측
3. DevTools

##### 11-1-7. 중요한 렌더링 경로 성능 분석

1. Hello World
2. 혼합에 Javascript 및 CSS 추가
3. 성능 패턴

##### 11-1-8. 중요한 렌더링 경로 최적화

##### 11-1-9. PageSpeed 규칙 및 권장 사항

1. 렌더링 차단 JavaScript 및 CSS 제거
2. JavaScript 사용 최적화
   - **비동기 자바스크립트 리소스 선호**
   - **동기 서버 호출 방지**
   - **자바스크립트 파싱 연기**
   - **오래 실행되는 JavaSCript 피하기**
3. CSS 사용 최적화
   - **문서 헤드에 CSS 넣기**
   - **CSS 가져오기 방지**
   - **인라인 렌더링 차단 CSS**

### 11-2. HTTP/2 소개

1. SPDY 및 HTTP/2 역사
2. 설계 및 기술 목표
3. 이진 프레임 레이어
4. 스트림, 메시지 및 프레임
5. 요청 및 응답 다중화
6. 스트림 우선순위
7. 오리진당 하나의 연결
8. 흐름 제어
9. 서버 푸시
   - **PUSH_PROMISE 101**
10. 헤더 압축
    - **HPACK의 보안 및 성능**

### 12. PRPL 패턴

1. Lighthouse 페이지 감사
2. 중요한 리소스 미리로드
3. 가능한 한 빨리 초기 경로를 렌더링
4. 사전 캐시 자산
5. 지연로드
6. 다음단계

### 13. 자원 우선 순위

1. 브라우저의 기본 우선 순위

### 14. 웹팩을 사용한 웹 성능 최적화

#### 14-1. 소개

#### 14-2. 프론트엔드 크기 줄이기

1. 프로덕션 모드 사용
2. 축소 활성화
   - **번들 수준 축소**
   - **로더 별 옵션**
3. NODE_ENV = production 지정
4. ES 모듈 사용
5. 이미지 최적화
6. 종속성 최적화
7. ES 모듈에 대한 모듈 연결 사용(일명 범위 호이스팅)
8. webpack 및 비 webpack 코드가 모두 있는 경우 외부를 사용
   - **창에서 종속성을 사용할 수 있는 경우**
   - **종속성이 AMD 패키지로 로드되는 경우**
9. 합산

#### 14-3. 장기 캐싱 활용

1. 번들 버전 관리 및 캐시 헤더 사용
2. 종속성 및 런타임을 별도의 파일로 추출
   - **종속성**
   - **Webpack 런타임 코드**
3. 추가 HTTP 요청을 저장하기 위한 인라인 웹팩 런타임
   - **HtmlWebpackPlugin으로 HTML을 생성하는 경우**
   - **사용자 정의 서버 로직을 사용해 HTML을 생성하는 경우**
4. 지금 당장 필요하지 않은 지연로드 코드
5. 코드를 경로와 페이지로 분할
   - **단일 페이지 앱의 경우**
   - **기존 다중 페이지 앱의 경우**
6. 모듈 ID를 더 안정적으로 만들기
7. 합산

#### 14-4. 앱 모니터링 및 분석

1. 번들 크기 추적
   - **웹팩 대시보드**
   - **번들 크기**
2. 번들이 왜 그렇게 큰지 분석

#### 14-5. 결론

---

## **Rendering Performance**

### 1. 개요

1. 60fps 및 장치 재생률
2. 픽셀 파이프 라인
   - **JS/CSS > 스타일 > 레이아웃 > 페인트 > 합성**
   - **JS/CSS > 스타일 > 그림판 > 합성**
   - **JS/CSS > 스타일 > 합성**
3. 브라우저 렌더링 최적화

### 2. JavaScript 실행 최적화

1. 시각적 변경을 위해 requestAnimationFrame 사용
2. 복잡성 감소 또는 웹 작업자 사용
3. JavaScript의 프레임 세금
4. Javascript를 마이크로 최적화 하지 않기

### 3. 스타일 계산의 범위와 복잡성 감소

1. Selector의 복잡성 감소
2. 스타일링 되는 요소 수 줄이기
3. 스타일 재 계산 비용 측정
4. 블록, 요소, 수정자 사용
5. 자원

### 4. 복잡한 레이아웃을 피하고 레이아웃 thrashing

1. 가능한 한 레이아웃 피하기
2. 이전 레이아웃 모델보다 flexbox 사용
3. 강제 동기 레이아웃 방지
4. 레이아웃 thrashing 방지

### 5. 페인트 복잡성 단순화 및 페인트 영역 감소

1. 레이아웃 및 페인트 트리거
2. Chrome DevTools를 사용해 페인트 병목 현상 빠르게 식별
3. 움직이거나 희미해지는 요소 홍보
4. 페인트 영역 줄이기
5. 페인트 복잡성 단순화

### 6. 합성기 전용 속성 고수 및 레이어 수 관리

1. 애니메이션에 변형 및 불투명도 변경 사용
2. 애니메이션을 적용하려는 요소 홍보
3. 레이어 관리 및 레이어 폭발 방지
4. Chrome DevTools를 사용해 앱 레이어 이해

### 7. 입력 핸들러 디바운스

1. 장기 실행 입력 핸들러 방지
2. 입력 처리기에서 스타일 변경 방지
3. 스크롤 핸들러 디바운스

---

## **Audit your site**

### 1. 개요

### 2. 사전 작업

1. 유효성 검사 : 아키텍처 및 코드
2. 다양한 장치 및 컨텍스트로 테스트
3. UI 및 UX 사용

### 3. 사이트 보안 확인

### 4. 성능 측정

1. 리소스 요청 기록 : 수, 크기, 유형 및 타이밍
2. 메모리 및 CPU 로드 확인
3. 첫번째 및 후속로드 성능 테스트
4. 결과 저장
5. 핵심 프로그레시브 웹 앱 요구사항 테스트
6. 분석, 이벤트 추적 및 비지니스 메트릭을 사용해 실제 성능 추적
7. 실제 경험 : 화면 및 비디오 녹화

### 5. 결과 공류

1. 컨텍스트 제공
2. 잠재력 입증

### 6. 다음 단계
