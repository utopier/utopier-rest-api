## 목차

1. 특징
2. 동작원리
3. 정적 타이핑
4. 클래스
5. 인터페이스
6. 타입 앨리어스
7. 제네릭
8. 선언파일
9. tsconfig.json

---

## 1. 특징

- **Compile Language**
  - 전통적 컴파일 언어와 달리 링킹 과정이 생략되어 있음.
  - 컴파일 시점에 문법 에러와 타입 관련 에러 모두 검출.
- **Statically Typed**
- **Javascript Superset(ES6,ES Nest 지원)**
- **외부 라이브러리를 위한 Type Definition File 지원(.d.ts)**
- **객체 지향 프로그래밍 지원**
  - 클래스, 인터페이스, 제네릭, 상속 등
- **Code IntelliSense with IDE**
- **Gradually Typed**
  - 점진적으로 타입을 확인함. 컴파일시 모든 타입을 알고 있지 않아도 Javascript 코드로 변환해 실행할 수 있다.

---

## 2. 동작원리

- Typescript text parse -> AST(Abstract syntax tree) -> Javascript Code
  - TS Compiler는 AST를 만들기 전 Type Checker(타입 확인)을 거친다.

---

## 3. 정적 타이핑

1. 타입 선언
   - 변수명 뒤에 타입 명시
   - 선언한 타입에 맞지 않는 값을 할당하면 컴파일 시점에 에러발생
   - TypeScript는 ES5,ES6의 Superset으로 자바스크립트 타입을 그대로 사용할 수 있으며, 이외에도 Typescript고유의 타입이 추가로 제공된다.
   - 타입은 대소문자를 구별하므로, 소문자로 사용해야한다. 대문자로 사용할 수 있으나 이는 객체의 유형이 타입이 된다.
2. 정적 타이핑
   - 변수를 선언할때 변수에 할당할 값의 타입에 따라 사전에 타입을 명시적으로 선언해야하며 선언한 타입에 맞는 값을 할당해야한다. 이를 정적타이핑이라 한다.
   - 정적 타이핑의 장점
     - 코드 가독성, 예측성, 안전성의 향상으로 대규모 프로젝트에 매우 적합하다.
3. 타입 추론(Type Inference)
   - 타입 선언을 생략하면 값이 할당되는 과정에서 동적으로 타입이 결정된다. 이를 타입 추론이라 한다.

---

## 4. 클래스

1. 클래스 정의
2. 접근 제한자
3. 생성자 파라미터에 접근 제한자 선언
4. readonly
5. static
6. 추상 클래스

---

## 5. 인터페이스

1. Introduction
2. 변수와 인터페이스
3. 함수와 인터페이스
4. 클래스와 인터페이스
5. 덕 타이핑
6. 선택적 프로퍼티
7. 인터페이스 상속

---

## 6. 타입 앨리어스

---

## 7. 제네릭

---

## 8. 선언파일

1. Introduction
2. Example
3. 해야 할 것과 하지말아야 할 것
4. deep-dive
5. library-structure
6. template
7. publishing
8. consumption

---

## 9. tsconfig.json
