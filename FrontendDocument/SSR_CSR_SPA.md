# SSR, CSR, SPA

- Reference

  - **SPA**

    - https://ko.wikipedia.org/wiki/%EC%8B%B1%EA%B8%80_%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98
    - https://velog.io/@josworks27/SPA-%EA%B0%9C%EB%85%90
    - https://poiemaweb.com/js-spa
    - https://velog.io/@cyongchoi/Spa-%EB%9E%80

  - **SSR,CSR**
    - https://d2.naver.com/helloworld/7804182
    - https://medium.com/@minoo/next-js-%EC%B2%98%EB%9F%BC-server-side-rendering-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-7608e82a0ab1
    - https://velog.io/@jeff0720/Next.js-%EA%B0%9C%EB%85%90-%EC%9D%B4%ED%95%B4-%EB%B6%80%ED%84%B0-%EC%8B%A4%EC%8A%B5%EA%B9%8C%EC%A7%80-%ED%95%B4%EB%B3%B4%EB%8A%94-SSR-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95
    - https://velog.io/@ansrjsdn/Next.js-SSR-%ED%95%B4%EB%B3%B4%EA%B8%B0
    - https://velog.io/@rjs1197/SSR%EA%B3%BC-CSR%EC%9D%98-%EC%B0%A8%EC%9D%B4%EB%A5%BC-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90
    - https://velog.io/@namezin/CSR-SSR
    - https://medium.com/%EC%95%84%EB%AA%BD%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4/csr-ssr-spa-mpa-ede7b55c5f6f
    - https://medium.com/@tylorshin/%EA%B7%B8%EB%9F%BC%EC%97%90%EB%8F%84-%EB%B6%88%EA%B5%AC%ED%95%98%EA%B3%A0-%EC%9A%B0%EB%A6%AC%EA%B0%80-ssr%EC%9D%84-%ED%95%B4%EC%95%BC-%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-9e9519f18296
  - **Rendering on the web**
    - https://developers.google.com/web/updates/2019/02/rendering-on-the-web

---

##

---

## SPA(Single Page Application)

1. SPA란

- 단일 페이지
- 화면이동시 필요한 데이터만 서버로부터 JSON으로 받아 동적 렌더링.

2. 기존 애플리케이션 vs SPA

- **기존 애플리케이션**
  - 화면이동시 HTML,CSS,JS를 서버에서 받아서 처음부터 다시 렌더링하므로 화면 구성 속도가 느리다.
- **SPA**
  - 화면구성에 필요한 모든 HTML을 클라이언트에서 가지고 있고 필요한 데이터만 서버에 요청해 JSON으로 받아서 화면 구성 속도가 빠르다.(Javascript로 처리)

3. 장단점

- **장점**
  - 화면이동이 빠름(페이지 이동시 깜빡임 없음)
  - 사용자 경험 향상(빠른 반응성, 화면전환 애니메이션)
  - 데이터 처리과정 효율성(화면에 필요한 데이터만 요청, 서버 요청이 적음)
  - 기존 SSR에 비해 배포가 간단함
- **단점**
  - 첫 로딩 시간 오래 걸림(CodeSplitting으로 해결. 필요없는 화면 코드까지 불러오게 됨.)
  - 구현 복잡
  - SEO에 안좋음(Javascript가 로딩되기 전에 DOM은 비어 있음)

4. 라우팅 처리

- 페이지는 하나이나 브라우저 주소 상태에 따라 다른 화면을 보여주기 위해 라우팅 처리를 할 수 있다.
- **React Routing Library**
  - react-router
  - Nextjs Routing

---

## SSR, CSR

1. CSR

- 첫 요청시 데이터가 없는 문서 반환
- HTML, static 파일 요청 후 로드 -> 사용자 상호작용 or 필요에 따라 Javascript를 통해 서버에 데이터를 받아와서 동적 렌더링
  - **장점**
    - 사용자 UX
    - 서버 부담 덜함
  - **단점**
    - 첫 로딩시 오래걸림
    - SEO 문제 발생

2. SSR

- 데이터까지 들어간 HTML 문서를 받아오고 렌더링
- 웹서버에 요청할때마다 Browser 새로고침이 일어나고 서버에 새페이지를 요청.
  - **장점**
    - 초기 로딩 속도가 빠름
    - SEO 가능
  - **단점**
    - 사용자 UX가 떨어짐(새로고침, 깜빡임)
    - 서버 부하 커짐(서버에 매번 요청)

3. CSR vs SSR

- 초기 로딩 속도
- 서버 부하
- SEO

4. SPA, MPA

- SPA는 서버로부터 처음에만 페이지를 받아오고 이후 동적으로 DOM을 구성해 렌더링되는 화면이 바뀌게 함(CSR방식)
- MPA는 동적이지 않은 페이지를 상황에 맞게 클라이언트에 뿌려줌(SSR방식)

5. SPA에서 SSR 구현

- React는 Nextjs or ReactDOMServer

---

**Naver SSR**

1. SSR이란

