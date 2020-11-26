## 목차

1. 특징
2. 동작원리
3. 메모리 관리
4. 최적화
5. 비동기 처리
6. Basic Concepts
7. ES6
8. Style Guide
9. Naming Convention

---

## 1. 특징

- **Interpreter Language**
  - 실행 시간에 자바스크립트 코드를 컴파일하는 JIT(Just In Time Complier) 컴파일러가 내장되어 있어 실행속도가 빨라짐.
  - Interpreter Language vs Compile Language
- **Dynamic Prototype-based Object-Oriented Language**
  - 객체 기반 언어이나 상속, 클래스 개념은 없음. 프로토타입을 상속함.
- **Dynamically Typed**
  - Dynamically Typed vs Statically Typed
- **function is First Class Object**
- **function define Closure**
- **event-driven**
- **OOP & Functional**
- **Standard : ECMAScript**
- **Garbage Collected Language**

---

## 2. 동작원리

- Google V8 Engine (Memory Heap, Call Stack)
- Single Thread
- Non-Blocking
- Callback Queue
- Web APIs
- Event Loop & Concurrency
- MemoryHeap (allocate -> user -> relase)
- Grabage Collection(Mark-and-sweep)
- Call Stack(Stack Frame, Stack Trace, Stack Overflow)
- Javascript Source Code -> Parser -> AST(Abstract Syntax Tree) -> Interpreter Ignition -> Bytecode(<- Optimized Machine Code <- Compier TurboFan)
- Ignition
- TurboFan

---

## 3. 메모리 누수 관리

- https://yceffort.kr/2020/07/memory-leaks-in-javascript

---

## 4. 최적화

- https://trustyoo86.github.io/javascript/2019/08/27/js-optimization.html
- https://12bme.tistory.com/134
- https://12bme.tistory.com/185?category=682905

1. 불필요한 코드 제거
   - 코드를 최적화 하는 것보다 실행하지 않는 코드가 가장 빠름
2. 불필요한 단계 피하기
   - 함수가 최종 결과를 얻기까지 모든 단계 중 불필요한 단계 없애기
   ```javascript
   'javascript'.split('').slice(3).join('');
   'javascript'.slice(3);
   ```
3. 가능한 빨리 loop 해제
   - loop에서 모든 반복을 완료할 필요가 없는 경우 break 문을 사용해 loop 실행 중단하기
   - loop의 특정 부분만 작업해야 하는 경우 continue 문을 사용해 다른 작업 건너 뛰기
   - label을 사용해 중첩된 loop 나오기
4. 가능한 한번 사전계산
5. 작업수를 최소화 하기 위한 코드
6. Big O 표기법 배우기
7. Build-in Method 활용
8. 작업에 가장 적합한 Object 사용하기
9. Memory에 대해 신경쓰기
10. 가능한 단형 형태로 개발하기
11. Delete 키워드 피하기
12. 비동기 코드를 사용해 스레드 차단하기
13. Code Splitting 사용하기

---

## 5. 비동기 처리

1. Callback
2. Promise
3. async/await

---

## 6. Basic Concepts

1. Data Type & Variables
2. Operator
3. Control Flow
4. Type Coercion
5. Object
6. Immutability
7. Function
8. TypeCheck
9. Prototype
10. Scope
11. Stric mode
12. this
13. Execution Context
14. Closure
15. Array
16. Array HOC
17. DOM
18. Event
19. 변수 변경 탐지
20. Overriding & Overloading
21. Throttling & Debouncing
22. Recursion & Memoization
23. Currying & Partial application
24. Syntatic Sugar
25. ADM, CommonJS, UMD 모듈
26. Lazy evaluation
27. Error Handling
28. Eval
29. Frames and windows
30. Binray Data, Files
31. Network requests
32. Storing data in the browser
33. Animation
34. Web Components
35. Regular expressions
36. UI Evenvts
37. Forms, Controls
38. Document and resource loading

---

## 7. ES6

1. **let,const**
2. **Template Literals**
3. **Arrow Function**
4. **Default Parameter, Rest / Spread**
5. **Distructuring**
6. **Class**
7. **Module**
8. **Promise**
9. **Symbol**
10. **Iteration & for...of**
11. **Generator & async/await**
12. **Proxy**
13. **Reflect API**
14. **Map,Set,WeakMap,WeakSet**
15. **Decorator**
16. **Object properties Configuration**
17. **BigInt**

---

## 8. Style Guide (Airbnb JavaScript Style Guides)

- https://github.com/tipjs/javascript-style-guide

1. Types
   - Primitives는 그 값을 직접 조작
     - string, number, boolean, null, undefined
   - Complex는 참조를 통해 값을 조작
     - object, array, function
2. References
   - 모든 참조는 var 대신 const
   - 참조를 재할당해야하면 var 대신 let
   - let,const는 블록스코프
3. Objects
   - 생성시 new 키워드 대신 리터럴 구문
   - 키에 예약어 사용하지 않고 알기 쉬운 동의어 사용
   - 동적 프로퍼티명 작성시 계산된 프로퍼티명 사용
   - 메소드 단축구문 사용
   - 프로퍼티 단축구문 사용, 사용시 객체 선언 시작부분에 그룹화
4. Arrays
   - 생성시 new 키워드 대신 리터럴 구문
   - 항목 추가시 직접 대입하지말고 push 메서드 사용
   - 복사시 ...연산자 사용
   - 유사배열을 배열로 변환하는 경우 Array.from
5. Destructuring
   - 하나의 객체에서 복수의 프로퍼티를 액세스할때 객체 구조화대입 사용
   - 배열 구조화대입 사용
   - 복수의 값을 반환하는 경우 배열 구조화대입 대신 객체 구조화대입 사용
