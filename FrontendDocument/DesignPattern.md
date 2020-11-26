# DesignPattern JavaScript

- https://addyosmani.com/resources/essentialjsdesignpatterns/book/

---

##

- **Learning JavaScript Design Pattern**

1. 소개
2. 패턴이란
3. 패턴 테스트 & 프로토 패턴 & 세가지 규칙
4. 디자인 패턴 구조
5. 디자인 패턴 작성
6. 안티 패턴
7. 디자인 패턴 카테고리
8. 디자인 패턴 분류 요약표
9. 자바스크립트 디자인 패턴
   - Constructor
   - Moudle
   - Revealing Module
   - Singleton
   - Observer
   - Mediator
   - Prototype
   - Command
   - Facade
   - Factory
   - Mixin
   - Decorator
   - Flyweight
10. JavaScript MV- 패턴
    - MVC
    - MVP
    - MVVM
11. 최신 모듈식 JavaScript 디자인 패턴
    - AMD
    - CommonJS
    - ES Harmony
12. JavaScript Namespacing Patterns

---

**Learning JavaScript Design Pattern**

## 1. 소개

- 유지 관리 가능한 코드 작성을 위해 반복되는 패턴을 인식하고 최적화 해야하는데 이를 위해 디자인패턴에 대한 지식이 필요하다.

## 2. 패턴이란

- **디자인 패턴 장점**
  1. 패턴은 검증된 솔루션
  2. 패턴은 쉽게 재사용 가능
  3. 패턴은 표현적일 수 있음
  4. 특정 패턴은 반복을 방지해 코드의 전체 파일 크기를 줄임.
  5. 패턴은 개발자 어휘로 사용되어 커뮤니케이션을 더 빠르게 함.
  6. 자주 사용되는 패턴은 커뮤니티에 의해서 개선될 수 있음.

## 3. 패턴 테스트 & 프로토 패턴 & 세가지 규칙

## 4. 디자인 패턴 구조

## 5. 디자인 패턴 작성

## 6. 안티 패턴

## 7. 디자인 패턴 카테고리

1. Creational
   - 객체 생성 메커니즘
   - Constructor, Factory, Abstract, Prototype, Singleton, Builder
2. Structural
   - 서로 다른 객체 간의 관계
   - Decorator, Facade, Flyweight, Adapter, Proxy
3. Behavioral
   - 서로 다른 객체 간의 통신
   - Iterator, Mediator, Observer, Visitor

## 8. 디자인 패턴 분류 요약표

1. Creational(객체를 만드는 개념)
   - **Class**
     - Factory Method : 인터페이스 된 데이터, 이벤트를 기반으로 여러 파생 클래스의 인스턴스가 만들어짐.
   - **Object**
     - Abstract Factory : 구체적인 클래스를 자세히 설명하지 않고 여러 클래스 패밀리의 인스턴스 생성
     - Builder : 객체 구성과 표현을 분리하고 항상 동일한 유형의 객체 생성
     - Prototype : 복사 또는 복제에 사용되는 완전히 초기화된 인스턴스
     - Singleton : 글로벌 액세스 포인트가 있는 단일 인스턴스만 있는 클래스
2. Structural(객체의 구성요소에 대한 아이디어)
   - **Class**
     - Adapter : 서로 다른 클래스의 인터페이스를 일치시켜 호환되지 않는 인터페이스에도 클래스가 함께 작동함.
   - **Object**
     - Adapter : 서로 다른 클래스의 인터페이스를 일치시켜 호환되지 않는 인터페이스에도 클래스가 함께 작동함.
     - Bridge : 객체의 인터페이스를 구현에서 분리하여 두 가지가 독립적으로 달라짐
     - Composite : 전체 객체를 부분의 합계 이상으로 만드는 단순 및 복합 객체의 구조
     - Decorator : 객체에 대체 처리를 동적으로 추가
     - Facade : 전체 하위 시스템의 복잡성을 숨기는 단일 클래스
     - Flyweight : 다른 곳에 포함 된 정보를 효율적으로 공유하는 데 사용되는 세분화 된 인스턴스
     - Proxy : 실제 객체를 나타내는 자리 표시 자 객체
