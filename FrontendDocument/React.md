# React

- References
  - https://ko.reactjs.org/docs/getting-started.html

---

## 목차

- **Basic**

1. JSX
2. Components와 Props
3. State와 생명주기
4. 이벤트 처리하기
5. 조건부 렌더링
6. 리스트와 Key
7. 폼
8. State 끌어올리기
9. 합성 vs 상속

- **Advanced**

10. 접근성
11. 코드분할
12. Context
13. Error Boundary
14. Ref 전달
15. Fragement
16. HOC
17. 성능 최적화
18. Portal
19. Profiler
20. Reconciliation
21. Ref와 DOM
22. Render Props
23. Strict Mode
24. 비제어 컴포넌트
25. 웹 컴포넌트

- **API**

1. React
2. React.Component
3. ReactDOM
4. ReactDOMServer
5. DOM Element
6. SyntheticEvent

- **Hook**

1. Hook 소개
2. Hook 개요
3. State Hook
4. Effect Hook
5. Hook 규칙
6. Custom Hook
7. Hook API

---

## **Basic**

### 1. JSX

- JSX는 JavaScript를 확장한 문법을 UI가 어떻게 생겨야 하는지 설명하며 JavaScript의 모든 기능이 포함되어 있음
- JSX는 React Element를 생성함

1. JSX에 표현식 포함하기

   - 중괄호 안에 유효한 모든 JavaScript 표현식을 넣을 수 있음.

   ```javascript
   const name = 'Josh Perez';
   const element = <h1>Hello, {name}</h1>;

   ReactDOM.render(element, document.getElementById('root'));
   ```

2. JSX도 표현식
   - 컴파일이 끝나면 JSX 표현식이 정규 JavaScript 함수 호출이 되고 JavaScript 객체로 인식됨.
   - if, for문 안에서 사용하고 변수에 할당하고 인자로 받고 함수의 리턴값으로 사용할 수 있음.
3. JSX 속성 정의
   - 속성에 따옴표를 이용해 문자열 리터럴을 정의하거나 중괄호를 사용해 Javascript 표현식을 삽입할 수 있음.
   - ReactDOM 속성은 camelCase 규칙을 사용.
4. JSX는 주입 공격을 방지함
   - 기본적으로 ReactDOM은 JSX에 삽입된 모든 값을 렌더링하기 전에 이스케이프하므로 명시적으로 작성되지 않은 내용은 주입되지 않음.
   - 모든 항목은 렌더링 되기 전에 문자열로 변환됨.
   - XSS(cross-site-scripting)공격을 방지할 수 있음.
5. JSX는 객체를 표현합니다.
   - Babel은 JSX를 React.createElement() 호출로 컴파일함.
   - React.createElement()는 버그 없는 코드작성을 위해 몇가지 검사를 수행하며 객체를 생성함.
     ```javascript
     const element = <h1 className="greeting">Hello, world!</h1>;
     //
     const element = React.createElement(
       'h1',
       { className: 'greeting' },
       'Hello, world!'
     );
     //
     const element = {
       type: 'h1',
       props: {
         className: 'greeting',
         children: 'Hello, world!',
       },
     };
     ```

### 2. Components와 Props

- 개념적으로 컴포넌트는 JavaScript함수와 비슷함. props를 받아서 화면에 표시되는 React 엘리먼트를 반환함.

### 3. State와 생명주기

### 4. 이벤트 처리하기

### 5. 조건부 렌더링

### 6. 리스트와 Key

### 7. 폼

### 8. State 끌어올리기

### 9. 합성 vs 상속

---

## **Advanced**

### 10. 접근성

1. 접근성이 필요한 이유
   - 보조과학기술들이 웹페이지들을 해석할 수 있도록 접근성(a11y)을 갖춰야함.
