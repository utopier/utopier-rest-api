# Browser

- Reference
  - **Architecture**
    - https://d2.naver.com/helloworld/59361
    - https://d2.naver.com/helloworld/2922312
    - https://d2.naver.com/helloworld/9274593
    - https://d2.naver.com/helloworld/5237120
    - https://d2.naver.com/helloworld/6204533
    - https://developers.google.com/web/updates/2018/09/inside-browser-part1?hl=ko
  - **Manifest**
    - https://developer.mozilla.org/ko/docs/Web/Manifest
  - **ServiceWorker**
    - https://developers.google.com/web/fundamentals/primers/service-workers

---

##

- **브라우저 동작 원리**
  1. 소개
  2. 이 글에서 설명하는 브라우저
  3. 브라우저 주요 기능
  4. 브라우저 기본 구조
  5. 렌더링 엔진
     - 동작 과정
  6. 파싱과 DOM 트리 구축
     - 파싱
     - 문법
     - 파서-어휘 분석기 조합
     - 변환
     - 파싱 예
     - 어휘와 구문에 대한 공식적인 정의
     - 파서 종류
     - 파서 자동 생성
  7. HTML 파서
     - HTML 문법 정의
     - 문맥 자유 문법이 아님
     - HTML DTD
     - DOM
     - 파싱 알고리즘
     - 토큰화 알고리즘
     - 트리 구축 알고리즘
     - 파싱이 끝난 이후의 동작
     - 브라우저 오류처리
  8. CSS 파싱
     - 웹킷 CSS 파서
  9. 스크립트와 스타일 시트의 진행 순서
     - 스크립트
     - 예측 파싱
     - 스타일 시트
  10. 렌더 트리 구축
  11. DOM 트리와 렌더 트르의 관계
  12. 트리 구축 과정
  13. 스타일 계산
      - 스타일 정보 공유
      - 파이어폭스 규칙 트리
      - 쉬운 선택을 위한 규칙 다루기
      - 다단계 순서에 따라 규칙 적용
      - 점진적 처리
  14. 배치
      - 더티 비트 체제
      - 전역 배치와 점증 배치
      - 비동기 배치와 동기 배치
      - 최적화
      - 배치 과정
      - 너비 계산
      - 줄 바꿈
      - 그리기
      - 전역과 점증
      - 그리기 순서
      - 파이어폭스 표시 목록
      - 웹킷 사각형 저장소
      - 동적 변경
      - 렌더링 엔진의 스레드
      - 이벤트 순환
  15. CSS2 시각 모델
      - 캔버스
      - CSS 박스 모델
      - 위치 결정 방법
      - 박스 유형
      - 위치 잡기
      - 층 표현
- **CPU, GPU, 메모리, 다중 프로세스 아키텍처**
  1.  CPU, GPU, Memory, 멀티 프로세스아키텍처
  2.  CPU & GPU
      - CPU
      - GPU
  3.  프로세스와 스레드에서 프로그램 실행
  4.  브라우저 아키텍처
  5.  어떤 프로세스가 무엇을 하는지
  6.  크롬의 멀티 프로세스 아키텍처의 장점
  7.  메모리 절약을 위한 크롬의 서비스화
  8.  프레임별 렌더러 프로세스 - 사이트 격리
- **네비게이션 과정에서 일어나는 일**
- **렌더러 프로세스의 내부 동작**
- **컴포지터가 사용자 입력을 받았을 때**
- **Manifest**
- **ServiceWorker**
- **Storage(IndexedDB,LocalStorage,SessionStorage,WebSQL,Cookies)**
- **Cache(Cache Storage, Application cache)**
- **Backend Services**
- **BOM**
- **DOM**
- **Accessibility Tree**
- **Chrome DevTools**

---

**브라우저 동작 원리**

---

**CPU, GPU, 메모리, 다중 프로세스 아키텍처**

## 1. CPU, GPU, Memory, 멀티 프로세스아키텍처

