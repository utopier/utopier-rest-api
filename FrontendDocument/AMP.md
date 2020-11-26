# AMP

- Reference
  - https://amp.dev/ko/documentation/?format=websites
  - https://support.google.com/webmasters/answer/7320015?hl=ko
  - https://developers.google.com/search/docs/guides/about-amp?hl=ko
  - https://codelabs.developers.google.com/codelabs/accelerated-mobile-pages-foundations#0
  - https://codelabs.developers.google.com/codelabs/accelerated-mobile-pages-advanced/#0
  - https://developers.google.com/search/docs/advanced/guidelines/amp?visit_id=637411048147019989-2259194546&rd=1
  - https://nextjs.org/docs/api-reference/next/amp
  - https://developers.google.cn/codelabs/amp-beautiful-interactive-canonical?hl=ko#0
  - https://developers.google.cn/web/progressive-web-apps?hl=ko
  - https://ampstart.com/components

---

## 목차

1. **Google Search**
   1. AMP가 검색결과에 표시되는 방식 이해
   2. AMP 콘텐츠 개선
   3. AMP 콘텐츠 유효성 검사
   4. AMP 콘텐츠 삭제
2. **Codelab**
   1. AMP Foundations
   2. AMP Advanced
   3. Beautiful,interactive,canonical AMP
3. **amp.dev**
4. **next/amp**

---

## 1. **Google Search**

### 1-1. AMP가 검색결과에 표시되는 방식 이해

- Google 검색은 AMP 페이지 색인을 생성하고 AMP 페이지가 있는 경우 리치결과와 캐러셀 일부로 모바일 검색에 표시될 수 있음.
- Google 검색에서 AMP 자체는 순위 요소가 아니지만 속도는 순위 지정 요소.
- 모바일 검색 -> AMP 아이콘 -> Google AMP Cache에서 페이지를 가져와 로드 최적화

1. Google 검색결과의 최초 표시
2. 사용자가 AMP 콘텐츠를 클릭할 경우

- Google AMP 뷰어 or Signed Change 중 한가지 방식으로 표시됨.
  - **Google AMP 뷰어 소개**
  - **서명된 교환 소개**
    - https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/signed-exchange

### 1-2. AMP 콘텐츠 개선

1. 기본 AMP 페이지 만들기
2. CMS로 AMP 페이지 만들기
3. 리치 모바일 검색결과 최적화
4. 페이지 모니터링 및 개선
5. Codelab으로 연습

### 1-3. AMP 콘텐츠 유효성 검사

1. 일반적인 AMP 오류 수정
2. 리소스

### 1-4. AMP 콘텐츠 삭제

1. AMP 페이지 및 AMP가 아닌 페이지를 포함하는 모든 버전의 AMP 콘텐츠 삭제
2. AMP가 아닌 표준 페이지는 유지하면서 AMP 페이지만 삭제
3. CMS로 AMP 페이지 및 AMP가 아닌 페이지 삭제
   - **단일 페이지 삭제**
   - **모든 AMP 페이지 삭제**

---

## 2. **Codelab**

### 2-1. AMP Foundations

1. 개요
   - 뉴스 기사 웹페이지 구현
2. 샘플 코드 받기
   - git clone https://github.com/googlecodelabs/accelerated-mobile-pages-foundations.git
3. 샘플 페이지 실행
   - 임시 로컬 웹 서버 생성
     1. Chrome용 웹 서버
        - Chrome 웹 스토어에서 Chrome용 웹 서버 설치
        - 폴더 선택(코드랩 예제 파일 폴더)
        - Automatically show index.html 선택 및 포트 8000
        - http : // localhost : 8000 / article.html
     2. Firebase 호스팅
     3. 로컬 HTTP Python 서버
        - python -m SimpleHTTPServer
        - http : // localhost : 8000 / article.html
4. 일반 HTML 페이지 작성
   1. article.amp.html
   - head 태그에 AMP 라이브러리 포함
     ```html
     <script async src="https://cdn.ampproject.org/v0.js"></script>
     ```
   2. Chrome DevTool Console에서 출력 확인
   3. AMP 유효성 검사기 활성
   - http : // localhost : 8000 / article.amp.html # development = 1
   4. Chrome DevTool 에서 휴대기기 환경 시뮬레이션 설정