6. Strings
   - "" 대신 `` 사용
   - \ 로 문자열 연결 대신 + 로 연결하기 (성능상)
   - 문자열 생성시 문자열 연결 대신 template literals 사용
   - eval 사용하지 않기
7. Functions
   - 함수식보다 함수선언 사용하기
   - 함수이외의 블록 안에서 함수 선언하지 않기.
   - parameter에 arguments 지정하지 않기. 이는 함수 스코프에 전해지는 arguments객체의 참조를 덮어쓰게 됨.
   - arguments 대신 rest 문법 ... 사용하기
   - 함수의 parameter를 바꾸는 것보다 default parameter 사용하기
   - side effect가 있는 default paramter 사용하지 않기
   - default paramter는 항상 뒤쪽에 두기
   - 새 함수 작성시 Function constructor 사용하지 않기
8. Arrow Functions
   - 함수식을 이용하는 경우 function 대신 arrow function 사용
   - 함수 본체가 하나의 식으로 된 경우 중괄호를 생략하고 암시적 return 사용. 그외에는 return문 사용
   - 식이 복수행에 있는 경우 가독성을 위해 소괄호로 감싸기
   - 함수의 인수가 하나인 경우 소괄호 생략 가능
9. Classes & Constructors
   - prototype을 직접 조작하지 말고 class 사용
   - 상속은 extends 사용
   - 메소드의 반환값을 this로 사용하면 메소드체이닝을 할 수 있음
   - 커스텀 toString을 작성해도 되나 올바르게 동작하는지와 side effect가 없는지 확인하기
10. Modules
    - require 대신 import,export 사용하기
    - wildcard import 사용하지 않기
    - import 문으로 직접 export 하지 않기
11. Iterators and Generators
    - iterators 사용하지 않기. for...of 대신에 map, reduce와 같은 HOC 사용하기.
    - 현시점에서는 generators 사용하지 않기. generators는 ES5로 잘 transpile 되지 않음.
12. Properties
    - 프로퍼티에 액세스하는 경우 점 표기법
    - 변수를 사용해 프로퍼티에 액세스하는 경우 대괄호 표기법
13. Variables
    - 변수 선언은 항상 const로. 글로벌 변수 사용하지 않기
    - 하나의 변수 선언에 하나의 const 사용하기. ,로 복수 선언하지 않기.
    - const, let 순서대로 그룹화
    - 변수 할당시 필요하고 합리적인 위치에 두기.
14. Hoisting
15. Comparison Operators & Equality
    - ==, !== 대신 ===, !== 사용하기
    - if문과 같은 조건식은 ToBoolean 메소드에 의한 강제형변환으로 평가됨.
    - 단축형 사용하기
16. Blocks
    - 복수행의 블록에는 중괄호 사용하기
    - if, else 사용하기 else는 if 블록 끝의 중괄호와 같은 행에 위치.
17. Comments
    - 복수형 코멘트는 /\*\* \*/ 사용하기. 설명, 파라미터, 반환값에 대한 형이나 값 기술.
    - 단일행 코멘트는 // 사용. 코멘트 코드 상부에 위치. 코멘트 앞에는 빈행 넣기.
    - FIXME, TODO를 코멘트 앞에 이용하기
18. Whitespace
    - 탭에는 스페이스 2개
    - 주요 중괄호 앞에는 스페이스 1개
    - 제어 구문의 소괄호 앞에는 스페이스 1개 넣기
    - 함수 선언이나 호출시 인수리스트 앞에는 스페이스 넣지 않기
    - 연산자 사이에 스페이스 넣기
    - 파일 끝에는 개행문자 1개 넣기
    - 메소드 체이닝시 인덴트 사용하기. 행이 새로운 문이 아닌 메소드 호출인것을 강조하기 위해 선두에 점을 위치.
    - 문의 앞과 블록 뒤에는 빈행 남기기
    - 블록에 빈행 넣지 않기
    - 소괄화 안쪽에 스페이스 추가하지 않기
    - 대괄호 안쪽에 스페이스 추가하지 않기
    - 중괄호 안쪽에 스페이스 추가하기
19. Commas
    - 선두에 콤마 사용하지 않기
    - 끝에 콤마 사용하기
20. Semicolons
    - 세미콜론 사용하기
21. Type Casting & Coercion
    - 문의 선두에서 TypeCoercion 사용하기
    - Number로 형변환시 parserInt를 사용하고 항상 형변환을 위한 기수를 인수로 넘겨주기
22. Naming Conventions
    - 문자하나는 사용하지 않기. 이름으로부터 의도가 읽혀질수 있도록 네이밍하기
    - 객체, 함수, 인스턴스에는 CamelCase 사용
    - 클래스, constructor는 PascalCase 사용
    - private 프로퍼티명은 선두에 언더스코어 사용
    - this 참조 보존 피하기. arrow function이나 Function.bind 사용하기
    - 파일을 1개의 클래스로 export하는 경우 파일명은 클래스명과 완전히 일치시켜야함.
    - Default export가 함수인경우 camelCase 사용. 파일명은 함수명과 동일해야함.
    - singleton, functino library, 빈 객체를 export 하는 경우 PascalCase 사용.
23. Accessors
    - 엑세스 함수가 필요한 경우, getVal나 setVal로 하기
    - 프로퍼티가 boolean인 경우 isVal나 hasVal로 하기
    - 일관된 경우 get, set으로 함수를 작성해도 됨.
24. Events
    - 이벤트로 payload의 값을 넘길 경우 raw값보다 해시값 넘기기.

---

## 9. Naming Convention