4개의 글에서 상위 레벨의 아키텍처부터 렌더링 파이프라인의 세부적인 부분까지 크롬 브라우저의 내부를 다루게 됨.

## 2. CPU & GPU

1. CPU(Central Processing Unit)
   과거에는 대부분 CPU가 하나의 칩이 였으나 최근에는 멀티코어

2. GPU(Graphics Processing Unit)
   CPU와 달리 GPU는 간단한 작업을 수 많은 코어에서 동시에 처리하는데 특화되어 있음.
   최근에 GPU 가속 연산 덕분에 GPU 혼자서 더 많은 종류의 연산을 처리 가능하도록 발전하고 있음.

- **컴퓨터 아키텍처 3개 레이어**
  - 하단부 : Machine Hardware(CPU, GPU)
  - 중앙부 : Operating System
  - 상단부 : Application

## 3. 프로세스와 스레드에서 프로그램 실행

프로세스는 애플리케이션의 실행 프로그램이며
스레드는 프로세스 내부에 있으며 프로세스의 프로그램을 실행하는 주체

- 애플리케이션을 시작하면 프로세스가 생성됨.
- 프로그램은 작업을위해 스레드들을 생성할 수도 있음.
- OS는 프로세스에 메모리 일정 부분을 줘서 애플리케이션의 모든 상태 정보를 고유 메모리 공간에 저장할 수 있게 하고 애플리케이션이 종료되면 프로세스도 사라지고 OS가 메모리를 해제함.

- 프로세스는 다른 프로세스를 돌려서 별도의 작업을 수행하도록 OS에 요청할 수 있음. OS는 별도의 메모리 공간을 새 프로세스에 할당함.
- 두 프로세스 간 통신이 필요하다면 IPC(Inter Process Communication)을 이용함.
- 많은 애플리케이션들이 이 방식을 채택하고 있어 워커 프로세스가 무응답 상태에 빠지더라도 애플리케이션의 다른 부분을 수행하고 있는 프로세스들을 종료할 필요 없이 해당 프로세스만 재시작할 수 있음.

## 4. 브라우저 아키텍처

- 웹 브라우저는 두가지 아키텍처로 구현될 수 있는데 첫번째는 한 프로세스가 다수의 스레드를 가지고 있는 형태거나 두번째는 스레드를 몇개가진 다수의 프로세스들이 IPC를 통해 통신하는 형태로 구현될 수 있다. 이 또한 브라우저 작동 표준이 아니라 접근 방식이 완전히 다를수도 있다.

1. Chrome의 멀티프로세스 아키텍처
   - Browser Process : 애플리케이션의 다른 부분을 담당하는 프로세스들을 조율함
   - Renderer Process : 다수의 프로세스가 생성되어 각 탭마다 할당됨. 최근까지 크롬은 가능하면 각 탭마다 별도의 프로세스를 할당했으나 현재는 iframe을 포함해 각 사이트 별도 프로세스를 가지도록 변경됨(사이트 격리)
   - 기타 : Utility, GPU, Plugin

## 5. 어떤 프로세스가 무엇을 하는지

- **Browser** : 주소 창, 뒤로 및 앞으로 이동 버튼을 포함한 애플리케이션의 chrome 부분을 제어함. 또한 네트워크 요청 및 파일 액세스와 같은 웹 브라우저의 권한이 부여된 보이지 않는 부분을 제어함.
- **Rederer** : 웹사이트가 디스플레이 될 때 탭 안의 모든 것을 담당.
- **Plugin** : 플래시와 같은 웹사이트가 사용하는 모든 플러그인 담당.
- **GPU** : 다른 프로세스와 분리된 GPU 작업을 제어함. GPU는 여러 앱의 요청을 제어하고 동일한 표면에 표시하기 때문에 다른 프로세스로 분리됨.

- 크롬에서 실행 중인 프로세스 보기 : 우측 상단의 메뉴 아이콘 클릭 -> 도구 더보기 -> 작업 관리자
  - 실행 중인 프로세스 목록과 CPU/Memory를 얼마나 사용하고 있는지 보여줌.

