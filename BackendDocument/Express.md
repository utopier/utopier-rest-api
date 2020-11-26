## 목차

1. 정적 파일
2. 라우팅
3. 미들웨어 작성
4. 미들웨어 사용
5. 템플리트 엔진 사용
6. 오류처리
7. 디버깅
8. 템플리트 엔진
9. 프로세스 관리자 사용
10. 보안 업데이트
11. 보안 우수 사례
12. 성능 우수 사례
13. 프록시 환경에서 Express 사용

---

## 1. 정적 파일

- 정적 파일(이미지, CSS 파일, Javascript 파일)을 제공하기 위해 기본제공 미들웨어 함수인 express.static 사용.
- Express는 정적 디렉토리에 대해 상대적으로 파일을 검색하며, 정적 디렉토리의 이름은 URL의 일부가 아님.
- 정적 자산이 포함된 디렉토리 이름을 express.static 함수에 전달.

  ```javascript
  // public 디렉토리에 포함된 파일을 로드할 수 있음.
  // http://localhost:3000/images/bg.png
  app.use(express.static('public'));

  // node 프로세스가 실행되는 디렉터리에 대해 상대적이라 절대경로를 사용하는 것이 안전함
  // http://localhost:3000/static/images/bg.png
  app.use('/static', express.static(__dirname + '/public'));
  ```

- 여러개의 정적 자산 디렉토리 사용가능
  ```javascript
  app.use(express.static('public'));
  app.use(express.static('files'));
  ```

---

## 2. 라우팅

- 라우팅이란 애플리케이션 엔드 포인트(URI)의 정의, URI가 클라이언트 요청에 응답하는 방식.

1. 라우트 메소드

   - HTTP 메소드 중 하나로부터 파생되며, express 클래스의 인스턴스에 연결됨

     ```javascript
     // GET method route
     app.get('/', function (req, res) {
       res.send('GET request to the homepage');
     });
     // POST method route
     app.post('/', function (req, res) {
       res.send('POST request to the homepage');
     });
     ```

   - app.all()은 HTTP메소드로부터 파생되지 않고 포든 요청 메소드에 대해 한 경로에서 미들웨어 함수를 로드하는데 사용됨.
     ```javascript
     app.all('/secret', function (req, res, next) {
       console.log('Accessing the secret section ...');
       next(); // pass control to the next handler
     });
     ```

2. 라우트 경로

   - 라우트 경로는 요청 메소드와의 조합을 통해 요청이 이뤄질수 있는 엔드포인트를 정의. 문자열, 문자열 패턴, 정규식 모두 가능함.

     - Express는 라우트 경로 일치를 위해 path-to-regexp를 사용함.

       ```javascript
       // 문자열
       // /about
       app.get('/about', function (req, res) {
         res.send('about');
       });

       // 문자열 패턴
       // acd, abcd
       app.get('ab?cd', function (req, res) {
         res.send('ab?cd');
       });
       // abcd, abbcd, abbbcd,...
       app.get('/ab+cd', function (req, res) {
         res.send('ab+cd');
       });
       // abcd, abxcd, abRABDOMcd, ab123cd
       app.get('/ab*cd', function (req, res) {
         res.send('ab*cd');
       });
       // abe, abcde
       app.get('/ab(cd)?e', function (req, res) {
         res.send('ab(cd)?e');
       });

       // 정규식
       // butterfly, dragonfly
       app.get(/.*fly$/, function (req, res) {
         res.send('/.*fly$/');
       });
       ```

3. 라우트 핸들러

   - 미들웨어과 비슷하게 작동하는 여러 콜백 함수를 제공해 요청을 처리할 수 있음.
   - next('route')를 호출해 나머지 라우트 콜백을 우회할 수 잇음.
   - 함수, 함수 배열의 형태, 둘을 조합한 형태

     ```javascript
     const cb0 = function (req, res, next) {
       console.log('CB0');
       next();
     };

     const cb1 = function (req, res, next) {
       console.log('CB1');
       next();
     };

     app.get(
       '/example/d',
       [cb0, cb1],
       function (req, res, next) {
         console.log('the response will be sent by the next function ...');
         next();
       },
       function (req, res) {
         res.send('Hello from D!');
       }
     );
     ```