2. 표준 및 지침
   - **WCAG**
     - Web Content Accessibility Guidelines : https://www.w3.org/WAI/intro/wcag
     - WebAIM의 WCAG Checklist : https://webaim.org/standards/wcag/checklist
   - **WAI-ARIA**
     - Web Accessibility Initiative - Accessible Rich Internet Applications : https://www.w3.org/WAI/intro/aria
     - JSX에서는 모든 aria 속성을 지원하며, 일반적인 HTML과 같이 hypen-case 방식으로 작성해야 함.
3. Semantic HTML
   - 정보의 의미가 강조되는 HTML 엘리먼트를 사용하고 무분별한 div 태그 대신 Fragment를 활용.
4. 접근성 있는 폼
   - **라벨링**
     - input, textarea 같은 모든 HTML 폼 컨트롤은 구분할 수 있는 라벨이 필요함.
       - https://www.w3.org/WAI/tutorials/forms/labels/
       - https://webaim.org/techniques/forms/controls
       - https://www.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/
     - 표준 HTML에 대한 예시들은 React에 바로 사용될 수 있으나 for 속성은 htmlFor로 사용해야 한다.
   - **사용자에게 오류 안내**
     - 스크린 리더에 오류 문구를 노출하는 방법
       - https://www.w3.org/WAI/tutorials/forms/notifications/
       - https://webaim.org/techniques/formvalidation/
5. 포커스 컨트롤
   - 모든 웹 애플리케이션은 키보드만 사용해 모든 동작을 할 수 있어야 함.
     - https://webaim.org/techniques/keyboard/
   - **키보드 포커스와 포커스 윤곽선**
     - 키보드 포커스는 키보드 입력을 받아들일 수 있는 DOM 내의 현재 엘리먼트를 나타냄.
   - **원하는 콘텐츠로 건너뛸 수 잇는 방법**
   - **프로그래밍적으로 포커스 관리**
6. 마우스와 포인터 이벤트
7. 더욱 복잡한 위젯
8. 기타 고려사항
   - **언어 설정**
   - **문서 제목 설정**
   - **색 대비**
9. 개발 및 테스트 도구
   - **키보드**
   - **개발 보조 도구**
   - **브라우저에서 접근성 테스트**
   - **스크린 리더**

### 11. 코드분할

1. 번들링
2. 코드 분할
3. import()
4. React.lazy
5. 경로 기반 코드 분할
6. named exports

### 12. Context

1. 언제 Context를 써야 할까
2. context 사용 전 고려사항
3. API
   - **React.createContext**
   - **Context.Provider**
   - **Class.contextType**
   - **Context.Consumer**
   - **Context.displayName**
4. Example
   - **값이 변하는 context**
   - **하위 컴포넌트에서 context 업데이트하기**
   - **여러 context 구독하기**
5. 주의사항

### 13. Error Boundary

1. 에러 경계의 소개
2. 에러 경계를 배치할 위치
3. 포착되지 않는 에러에 대한 새로운 동작
4. 컴포넌트 스택 추적
5. try/catch
6. 이벤트 핸들러

### 14. Ref 전달

1. 참조를 DOM 구성 요소로 전달
2. 구성 요소 라이브러리 관리자를위한 참고 사항
3. 고차 구성 요소에서 참조 전달
4. DevTools에 사용자 지정 이름 표시

### 15. Fragement

### 16. HOC

1. 교차 우려 사항에 대해 HOC 사용
2. 원래 구성 요소를 변형하지 마십시오. 구성을 사용하십시오.
3. 규칙 : 관련없는 소품을 래핑 된 구성 요소로 전달
4. 컨벤션 : 구성 가능성 최대화
5. 규칙 : 쉬운 디버깅을 위해 표시 이름 감싸기
6. 주의 사항
   - **렌더링 메소드 내에서 HOC를 사용하지 마십시오.**
   - **정적 메서드를 복사해야 함**
   - **참조가 통과되지 않음**

### 17. 성능 최적화