## 6. 크롬의 멀티 프로세스 아키텍처의 장점

1. 크롬은 여러개의 렌더러 프로세스를 사용함. 간단한 경우 각 탭이 하나의 프로세스를 가짐. 탭 3개가 열려 있고 각탭이 별도의 렌더러 프로세스로 돌아가면 한 탭이 무응답 상태가 되더라도 무응답 탭만 닫고 살아있는 다른 탭으로 이동하면 됨. 그러나 모든 탭이 하나의 프로세스에서 실행되면 탭 하나만 무응답 상태에 빠져도 모든 탭이 정지하게 됨.
2. 보안 및 샌드 박싱. 운영체제는 프로세스 권한을 제한하는 방법을 제공하므로 브라우저는 특정 기능에서 특정 프로세스를 샌드박스 할 수 있음. 예를 들어 Chrome 브라우저는 렌더러 프로세스와 같은 임의의 사용자 입력을 처리하는 프로세스에 대한 임의의 파일 액세스를 제한함
3. 프로세스들은 개별 메모리 공간을 소유하므로 공통 인프라스트럭쳐는 보통 복사본을 가지고 있음. 동일한 프로세스 내의 스레드처럼 메모리를 공유할 수 없기에 메모리 사용량이 더 많아지는 것을 의미함. 메모리를 절약하기 위해 크롬은 프로세스 개수에 제한을 두었음. 제한개수는 사용자 컴퓨터가 CPU, 메모리를 얼마만큼 지니고 있는지에 따라 변하지만 한계에 다다를 경우 크롬은 한 프로세스에서 동일한 사이트를 오픈하는 여러 탭들을 실행하기 시작함.

## 7. 메모리 절약을 위한 크롬의 서비스화

- 브라우저 프로세스에도 동일한 방식을 적용함. 크롬은 현재 브라우저 프로그램의 각 부분들을 서비스 형태로 여러개로 분리하거나 하나로 합치지 쉽게 구조를 변경중에 있음.
- 기본 아이디어는 크롬이 고성능 장치에서 실행될 때에는 안전성을 위해 각 서비스를 별개의 프로세스로 분리하고 자원이 부족한 장치에서는 서비스를 하나의 프로세스로 합쳐 메모리 점유를 낮추는 것. 안드로이드와 같은 플랫폼에서는 유사한 방법으로 메모리 점유를 줄이는 방식을 사용하고 있었음.

## 8. 프레임별 렌더러 프로세스 - 사이트 격리

- 사이트 격리는 각 교차 사이트 iframe에 대해 별도의 렌더러 프로세스를 실행하는 기능으로 Chrome에 최근 도입됨. 한 사이트내의 iframe을 여러 렌더러 프로세스가 가리키게 됨.
- 사이트 격리는 단순히 별개의 렌더러 프로세스를 할당하는 것이 아닌 iframe들이 통신하는 방식을 근본적으로 변경함. Ctrl+F로 단어를 찾을때도 전혀 다른 렌더러 프로세스를 뛰어 넘어야함.

---

**네비게이션 과정에서 일어나는 일**

1. 탐색할 때 일어나는 일
   탐색(Navigation)이란 브라우저가 사용자 요청을 받아 페이지에 렌더링하는 과정을 말하며 이 과정에서 각 프로세스와 스레드가 어떻게 통신하는지 알아봄.

2. 브라우저 프로세스에서 시작
   브라우저에 주소을 입력하면 브라우저 프로세스의 UI 스레드에서 처음으로 이를 캐치함.

   - **브라우저 프로세스에 있는 스레드**
     - UI Thread : 버튼, 입력창을 그림
     - Network Thread : 인터넷에서 데이터 통신
     - Stotage Thread : 파일 접근
     - 기타...