5. 유효성 검사 오류 해결

   - **문자셋**
     - head 태그의 첫번째 자식이어야 함. meta charset 태그 앞에 추가된 콘텐츠를 다시 해석하지 않기 위해서
     ```html
     <meta charset="utf-8" />
     ```
   - **AMP파일에는 canonical link 태그가 필요**
     - 모든 AMP 문서에는 표준페이지를 참조하는 링크가 있어야 함.
     ```html
     <link rel="canonical" href="/article.html" />
     ```
   - **AMP 속성 필요**
     - AMP는 페이지를 AMP문서로 선언하기 위해 루트 html 요소에 속성이 필요함
     ```html
     <!DOCTYPE html>
     <html ⚡ lang="en"></html>
     ```
     ```html
     <!DOCTYPE html>
     <html amp lang="en"></html>
     ```
   - **뷰포트 필요**
     ```html
     <meta
       name="viewport"
       content="width=device-width,minimum-scale=1,initial-scale=1"
     />
     ```
   - **외부 스타일시트**

     - AMP는 외부 스타일 시트를 포함할 수 없고 인라인으로 포함해야함.
     - 모든 스타일링 정보에 대한 파일크키가 50KB로 제한됨. SASS와 같은 CSS Preprocessor를 사용하고 인라인 하기 전에 minify하는 것이 좋음.
     - https://www.ampproject.org/docs/guides/responsive/style_pages.html

     ```html
     <style amp-custom>
       body {
         width: auto;
         margin: 0;
         padding: 0;
       }
       ...;
     </style>
     ```

   - **타사 JavaScript**
     - AMP에서는 사용자 생성 스크립트가 허용되지 않음. 다음 두가지 요구사항을 따르는 경우에만 허용됨
       1. 모든 자바스크립트는 비동기식이어야함. 스크립트 태그에 async 속성을 포함해야함.
       2. AMP 라이브러리 및 AMP 구성요소만 포함될 수 있음.
   - ## **AMP CSS 상용구**
   - **amp-img 태그**
   - **레이아웃 시스템**
   - **최종 AMP**

     ```html
     <!DOCTYPE html>
     <html ⚡ lang="en">
       <head>
         <meta charset="utf-8" />
         <meta
           name="viewport"
           content="width=device-width,minimum-scale=1,initial-scale=1"
         />

         <link rel="canonical" href="/article.html" />
         <link rel="shortcut icon" href="amp_favicon.png" />

         <title>News Article</title>

         <style amp-boilerplate>
           body {
             -webkit-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
             -moz-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
             -ms-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
             animation: -amp-start 8s steps(1, end) 0s 1 normal both;
           }
           @-webkit-keyframes -amp-start {
             from {
               visibility: hidden;
             }
             to {
               visibility: visible;
             }
           }
           @-moz-keyframes -amp-start {
             from {
               visibility: hidden;
             }
             to {
               visibility: visible;
             }
           }
           @-ms-keyframes -amp-start {
             from {
               visibility: hidden;
             }
             to {
               visibility: visible;
             }
           }
           @-o-keyframes -amp-start {
             from {
               visibility: hidden;
             }
             to {
               visibility: visible;
             }
           }
           @keyframes -amp-start {
             from {
               visibility: hidden;
             }
             to {
               visibility: visible;
             }
           }
         </style>
         <noscript
           ><style amp-boilerplate>
             body {
               -webkit-animation: none;
               -moz-animation: none;
               -ms-animation: none;
               animation: none;
             }
           </style></noscript
         >
         <style amp-custom>
           body {
             width: auto;
             margin: 0;
             padding: 0;
           }

           header {
             background: Tomato;
             color: white;
             font-size: 2em;
             text-align: center;
           }

           h1 {
             margin: 0;
             padding: 0.5em;
             background: white;
             box-shadow: 0px 3px 5px grey;
           }

           p {
             padding: 0.5em;
             margin: 0.5em;
           }
         </style>
         <script async src="https://cdn.ampproject.org/v0.js"></script>
       </head>
       <body>
         <header>News Site</header>
         <article>
           <h1>Article Name</h1>

           <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
             egestas tortor sapien, non tristique ligula accumsan eu.
           </p>

           <amp-img
             src="mountains.jpg"
             layout="responsive"
             width="266"
             height="150"
           ></amp-img>
         </article>
       </body>
     </html>
     ```

6. 표준 URL, 메타 데이터 및 검색
   - **표준 페이지와 AMP 문서 연결**
   - **Schema.org 검색엔진 메타 데이터**

### 2-2. AMP Advanced

1. 개요
   - 광고
   - 분석
   - 비디오 임베딩
   - 소셜 미디어 통합
   - 이미지 캐러셀
2. 샘플 코드 받기
   - git clone https://github.com/googlecodelabs/accelerated-mobile-pages-advanced.git
3. 샘플 페이지 실행
   - 임시 로컬 웹서버 생성
     1. Chrome용 웹서버
     2. Firebase 호스팅
     3. 로컬 HTTP Python 서버