4. 응답 메소드
   - 응답을 클라이언트로 전송하고 요청-응답 사이클을 종료.
   - 라우트 핸들러의 메소드 중 어느 하나도 호출되지 않는 경우 클라이언트 요청을 정지된 채로 방치됨.
     - res.download()
     - res.end()
     - res.json()
     - res.jsonp()
     - res.redirect()
     - res.render()
     - res.send()
     - res.sendFile
     - res.sendStatus()
5. app.route()
   - app.route를 사용하면 라우트 경롱 대해 체인 가능한 라우트 핸들러를 작성할 수 있음.
     ```javascript
     app
       .route('/book')
       .get(function (req, res) {
         res.send('Get a random book');
       })
       .post(function (req, res) {
         res.send('Add a book');
       })
       .put(function (req, res) {
         res.send('Update the book');
       });
     ```
6. express.Router

   - express.Router 클래스를 사용해 모듈식 마운팅 가능한 핸들러를 작성할 수 있음.
   - Router 인스턴스는 완전한 미들웨어이자 라우팅 시스템이며 미니앱이라고 불리는 경우가 많음

     ```javascript
     const express = require('express');
     const router = express.Rotuer();

     router.use(function timeLog(req, res, next) {
       console.log('Time: ', Date.now());
       next();
     });
     // define the home page route
     router.get('/', function (req, res) {
       res.send('Birds home page');
     });

     module.exports = router;
     ```

     ```javascript
     const birds = require('./birds');
     // ...
     app.use('/birds', birds);
     ```

---

## 3. 미들웨어 작성

- 미들웨어 함수는 요청 객체(req), 응답 객체(res), 애플리케이션의 요청-응답 주기 중 그다음 미들웨어 함수에 대한 액세스 권한을 갖는 함수(next)
- 미들웨어 함수가 할 수 있는 것
  - 코드 실행
  - 요청 및 응답 객체에 대한 변경
  - 요청-응답 주기 종료
  - 스택 내의 그다음 미들웨어 호출
- 미들웨어 함수에 next()를 호출하지 않으면 해당 요청은 정지된 채로 방치됨.

  ```javascript
  const express = require('express');
  const app = express();

  const requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
  };

  app.use(requestTime);

  app.get('/', function (req, res) {
    const responseText = 'Hello World!';
    responseText += 'Requested at: ' + req.requestTime + '';
    res.send(responseText);
  });

  app.listen(3000);
  ```

---

## 4. 미들웨어 사용

- Express 애플리케이션 미들웨어 유형
  - 애플리케이션 레벨 미들웨어
  - 라우터 레벨 미들웨어
  - 오류 처리 미들웨어
  - 기본 제공 미들웨어
  - 써드파티 미들웨어

1.  애플리케이션 레벨 미들웨어

    - app.use(), app.METHOD() 함수를 이용해 애플리케이션 미들웨어를 app object의 인스턴스에 바인드.

    ```javascript
    const app = express();

    // 마운트 경로가 없음. 앱이 요청을 수신할 때마다 실행됨.
    app.use(function(req,, res, next){
        console.log('Time:', Date.now());
        next();
    });
    ```

    - 라우트 핸들러를 이용하면 하나의 경로에 대해 여러 라우트를 정의할 수 있음.
    - 라우터 미들웨어 스택의 나머지 미들웨어 함수들을 건너뒤려면 next('route')를 호출해 제어를 그 다음 라우트로 전달.

            ```javascript
            app.get('/user/:id', function (req, res, next) {
                // if the user ID is 0, skip to the next route
                if (req.params.id == 0) next('route');
                // otherwise pass the control to the next middleware function in this stack
                else next(); //
            }, function (req, res, next) {
                // render a regular page
                res.render('regular');
            });

            // handler for the /user/:id path, which renders a special page
            app.get('/user/:id', function (req, res, next) {
                res.render('special');
            });
            ```