3. 단순한 탐색
   - **Step 1 : 입력 처리**
     - 사용자가 주소창에 문자열을 입력하면 Browser Process의 UI Thread는 문자열인지 주소인지 검색 후 검색엔진에 보낼지 요청 페이지로 연결할지 결정.
   - **Step 2 : 탐색 시작**
     - 사용자가 주소창에 엔터를 치면 컨텐츠를 받기 위해 네트워크 초기화를 진행.
   - **Step 3 : 응답 읽기**
     - 응답(payload)이 들어오기 시작할때 safe browsing check, CORS check를 수행하고 header의 Content-Type을 참고해 MIME Type 스니핑을 수행함.
       - 컨텐츠 타입이 HTML 페이지면 렌더러 프로세스에 데이터를 보냄
       - 컨텐츠 타입이 Gzip 이거나 다른 파일이면 다운로드 매니저에 데이터를 보냄
   - **Step 3 : 렌더러 프로세스 찾기**
     - 응답 읽기 작업이 끝나고 네트워크 스레드가 요청한 페이지로 이동을 해야한다고 확인 -> 네트워크 스레드는 UI 스레드에게 데이터가 준비되었다고 알림 -> UI 스레드는 렌더링을 담당할 렌더러 프로세스를 찾음.
       - 이 과정에서 네트워크 요청이 응답을 받는데 수백밀리초가 걸리므로 최적화가 되어 있음. 탐색 시작에서 UI스레드는 네트워크 요청과 동시에 렌더링을 담당할 렌더러 프로세스를 찾거나 시작하려고함. 이로 인해 응답 읽기가 정상적으로 끝났을때 이미 렌더러 프로세스는 대기하고 있게됨. cross-site로 리다이렉션하게 되면 준비된 프로세스는 사용되지 않고 다른 프로세스를 사용하게 됨.
   - **Step 4 : 탐색 수행**
     - 데이터와 렌더러 프로세스가 준비되면 브라우저 프로세스에서 렌더러 프로세스로 IPC를 통해 데이터 스트림(HTML 데이터)이 계속 전달되게 됨 -> 렌더러 프로세스에서 커밋이 확인 되면 브라우저 프로세스는 탐색을 완료하고 문서 로딩 단계를 시작함.
       - 이 시점에서 주소창 갱신, Security Indicator, 사이트 설정 UI가 세페이지의 사이트 정보를 반영. 또한 탭 세션 이력이 변경되어 Browser History에 방금 방문한 사이트가 추가되고, 탭 세션 복구 기능을 위해 탭이나 윈도우를 닫을때 세션 이력은 디스크에 저장됨.
   - **Extra Step : 초기 로딩 완료**
     - 탐색이 커밋되고 나면 렌더러 프로세스는 리소스로딩과 페이지 렌더를 계속함 -> 렌더러 프로세스가 렌더링을 끝내게 되면 브라우저 프로세스에 IPC를 반환함(onload) -> UI 스레드에서 로딩 스피너를 중지함
     - 이후에 클라이언트 사이드 자바스크립트는 추가적인 리소스 로딩과 새로운 뷰를 렌더할 수 있음.
4. 다른 사이트 탐색
   - 렌더러 프로세스가 탐색 과정을 초기화하면 렌더러 프로세스는 beforeunload 핸들러를 체크 -> 브라우저 프로세스의 탐색 초기화 프로세스 진행(렌더러 프로세스가 탐색 요청을 브라우저 프로세스에 넘김)
   - 현재 사이트와 다른 곳으로 새로 탐색 -> 렌더러 프로세스가 unload 같은 이벤트를 처리하는 동안 별개의 렌더러 프로세스가 새 탐색을 처리하기 위해 호출함.(Page Lifecycle API)
5. Service Worker의 경우
   - Service Worker란
     - 네트워크 프록시
     - 렌더러 프로세스에서 돌아가는 JavaScript 코드
   - 탐색 시작 시 네트워크 스레드는 등록된 서비스워커 스코프, 도메인을 비교해 동일 URL에 등록된 서비스워커가 있으면 서비스 워커 코드를 실행하기 위해 렌더러 프로세스를 찾음.
