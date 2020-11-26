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

---

## Backend Workflow

1. github, jira, slack, confluence
   - [O]github
   - []github + jira
   - []github + slack
   - []jira + slack
2. Nodejs + Express(+ Middlewares) + Ts + Linting + Swagger UI
   - []nodejs + express(+middlewares)
   - []typesscript
   - []linting
   - []swagger-ui
3. DB Modeling
   - []DB Diagram
4. ORM + Database
   - []Local Database
   - []ORM
5. API Development with Postman, Swagger Doc, Lambda Function
   - Swagger -> Coding -> Postman -> DB & SQL Check-> Lambda Function -> Lambda Local Test
6. CICD Pipeline
   - []CircleCI Pipeline
   - []CircleCI + Github
   - []CircleCI + Slack
7. Serverless + AWS
   - []Serverless framework + AWS

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

15. Deployment

- []serverless + aws

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