2.  라우터 레벨 미들웨어

    - 라우터 레벨 미들웨어는 express.Router() 인스턴스에 바인드된다는 점을 제외하면 애프리케이션 레벨 미들웨어와 동일한 방식으로 작동함.
    - router.use(), router.METHOD() 함수를 사용해 라우터 레벨 미들웨어 로드.

      ```javascript
      const app = express();
      const router = express.Router();

      // a middleware function with no mount path. This code is executed for every request to the router
      router.use(function (req, res, next) {
        console.log('Time:', Date.now());
        next();
      });

      // a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
      router.use(
        '/user/:id',
        function (req, res, next) {
          console.log('Request URL:', req.originalUrl);
          next();
        },
        function (req, res, next) {
          console.log('Request Type:', req.method);
          next();
        }
      );

      // a middleware sub-stack that handles GET requests to the /user/:id path
      router.get(
        '/user/:id',
        function (req, res, next) {
          // if the user ID is 0, skip to the next router
          if (req.params.id == 0) next('route');
          // otherwise pass control to the next middleware function in this stack
          else next(); //
        },
        function (req, res, next) {
          // render a regular page
          res.render('regular');
        }
      );

      // handler for the /user/:id path, which renders a special page
      router.get('/user/:id', function (req, res, next) {
        console.log(req.params.id);
        res.render('special');
      });

      // mount the router on the app
      app.use('/', router);
      ```

3.  오류 처리 미들웨어

    - 오류 처리 미들웨어에는 항상 4개의 인수가 필요함. 함수를 오류 처리 미들웨어 함수로 식별하려면 4개의 인수를 제공해야 함.
      ```javascript
      app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(500).send('Something broke!');
      });
      ```

4.  기본 제공 미들웨어

- 4.x 버전 이후의 Express는 express.static을 제외하고 모든 미들웨어 함수는 별도의 모듈에 포함되어 있다.
  - https://github.com/senchalabs/connect#middleware
- express.static(root, options)
  - Express의 유일한 기본 제공 미들웨어, 정적 자산을 제공하는 역할

5.  써드파티 미들웨어

- Express 앱에 기능을 추가하려면 써드파티 미들웨어를 사용.
- 모듈을 설치한 후 애플리케이션 레벨 or 라우터 레벨에서 해당 모듈을 앱에 로드.
  - https://expressjs.com/ko/resources/middleware.html

---

## 5. 템플리트 엔진 사용

---

## 6. 오류처리

- 다른 미들웨어 함수와 동일한 방법으로 오류처리 미들웨어 함수를 정의하나 인수가 3개가 아닌 4개이다.
- 오류처리 미들웨어는 다른 app.use(), 라우트 호출을 정의한 후에 마지막으로 정의해야함.
- next() 함수로 어떠한 내용을 전달하는 경우('route' 문자열 제외), Express는 현재의 요청에 오류가 있는 것으로 간주하며, 오류 처리와 관련되지 않은 나머지 미들웨어 함수, 라우팅을 건너뛰게 됨. 이러한 오류를 처리하기 원하는 경우 오류 처리 라우트를 정의해야함.
- 여러 콜백 함수를 갖는 라우트 핸들러가 있는 경우 route 매개변수를 사용해 그 다음의 라우트의 핸들러로 건너뛸 수 있음.
- **기본 오류 핸들러**
  - Express는 내장된 오류 핸들러와 함께 제공되며, 내장 오류 핸들러는 앱에서 발생할 수 있는 모든 오류를 처리함. 이러한 기본 오류 처리 미들웨어 함수는 미들웨어 함수 스택의 끝에 추가됩니다.
  - next()로 오류를 전달하지만 오류 핸들러에서 해당 오류를 처리하지 않는 경우, 기본 제공 오류 핸들러가 해당 오류를 처리하며, 해당 오류는 클라이언트에 스택 추적과 함께 기록됨. 스택 추적은 프로덕션환경에 포함되어 있지 않음.

---

## 7. 디버깅

---

## 8. 템플리트 엔진

---

## 9. 프로세스 관리자 사용

- 프로덕션 환경을 위한 Express를 실행할 때 프로세스 관리자를 사용시 얻는 이점
  - 앱에서 충돌이 일어날 경우 자동 재시작
  - 런타임 성능 및 자원 소비에 대한 인사이트
  - 성능 향상을 위해 설정을 동적으로 수정
  - 클러스터링 제어
- 프로세스 관리자는 애플리케이션을 위한 컨테이너이며 배치 작업을 용이하게 하고 높은 가용성을 제공하고 런타임 시에 애플리케이션을 관리할 수 있도록 함
- PM2
  - Node.js 애플리케이션용 프로덕션 프로세스 관리자
  - 기본 제공 로드 밸런서가 포함되어 있음
  - PM2를 이용하면 앱을 항상 작동 상태로 유지하고 시스템 가동 중단 없이 앱을 다시 로드할 수 있음
  - 일반적인 시스템 관리 태스크를 쉽게 처리할 수 있다.
  - 애플리케이션 로깅, 모니터링 및 클러스터링을 관리할 수 있음