6. 선제 탐색(Navigation Preload)
   - Navigation Preload는 서비스 워커 시작과 동시에 리소스들을 병행 로딩해 네트워크 과정을 빠르게 하는 메커니즘.
   - 브라우저 프로세스의 UI 스레드가 서비스 워커를 처리하도록 렌더러 프로세스를 시작하면서 동시에 네트워크 요청 병행.

---

**렌더러 프로세스의 내부 동작**

1. 렌더러 프로세스의 내부 동작
   - Google Developer Web Performance 섹션 참고
2. 렌더러 프로세스의 웹 컨텐츠 처리
   - Rederer Process : 브라우저 탭 안에서 일어나는 모든일을 담당하며 HTML,CSS,JS를 사용자가 상호작용할 수 있는 웹 페이지로 만듬.
     - Worker Threads : Service Worker 사용시
     - Compositior Thread
     - Raster Thread
3. 파싱
   - **DOM 생성**
     - 렌더러 프로스세가 탐색을 위한 커밋 메시지를 받고 HTML 데이터를 받기 시작할때 메인 스레드는 HTML을 파싱해 DOM으로 변환.
   - **추가 리소스 로딩**
     - 메인스레드는 DOM을 구성하기 위한 파싱 중에 이미지,CSS,JavaScript와 같은 외부 리소스를 찾기 위해 사전 로드 스캐너가 동시에 실행됨
       - 사전 로드 스캐너는 HTML 파서에 의해 생성된 토큰들을 참고해 브라우저 프로세스에 있는 네트워크 스레드에 요청을 보냄.
   - **자바스크립트가 파싱을 중단 할 수 있음**
     - HTML parser는 script 태그를 발견하면 HTML 파싱 과정을 멈추고 자바스크립트 코드를 로드, 파싱, 실행하게 됨.(자바스크립트는 document.write와 같은 방법으로 전체 DOM 구조를 바꿀수 있기 때문)
4. 브라우저에 어떻게 리소스를 로드할지 알려주기
   - scripts 태그에 async, defer를 사용해 자바스크립트를 비동기적으로 로드, 실행해 HTML 파싱을 막지 않게 됨. Javascript Module 적절히 사용.
   - preload 등을 사용해 리소스 우선순위 지정.
5. 스타일 계산

   - 메인스레드는 CSS를 파싱해 CSS Selector에 기반해 각 DOM 노드에 computed style을 결정함.
   - 브라우저는 기본 스타일시트를 가지고 있기 때문에 CSS를 사용하지 않더라도 각 DOM 노드는 computed style를 가지고 있음
   - Chrome DevTools에서 computed style을 확인할 수 있음.

6. 레이아웃

   - 메인 스레드는 DOM과 computed style을 토대로 레이아웃 트리(x y 좌표, bounding box 크기 등)를 생성함. 레이아웃 트리는 DOM 트리와 유사할 수 있으나 페이지에 보이는 정보만을 담고 있음.
     - display : none 이 적용되면 레이아웃 트리에 포함되지 않으나(visibility:none은 포함됨) p::before{...}와 같이 유사 클래스가 있는 컨텐츠는 DOM에는 없어도 레이아웃 트리에는 포함됨.

7. 페인트

   - 메인 스레드는 레이아웃 트리를 토대로 페인트 기록을 생성함.
   - **렌더링 파이프라인 업데이트는 비용이 많이 듬**
     - DOM Tree + Computed Style -> Layout Tree -> Paint