1. 프로덕션 빌드를 활용하세요
   - **React 앱 만들기**
   - **단일 파일 빌드**
2. Chrome Performance 탭으로 컴포넌트 프로파일링
3. Profiler DevTools Profiler로 컴포넌트 프로파일링
4. 긴 목록 가상화
5. 재조정 피하기
6. shouldComponentUpdate
7. 데이터를 변형시키지 않음으로써 얻는 효과

### 18. Portal

1. 사용법
2. Portal을 통한 이벤트 버블링

### 19. Profiler

1. 사용법
2. onRender 콜백

### 20. Reconciliation

1. 동기
2. 비교 알고리즘 (Diffing Algorithm)
3. 자식에 대한 재귀적 처리
4. 고려 사항

### 21. Ref와 DOM

1. Ref를 사용해야 할 때
2. Ref를 남용하지 마세요
3. Ref 생성하기
4. Ref에 접근하기
5. 부모 컴포넌트에게 DOM ref를 공개하기
6. 콜백 ref
7. 레거시 API: 문자열 ref
8. 콜백 ref에 관한 주의사항

### 22. Render Props

1. 횡단 관심사(Cross-Cutting Concerns)를 위한 render props 사용법
2. render 이외의 Props 사용법
3. React.PureComponent에서 render props pattern을 사용할 땐 주의.

### 23. Strict Mode

1. 안전하지 않은 생명주기를 사용하는 컴포넌트 발견
2. 레거시 문자열 ref 사용에 대한 경고
3. 권장되지 않는 findDOMNode 사용에 대한 경고
4. 예상치 못한 부작용 검사
5. 레거시 context API 검사

### 24. 비제어 컴포넌트

1. 기본 값
2. 파일 입력 태그

### 25. 웹 컴포넌트

1. React에서 웹 컴포넌트 사용하기
2. 웹 컴포넌트에서 React 사용하기

---

## **API**

### 1. React

1. 개요
   - **컴포넌트**
     - React.Component
     - React.PureComponent
   - **React 엘리먼트 생성**
     - createElement
     - createFactory
   - **엘리먼트 변환하기**
     - cloneElement
     - isValidElement
     - React.Children
   - **Fragment**
     - React.Fragment
   - **Ref**
     - React.createRef
     - React.forwartRef
   - **Suspense**
     - React.lazy
     - React.Suspense
   - **Hook**
     - useState
     - useEffect
     - useContext
     - useReducer
     - useCallback
     - useMemo
     - useRef
     - useImperativeHandle
     - useLayoutEffect
     - useDebugValue

### 2. React.Component

1. 개요
   - **컴포넌트 생명주기**
   - **기타 API**
   - **class 프로퍼티**
   - **인스턴스 프로퍼티**

### 3. ReactDOM

### 4. ReactDOMServer

### 5. DOM Element

### 6. SyntheticEvent

---

## **Hook**

### 1. Hook 소개

### 2. Hook 개요

1. State Hook
2. Effect Hook
3. Hook 사용 규칙
4. Custom Hook
5. Other Hooks

### 3. State Hook

1. 클래스 컴포넌트 state
2. Hook과 함수 컴포넌트

### 4. Effect Hook

1. 정리(Clean-up)를 이용하지 않는 Effects
2. 정리(clean-up)를 이용하는 Effects
3. 요약
4. effect를 이용하는 팁

### 5. Hook 규칙

1. 최상위(at the Top Level)에서만 Hook을 호출해야 합니다.
2. 오직 React 함수 내에서 Hook을 호출해야 합니다
3. ESLint 플러그인

### 6. Custom Hook

1. 사용자 정의 Hook 추출하기
2. 사용자 정의 Hook 이용하기
3. useYourImagination()

### 7. Hook API

1. useState
2. useEffect
3. useContext
4. useReducer
5. useCallback
6. useMemo
7. useRef
8. useImperativeHandle
9. useLayoutEffect
10. useDebugValue
