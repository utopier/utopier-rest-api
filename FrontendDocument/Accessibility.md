# Accessibility

- Reference
  - https://developers.google.com/web/fundamentals/accessibility
  - https://developer.mozilla.org/ko/docs/Web/Accessibility
  - https://ko.reactjs.org/docs/accessibility.html

---

## 목차

1. Overview
2. Focus
   - Introduction to Focus
   - DOM Order Matters
   - Using tabindex
3. Semantics Built-in
   - Introduction to Semantics
   - The Accessibility Tree
   - Text Alternatives for Images
   - Navigating Content
4. Semantics and ARIA
   - Introduction to ARIA
   - ARIA Labels and Relationships
   - Hiding an Updating Content
5. Accessible Styles
   - Accessible tab targets
   - Color and contract accessibility
   - Accessible responsive design
   - Content reordering
6. Accessibility Review
7. React Accessibility
   - 표준 및 지침
   - 시맨틱 HTML
   - 접근성 있는 폼(라벨링, 오류 안내)
   - 포커스 컨트롤(키보드 포커스&포커스 윤곽선, Skiplinks, 포커스 관리 프로그래밍)
   - 마우스와 포인터 이벤트
   - 더욱 복잡한 위젯
   - 기타 고려사항(문서 언어, 문서 제목, 색 대비)
   - 개발 및 테스트 도구(키보드, 개발 보조 도구, 브라우저 접근성 테스트, 스크린 리더)

---

## 1. Overview

1. 접근성이란?
2. 웹 콘텐츠 접근성 가이드 라인
3. 사용자 다양성 이해

---

## 2. Focus

### 2.1 Introduction to Focus

1. 포커스란
2. 포커스 가능하다는 의미
3. 포커스의 구현 사례

### 2.2 DOM Order Matters

1. 화면 밖 콘텐츠

### 2.3 Using tabindex

1. 페이지 수준에서 포커스 관리
2. 구성요소에서 포커스 관리
3. 모달 및 키보드 트랩

---

## 3. Semantics Built-in

### 3-1. Introduction to Semantics

1. 보조 기술
2. 어포던스
3. 스크린 리더

### 3-2. The Accessibility Tree

1. 네이티브 HTML로 구현되는 의미 체계

### 3-3. Text Alternatives for Images

### 3-4. Navigating Content

1. 제목의 효과적 사용
2. 다른 탐색 옵션

---

## 4. Semantics and ARIA

### 4-1. Introduction to ARIA

1. ARIA의 기능

### 4-2. ARIA Labels and Relationships

1. 레이블
   - **aria-label**
   - **aria-labelledby**
2. 관계
   - **aria-owns**
   - **aria-activedescendant**
   - **aria-describedby**
   - **aria-posinset 및 aria-setsize**

### 4-3. Hiding an Updating Content

1. aria-hidden
2. aria-live

---

## 5. Accessible Styles

### 5-1. Accessible tab targets

### 5-2. Color and contract accessibility

### 5-3. Accessible responsive design

### 5-4. Content reordering

---

## 6. Accessibility Review

1. 키보드
   - **키 포인트**
   - **초점을 맞출수 있다고해서 사용할 수 있다는 의미는 아닙니다**
   - **오프 스크린 콘텐츠를 잊지 마세요**
2. 스크린 리더
   - **키 포인트**
   - **하나의 스크린 리더에 대한 친숙도는 먼 길을 간다**
   - **aria-hidden은 키보드 포커스를 방해하지 않음**
3. 링크 및 버튼과 같은 상호작용 요소는 목적과 상태를
   나타내야함 - **키 포인트**
4. 제목과 랜드 마크 활용
   - **키 포인트**
   - **스크린 리더로 제목과 랜드마크를 빠르게 검토**
5. 프로세스 자동화
   - **키 포인트**
   - **PWA를 구축하는 경우 Lighthouse 사용**

---

## 7. React Accessibility

### 7-1. 표준 및 지침

