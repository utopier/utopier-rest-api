# Utopier TodoApp Rest API

## Stack

1. **Backend**

   - **runtime** : nodejs
   - **Type Check** : typescript
   - **Web Framework** : express
     - **Middlewares** : cors, morgan, express-session, cookie-parser, passport, error-handling
     - **Environment Variables** : dotenv, cross-env
     - **Nodejs Process manager** : pm2
     - **Security** : Let's Encrypt(TLS), helmet, Cookie Security, snyk, csurf, sqlmap, nmap, sslyze, safe-regex, hpp
     - **Performance** : compression, --trace-sync-io ,winston, Error Handling(try/catch, promise, uncaughtException), production, pm2, Nginx (Caching, Load Balancing, Proxt Server)
   - **Real Time** : socket.io
   - **API**
     - **API Architecture** : REST API
     - **API Documentation** : Swagger
     - **API Testing Tool** : Postman
   - **ORM** : TypeORM
   - **Database**
     - **Relational Database** : MySQL
     - **In memory Database** : Redis
   - **Linter** : ESLint
   - **Code Formatter** : Prettier
   - **Deployment**
     - **CICD Tool** : circleCI
     - **Cloud Computing Model** : Serverless Computing
     - **Framework** : serverless
     - **Cloud Service Provider** : AWS
     - **AWS Resources** : CloudFormation, RDS, ElastiCache, API Gateway, Lambda, IAM, S3, CloudWatch

- 추가 고려사항 : linux, docker, k8s, kafka, elk, spark, tensorflow

2. **Frontend**

   - **HTML** : HTML5, Semantic Element, WAI-ARIA
   - **CSS** : CSS3, Responsive, Animation, Grid & Flex, CSSTriggers, Layer, CSS Naming
   - **JavaScript** : ES6+
     - **schema builder** : yup
     - **http library** : axios
   - **Type Check** : Typescript
   - **UI Library** : React
     - **Form** : formik
   - **React Framework(for SSR & Static)** : Nextjs
     - AMP,Routing,Static File Serving,Environment Variables,Dynamic import,next.config.js,image optimization
   - **State Management** : Redux, Redux-Saga
   - **immutable state** : immer
   - **Prototyping Tool** : Figma
   - **Design System** : Storybook
   - **CSS-In-JS** : emotion
   - **Data Visualation** : d3, svg, canvas
   - **Testing** : jest, react-testing-library, cypress
   - **Linting** : eslint, prettier
   - **Transpiler** : babel, typescript
   - **Bundler** : webpack

- PWA, AMP, SEO, UIUX, WebStandard, Accessibility, CrossBrowser, Performance
- CodeStyle, JsDoc, Rxjs, Google Analytics, Refactoring, CodingSkill, CleanArchitecture, CleanCode, DesignPattern, OOP, Functional

3. **Devops**

   - **VCS(Virsion Contol System)** : git, sourcetree
   - **Branch Management** : git-flow
   - **Issue Tracker(with Smart Commit)** : Jira
   - **Wiki software** : Confluence
   - **Collaboration software** : Slack
   - **Software Process** : Agile(Scrum, Kanban)

4. **ReactNative**
5. **Electron**

---

## Backend Features (with Swagger, Postman, MySQL Workbench, redis-cli)

- [O]signup
- [O]login
- [O]logout
- [O]getTodos
- [O]createTodo
- [O]updateTodo
- [O]deleteTodo

---

## Backend Workflow

1. github, jira, slack, confluence

   - [O]github
     - github remote -v
   - [O]github + jira
     - git add
     - git commit -m '[UTOPIER-9] smart commit test'
     - git push
   - [O]github + slack
     - Slack Apps에 Github 추가
   - [O]jira + slack
     - Slack Apps에 Jira 추가
     - Apps에서 Isuue에 Comment
   - [O]git-flow policy
     - 모든 작업전 Jira Issue 발행 및 작업 후 SmartCommit 활용
     - master, develop, feature, release, hotfix
     - feature 브랜치에서 기능 개발 후 develop 브랜치로 merge
     - release 전에 준비된 develop 버전 release 브랜치로 merge후 QA Test완료시 master(배포), develop으로 다시 병합
     - master(배포)버전에서 이슈발생시 hotfix 브랜치에서 수정후 master, develop 브랜치로 merge