8. 컴포지팅
   - **페이지를 그리는 방법**
     - 레스터라이징(정보를 스크린 픽셀로 변환)을 사용해 페이지를 그림.
     - 예전 브라우저는 레스터라이징 방법을 사용했으나 모던 브라우저는 컴포지팅이라는 더 세련된 방식을 사용함.
   - **컴포지팅이란**
     - 컴포지팅은 한 페이지 부분들을 여러 레이어로 나누고 각각 레스터해 컴포지터 스레드에서 페이지를 합성하는 기술.
     - Chrome DevTools Layers panel 에서 사이트의 여러 레이어 확인.
   - **레이어에 대한 고찰**
     - 메인 스레드는 레이아웃 트리를 순회해 레이어 트리를 생성함.(Chrome DevTool Update Layer Tree)
     - 별도의 레이어에 있어야만 하는 페이지의 어떤 부분이 처리되지 않은 경우 will-change 속성을 사용해 브라우저에 미리 알려줄 수 있음.
     - 모든 요소들에 대해 레이어를 지정해 많은 레이어에 대해 컴포지팅하는 것은 모든 프레임마다 한페이지의 작은 부분을 레스터라이징하는 것보다 느림. 컴포지터만 사용하는 속성만을 사용하고 레이어 수를 관리해야함.
   - **메인 스레드를 사용하지 않고 레스터와 컴포지트 하기**
     - Layer Tree 생성, 페인트 순서 결정시 메인 스레드는 컴포지터 스레드에 정보를 커밋 -> 컴포지터 스레드가 각 레이어를 레스터라이즈함.
     - 컴포지팅의 장점은 메인 스레드 개입없이 수행됨. 컴포지터 스레드는 스타일 계산, 자바스크립트 실행을 기다릴 필요가 없음. 컴포지팅만 하는 애니메이션이 부드러운 성능을 나타내는 이유. 만약 레이아웃, 페인트가 다시 계산되면 메인 스레드가 관여해야함.

---

**컴포지터가 사용자 입력을 받았을 때**

1. 컴포지터에 입력이 들어옴

   - 사용자 입력이 들어올때 컴포지터가 상호작용을 하는 방법

2. 브라우저의 관점에서 입력 이벤트

   - 브라우저 관점에서 입력은 사용자의 모든 제스처를 의미함.(텍스트 입력, 클릭, 휠 스크롤, 터치, 마우스 오버 등)
   - 브라우저 프로세스는 제스처가 발생한 위치만 인식함. 이벤트 유형과 해당 좌표를 렌더러 프로세스로 보냄.
   - 렌더러 프로세스는 이벤트 대상을 찾고 연결된 이벤트 리스너를 실행해 이벤트를 적절하게 처리함.

3. 합성기는 입력 이벤트를 받음

4. Non-fast Scrollable region 이해

   - **이벤트 핸들러 작성이 주의**

5. 이벤트 취소 가능 여부 확인

6. 이벤트 대상 찾기

7. 메인 스레드로의 이벤트 디스패치 최소화

8. getCoalescedEvents를 사용해 프레임 내 이벤트 가져오기

9. 다음 단계
   - **Lighthouse**
   - **성능 측정 방법**
   - **사이트에 기능 정책 추가**

---

**Manifest**

1. 정의
   - JSON 텍스트 파일
   - PWA에 관련된 기술 일부로서 앱스토어를 거치지 않고 디바이스의 홈 화면에 설치할 수 있는 웹사이트를 구성함.
2. 구성요소
   ```json
   {
     "name": "HackerWeb",
     "short_name": "HackerWeb",
     "start_url": ".",
     "display": "standalone",
     "background_color": "#fff",
     "description": "A simply readable Hacker News app.",
     "icons": [
       {
         "src": "images/touch/homescreen48.png",
         "sizes": "48x48",
         "type": "image/png"
       },
       {
         "src": "images/touch/homescreen72.png",
         "sizes": "72x72",
         "type": "image/png"
       },
       {
         "src": "images/touch/homescreen96.png",
         "sizes": "96x96",
         "type": "image/png"
       },
       {
         "src": "images/touch/homescreen144.png",
         "sizes": "144x144",
         "type": "image/png"
       },
       {
         "src": "images/touch/homescreen168.png",
         "sizes": "168x168",
         "type": "image/png"
       },
       {
         "src": "images/touch/homescreen192.png",
         "sizes": "192x192",
         "type": "image/png"
       }
     ],
     "related_applications": [
       {
         "platform": "play",
         "url": "https://play.google.com/store/apps/details?id=cheeaun.hackerweb"
       }
     ]
   }
   ```