---

## 10. 보안 업데이트

---

## 11. 보안 우수 사례

1. 더 이상 사용되지 않거나 취약성이 있는 버전의 Express를 사용 중지

- Express 2.x, 3.x에 대한 유지보수는 이뤄지지 않으므로 사용하지 않기
- 가능한 최신 버전으로 업데이트

2. TLS 사용

- 앱이 민간함 데이터를 다루거나 전송하는 경우 전송계층보안(TLS)을 사용해 연결 및 데이터보호.
- 데이터를 클라이언트로부터 서버로 전송하기 전에 데이터를 암호화하며 몇가지 일반적인 해킹을 방지함
- Ajax, POST 요청의 트래픽은 패킷 가로채기, 중간자 공격에 취약함
- TLS는 단순히 SSL이 다음 단계로 발전된 형태로 SSL을 사용했다면 TLS로 업그레이드를 고려해야 함
- 일반적으로 TLS처리를 위해 Nginx를 권장함
  - https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_Server_Configurations
- 무료 TLS 인증서를 얻기 위한 편리한 도구 중 하나는 Let's Encrypt
  - https://letsencrypt.org/about/

3. Helmet 사용

- Helmet을 이용하면 HTTP 헤더를 적절히 설정해 몇 가지 잘알려진 웹 취약성으로부터 앱을 보호할 수 있음
- Helmet은 보안 관련 HTTP 헤더를 설정하는 미들웨어 함수 9개의 모음.

4. 적어도 X-Powered-By 헤더는 사용하지 않도록 설정

- Helmet의 사용을 원치 않는 경우에도 적어도 X-Powered-By 헤더를 사용하지 않기
- 공격자는 이 헤더를 이용해 Express를 실행하는 앱을 발견한 후 특정한 대상에 대한 공격을 실행할 수 있음
- 우수사례는 app.disable() 메소드를 사용해 이 헤더를 끄는 것
  ```javascript
  app.disable('x-powered-by');
  ```

5. 쿠키를 안전하게 사용

- 기본 세션 쿠기 이름을 사용하지 말고 쿠키 보안 옵션을 적절히 설정하기
- 두가지 기본 미들웨어 쿠키 세션 모듈
  - express-session
  - cookie-session
- 두 모듈의 차이점은 쿠키 세션 데이터를 저장하는 방식
  - express-session은 세션 데이터를 서버에 저장하며 쿠키 자체에는 세션 데이터가 아니라 세션 ID만 저장됨. 기본적으로 express-sessions은 인메모리 스토리지를 이용하며 프로덕션 환경용으로 설계되지 않았음. 프로덕션 환경에는 확장가능한 session-store를 설정해야 함.
  - cookie-sessions은 쿠키 기반의 스토리지를 구현하며 하나의 세션 키가 아니라 세션 전체를 쿠키에 직렬화함. cookie-sessions은 세션 데이터의 크기가 상대적으로 작으며 원시값으로 쉽게 인코딩 가능할 때에만 사용. 브라우저는 하나의 쿠키당 4,096바이트 이상을 지원하도록 되어 있으나 한계를 초과하지 않도록 보장하려면 하나의 도메인당 4,093바이트의 크기를 초과하지 않기. 클라이언트에서 쿠키 데이터를 볼 수 있으므로, 쿠키 데이터를 안전하게 또는 모호하게 유지해야 할 이유가 있는 경우에는 express-session을 선택하는 것이 더 나을 수 있음.

6. 기본 세션 쿠키 이름을 사용하지 않음

- 기본 세션 쿠키 이름을 사용하면 앱을 공격에 노출시킬 수 있음. 이로 인해 제기되는 보안 문제는 X-Powered-By와 유사하며 잠재적인 공격자는 이를 이용해 서버의 지문을 채취한 후 이에 따라 공격 대상을 설정할 수 있음.

7. 쿠키 보안 옵션 설정