4. 핵심 AMP 구성요소
   - **amp-ad** : 광고 표시 컨테이너
   - **amp-img** : HTML img 태그 대체
   - **amp-pixel** : 페이지 조회수를 계산하기 위한 추적 픽셀
   - **amp-videio** : HTML5 동영상 태그 대체
5. 광고 추가

   - https://www.ampproject.org/docs/reference/amp-ad.html

   ```html
   <amp-ad
     width="300"
     height="250"
     type="doubleclick"
     data-slot="/35096353/amptesting/image/static"
   >
   </amp-ad>
   ```

   - data-로 시작하는 모든 속성은 공급 업체별 속성

   ```html
   <amp-ad
     width="300"
     height="250"
     type="a9"
     data-aax_size="300x250"
     data-aax_pubname="test123"
     data-aax_src="302"
   >
   </amp-ad>
   ```

   - 두 지역 타겟팅 광고 구성

   ```html
   <amp-ad
     width="300"
     height="250"
     type="doubleclick"
     data-slot="/35096353/amptesting/geo/uk"
   >
     <div fallback>No ad appeared because you're not browsing from the UK!</div>
   </amp-ad>

   <amp-ad
     width="300"
     height="250"
     type="doubleclick"
     data-slot="/35096353/amptesting/geo/us"
   >
     <div fallback>No ad appeared because you're not browsing from the US!</div>
   </amp-ad>
   ```

6. 확장된 구성요소로 콘텐츠 확장

   - **YouTube 비디오 삽입**
     ```html
     <amp-youtube
       data-videoid="mGENRKrdoGY"
       layout="responsive"
       width="480"
       height="270"
     >
       <div fallback>
         <p>The video could not be loaded.</p>
       </div>
     </amp-youtube>
     ```
     ```html
     <script
       async
       custom-element="amp-youtube"
       src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"
     ></script>
     ```
   - **트위터 표시**
     ```html
     <script
       async
       custom-element="amp-twitter"
       src="https://cdn.ampproject.org/v0/amp-twitter-0.1.js"
     ></script>
     ```
     ```html
     <amp-twitter
       width="486"
       height="657"
       layout="responsive"
       data-tweetid="638793490521001985"
     >
     </amp-twitter>
     ```
   - **기사 인용문 강조**
     ```html
     <script
       async
       custom-element="amp-fit-text"
       src="https://cdn.ampproject.org/v0/amp-fit-text-0.1.js"
     ></script>
     ```
     ```html
     <amp-fit-text
       width="400"
       height="75"
       layout="responsive"
       max-font-size="42"
     >
       Big, bold article quote goes here.
     </amp-fit-text>
     ```

7. 복잡한 캐러셀
8. amp-analytics로 추적
9. 사이트 탐색
10. 글꼴 추가

### 2-3. Beautiful,interactive,canonical AMP

1. 소개
2. 설정
3. AMP 페이지를 만드는 이유
4. 페이지 셀 만들기
5. 반응형 콘텐츠 추가
6. 상호작용 추가
7. 상호작용 향상
8. 아름다운 시각 효과 추가

---

## 3. **amp.dev**

---

## 4. **next/amp**

1. 페이지 AMP 설정
   ```javascript
   export const config = { amp: true };
   // true : AMP 전용 페이지
   // hybird : AMP버전, HTML버전 두가지 버전이 있음
   ```
   - **AMP 전용 페이지**
     - 페이지에 Nextjs, React 런타임이 없음
     - 페이지는 AMP Optimizer로 자동최적화
     - 페이지에 사용자가 액세스할 수 있는 최적화된 버전의 페이지와 색인을 생성할 수 있는 최적화되지 않은 버전의 페이지가 있음.
2. 하이브리드 AMP 페이지

   ```javascript
   import { useAmp } from 'next/amp';

   export const config = { amp: 'hybrid' };

   function About(props) {
     const isAmp = useAmp();

     return (
       <div>
         <h3>My AMP About Page!</h3>
         {isAmp ? (
           <amp-img
             width="300"
             height="300"
             src="/my-img.jpg"
             alt="a cool image"
             layout="responsive"
           />
         ) : (
           <img width="300" height="300" src="/my-img.jpg" alt="a cool image" />
         )}
       </div>
     );
   }

   export default About;
   ```

   - **하이브리드 AMP 페이지**
     - 페이지는 기본 HTML 및 AMP HTML(?amp=1이 URL에 추가)으로 렌더링됨
     - 페이지의 AMP 버전에는 AMP Optimizer에 적용된 유효한 최적화만 있으므로 검색엔진에서 색인을 생성할 수 있음.