1. WCAG
   - Web Content Accessibility Guidelines (https://www.w3.org/WAI/intro/wcag)
   - **WCAG checklist**
     - https://www.wuhcag.com/wcag-checklist/
     - https://webaim.org/standards/wcag/checklist
     - https://a11yproject.com/checklist.html
2. WAI-ARIA
   - Web Accessibility Initiative - Accessible Rich Internet Applications (https://www.w3.org/WAI/intro/aria)
   - JSX에서는 모든 aria HTML 속성을 지원.
   - CamelCase가 아닌 일반 HTML과 같이 hypen-case 방식으로 작성.

### 7-2. 시맨틱 HTML

- 접근성을 위해 정보의 의미가 강조되는 Semantic HTML Element 사용.
- 무분별한 div 보다 React.Fragement 활용.

### 7-3. 접근성 있는 폼(라벨링, 오류 안내)

1. 라벨링

   - 모든 HTML 폼(input, textarea 등)은 스크린리더 사용자가 이해할 수 있도록 설명이 담긴 라벨을 제공해야함.
   - 표준 HTML이 React에서도 그대로 사용할 수 있으나 for 속성은 JSX에서 htmlFor로 사용.
   - **라벨 제공 방법**
   - https://www.w3.org/WAI/tutorials/forms/labels/
   - https://webaim.org/techniques/forms/controls
   - https://www.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/

2. 사용자들에게 오류 안내하기
   - 스크린 리더에 오류 안내 하는 방법
     - https://www.w3.org/WAI/tutorials/forms/notifications/
     - https://webaim.org/techniques/formvalidation/

### 7-4. 포커스 컨트롤(키보드 포커스&포커스 윤곽선, Skiplinks, 포커스 관리 프로그래밍)

- 모든 웹 애플리케이션은 키보드만으로도 사용이 가능해야함.
- 키보드 접근성 : https://webaim.org/techniques/keyboard/

1. 키보드 포커스와 포커스 윤곽선
   - 키보드 포커스는 키보드 입력을 받아들일 수 있는 DOM 내의 현재 엘리먼트를 나타냄.
2. 원하는 콘텐츠로 건너뛸 수 있는 방법
   - 이전에 탐색한 영역을 건너뛸 방법을 제공해야함.
   - Skiplinks, Skip Navigation Link들은 키보드 사용자만 표시 되는 숨겨진 탐색 링크
     - https://webaim.org/techniques/skipnav/
   - 보조과학기술 사용자들을 위해 main, aside 같은 랜드마크 엘리먼트와 역할을 사용해 페이지 영역을 나눠야 함.
     - https://www.scottohara.me/blog/2018/03/03/landmarks.html
3. 포커스 관리 프로그래밍
   - React는 런타임 동안 지속해서 DOM을 변경하기 때문에 가끔 키보드 포커스를 읽거나 예상치 못한 엘리먼트에 포커스를 맞출때가 있다. 이를 위해 프로그래밍적으로 키보드 포커스를 맞춰줘야 한다.
     - ex : 모달이 닫힌 후 모달을 열었던 버튼으로 키보드 포커스
   - MDN Web Docs 키보드로 탐색이 가능한 Javascript 위젯을 만드는 방법 (https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
   - React에서 포커스를 지정하려면 DOM에 ref를 사용해야한다.
   - 접근 가능한 포커스 관리 예시 react-aria-modal (https://github.com/davidtheclark/react-aria-modal)

### 7-5. 마우스와 포인터 이벤트

- 마우스 혹은 포인터 이벤트로 노출된 모든 기능을 키보드만으로 사용할 수 있도록 보장해야함.
- 키보드로 테스트하면서 문제가 되는 영역을 발견해서 키보드 핸들러를 추가해 수정해줘야 함.

### 7-6. 더욱 복잡한 위젯

- ARIA 역할 (https://www.w3.org/TR/wai-aria/#roles)
- ARIA 상태 및 프로퍼티 (https://www.w3.org/TR/wai-aria/#states_and_properties)
- 각각의 위젯 타입은 명확한 디자인 패턴이 있음
  - WAI-ARIA Authoring Practices (https://www.w3.org/TR/wai-aria-practices/#aria_ex)
  - Heydon Pickering - ARIA 예시 (https://heydonworks.com/article/practical-aria-examples/)
  - 포괄적 컴포넌트 (https://inclusive-components.design/)

### 7-7. 기타 고려사항(문서 언어, 문서 제목, 색 대비)

1. 문서 언어 설정

   - 스크린리더 사용자들이 올바른 언어를 선택할 수 있도록 페이지 텍스트에 언어를 설정해줘야함
     - https://webaim.org/techniques/screenreader/#language

2. 문서 제목 설정

   - 문서의 title 태그에 현재 페이지에 대한 올바른 설명담기
     - https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html

3. 색 대비
   - 저시력 사용자들을 위해 색대비를 고려해야 함.
   - **색 대비 이해**
     - https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html
     - https://www.smashingmagazine.com/2014/10/color-contrast-tips-and-tools-for-accessibility/
     - https://a11yproject.com/posts/what-is-color-contrast/
   - **Colorable을 사용해 접근 가능한 모든 색조합 계산**
     - https://jxnblk.com/colorable/
   - **색 대비 테스트**
     - https://webaim.org/resources/contrastchecker/
     - https://www.paciellogroup.com/resources/contrastanalyser/

### 개발 및 테스트 도구(키보드, 개발 보조 도구, 브라우저 접근성 테스트, 스크린 리더)

1. 키보드
   - 마우스 연결 해제
   - Tab, Shift+Tab을 사용해 이동
   - Enter를 사용해 엘리먼트 활성화
   - 메뉴와 드랍다운 같은 일부 엘리먼트는 키보드 방향키를 사용해 조작
2. 개발 보조 도구
   - **eslint-plugin-jsx-a11y**
     - ESLint 플러그인으로 JSX 내의 접근성 문제에 대해 린팅 피드백을 제공함.
3. 브라우저 접근성 테스트
   - **aXe와 aXe-core, react-axe**
   - **WebAIM WAVE**
   - **접근성 검사기와 접근성 트리**
     - 접근성 트리(https://www.paciellogroup.com/blog/2015/01/the-browser-accessibility-tree/)
     - Chrome에서 접근성 검사기 사용 방법(https://developers.google.com/web/tools/chrome-devtools/accessibility/reference#pane)
4. 스크린 리더
   - **Firefox의 NVDA**
   - **Safari의 VoiceOver**
   - **Internet Explorer의 JAWS**
   - **Google Chrome의 ChromeVox**