2. Nodejs + Express(+ Middlewares) + Ts + Linting + Swagger UI

   - [O]Nodejs + Express(+middlewares)
     - node -v : 공식홈피의 LTS 버전 사용하면 됨
     - npm -v
     - npm init -y
     - package.json 기본 속성 추가
     - npm i express
     - npm i -D nodemon
     - npm i cookie-parser express-session cors morgan passport passport-local bcrypt
     - npm i hpp helmet
     - npm i dotenv cross-env
     - npm i swagger-ui-express swagger-jsdoc
     - mkdir src
     - mkdir routes
     - mkdir entities
     - mkdir passport
     - touch .env
     - touch .gitignore
     - cd src
     - touch index.js
       - middleware 연결 및 swagger는 /api-docs에 라우팅
     - cd ..
     - package.json dev scripts에 nodemon으로 실행
     - npm run dev
     - localhost:PORT 접속
     - localhost:PORT/api-docs 접속
   - [O]Typesscript
     - npm i -D typescript
     - typescript 지원하지않는 dependency들은 @types/ 패키지 devDependencies에 설치
     - npx tsc --init
     - tsconfig.json에 compilerOptions, include, exclude 속성정의
     - npm i ts-node
     - package.json scripts dev에 ts-node 추가
     - .js -> .ts
   - []Linting
     - npm i -D eslint eslint-config-airbnb-typescript eslint-plugin-import @typescript-eslint/eslint-plugin
     - touch .eslintrc
       ```json
       {
        "extends": ["airbnb-typescript"],
        "parserOptions": {
        "project": "./tsconfig.json",
         }
       };
       ```
     - package.json scripts eslint는 npx eslint . --ext .js,.jsx,.ts,.tsx
     - npm install -D prettier eslint-config-prettier eslint-plugin-prettier
     - touch .prettierrc
     - package.json
       ```json
       {
         //...
         "scripts": {
           "prettier": "prettier --write --config ./.prettierrc \"**/*.{ts,tsx}\"",
           "lint": "eslint './src/**/*.{ts,tsx}'",
           "lint:fix": "eslint --fix './src/**/*.{ts,tsx}'"
         }
         //...
       }
       ```
     - .eslintrc
       ```json
       {
         "extends": [
           "prettier",
           "airbnb-typescript",
           "prettier/@typescript-eslint",
           "plugin:prettier/recommended"
         ]
         //...
       }
       ```
     - npm run prettier -> npm run eslint
     - VSC에서 파일저장시 코드 자동 수정
       - Extension 설치
       - Javascript -> Format: Enable 해제
       - Editor : Format On Save 체크
       - ESLint : Auto Fix On Save 체크
     - .vscode/settings.json
       ```json
       {
         // Set the default
         "editor.formatOnSave": false,
         // Enable per-language
         "[javascript]": {
           "editor.formatOnSave": true
         },
         "editor.codeActionsOnSave": {
           // For ESLint
           "source.fixAll.eslint": true
         }
       }
       ```
   - [O]Swagger-ui
     - Swagger Hub 활용

3. DB Modeling

   - [O]DB Diagram(ERD)
     - sqldbm.com

4. ORM + Database

   - [O]Local Database Setting
     - MySQL
     - Redis
   - [O]ORM
   - /src/ormConfig.ts

5. API Development with Postman, Swagger Doc, Lambda Function

   - Swagger -> Coding -> Postman -> DB & SQL Check-> Lambda Function -> Lambda Local Test

6. CICD Pipeline

   - [O]CircleCI Pipeline
     - .circleci/config.yml
   - [O]CircleCI + Github

7. Serverless + SST + AWS

- [O]AWS Account(IAM User 생성 및 AWS CLI Profile 구성)
  - AWS Console -> IAM User 생성(Access Key ID, Secret Access Key 메모)
  - npm i -g aws-cli
  - aws configure
- [O]Basic Serverless App Setting

  - install -> serverless.yml -> serverless deploy (hello world)
  - npm install serverless -g
  - npm i -D serverless-bundle serverless-dotenv-plugin serverless-offline
  - touch serverless.yml

    ```yml
    service: notes-api

    # Create an optimized package for our functions
    package:
      individually: true

    plugins:
      - serverless-bundle # Package our functions with Webpack
      - serverless-offline
      - serverless-dotenv-plugin # Load .env as environment variables

    provider:
      name: aws
      runtime: nodejs12.x
      stage: prod
      region: us-east-1

    functions:
      hello:
        handler: handler.hello
        events:
          - http:
              path: hello
              method: get
    ```

  - package.json scripts test 수정
  - npm i -D aws-sdk
  - touch handler.js
  - serverless invoke local --function hello
  - serverless deploy
    - AWS Console 확인 : CloudFormation, S3, API Gateway, Lambda