- 서버에서 데이터가 포함된 완성된 페이지를 만들어서 클라이언트에 보여주는 방식
- CSR보다 페이지 구성 속도는 늦어지나 사용자에게 보여주는 콘텐츠 구성이 빨라지고 SEO 구성도 쉽게 할 수 있다.
- CSR은 SSR보다 초기 전송되는 페이지 속도는 빠르나 서비스에서 필요한 데이터를 브라우저에 추가로 요청해 재구성해야하기 때문에 페이지 완료 시점은 SSR보다 느리다.
- SSR이 CSR에 비해 성능이 좋은점도 있으나 모든 부분이 우수하지는 않다.
  - https://medium.com/walmartlabs/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8

2. 네이버 블로그가 Nodejs 기반의 SSR을 도입한 이유

- **합리적인 선택**
  - 사용자가 웹을 사용하면서도 데스크탑 애플리케이션과 같은 사용성을 제공하기 위해 SPA로 구성
  - SPA로 구성하기 위해서는 프론트엔드와 백엔드 영역을 API 구분하고 각 영역에서 담당하는 페이지의 역할을 나눠야 한다.
- **빠르게 바뀐 프론트엔드 생태계**
- **CSR 기술적 한계**
  - CSR만을 지원하는 angular는 페이지 로드 이후 동적으로 컨텐츠를 생성하기 때문에 컨텐츠를 빠르게 소비하는 사용자 요구사항을 충족시킬 수 없다.
  - 네트워크 상황이 좋지 않은 경우 CSR을 이용하면 사용자들은 글을 보기전에 상당 시간 하얀 화면을 봐야 할 수도 있다.

3. Nodejs 기반의 SSR을 선택한 이유