3. Manifest 배포
   ```html
   <head>
     <link rel="manifest" href="/manifest.webmanifest" />
   </head>
   ```
4. Splash 화면
   - 스플래시 화면은 name, background_color, icons(128dpi에 가장 근접한 아이콘)을 사용해 자동 생성.

---

**Service Worker**

## 1. Overview

1. 서비스워커란

   - 브라우저가 백그라운드에서 실행하는 스크립트로 웹페이지와 별개로 작동함.
   - 푸시알림, 백그라운드 동기화(추후 주기적 동기화, 지오펜싱)
   - 오프라인 환경 통제
   - **유의 사항**
     - DOM에 직접 액세스 할 수 없음. postMessage를 통해 제어 대상 페이지와 통신해서 DOM 조작.
     - 네트워크 프록시로서 페이지의 네트워크 요청 처리 방법을 제어함.
     - IndexedDB에 대한 액세스 권한을 가짐

2. 서비스워커 수명주기

   - **첫 설치시 서비스 워커 LifeCycle**
     - Installing -> Activated or Error -> Idle <-> Terminated or Fetch/Message

3. 사전 요구 사항

   - 브라우저 지원 : https://jakearchibald.github.io/isserviceworkerready/
   - HTTPS or localhost
     - https://mozilla.github.io/server-side-tls/ssl-config-generator/

4. 서비스워커 등록

   ```javascript
   if ('serviceWorker' in navigator) {
     window.addEventListener('load', function () {
       navigator.serviceWorker.register('/sw.js').then(
         function (registration) {
           // Registration was successful
           console.log(
             'ServiceWorker registration successful with scope: ',
             registration.scope
           );
         },
         function (err) {
           // registration failed :(
           console.log('ServiceWorker registration failed: ', err);
         }
       );
     });
   }
   ```

   - 페이지 load시 register가 호출되게 되는데 브라우저가 서비스워커 등록여부를 확인하고 그에따라 처리함.
   - service worker 파일은 도메인의 루트에 있어야 모든 페이지를 제어할 수 있음.

5. 서비스워커 설치

   ```javascript
   var CACHE_NAME = 'my-site-cache-v1';
   var urlsToCache = ['/', '/styles/main.css', '/script/main.js'];

   self.addEventListener('install', function (event) {
     // Perform install steps
     event.waitUntil(
       caches.open(CACHE_NAME).then(function (cache) {
         console.log('Opened cache');
         return cache.addAll(urlsToCache);
       })
     );
   });
   ```

   - 모든 파일이 성공적으로 캐시되면 서비스 워커가 설치됨. 어느 파일 하나라도 다운로드 하지못하면 설치 단계가 실패하게 됨.
     - 긴 파일 목록을 정의하면 한 파일이 캐시되지 못할 확률이 높아지므로 파일목록에 주의.

6. 요청 캐시 및 반환

   ```javascript
   self.addEventListener('fetch', function (event) {
     event.respondWith(
       caches.match(event.request).then(function (response) {
         // Cache hit - return response
         if (response) {
           return response;
         }

         // IMPORTANT: Clone the request. A request is a stream and
         // can only be consumed once. Since we are consuming this
         // once by cache and once by the browser for fetch, we need
         // to clone the response.
         var fetchRequest = event.request.clone();

         return fetch(fetchRequest).then(function (response) {
           // Check if we received a valid response
           if (
             !response ||
             response.status !== 200 ||
             response.type !== 'basic'
           ) {
             return response;
           }

           // IMPORTANT: Clone the response. A response is a stream
           // and because we want the browser to consume the response
           // as well as the cache consuming the response, we need
           // to clone it so we have two streams.
           var responseToCache = response.clone();

           caches.open(CACHE_NAME).then(function (cache) {
             cache.put(event.request, responseToCache);
           });

           return response;
         });
       })
     );
   });
   ```