- []SST(RDS,ElastiCache,S3,Cognito)
  - Stack 생성 -> Stack 추가 -> Stack 배포 -> 단위테스트
  - serverless.yml stage dev로 수정
  - npx create-serverless-stack resources infrastructure
  - cd infrastructure
  - npx sst build
  - infrastructure/sst.json 수정
  - https://docs.aws.amazon.com/cdk/api/latest/docs/aws-rds-readme.html
  - https://openbase.io/categories/js/best-javascript-libraries
  1. RDS
  - VPC 보안 그룹에서 해당 RDS 인스턴스의 인바운드 규칙 편집 ->소스에 내 IP 주소 추가
  - cmd -> mysql -u MASTERUSER --host 엔드포인트 -P DBPORT -p
  2. ElastiCache
  3. S3
  4. Cognito
- []API->Endpoint->Test->Refactoring
- []CORS 처리(API Gateway, Lambda, S3)
- []Serverless Deployment(SST CDK App, Serverless API)
- []Monitoring(CloudWath(Lambda, API Gateway))

---

## Frontend Workflow

1. github, jira, slack, confluence
   - []github
   - []github + jira
   - []github + slack
   - []jira + slack
2. UIUX
   - []Figma
3. CrossBrowser + WebStandard
   - []
4. React + Nextjs + TypeScript + Linting + Testing
   - []React + Nextjs Setting
   - []TypeScript Setting
   - []Nextjs Routing
   - []Nextjs Envitonment Variables
   - []ESLint + Prettier
   - []Jest + react-testing-library + cypress
5. State Management
   - []State Management + React + Nextjs(SSR,Static)
   - []State Architecture
6. Design System
   - []Storybook Setting
   - []Color Pallete
   - []Component Dev with emotion
7. Responsive Design & Markup Policy

   - []pulic content(icon,img,video...)
   - []GlobalStyle
   - []Theme
   - []Responsive Setting
   - []WebFont

8. React Component(UIUX,Responsive,WebStandard,Accessibility,CrossBrowser) + Nextjs with TDD

   - react-testing-library -> immutable state & props, state Management, useRef & DOM -> Nextjs Data Fetching(getStaticProps, getStaticPaths, getServerSideProps) -> LifeCycle -> useCallback, useMemo
   - DOM(Semantic, aria, CSS Naming) -> Layout(Grid&Flex), Animation, CSS Triggers, Layer, AccessibleStyle
   - []Form(formik, yup)
   - []Cusotm Hook
   - []Error Boundary
   - []Code Splitting(dynamic import(), lazy, suspense, loadable)
   - []Performance, Profiler, Reconciliation

9. PWA

   - []manifest.json
   - []serviceworker setting
   - []caching(servicework, cacheAPI, Browser Store)
   - []installable(servicework)
   - []push message(Notification API, Push API)

10. SEO

    - []title & description
    - []robots.txt & sitemap.xml
    - []https
    - []Open Graph & Twitter Card
    - []Mobile Web
    - []대표주소
    - []키워드 및 콘텐츠 최적화
    - []schema.org

11. AMP

12. Testing

    - []jest
    - []react-testing-library
    - []cypress
    - []Accessibility
    - []WebStandard
    - []CrossBrowser

13. Building

    - []babel & typescript
    - []webpack

14. CICD

- []CircleCI Pipeline
- []CircleCI + Github
- []CircleCI + Slack

15. Deployment(Amplify,Netlify or CircleCI, Route53, freenom, Sentry)

- []AWS Amplify 구성
  - 설치, 구성
  - AWS Amplify 추가
- []S3에 파일 업로드
- []도메인 및 호스팅
  - Netlify 프로젝트 설정
  - Route 53으로 도메인 구매
  - Netlify 사용자 지정 도메인
- []배포자동화(circleCI)
  - 환경 관리
  - Netlify 빌드 스크립트 추가
- []모니터링
  - Sentry
  - React Error Boundary

16. Performance

- []측정 항목 및 목표 설정
- []측정 도구 선정
- []콘텐츠 별 성능 최적화 자동화 & 테스트
  - []Text
  - []Image
  - []Animation
  - []Javascript
  - []Webpack
  - []Font
  - []PRPL
  - []Resource 제공 최적화
- []HTTP Caching
  - []HTTP Cache
  - []Client Hint
  - []Save-Data
  - []Servicework
- []Browser Storage
  - PWA, CacheAPI, IndexedDB
- []신중하게 로드
  - []중요한 렌더링 경로
  - []HTTP/2
- []Rendering Performance
- []audit site

17. Security

- []OWASP10
- []HTTPS
- []CSP
- []Mixed Content

---

## ReactNative Workflow

---

## Electron Workflow

---