- CSR 문제를 해결할 수 있는 렌더링 기법(https://developers.google.com/web/updates/2019/02/rendering-on-the-web?hl=en)이 있으나 빠르게 바뀌는 프론트엔드 생태계와 CSR 한계를 극복하기 위해 Nodejs기반 SSR을 선택함.

- **Node.js 기반의 SSR은 universal language인 JavaScript를 최대한 활용할 수 있다.**
  - React 기반 SSR을 선택함으로 universal language 장점과 React 생태계를 이용할 수 있게 됨.
- **SSR을 사용하면 프런트엔드 영역과 백엔드 영역을 완전히 분리함으로써 생산성을 높일 수 있다.**
  - SSR을 사용해 프론트엔드, 백엔드 영역을 REST API로 느슨하게 연결함.
  - 기존 CSR 페이지는 프론트에서 개발하고 SSR 페이지는 백엔드에서 개발했다면 SSR 환경을 구축하면 페이지 소유권은 온전히 프론트엔드에 존재하게 됨.
  - 백엔드에서는 API 개발, 데이터활용에 더 집중할 수 있어서 서비스 품질을 높이는데 기여할 수 있다.
- **SSR 아키텍처를 구성하면 다른 여러 가지 대안을 활용할 수 있는 토대가 된다.**
  - https://developers.google.com/web/updates/images/2019/02/rendering-on-the-web/infographic.png
  - 필요에 따라 CSR로만 구성하거나 CSR과 prependering을 함께 사용하도록 개발할 수 있음.
- **SSR 도입 전후**
  - 프론트엔드, 백엔드 간의 커뮤니케이션은 API 명세로 국한되어 커뮤니케이션 비용을 줄일 수 있다.
  - 프론트엔드 작업 완성도 및 이슈 대응 생산성도 상대적으로 높아짐.

4. 레거시 시스템 전환 전략

- 모바일 블로그 페이지 전체를 한꺼번에 Nodejs 환경으로 변경해 오픈하는 것은 개발기간이 오래 걸리고 리스크 관리에서도 위험한 방식이다.
- 점진적으로 오픈하고 확인하기 위해 URL 단위의 배포를 선택했다.
- **Reverse Proxy**
  - URL 단위 배포를 위해 reverse proxy 구조를 사용.
  - reverse proxy는 주로 내부와 외부 네트워크를 분리해 보안 이슈를 해결하기 위해 사용되었으나 블로그에서는 점진적 URL 단위 배포를 위해 이를 이용했다.
  - 사용자가 페이지로 접근시 reverse proxy에서 Nodejs SSR 전환이 완료된 페이지의 경우에는 Nodejs SSR을 서빙하고 그렇지 않은 페이지의 경우 기존 블로그 페이지를 서빙한다.

5. URL 단위 전환을 위한 준비

- 시스템 구조 뿐만 아니라 URL 단위 개발을 위해 URL이 존재하지 않는 공통 영역에 대한 준비를 먼저 해야한다.(상단 사이드 메뉴, 메인 메뉴)

6. Nodejs 기반의 SSR 환경 구성

- React기반의 SSR 환경을 만들때 가장 간단한 방법은 Nextjs를 이용해 SSR을 구성하는 것. 소규모 프로젝트 같은 경우 적극 도입 권장.
- 그러나 모바일 블로그는 Nextjs를 사용하지 않음. React처럼 뷰 전용 라이브러리가 아닌 서비스 플로우 전체를 담당하는 프레임워크를 블랙박스로 관리하기에는 운영 리스크가 너무 컸다. 또한 빠르게 발전하는 프론트엔드 생태계의 변화를 Nextjs에 의존해 적용해야만 했기에 모바일 블로그는 Nodejs 기반의 SSR 환경을 자체 구축하기로 결정함.
- 개발 생상성 보다 안정성, 투명성 관점에서 보다 우위에 있는 기술 스택 선정
  - Typescript, redux, redux-thunk, Express
    - https://raygun.com/blog/nodejs-vs-hapi-express-restify-koa/

7. 대국민 서비스를 위한 준비

- **전 세계에서 사용하는 Node.js**
  - Nodejs는 이벤프 루프와 단일 스레드 모델을 사용해 non-blocking I/O와 멀티 태스크가 가능한 구조로 설계된 언어로 구조적으로 조회성 서비스에는 훌륭한 성능과 안정성을 자랑한다.
  - Linkedin, Paypal, Netflix, Uber, Facebook 에서 적용될 정도로 성능, 안정성 면에서 매우 훌륭한 언어이다.
- **성능 테스트**
  - 성능 테스트 목적
    1. 애플리케이션과 서버 환경의 최적 환경 찾기
    2. 시스템 가용량 확인(어느정도 부하를 견디는지)
  - 테스트 환경을 준비하고 부하를 줘서 시스템이 최대로 수용할 수 있는 TPS(or RPS)를 찾아야 함.
  - Nodejs는 단일 스레드이기 때문에 하나의 요청은 하나의 CPU core만 사용함. 보통 서버 core는 멀티 core를 지원하기 때문에 Nodejs 인스턴스 몇개를 사용해야 최적의 성능을 나타낼 수 있는지 확인이 필요하다.
    - PM2를 사용해 인스턴스를 클러스터링.
- **에러 대응**
  - 흔히 try catch문으로 에러핸들링을 하는데 Nodejs의 경우 비동기 상황시 발생하는 에러의 경우 UncaughtException이 발생하고 Nodejs 프로세스가 죽는 경우도 발생한다.
  - 단순히 UncaughtException 에러 처리로 문제를 해결할 수 없고 Nodejs 인스턴스 자체를 재시작하기를 공식문서에서 권장한다. 궁극적으로 애플리케이션 레벨에서 UncaughtException이 발생하지 않게 하는 것이 가장 좋은 해결책이다.
  - Nodejs를 서버로 도입하고 하면 서버 에러 플로우를 검증하는 작업 준비(단위 테스트)
    - https://d2.naver.com/content/images/2020/07/0a7056be-7346-1961-8173-61ec28247369.png
- **롤백 플랜**
  - 모든 시스템의 배포와 전환 시에는 항상 롤백 플랜이 준비되어 있어야 한다.
  - Nodejs 장점은 SSR 구조이나 초기 진입부분을 변경하면 CSR 형태의 서비스도 쉽게 제공할 수 있다. 이를 이용해 단계적 롤백 플랜을 세운다
    1. 사용자 부하를 받지 못하거나 장애가 발생하는 경우 CSR 페이지를 노출한다.
    2. CSR 페이지가 장애가 발생한 경우 프런트엔드 전환 전 페이지를 노출한다.

---

**Rendering on the Web**

1. 용어

- **렌더링**
  - SSR : Server-Side Rendering - 클라이언트 측 or 유니버셜 앱을 서버의 HTML로 렌더링
  - CSR : Client-Side Rendering - 브라우저에서 애플리케이션을 렌더링. DOM 사용
  - Rehydration : 클라이언트가 서버에서 렌더링한 HTML의 DOM 트리와 데이터를 재사용하도록 자바스크립트 뷰를 부팅함.
  - Prerendering : 빌드 타임에 클라이언트 측 애플리케이션을 실행해 초기 상태를 정적 HTML로 캡처.
- **성능**
  - TTFB : Time to First Byte (첫 번째 바이트까지의 시간) - 링크를 클릭한 후 처음으로 들어오는 콘텐츠 비트 사이의 시간을 나타냅니다.
  - FP : First Paint - 픽셀이 처음으로 사용자에게 표시되는 시점.
  - FCP : First Contentful Paint - 요청 콘텐츠(기사 본문 등)가 표시되는 시점
  - TTI : Time To Interactive - 페이지가 상호작용 가능하게 될 때까지의 시간 (이벤트 발생 등).

2. 서버 렌더링
3. 정적 렌더링
4. 서버 렌더링 vs 정적 렌더링
5. CSR
6. Rehydration을 통한 서버렌더링과 CSR 결합

- **Rehydration 문제 : 하나의 앱 두배의 비용**

7. 스트리밍 서버 렌더링 및 점진적인 Rehydration

- **부분 Rehydration**
- **삼자형 렌더링**

8. SEO 고려

---

**SSR을 해야하는 이유**