3. Behavioral(객체가 함께 재생되고 작동하는 방식)
   - **Class**
     - Interpreter : 의도 한 언어의 문법과 일치하도록 응용 프로그램에 언어 요소를 포함
     - Template Method : 메서드에서 알고리즘의 셸을 만든 다음 정확한 단계를 하위 클래스로 연기함
   - **Object**
     - Chain of Responsibility : 요청을 처리 할 수있는 객체를 찾기 위해 객체 체인간에 요청을 전달하는 방법
     - Command : 명령 요청을 객체로 캡슐화하여 요청을 활성화, 로깅 및 / 또는 대기열에 추가하고 처리되지 않은 요청에 대한 오류 처리를 제공
     - Iterator : 컬렉션의 내부 작업을 몰라도 컬렉션의 요소에 순차적으로 액세스
     - Mediator : 클래스 그룹이 서로 명시 적으로 참조하지 못하도록 클래스 간의 단순화 된 통신을 정의
     - Memento : 나중에 복원 할 수 있도록 개체의 내부 상태를 캡처
     - Observer : 클래스 간의 일관성을 보장하기 위해 여러 클래스에 대한 변경 사항을 알리는 방법
     - State : 상태가 변경되면 객체의 동작을 변경
     - Strategy : 구현에서 선택 항목을 분리하는 클래스 내부의 알고리즘을 캡슐화
     - Visitor : 클래스를 변경하지 않고 클래스에 새 작업을 추가

## 9. 자바스크립트 디자인 패턴

- **Constructor**

  1. 객체 생성 및 키와 값 할당

  ```javascript
  // 객체 생성
  const newObj = {};
  const newObj2 = Object.create(Object.prototype);
  const newObj3 = new Object();
  // 키와 값을 할당하는 네가지 방법
  // 1. Dot syntax
  newObj.dotSyntax = 'Dot Syntax';
  console.log(newObj.dotSyntax);
  // 2. Square bracket syntax
  newObj['someKey'] = 'Square Bracket';
  console.log(newObj['somekey']);
  // 3. Object.defineProperty
  Object.defineProperty(newObj, 'definePropertyKey', {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true,
  });
  // 4. Object.defineProperties
  Object.defineProperties(newObj, {
    firstKey: {
      value: 'First',
      writable: true,
    },
    secondKey: {
      value: 'Second',
      writable: false,
    },
  });
  ```

  2. 기본 생성자

  - 생성자 함수를 정의해서 new 키워드와 같이 호출하면 함수가 생성자처럼 작동하고 새 객체를 인스턴스화 할 수 있음.

  ```javascript
  function Player(name, age, position){
      this.name = name;
      this.age = age;
      this.position = position;

      this.toString = function(){
          return 'name : ' + this.name ", age : " + this.age + ", position : " + this.position
      }
  };

  const p1 = new Player('Son', 29, 'ST');
  const p2 = new Player('Lee', 20, 'CAM');
  // 위의 생성자 패턴의 문제점
  // 1. 상속이 어려움.
  // 2. toString() 함수가 생성된 각각의 새 객체에 대해 같은 함수가 재정의됨. 이 함수는 Player의 모든 인스턴스에 이상적으로 공유되어야 하므로 최적이 아님.
  ```

  3. 프로토타입이 있는 생성자

  ```javascript
  function Player(name, age, position){
      this.name = name;
      this.age = age;
      this.position = position;
  };

  Player.prototype.toString = function(){
          return 'name : ' + this.name ", age : " + this.age + ", position : " + this.position
  };
  // toString() 함수가 모든 Car 객체간에 공유됨. 같은 함수가 인스턴스 생성시 재정의 되는 문제 해결됨.
  ```