7. 서비스워커 업데이트

- **서비스워커 업데이트 단계**

  1.  서비스워커 파일이 1바이트라도 차이가 나면 새파일로 간주해서 브라우저가 파일을 업데이트함
  2.  새 서비스워커가 시작되고 install 이벤트 생성
  3.  이전 서비스워커가 현재 페이지를 제어하고 있기 때문에 새 서비스 워커는 waiting 상태
  4.  현재 열려 있는 사이트 페이지가 닫히면 이전 서비스워커가 종료되고 새 서비스 워커가 제어권을 갖게 됨.
  5.  새 서비스 워커가 제어권을 가지면 activate 이벤트 발생

  ```javascript
  // 모든 캐시를 반복 탐색하고 캐시 화이트리스트에 정의되지 않은 캐시를 삭제함
  self.addEventListener('activate', function (event) {
    var cacheAllowlist = ['pages-cache-v1', 'blog-posts-cache-v1'];

    event.waitUntil(
      caches.keys().then(function (cacheNames) {
        return Promise.all(
          cacheNames.map(function (cacheName) {
            if (cacheAllowlist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
  ```

8. 잠재적 문제
   - **설치 실패 알림 기능 부족**
     - chrome://serviceworker-internals에서 Open DevTools window and pause JavaScript execution on service worker startup for debugging 선택하고 설치 이벤트 시작 위치에 디버거문을 추가.
   - **fetch() 기본값**
     1. 기본적으로 인증 정보 없음
        - fetch 사용시 기본적으로 쿠키와 같은 인증정보가 요청에 포함되지 않음. 설정해줘야 됨.
          ```javascript
          fetch(url, {
            credentials: 'include',
          });
          ```
     2. 기본적으로 비 CORS는 실패함
        - 기본적으로 CORS를 지원하지 않는 타사 URL에서 리소스를 가져오는 작업은 실패함. no-CORS 옵션을 추가하면 되나 불투명응답이 발생해 응답의 성공 여부를 구별할 수 없음.
          ```javascript
          cache
            .addAll(
              urlsToPrefetch.map(function (urlToPrefetch) {
                return new Request(urlToPrefetch, { mode: 'no-cors' });
              })
            )
            .then(function () {
              console.log('All resources have been fetched and cached.');
            });
          ```
   - **반응형 이미지 처리**
     1. 서비스워커에서 설치 단계에 이미지를 캐시하는 방법
        - picture, srcset 속성이 요청하는 모든 이미지를 설치
        - 단일 저해상도 버전 이미지 설치 or 단일 고해상도 버전 이미지 설치

## 2. LifeCycle

1. 목적
2. 첫번째 서비스워커
   - **범위 및 제어**
   - **다운로드, 파싱, 실행**
   - **설치**
   - **활성화**
   - **clients.claim**
3. 서비스 워커 업데이트
   - **설치**
   - **대기**
   - **활성화**
   - **대기 단계 건너뛰기**
   - **수동 업데이트**
   - **서비스워커의 URL 변경 금지**
4. 팁
   - **Update on reload**
   - **Skip waiting**
   - **Shift-reload**
5. Handling Updates

## 3. Registration

1. 일반적인 등록 상용구
2. 사용자의 첫번째 방문
3. 상용구 개선
4. 후속 방문
5. 일찍 등록해야 하는 이유
6. 테스트
7. 결론

## 4. High Performance Loading

1. 탐색 요청이란
2. 탐색에 대한 네트워크 우회
   - **혼합 응답 스트리밍**
   - **정적 HTML 캐싱**
   - **애플리케이션 셸 사용**
   - **성능 실수**
   - **패스스루 가져오기 핸들러 사용 금지**
   - **적절한 경우 탐색 미리 로드 사용**

---

**Storage**

---

**Cache**

---

**Backend Services**

---

**DOM**

---

**BOM**

---

**Accessibility Tree**
