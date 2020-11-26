## 1. Javascript

1. 특징
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
2. 동작원리

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

3. 메모리 누수 관리

- https://yceffort.kr/2020/07/memory-leaks-in-javascript

4. 비동기 처리

---

## 2. Nodejs

1. 특징

2. 동작원리
   - Single Thread
   - Event-driven
   - Non-Blocking I/O
   - Event loop(6 phase, 라운드 로빈)
     - 6phase
       - timers, pending callbacks, idle&prepare, poll, check, close callbacks
   - V8 Engine
   - Node.js Core Library
   - Node.js Bindings
   - libuv

---

## 3. Typescript

1. 특징
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
2. 동작원리
   - Typescript text parse -> AST(Abstract syntax tree) -> Javascript Code
     - TS Compiler는 AST를 만들기 전 Type Checker(타입 확인)을 거친다.

---

## 4. Network (feat. 쉽게 배우는 데이터 통신과 컴퓨터 네트워크, 우아한Tech)

1. OSI 7 Layer vs TCP/IP
2. Network Packet 분석 (TCP Header 구조체)
3. 네트워크 기술 (교환시스템, LAN & MAN & WAN, 인터네트워킹, QoS)
4. 데이터 전송(전송방식, 오류제어, 프레임, 다항코드)
5. MAC 계층(MAC 계층과 IEEE 802 시리즈, 이더넷, 토큰 버스, 토큰 링)
6. 데이터 링크 계층
7. IP 프로토콜
8. 네트워크 계층
9. TCP 프로토콜
10. 전송 계층(UDP, RTP, OSI TP)
11. 상위 계층
12. 소켓
13. WWW
14. DNS
15. 전자메일
16. 파일전송
17. 암호화와 네트워크 보안
18. 라우터 & 공유기 & 스위치 & 허브
19. 방화벽
20. 무선기술(블루투스, wifi)

---

## 5. HTTP/HTTPS (feat. MDN, HTTP 완벽가이드, 우아한Tech)

1. 리소스와 URIs
2. HTTP 가이드
3. HTTP 보안
4. HTTP 접근제어(CORS)
5. HTTP 인증
6. HTTP 캐싱
7. HTTP 압축
8. HTTP 조건부 요청
9. HTTP 컨텐츠 협상
10. HTTP 쿠키
11. HTTP range 요청
12. HTTP 리다이렉트
13. HTTP Request Method
14. HTTP Response Status Code

---

## 6. Socket(feat. socket.io)

---

## 7. REST API Architecture (feat. RESTful Web API, toast doc)

1. REST(정의, 구체적인 개념, 장단점, 필요한 이유, 구성 요소, 특징)
2. REST API(정의, 특징, 설계 기본 규칙, 설계 규칙)
3. RESTful(정의, 목적, RESTful 하지 못한 경우)
4. Swagger

---

## 8. Express + RestAPI + Middlewares Architecture

---

## 9. MySQL & AWS RDS (feat. Real MySQL, SQLP, AWS Korea)

1. MySQL Architecture
   - **전체 구조**
     1. MySQL 엔진
     2. 스토리지 엔진
     3. 핸들러 API
   - **스레딩 구조**
     1. 포그라운드 스레드(클라이언트 스레드)
     2. 백그라운드 스레드
   - **InnoDB 스토리지 엔진 아키텍처**
     1. InnoDB 스토리지 엔진 특징
     2. InnoDB 버퍼풀
        - undo 로그
        - insert 버퍼
        - redo 로그 및 로그 버퍼
        - MVCC
   - **로그파일**
     1. 슬로우 쿼리 로그 파일
2. MySQL 인덱스
   - **인덱스**
   - **인덱스 종류**
   - **B-Tree 인덱스**
   - **해시 인덱스**
   - **클러스터링 인덱스**
3. MySQL 트랜잭션과 잠금
   - **트랜잭션**
   - **MySQL 엔진의 잠금**
   - **InnoDB 스토리지 엔진의 잠금**
   - **MySQL의 격리 수준**
   - **쓰기잠금과 읽기잠금**
   - **갭락과 넥스트 키 락**
   - **InnoDB의 기본 잠금 방식**
   - **SQL 문장별로 사용하는 잠금**
4. MySQL 실행계획
5. MySQL 조인
   - **조인의 종류**
   - **INNER JOIN**
   - **OUTER JOIN**
   - **FULL JOIN**
   - **Using join buffer**
6. MySQL 쿼리최적화
   - **숫자**
   - **동등비교(<=>,=)**
   - **현재시각 조회(NOW, SYSDATE)**
   - **값의 비교와 대체(CASE WHEN ... THEN ... END)**
   - **SELECT 각 절의 처리 순서**
   - **인덱스를 사용하기 위한 기본 규칙**
   - **WHERE 절의 인덱스 사용**
   - **GROUP BY 절의 인덱스 사용**
   - **ORDER BY 절의 인덱스 사용**
   - **WHERE 조건과 ORDER BY(또는 GROUP BY)절의 인덱스 사용**
   - **JOIN의 순서와 인덱스**
   - **JOIN컬럼의 데이터 타입**
   - **OUTER JOIN과 COUNT(\*)**
   - **INNTER JOIN과 OUTER JOIN의 선택**
   - **지연된 조인(Delayed Join)**
   - **서브쿼리**
   - **서브쿼리 제약사항**
   - **SELECT 절에 사용된 서브쿼리**
   - **WHERE 절에 단순 비교를 위해 사용된 서브 쿼리**
   - **WHERE 절에 IN과 함께 사용된 서브 쿼리**
   - **WHERE 절에 NOT IN과 함께 사용된 서브 쿼리**

---

## 10. Redis & AWS ElasticCache (feat. 우아한테크세미나, AWS Korea)

---

## 11. Data Modelling (feat. DAP)

---

## 12. CICD Pipeline (CircleCI, Github, Jira, Slack)

---

## 13. AWS Serverless Architecture

---

## 14. Git Flow, Git

---

## 15. Linting(ESLint, Prettier)

---

## 16. Testing(Jest, Postman, serverless local test)

---

## 17. Building(Typescript, Babel, Webpack, serverless-bundle)

---

## 18. Agile & Scrum & Kanban(Jira)

---