- secure : 브라우저 HTTPS를 통해서만 쿠키를 전송하도록 함.
- httpOnly : 쿠키가 클라이언트 Javascript가 아닌 HTTP(S)를 통해서만 전송되도록 하며, 이를 통해 XSS 공격으로부터 보호할 수 있음.
- domain : 쿠키의 도메인 표시. URL이 요청되고 있는 서버의 도메인에 대해 비교할 때 사용. 두 도메인이 일치하는 경우에는 그 다음으로 경로 속성을 확인하기
- path : 쿠키의 경로 표시. 요청 경로에 대해 비교할 때 사용하기. 이 경로와 도메인이 일치하는 경우에는 요청되고 있는 쿠키를 전송
- expires : 지속적 쿠키에 대한 만기 날짜 설정

```javascript
app.use(
  session({
    name: 'session',
    keys: ['key1', 'key2'],
    cookie: {
      secure: true,
      httpOnly: true,
      domain: 'example.com',
      path: 'foo/bar',
      expires: expiryDate,
    },
  })
);
```

8. 종속 항목이 안전한지 확인

- 사용 중인 패키지에 애플리케이션에 영향을 미칠 수 있는 치명적인 보안 취약성이 포함되어 있을 수도 있음
- npm@6부터 npm은 자동으로 모든 설치 요청을 검사함
- npm audit을 이용해 의존성 트리를 검사할 수 있음
- 더 강한 보안을 원한다면 Snyk 사용
  - npm i -g synk
  - synk test
  - synk wizard

9. 그 외의 알려져 있는 취약점 회피

- Express에 또는 앱에 사용되는 다른 모듈에 영향을 미칠 수 있는 Node Security Project의 보안 권고문에 항상 주의하기.
  - https://nodesecurity.io/advisories
- Express 앱은 다양한 웹 기반 공격에 취약할 수 있음. 알려져 있는 웹 취약성을 숙지한 후 예방 조치를 취하기.
  - https://www.owasp.org/index.php/Top_10_2013-Top_10

10. 추가적인 고려사항

- Node.js Security Checklist
  - https://blog.risingstack.com/node-js-security-checklist/
  - csurf 미들웨어를 이용해 교차 사이트 요청 위조(CSRF)로부터 보호하기
  - 항상 사용자 입력을 필터링하고 사용자 입력에서 민간함 데이터를 제거해 XSS 및 명령 인젝션 공격으로부터 보호하기
  - 매개변수화된 조회 또는 준비된 명령문을 이용해 SQL 인젝션 공격으로부터 방어하기
  - sqlmap 도구를 이용해 앱 내의 SQL 인젝션 취약성을 발견하기
  - nmap 및 sslyze 도구를 이용해 SSL 암호, 키 및 재협의 구성, 그리고 인증서의 유효성을 테스트
  - safe-regex를 이용해 정규식이 정규식 서비스 거부 공격을 쉽게 받지 않도록 하기.

---

## 12. 성능 우수 사례

1. gzip 압축 사용

- Gzip 압축을 사용하면 응답 본문의 크기를 크케 줄일 수 있으며, 따라서 웹 앱의 속도를 높일 수 있음
- Express에서 Gzip 압축을 사용하려면 compression 미들웨어를 사용
- 많은 트래픽이 발생하는 프로덕션 환경의 웹사이트의 경우, 압축을 실행하는 가장 좋은 방법은 역방향 프록시 레벨에서 압축을 구현하는 것. compression 미들웨어를 사용할 필요가 없음
  - Nginx에서 gzip 압축을 사용하는 방법
    - http://nginx.org/en/docs/http/ngx_http_gzip_module.html

2. 동기식 함수 사용하지 않기
- 동기식 함수 및 메소드는 리턴될 때가지 실행 프로세스를 묶어둠. 프로덕션 환경에서는 동기식 함수의 사용을 피하고 항상 비동기식 버전을 사용하기. 
- 동기식 함수 사용이 정당화되는 유일한 경우는 초기 시작시에 사용되는 경우
- Node.js 4.0 이상을 사용하는 경우 --trace-sync-io 플래그를 사용하면 애플리케이션이 동기식 API를 사용할 때마다 경고 및 스택 추적이 출력되도록 할 수 있음. 프로덕션 환경에서는 사용하면 안됨.

3. 정확한 로깅


4. 올바른 예외 처리


5. NODE_ENV를 production으로 설정


6. 앱이 자동으로 다시 시작되도록 보장


7. 앱을 클러스터에서 실행


8. 요청 결과를 캐싱


9. 로드 밸런서 사용


10. 역방향 프록시 사용