- **Moudle**
- Module은 코드 단위를 깔끔하게 분리하고 구성.
- JavaScript의 Moduel 구현 방법(아래 세가지는 뒤의 섹션에서 다룸)

  - 모듈 패턴
  - 객체 리터럴 패턴
  - AMD
  - CommonJS
  - ECMAScript Harmony

  1. 객체 리터럴

  ```javascript
  const myModule = {
    myProperty: 'someValue',
    myConfig: {
      useCaching: true,
      language: 'en',
    },
    saySomething: function () {
      console.log('Where in the world is Paul Irish today?');
    },
    reportMyConfig: function () {
      console.log(
        'Caching is: ' + (this.myConfig.useCaching ? 'enabled' : 'disabled')
      );
    },
    updateMyConfig: function (newConfig) {
      if (typeof newConfig === 'object') {
        this.myConfig = newConfig;
        console.log(this.myConfig.language);
      }
    },
  };
  ```

  2. 모듈 패턴

  - 네임 스페이스, public 및 private 변수 템플릿

    ```javascript
    const myNamespace = function () {
      // myPrivateVar, myPrivateMethod은 모듈의 클로저로만 존재해서 비공개로 유지됨.
      let myPrivateVar, myPrivateMethod;
      myPrivateVar = 0;
      myPrivateMethod = function (value) {
        console.log(value);
      };

      return {
        myPublicVar: 'publicVar',
        myPublicMethod: function (value) {
          myPrivateVar++;
          myPrivateMethod(value);
        },
      };
    };
    ```

  3. 모듈 패턴 변형

  - **믹스인 import**
  - **export**

  4. 툴킷 및 프레임워크 별 모듈 패턴 구현
  5. 장점

  - 객체 지향 배경
  - private 변수 및 메소드 활용 가능

  6. 단점

  - Public, Private 멤버의 가시성을 변경하려면 실제로 코드의 위치를 변경해야 함
  - 추후에 추가되는 메서드의 Private 멤버에 액세스 할 수 없음.
  - Private 멤버에 대한 자동화된 단위 테스트를 할 수 없고 버그가 생길경우 복잡해짐.

- **Revealing Module**
- 모듈패턴의 단점을 보완하고자 나온 패턴으로 private 멤버를 간단히 정의하고 public으로 변경하고자 하는 private 멤버에 대한 포인터가 있는 익명 객체를 반환함.

  1. Revealing Module 패턴 예

  ```javascript
  const myRevealingModule = (function () {
    let privateCounter = 0;

    function privateFunction() {
      privateCounter++;
    }

    function publicFunction() {
      publicIncrement();
    }

    function publicIncrement() {
      privateFunction();
    }

    function publicGetCount() {
      return privateCounter;
    }

    // Reveal public pointers to
    // private functions and properties

    return {
      start: publicFunction,
      increment: publicIncrement,
      count: publicGetCount,
    };
  })();
  myRevealingModule.start();
  ```

2. 장점
   - 스크립트 구문의 일관성을 높이고 함수와 변수 중 어떤 것이 public하게 액세스 될 수 있는지 더 명확하게해서 가독성을 높임.
3. 단점
   - private 함수가 public 함수를 참조하는 경우 패치가 필요한 경우 해당 public 함수를 재정의 할 수 없음.
   - Revealing Pattern은 Module Pattern보다 취약하므로 사용시 주의해야함.

- **Singleton**
- Singleton 패턴은 클래스의 인스턴스화를 단일 객체로 제한함.
- JavaScript에서 Singleton은 함수에 대한 단일 액세스 지점을 제공하기 위해 전역 네임스페이스에서 구현 코드를 분리하는 공유 리소스 네임 스페이스 역할을 함.
- Singleton 패턴은 시스템에서 다른 객체를 조정하기 위해 정확히 하나의 객체가 필요할때 유용함.
- 숨겨진 종속성, 다중 인스턴스 생성의 어려움, 종속성 스터빙의 어려움 등의 문제로 테스트하기 어려움.

1. Singleton 패턴 예

```javascript
const mySingleton = (function () {
  let instance;

  function init() {
    function privateMethod() {
      console.log('privateMethod');
    }
    let privateVariable = 'private variable';
    let privateRandomNumber = Math.random();

    return {
      publicMethod: function () {
        console.log('public method');
      },
      publicProperty: 'public peroperty',
      getRandomNumber: function () {
        return privateRandomNumber;
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();

const singleA = mySingleton.getInstance();
const singleB = mySingleton.getInstance();
console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); // true
```

- **GoF 책에서 Singleton 패턴의 적용 가능성**

  - 하나의 클래스 인스턴스만 있어야 하며 액세스 포인트에서 클라이언트가 액세스 할 수 있어야함.
  - 유일한 인스턴스가 서브 클래싱으로 확장 가능해야하고 클라이언트가 코드를 수정하지 않고 확장 인스턴스를 사용할 수 있어야 함.
    ```javascript
    mySingleton.getInstance = function () {
      if (this._instance == null) {
        if (isFoo()) {
          this._instance = new FooSingleton();
        } else {
          this._instance = new BasicSingleton();
        }
      }
      return this._instance;
    };
    // getInstance는 Factory 메서드와 비슷해지며 여기에 액세스하는 코드의 각 지점을 업데이트 할 필요가 없음.
    ```

- **Observer**

1. Observer 패턴

