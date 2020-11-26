# Functional Programming

- Reference
  - https://velog.io/@nakta/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C-%EC%A0%91%ED%95%B4%EB%B3%B4%EB%8A%94-%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-
  - 함수형 자바스크립트: 모던 웹 개발에 충실한 실전 함수형 프로그래밍 안내서

---

## 목차

- **velog Document**
  1. 코드 스타일
  2. 함수 컴포지션, 커링
  3. 함수형 프로그래밍 특징
  4. Functor, Maybe
  5. Either
  6. IO, Future
  7. 모나드 체이닝
  8. Applicative Functor
  9. Traversable
- **함수형 자바스크립트**
  1. 함수형 길들이기
  2. 고계 자바스크립트
  3. 자료구조는 적게, 일은 더 많이
  4. 재사용 가능한, 모듈적인 코드로
  5. 복잡성을 줄이는 디자인 패턴
  6. 빈틈없는 코드 만들기
  7. 함수형 최적화
  8. 비동기 이벤트와 데이터를 관리

---

**velog Document**

## 1. 코드 스타일

```javascript
const techStacks = [
  'aws_lambda',
  'Serverless_framework',
  'circleCI',
  'aws CloudFormation',
  'aws_APIGateway',
  'aws iam',
  'aws_RDS',
  'RestAPI',
  'nodejs-express',
  'react-nextjs',
];
```

- techStack의 이름 형식의 통일성을 같기 위해 아래의 규칙에 따라 이름을 변경.
  - 각 단어는 대문자로 시작
  - 각 단어는 공백으로 구분
  - 오름차순 정렬

1. 절차형 코드 스타일

```javascript
const result = [];

for (let i = 0; i < techStacks.length; i += 1) {
  const name = techStacks[i];
  const spaceName = name.replace(/(_|-)/, ' ');
  const splitName = spaceName.split(' ');

  for (let j = 0; j < splitName.length; j += 1) {
    let partName = splitName[j];
    partName = partName.charAt(0).toUpperCase() + partName.slice(1);
    splitName[j] = partName;
  }

  result.push(splitName.join(' '));
}

result.sort();
```

2. 함수형 코드 스타일

```javascript
const replaceSpace = (str) => {
  return str.replace(/(_|-)/, ' ');
};

const startCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const changePartStartCase = (str) => {
  return str.split(' ').map(startCase).join(' ');
};

techStacks
  .map((name) => replaceSpace(name))
  .map((name) => changePartStartCase(name))
  .sort();
```

3. 스타일 비교
   - **변수 사용**
     1. 절차지향 스타일
     - 변수를 사용함. 중간 값을 변수에 저장하고 변수 변경 후 다시 저장
     2. 함수형 스타일
     - 변수를 사용하지 않음. 절대로 사용하지 않는 것은 아님.
   - **코드 표현**
     1. 절차지향 스타일
     - 코드가 어떻게 해야하는지 표현
     2. 함수형 스타일
     - 코드가 무엇을 하는지 표현
   - **함수 기반**
     - 절차지향이 함수형에 비해 함수 의존도가 낮음.
     - 함수형은 기본적으로 함수를 기반으로 코드가 동작.
4. 함수형 스타일 업그레이드

   - **lodash 메소드 체이닝**

     - \_.chain에 stackTechs로 호출하면 결과값으로 LodashWrapper 객체가 반환되는데 이를 이용해 체이닝을 이어 나가게 됨.

     ```javascript
     import _ from 'lodash';

     _.chain(stackTechs)
       .map((name) => name.replace(/()_|-/, ' '))
       .map(_.startCase)
       .sort()
       .value();
     ```

   - **ramdajs 메소드 파이프라인**

     ```javascript
     import { replace, toUpper, map, pipe, sortBy, identity } from 'ramda';

     const startCase = (str) => {
       return replace(/(\b\w(?!\s))/g, toUpper, str);
     };

     pipe(
       map(replace(/(_|-)/, ' ')),
       map(startCase),
       sortBy(identity)
     )(stackTechs);
     ```

   - **메소드 체이닝 vs 메소드 파이프라인**
     - 메소드 체이닝은 단단한 결합
     - 메소드 파이프라인은 느슨한 결합으로 유연함.

---

## 2. 함수 컴포지션, 커링

1. Function Composition

- **원초적인 함수 컴포지션**

  ```javascript
  const pow = (num1, num2) => {
    return Math.pow(num1, num2);
  };
  const negate = (num) => {
    return num * -1;
  };
  const inc = (num) => {
    return num + 1;
  };

  // 절차지향 스타일
  const powered = pow(3, 3);
  const neagted = negate(powered);
  const result = inc(negated);

  console.log(result); // -27

  // 함수형 스타일
  inc(negate(pow(2, 3))); // -27
  ```

  - 위의 함수형 코드는 가독성이 떨어짐
  - 함수 합성 (h ・ g ・ f)(x) = h( g( f( x ) ) )

- **compose**

  ```javascript
  const compose = (...fns) => {
    return (...args) => {
      return fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
    };
  };
  ```

  - componse 함수
    1. 실행 함수 목록을 넘겨주면 새함수 반환
    2. 새로 반환 받은 함수에 초깃값을 파라미터로 넘겨줌
    3. 초깃값을 가지고 실행할 함수 목록을 역순으로 순차적으로 실행해서 최종 결과 반환

  ```javascript
  const mySpecialFunc = compose(
    (num) => inc(num),
    (num) => negate(num),
    (num1, num2) => pow(num1, num2)
  );

  mySpecialFunc(2, 4);
  ```

- **Pointfree style**
  ```javascript
  const mySpecialFunc = compose(inc, negate, pow);
  mySpecialFunc(3, 3);
  -27;
  ```
  - 함수를 사용할 때 파라미터를 이용해 호출하지 않고 함수자체를 이용하는 방식을 Pointfree style이라고 함.
  - Pointfree style로 코드를 작성하면 코드가 간결해지고 가독성이 높아짐.
- **pipe로 compose 순서 변경**
  ```javascript
  const pipe = (...fns) => {
    return (...args) => {
      return fns
        .reverse()
        .reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
    };
  };
  ```
  - compose 함수와 다른 점은 fns.reduceRight를 fns.reverse().reduceRight로 변경
  ```javascript
  const composeFunc = compose(inc, negate, pow);
  const pipeFunc = pipe(pow, negate, inc);
  ```
  - pipe함수로 왼쪽에서 오른쪽으로 코드를 읽을 수 있음

2. Currying

- **커링 이용**
- **curry**

---

## 3. 함수형 프로그래밍 특징

1. 일급 함수

- **함수를 변수에 저장**
- **함수를 파라미터로 전달**
- **함수를 리턴하는 함수**

2. 순수 함수

- **참조 투명성**
- **불변성**
- **순수함수를 써야하는 이유**
  1. 캐시 가능
  2. 쉬운 테스트
  3. 공유 자원이 없어서 병렬처리 유리

---

## 4. Functor, Maybe

---

## 5. Either

---

## 6. IO, Future

---

## 7. 모나드 체이닝

---

## 8. Applicative Functor

---

## 9. Traversable

---

**함수형 자바스크립트**

1. 함수형 길들이기
2. 고계 자바스크립트
3. 자료구조는 적게, 일은 더 많이
4. 재사용 가능한, 모듈적인 코드로
5. 복잡성을 줄이는 디자인 패턴
6. 빈틈없는 코드 만들기
7. 함수형 최적화
8. 비동기 이벤트와 데이터를 관리