- Observer는 객체(주체)가 객체(관찰자)에 따라 객체 목록을 유지해서 상태 변경 사항을 자동으로 알리는 디자인 패턴.
- 주체가 관찰자에게 알릴 필요가 있을때 관찰자에게 알림을 브로드캐스트함.
- 더 이상 특정 관찰자가 등록된 주체의 변경사항에 대한 알림을 받지 않으려면 주체의 관찰자 목록에서 해당 항목을 제거.
- **Observer 패턴의 구성요소**

  - Subject : 관찰자 목록을 유지하고 관찰자 추가,제거를 용이하게 함
  - Observer : 주체의 상태 변화를 통보받아야하는 객체에 대한 업데이트 인터페이스 제공
  - ConcreteSubject : 상태 변경에 대한 알림을 관찰자에게 브로드캐스트하고 ConcreteObservers의 상태를 저장함.
  - ConcreteObserver : ConcreteSubject에 대한 참조를 저장하고 상태가 Subject와 일치하는지 확인하기 위해 Observer에 대한 업데이트 인터페이스를 구현함.

- **관찰자 목록**

  ```javascript
  function ObserverList() {
    this.observerList = [];
  }

  ObserverList.prototype.add = function (obj) {
    return this.observerList.push(obj);
  };

  ObserverList.prototype.count = function () {
    return this.observerList.length;
  };

  ObserverList.prototype.get = function (index) {
    if (index > -1 && index < this.observerList.length) {
      return this.observerList[index];
    }
  };

  ObserverList.prototype.indexOf = function (obj, startIndex) {
    var i = startIndex;

    while (i < this.observerList.length) {
      if (this.observerList[i] === obj) {
        return i;
      }
      i++;
    }

    return -1;
  };

  ObserverList.prototype.removeAt = function (index) {
    this.observerList.splice(index, 1);
  };
  ```

- **주제와 관찰자 목록에서 관찰자를 추가,제거,알림**

  ```javascript
  function Subject() {
    this.observers = new ObserverList();
  }

  Subject.prototype.addObserver = function (observer) {
    this.observers.add(observer);
  };

  Subject.prototype.removeObserver = function (observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
  };

  Subject.prototype.notify = function (context) {
    var observerCount = this.observers.count();
    for (var i = 0; i < observerCount; i++) {
      this.observers.get(i).update(context);
    }
  };
  ```

- **새 옵저버를 생성하기 위한 구조**
  ```javascript
  // The Observer
  function Observer() {
    this.update = function () {
      // ...
    };
  }
  ```

2. 관찰자와 발생/구독 패턴의 차이점

- Observer 패턴은 일반적으로 Publish/Subscribe 패턴으로 변형되어 구현됨.
- 옵저버 패턴 : 토픽 알림을 수신하고 하는 옵저버가 이벤트를 발생시키는 주체에 관심사를 구독해야함
- 발생/구독 패턴 : 알림을 수신하려는 구독자와 이벤트를 발생시키는 게시자 사이에 주제/이벤트 채널을 사용함. 적절한 이벤트 핸들러를 구현하는 모든 구독자가 게시자가 브로드 캐스트하는 주제 알림을 등록하고 수신할 수 있도록 한다는 점에서 Observer 패턴과 다름.

3. 장점

4. 단점
5. 게시/구독 구현

- **Mediator**

1. Mediator
2. 장단점
3. Mediator vs Facade

- **Prototype**
- **Command**
- **Facade**

1. Facade
2. 추상화에 대한 참고 사항

- **Factory**

1. Factory
2. Factory 패턴을 사용하는 경우
3. Factory 패턴을 사용하지 않는 경우
4. Abstract Factory

- **Mixin**

1. 하위 분류
2. Mixin
3. 장단점

- **Decorator**

1. Decorator
2. 인터페이스
3. 추상 Decorator
4. 장단점

- **Flyweight**

1. Flyweight 사용
2. Flyweight 및 데이터 공유
3. 클래식 Flyweight 구현
4. 오리 펀치 구현
5. 플라이 웨이트 패턴을 사용하도록 코드 변환
6. 기본 공장
7. 외부 상태 관리
8. 플라이 웨이트 패턴과 DOM

## 10. JavaScript MV- 패턴

- **MVC (Model - View - Controller)**
- **MVP (Model - View - Presenter)**
- **MVVM (Model - View - View - Model)**

## 11. 최신 모듈식 JavaScript 디자인 패턴

- **AMD**
- **CommonJS**
- **ES Harmony**

## 12. JavaScript Namespacing Patterns

---

```

```
