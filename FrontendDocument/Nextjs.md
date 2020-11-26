# Next.js

---

## 목차

- **Basic Features**

  1. Pages

  - 'pages/about.js' - '/about'
  - **동적 경로가 있는 페이지**
    - 'pages/posts/[id].js' - 'posts/1', 'posts/2'
  - **사전 렌더링**
    - 기본적으로 Nextjs는 모든 페이지를 미리 렌더링함. 각 페이지에 대해 미리 HTML을 생성함. 이로 인해 더 나은 성능과 SEO를 얻을 수 있음.
    - 생성된 각 HTML은 해당 페이지에 필요한 최소한의 JavaScript 코드와 연결됨.
  - **두 가지 형태의 사전 렌더링**
    1. 정적 생성(권장) : HTML은 빌드할 때 생성되며 각 요청에 재사용됨
    2. 서버 측 렌더링 : HTML은 각 요청에 대해 생성됨
    - 두가지 방법을 혼합해서 사용하는 하이브리드 Nextjs 앱을 만들 수 있음
    - 정적으로 생성된 페이지는 성능 향상을 위한 추가 구성없이 CDN에 의해 캐시 될 수 있음.
  - **정적 생성(권장)**

    - 페이지를 정적 생성시 페이지 HTML은 빌드시 생성됨. next build로 프로덕션에서 실행할때 HTML이 생성됨. 이 HTML은 각 요청에서 재사용되며 CDN에 의해 캐시 될 수 있음

    1. 데이터 없는 정적 생성

       - 기본적으로 Nextjs는 데이터를 가져오지 않고 정적 생성을 사용해 페이지를 사전 렌더링함.
       - 빌드 시간 동안 페이지당 단일 HTML 파일을 생성함

         ```javascript
         function About() {
           return <div>About</div>;
         }

         export default About;
         ```

    2. 데이터를 사용한 정적 생성

       - 일부 페이지는 사전 렌더링을 위해 외부 데이터를 가져와야 함. 두가지 시나리오가 있으며 하나 또는 둘 모두가 적용될 수 있음. 각각의 경우 Next.js가 제공하는 특수 기능을 사용할 수 있음

         1. 페이지 컨텐츠가 외부 데이터에 의존(getStaticProps)

            - getStaticProps 함수는 빌드시 호출되며 가져온 데이터를 페이지에 props로 전달할 수 있음

            ```javascript
            function Blog({ posts }) {
              // Render posts...
            }

            // This function gets called at build time
            export async function getStaticProps() {
              // Call an external API endpoint to get posts
              const res = await fetch('https://.../posts');
              const posts = await res.json();

              // By returning { props: posts }, the Blog component
              // will receive `posts` as a prop at build time
              return {
                props: {
                  posts,
                },
              };
            }

            export default Blog;
            ```

         2. 페이지 경로가 외부 데이터에 의존(getStaticPaths)

            - 동적 페이지에서 호출
            - getStaticPaths 함수는 빌드시 호출되며 사전 렌더링할 경로를 지정할 수 있음.

            ```javascript
            function Post({ post }) {
              // Render post...
            }

            export async function getStaticPaths() {
              // ...
            }

            // This also gets called at build time
            export async function getStaticProps({ params }) {
              // params contains the post `id`.
              // If the route is like /posts/1, then params.id is 1
              const res = await fetch(`https://.../posts/${params.id}`);
              const post = await res.json();

              // Pass post data to the page via props
              return { props: { post } };
            }

            export default Post;
            ```

       - **정적 생성을 사용해야 할때**
         - 사용자의 요청에 앞서 페이지를 미리 렌더링할 수 있으면 정적생성을 사용해야함.
         - 페이지를 한 번 빌드하고 CDN에서 제공할 수 있으므로 가능하면 정적 생성을 사용하는 것이 좋음. 서버가 모든 요청에 대해 렌더링하는 것 보다 훨씬 빠름.
         - 정적 생성 페이지 사용 유형
           - 마케팅 페이지
           - 블로그 게시물
           - 전자상거래 제품 목록
           - 도움말 및 문서
         - 페이지에 자주 업데이트 되는 데이터가 표시되고 모든 요청에 따라 페이지 컨텐츠가 변경되는 경우 아래 두가지 중 하나를 선택
           - 클라이언트 측 렌더링에 정적 생성 사용 : 페이지의 일부 사전 렌더링을 건너 뛰고 클라이언트 측 JavaScript를 사용해 채울수 있음.
           - 서버 측 렌더링 : CDN에서 페이지를 캐시 할 수 없어서 느리나 이 페이지는 항상 최신 상태임.

  - **서버 측 렌더링(getServerSideProps)**

    - 페이지가 서전 측 렌더링을 사용하는 경우 HTML은 각 요청에 대해 생성됨. 빌드시 생성되지 않음. 정적 생성보다 느리기 때문에 반드시 필요한 경우에만 사용.

    ```javascript
    function Page({ data }) {
      // Render data...
    }

    // This gets called on every request
    export async function getServerSideProps() {
      // Fetch data from external API
      const res = await fetch(`https://.../data`);
      const data = await res.json();

      // Pass data to the page via props
      return { props: { data } };
    }

    export default Page;
    ```

  2. Data Fetching
  3. Built-in CSS Support
  4. Image Optimization
  5. Fast Refresh
  6. Static File Serving
  7. TypeScript
  8. Environment Variables
  9. Supported Browsers and Features

- **Routing**
  1. Introduction
  2. Dynamic Routes
  3. Imperatively
  4. Shallow Routing
- **API Routes**
  1. Introduction
  2. Dynamic API Routes
  3. API Middlewares
  4. Response Helpers
- **Deployment**
- **Advanced Features**
  1. Preview Mode
  2. Dynamic Import
  3. Automatic Static Optimization
  4. Static HTML Export
  5. Absolute Imports and Module Path Aliases
  6. AMP
  - Introduction
  - Adding AMP Components
  - AMP Validation
  - AMP in Static HTML export
  - TypeScript
  7. Customizing Babel Config
  8. Customizing PostCSS Config
  9. Custom Server
  10. Custom App
  11. Custom Document
  12. Custom Error Page
  13. src Directory
  14. Multi Zones
  15. Measuring Performance
  16. Debugging
  17. Codemods
  18. Internationalizaed Routing

---

## **Basic Features**

### 1. Pages

- 'pages/about.js' - '/about'
- **동적 경로가 있는 페이지**
  - 'pages/posts/[id].js' - 'posts/1', 'posts/2'
- **사전 렌더링**
  - 기본적으로 Nextjs는 모든 페이지를 미리 렌더링함. 각 페이지에 대해 미리 HTML을 생성함. 이로 인해 더 나은 성능과 SEO를 얻을 수 있음.
  - 생성된 각 HTML은 해당 페이지에 필요한 최소한의 JavaScript 코드와 연결됨.
- **두 가지 형태의 사전 렌더링**
  1. 정적 생성(권장) : HTML은 빌드할 때 생성되며 각 요청에 재사용됨
  2. 서버 측 렌더링 : HTML은 각 요청에 대해 생성됨
  - 두가지 방법을 혼합해서 사용하는 하이브리드 Nextjs 앱을 만들 수 있음
  - 정적으로 생성된 페이지는 성능 향상을 위한 추가 구성없이 CDN에 의해 캐시 될 수 있음.
- **정적 생성(권장)**

  - 페이지를 정적 생성시 페이지 HTML은 빌드시 생성됨. next build로 프로덕션에서 실행할때 HTML이 생성됨. 이 HTML은 각 요청에서 재사용되며 CDN에 의해 캐시 될 수 있음

  1. 데이터 없는 정적 생성

     - 기본적으로 Nextjs는 데이터를 가져오지 않고 정적 생성을 사용해 페이지를 사전 렌더링함.
     - 빌드 시간 동안 페이지당 단일 HTML 파일을 생성함

       ```javascript
       function About() {
         return <div>About</div>;
       }

       export default About;
       ```

  2. 데이터를 사용한 정적 생성

     - 일부 페이지는 사전 렌더링을 위해 외부 데이터를 가져와야 함. 두가지 시나리오가 있으며 하나 또는 둘 모두가 적용될 수 있음. 각각의 경우 Next.js가 제공하는 특수 기능을 사용할 수 있음

       1. 페이지 컨텐츠가 외부 데이터에 의존(getStaticProps)

          - getStaticProps 함수는 빌드시 호출되며 가져온 데이터를 페이지에 props로 전달할 수 있음

          ```javascript
          function Blog({ posts }) {
            // Render posts...
          }

          // This function gets called at build time
          export async function getStaticProps() {
            // Call an external API endpoint to get posts
            const res = await fetch('https://.../posts');
            const posts = await res.json();

            // By returning { props: posts }, the Blog component
            // will receive `posts` as a prop at build time
            return {
              props: {
                posts,
              },
            };
          }

          export default Blog;
          ```

       2. 페이지 경로가 외부 데이터에 의존(getStaticPaths)

          - 동적 페이지에서 호출
          - getStaticPaths 함수는 빌드시 호출되며 사전 렌더링할 경로를 지정할 수 있음.

          ```javascript
          function Post({ post }) {
            // Render post...
          }

          export async function getStaticPaths() {
            // ...
          }

          // This also gets called at build time
          export async function getStaticProps({ params }) {
            // params contains the post `id`.
            // If the route is like /posts/1, then params.id is 1
            const res = await fetch(`https://.../posts/${params.id}`);
            const post = await res.json();

            // Pass post data to the page via props
            return { props: { post } };
          }

          export default Post;
          ```

     - **정적 생성을 사용해야 할때**
       - 사용자의 요청에 앞서 페이지를 미리 렌더링할 수 있으면 정적생성을 사용해야함.
       - 페이지를 한 번 빌드하고 CDN에서 제공할 수 있으므로 가능하면 정적 생성을 사용하는 것이 좋음. 서버가 모든 요청에 대해 렌더링하는 것 보다 훨씬 빠름.
       - 정적 생성 페이지 사용 유형
         - 마케팅 페이지
         - 블로그 게시물
         - 전자상거래 제품 목록
         - 도움말 및 문서
       - 페이지에 자주 업데이트 되는 데이터가 표시되고 모든 요청에 따라 페이지 컨텐츠가 변경되는 경우 아래 두가지 중 하나를 선택
         - 클라이언트 측 렌더링에 정적 생성 사용 : 페이지의 일부 사전 렌더링을 건너 뛰고 클라이언트 측 JavaScript를 사용해 채울수 있음.
         - 서버 측 렌더링 : CDN에서 페이지를 캐시 할 수 없어서 느리나 이 페이지는 항상 최신 상태임.

- **서버 측 렌더링(getServerSideProps)**

  - 페이지가 서전 측 렌더링을 사용하는 경우 HTML은 각 요청에 대해 생성됨. 빌드시 생성되지 않음. 정적 생성보다 느리기 때문에 반드시 필요한 경우에만 사용.

  ```javascript
  function Page({ data }) {
    // Render data...
  }

  // This gets called on every request
  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://.../data`);
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } };
  }

  export default Page;
  ```

---

### 2. Data Fetching

1. getStaticProps (정적 생성)
   - Nextjs는 getStaticProps를 사용해 빌드시 페이지를 미리 렌더링함
     ```javascript
     export async function getStaticProps(context) {
       return {
         props: {},
       };
     }
     ```
   - **context 객체가 가지고 있는 키**
     - params : 동적 경로를 사용하는 페이지에 대한 경로 매개 변수를 포함함.
     - preview : 페이지 미리보기 모드, true or undefined
     - previewData : 설정된 미리보기 데이터가 포함
     - locale : 활성 로케일 포함 (활성화 된 경우)
     - locales : 지원되는 모든 로케일 포함 (활성화 된 경우)
     - defaultLocale : 구성된 기본 로케일 포함 (활성화 된 경우)
   - getStaticProps
     - props : 페이지 구성 요소에서 받을 소품이 있는 필수 객체. 직렬화 가능한 객체여야 함
     - revalidate
     - notFound : 페이지가 404 상태 및 페이지를 반환하도록 허용하는 선택적 boolean 값
     - redirect : 내부 및 외부 리소스로 리디렉션 할 수 있는 선택적 리디렉션 값.
   - **getStaticProps를 사용해야 할때**
     - 페이지를 렌더링하는데 필요한 데이터는 사용자 요청 전에 빌드시 사용할 수 있음.
     - 데이터는 헤드리스 CMS에서 가져옴.
     - 데이터는 공개적으로 캐시될 수 있음(사용자 별 아님).
     - 성능을 위해 CDN에서 캐시할 수 있는 HTML, JSON 파일을 생성함.
2. 증분 정적 생성
   - **대규모 정적 콘텐츠**
   - **파일 읽기 : 사용 'process.cwd()'**
   - **기술적 세부 사항**
3. getStaticPaths (정적 생성)
   - **paths 키(필수)**
   - **fallback 키(필수)**
   - **대체 페이지**
   - **언제 fallback: true를 사용하는지**
   - **getStaticPaths를 사용해야 할때**
   - **기술적 세부사항**
4. getServerSideProps (서버 측 렌더링)
   - **간단한 예**
   - **getServerSideProps를 사용해야 할때**
   - **기술적 세부 사항**
5. 클라이언트 측에서 데이터 가져 오기

   - **SWR**

     - Nextjs에서 만든 데이터 페칭을 위한 React Hooks

     ```javascript
     import useSWR from 'swr';

     function Profile() {
       const { data, error } = useSWR('/api/user', fetch);

       if (error) return <div>failed to load</div>;
       if (!data) return <div>loading...</div>;
       return <div>hello {data.name}!</div>;
     }
     ```

---

### 3. Built-in CSS Support

---

### 4. Image Optimization

- 버전 10.0.0 부터는 기존 제공 이미지 구성요소와 자동 이미지 최적화가 제공됨.
- HTML img 태그의 확장으로 next/image로부터 이미지 구성요소를 가져올수 있다.
- 자동 이미지 최적화를 사용하면 브라우저가 지원하는 WebP와 같은 최신 형식으로 이미지 크기를 조정하고 최적화하고 제공할 수 있음.
- Nextjs가 이미지 형식을 자동으로 채택하고 해당 형식을 지원하는 브라우저에 제공할 수 있음.
- 빌드시 이미지를 최적화하는 대신 사용자가 요청할 때 이미지를 온디멘드로 최적화함.
- 이미지는 기본적으로 지연로드됨. 뷰포트 외부의 이미지에 대해 페이지 속도가 불이익을 받지 않음. 이미지는 뷰포트로 스크롤될 때 로드됨.

1. 이미지 구성 요소

   ```javascript
   import Image from 'next/image';

   function Home() {
     return (
       <>
         <h1>My Homepage</h1>
         <Image
           src="/me.png"
           alt="Picture of the author"
           width={500}
           height={500}
         />
         <p>Welcome to my homepage!</p>
       </>
     );
   }

   export default Home;
   ```

2. 구성
   - next.config.js에서 이미지 최적화를 선택적으로 구성할 수 있으며 구성이 제공되지 않으면 아래의 기본 구성이 사용됨
     ```javascript
     module.exports = {
       images: {
         deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
         imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
         domains: [],
         path: '/_next/image',
         loader: 'default',
       },
     };
     ```
   - **장치 크기**
     - deviceSizes 속성을 사용해 장치 너비 중단점 목록을 지정할 수 있음. 이러한 너비는 next/images 구성요소가 layout="reponsive" 또는 layout="fill" 에서 장치에 올바른 이미가 제공될때 사용됨.
   - **이미지 크기**
     - imageSizes 속성을 사용해 이미지 너비 목록을 지정함. 이러한 너비는 deviceSizes 배열이 연결되므로 정의된 너비와 달라야함. layout="fixed" 또는 layout="intrinsic"
   - **도메인**
     - 외부 웹 사이트에서 호스팅되는 이미지에 대해 이미지 최적화를 사용하려면 이미지에 절대 URL을 사용하고 최적화할 수 있는 URL을 domains에 지정.
   - **loader**
     - 기본 제공 이미지 최적화를 사용하는 대신 클라우드 이미지 공급자를 사용해 이미지를 최적화하려는 경우 loader 및 path 접두사를 구성할 수 있음.
3. 캐싱(기본 로더에 대한 캐싱 알고리즘)
   - 이미지는 요청에 따라 동적으로 최적화되고 distDir/cache/iamges 디렉토리에 저장됨. 만료일에 도달 할 때까지 후속 요청에 최적화된 이미지 파일이 제공됨. 캐시되었지만 만료된 파일과 일치하는 요청이 생성되면 새 최적화된 이미지를 생성하고 새파일을 캐시하기전에 캐시된 파일이 삭제됨.

---

### 5. Fast Refresh

---

### 6. Static File Serving

- Nextjs는 루트 디렉토리에 있는 public 폴더 아래에 이미지와 같은 정적파일을 제공할 수 있음.

  - public/test-image.png

    ```javascript
    function TestImage() {
      return <img src="/my-image.png" alt="my image" />;
    }

    export default TestImage;
    ```

---

### 7. TypeScript

---

### 8. Environment Variables

1. 환경변수 로드
   - .env.local
     ```env
     DB_HOST=localhost
     DB_USER=myuser
     DB_PASSWORD=mypassword
     ```
   - Next.js는 파일 \$VAR내부의 변수 ( )를 자동으로 확장 .env\*합니다.
     ```env
     # .env
     HOSTNAME=localhost
     PORT=8080
     HOST=http://$HOSTNAME:$PORT
     A=abc
     WRONG=pre$A # becomes "preabc"
     CORRECT=pre\$A # becomes "pre$A"
     ```
2. 브라우저에 환경변수 노출
   - 기본적으로 .env.local에서 로드된 모든 환경변수는 Node.js 환경에서만 사용할 수 있으며 브라우저에 노출되지 않음.
   - 브라우저에 변수를 노출하려면 변수 앞에 NEXT*PUBLIC* 를 사용해야함
     ```env
     NEXT_PUBLIC_ANALYTICS_ID=abcdefghijk
     ```
3. 기본 환경변수
   - 일반적으로 .env.local 파일 하나만 필요함. 그러나 때때로 development(next dev) or production(next start)환경에 대한 기본값을 추가할 수 있음.
   - Nextjs를 사용하면 .env(모든환경), .env.development(개발환경), .env.production(프로덕션 환경)에서 기본값을 설정할 수 있음.
   - .env.local은 항상 기본값을 재정의함.
4. Vercel의 환경변수
5. 테스트 환경변수
   - .env.test

---

### 9. Supported Browsers and Features

---

## **Routing**

### 1. Introduction

1. 라우팅

- Nextjs는 페이지개념에 기반한 파일시스템 기반 라우터가 있음. 파일이 pages 디렉토리에 추가되면 자동으로 경로로 사용할 수 있음.
- **색인 경로**
  - 라우터는 이름이 지정된 파일인 index를 디렉토리의 루트로 자동 라우팅함.
    - pages/index.js -> /
    - pages/blog/index.js -> /blog
- **중첩된 경로**

  - 중첩된 폴더 구조를 만들면 파일이 동일한 방식으로 자동 라우팅됨.
    - pages/blog/first-post.js -> /blog/first-post

- **동적 경로 세그먼트**
  - 동적 세그먼트를 일치시키기 위해 대괄호 구문을 사용할 수 있음
    - pages/blog/[slug].js -> /blog/:slug(/blog/hello-world)
    - pages/post/[...all].js -> /post/\* (/post/2020/id/title)

2. 페이지 간 연결

   - Nextjs 라우터를 사용하면 단일페이지 애플리케이션과 유사하게 페이지간에 클라이언트측 경로전환를 수행할 수 있음

     ```javascript
     import Link from 'next/link';

     function Home() {
       return (
         <ul>
           <li>
             <Link href="/">
               <a>Home</a>
             </Link>
           </li>
           <li>
             <Link href="/about">
               <a>About Us</a>
             </Link>
           </li>
           <li>
             <Link href="/blog/hello-world">
               <a>Blog Post</a>
             </Link>
           </li>
         </ul>
       );
     }

     export default Home;
     ```

3. 동적 경로에 연결

   - 보간을 사용해 경로를 생성할 수도 있으며 이는 동적 세그먼트에 유용함.

     ```javascript
     import Link from 'next/link';

     function Posts({ posts }) {
       return (
         <ul>
           {posts.map((post) => (
             <li key={post.id}>
               <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
                 <a>{post.title}</a>
               </Link>
               <!-- <Link
                 href={{
                   pathname: '/blog/[slug]',
                   query: { slug: post.slug },
                 }}
               >
                 <a>{post.title}</a>
               </Link> -->
             </li>
           ))}
         </ul>
       );
     }

     export default Posts;
     ```

4. 라우터 삽입
   - React의 구성요소 router 객체에 액세스하려면 useRouter or withRouter를 사용

### 2. Dynamic Routes

- Nextjs에서는 페이지에 대괄호를 추가해 동적경로를 만들수 있음.

  - pages/post/[pid].js

  ```javascript
  import { useRouter } from 'next/router';

  const Post = () => {
    const router = useRouter();
    const { pid } = router.query;

    return <p>Post: {pid}</p>;
  };

  export default Post;
  ```

  - /post/abc
    ```javascript
    { "pid": "abc" }
    ```
  - /post/abc?foo=bar
    ```javascript
    { "foo": "bar", "pid": "abc" }
    ```
  - /post/abc?pid=123
    ```javascript
    { "pid": "abc" }
    ```

1. 모든 경로 잡기
   - pages/post/[...slug].js는 /post/a, /post/a/b, /post/a/b/c 등등과 모두 일치함.
   - /post/a
     ```javascript
     {"slug": ["a"]}
     ```
   - /post/a/b
     ```javascript
     {"slug":["a", "b"]}
     ```
2. 모든 경로 선택
   - 매개변수를 이중괄호에 포함해 모든 경로를 선택적으로 포착할 수 있음.
   - pages/post/[[...slug]].js는 /post, /post/a, /post/a/b와 일치
   - 모두 Catch와 선택적 Catch all 경로의 차이는 optional을 사용하면 매개변수가 없는 경로('/post')도 일치
     ```javascript
     { } // GET `/post` (empty object)
     { "slug": ["a"] } // `GET /post/a` (single-element array)
     { "slug": ["a", "b"] } // `GET /post/a/b` (multi-element array)
     ```
3. 주의사항

- 사전 정의된 경로 > 동적 경로 > 모든 경로 포착
- 자동 정적 최적화에 의해 정적으로 최적화 된 페이지는 경로 매개변수를 제공하지 않고 수화됨. query 객체는 빈 객체가 됨.

### 3. Imperatively

### 4. Shallow Routing

- Shallow Routing은 Data Fetching 함수를 실행하지 않고 URL을 변경할 수 있음.
- shallow 옵션을 true로 설정하면 됨.

  ```javascript
  import { useEffect } from 'react';
  import { useRouter } from 'next/router';

  // Current URL is '/'
  function Page() {
    const router = useRouter();

    useEffect(() => {
      // Always do navigations after the first render
      router.push('/?counter=10', undefined, { shallow: true });
    }, []);

    useEffect(() => {
      // The counter changed!
    }, [router.query.counter]);
  }

  export default Page;
  ```

  - 페이지는 교체되지 않고 경로의 상태만 변경됨

- **주의사항**
  - 얕은 라우팅은 동일한 페이지 URL 변경에만 작동함.
  - 새 페이지로 얕은 라우팅을 요청하더라도 현재 페이지를 언로드하고 새 페이지를 로드하고 데이터 가져오기를 기다림.

---

## **API Routes**

### 1. Introduction

### 2. Dynamic API Routes

### 3. API Middlewares

### 4. Response Helpers

---

## **Deployment**

---

## **Advanced Features**

### 1. Preview Mode

### 2. Dynamic Import

- **기본 사용법**
- **Named Export**
- **사용자 정의 로딩 구성요소 사용**
- **SSR 없음**

### 3. Automatic Static Optimization

- **작동원리**
- **주의사항**

### 4. Static HTML Export

- next export를 사용해 앱을 정적 HTML로 내보낼 수 있으며 Nodejs 서버없이 독립형으로 실행할 수 있음.
- **사용법**
  ```json
  // package.json
  {
    // ...
    "scripts": {
      "build": "next build && next export"
    }
    // ...
  }
  ```
  - npm build시 out 디렉토리에 앱의 정적 버전이 있음.
- **Deployment**
  - 기본적으로 모든 정적 호스팅 서버 or CDN에서 제공할 수 있는 out 디렉터리를 생성함.

### 5. Absolute Imports and Module Path Aliases

### 6. AMP

#### 6-1. Introduction

#### 6-2. Adding AMP Components

#### 6-3. AMP Validation

#### 6-4. AMP in Static HTML export

#### 6-5. TypeScript

### 7. Customizing Babel Config

- Nextjs에는 next/babel에 사전 설정이 포함되어 있으나 기본 Babel 구성을 확장할 수 있다.
- .babelrc
  ```json
  {
    "presets": ["next/babel"],
    "plugins": []
  }
  ```

### 8. Customizing PostCSS Config

### 9. Custom Server

- 사용자 지정 서버는 서버리스 기능 및 자동 정적 최적화와 같은 중요한 성능 최적화를 제거함.
- server.js는 babel, webpack을 거치지 않음.

```javascript
// server.js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === '/a') {
      app.render(req, res, '/a', query);
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
```

1. 파일 시스템 라우팅 비활성화

```javascript
module.exports = {
  useFileSystemPublicRoutes: false,
};
```

### 10. Custom App

- Nextjs는 App 구성요소를 사용해 페이지를 초기화함.
- Custom App 에서 할 수 있는 것
  - 페이지 변경 사이에 레이아웃 유지
  - 페이지를 탐색 할 때 상태 유지
  - 사용자 정의 오류 처리 componentDidCatch
  - 페이지에 추가 데이터 삽입
  - 전역 CSS 추가
- pages/\_app.js

  ```javascript
  // import App from 'next/app'

  function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }

  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  export default MyApp;
  ```

### 11. Custom Document

- Custom Document는 html, body 태그를 보강하는데 사용됨.
- ./pages/\_document.js

  ```javascript
  import Document, { Html, Head, Main, NextScript } from 'next/document';

  class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };
    }

    render() {
      return (
        <Html>
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }

  export default MyDocument;
  ```

- **커스터마이징 renderPage**

  ```javascript
  import Document from 'next/document';

  class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const originalRenderPage = ctx.renderPage;

      ctx.renderPage = () =>
        originalRenderPage({
          // useful for wrapping the whole react tree
          enhanceApp: (App) => App,
          // useful for wrapping in a per-page basis
          enhanceComponent: (Component) => Component,
        });

      // Run the parent `getInitialProps`, it now includes the custom `renderPage`
      const initialProps = await Document.getInitialProps(ctx);

      return initialProps;
    }
  }

  export default MyDocument;
  ```

- **Typescript**

  - ./pages/\_document.tsx

    ```typescript
    import Document, { DocumentContext } from 'next/document';

    class MyDocument extends Document {
      static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
      }
    }

    export default MyDocument;
    ```

### 12. Custom Error Page

1. 404 페이지
   - Nextjs는 기본적인 정적 404 페이지를 제공함
   - **사용자 지정 404 페이지**
     - /pages/404.js, 이 파일은 빌드시 정적 생성됨
       ```javascript
       // pages/404.js
       export default function Custom404() {
         return <h1>404 - Page Not Found</h1>;
       }
       ```
2. 500 페이지

   - 기본적으로 Nextjs는 기본 404 페이지의 스타일과 일치하는 500 오류 페이지를 제공함. 이 페이지는 서버 측 오류를 보고 할 수 있으므로 정적으로 최적화 되지 않음. 이것이 404와 500이 분리 된 이유.
   - **오류 페이지 사용자 정의**

     - /pages/\_error.js, 프로덕션에서만 사용됨.

     ```javascript
     function Error({ statusCode }) {
       return (
         <p>
           {statusCode
             ? `An error ${statusCode} occurred on server`
             : 'An error occurred on client'}
         </p>
       );
     }

     Error.getInitialProps = ({ res, err }) => {
       const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
       return { statusCode };
     };

     export default Error;
     ```

   - **기본 제공 오류 페이지 재사용**

     - 기본 오류 제공 페이지를 렌더링하려면 Error 구성요소를 가져오면 됨.

       ```javascript
       import Error from 'next/error';

       export async function getServerSideProps() {
         const res = await fetch('https://api.github.com/repos/vercel/next.js');
         const errorCode = res.ok ? false : res.statusCode;
         const json = await res.json();

         return {
           props: { errorCode, stars: json.stargazers_count },
         };
       }

       export default function Page({ errorCode, stars }) {
         if (errorCode) {
           return <Error statusCode={errorCode} />;
         }

         return <div>Next stars: {stars}</div>;
       }
       ```

### 13. src Directory

- /pages 대신 /src/pages도 지원함.

### 14. Multi Zones

- 여러 영역을 가질수 있으며 단일 앱으로 병합할 수 있음

1. 영역을 정의하는 방법
2. 영역을 병합하는 방법

### 15. Measuring Performance

- Nextjs에는 다양한 메트릭을 사용해 페이지 성능을 분석, 측정할 수 있는 릴레이가 내장되어 있다.
- Custom App Component를 만들고 reportWebVitals 함수를 정의해야한다.

  ```javascript
  // pages/_app.js
  export function reportWebVitals(metric) {
    console.log(metric);
  }

  function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }

  export default MyApp;
  ```

  - metric 객체
    - id : 현재 페이지로드 컨텍스트에서 메트릭의 고유 식별자
    - name : 메트릭 이름
    - startTime : 밀리초 단위로 처음 기록된 성능 항목의 타임스탬프 (해당하는 경우)
    - value : 성능 항목의 값 또는 기간 (밀리초)
    - label : 측정 항목 유형 ('web-vital' or 'custom')

1. 웹 바이탈
   - Web Vitals는 웹페이지의 사용자 경험을 포착하는 것을 목표로 하는 유용한 메트릭 세트.
     - TTFB(Time to First Type)
     - FCP(First Contentful Paint)
     - LCP(최대 함량 페인트)
     - FID(첫번째 입력 지연)
     - CLS(누적 레이아웃 이동)
   - web-vital 라벨을 사용해 측정 항목의 모든 결과를 처리할 수 있음
     ```javascript
     export function reportWebVitals(metric) {
       if (metric.label === 'web-vital') {
         console.log(metric);
       }
     }
     ```
   - 각 측정 항목을 개별적으로 처리하는 옵션
     ```javascript
     export function reportWebVitals(metric) {
       switch (metric.name) {
         case 'FCP':
           // handle FCP results
           break;
         case 'LCP':
           // handle LCP results
           break;
         case 'CLS':
           // handle CLS results
           break;
         case 'FID':
           // handle FID results
           break;
         case 'TTFB':
           // handle TTFB results
           break;
         default:
           break;
       }
     }
     ```
2. 맞춤 측정 항목
   - Next.js-hydration : 페이지가 수화를 시작하고 완료하는데 걸리는 시간(ms)
   - Next.js-route-change-to-render : 경로 변경 후 페이지 렌더링을 시작하는데 걸리는 시간(ms)
   - Next.js-render : 경로 변경 후 페이지 렌더링이 완료되는데 걸리는 시간(ms)
   - custom 라벨을 사용해 이러한 측정 항목의 모든 결과를 처리할 수 있음
     ```javascript
     export function reportWebVitals(metric) {
       if (metric.label === 'custom') {
         console.log(metric);
       }
     }
     ```
   - 각 측정 항목을 개별적으로 처리하는 옵션도 있음
     ```javascript
     export function reportWebVitals(metric) {
       switch (metric.name) {
         case 'Next.js-hydration':
           // handle hydration results
           break;
         case 'Next.js-route-change-to-render':
           // handle route-change to render results
           break;
         case 'Next.js-render':
           // handle render results
           break;
         default:
           break;
       }
     }
     ```
3. 분석에 결과보내기

   ```javascript
   export function reportWebVitals(metric) {
     const body = JSON.stringify(metric);
     const url = 'https://example.com/analytics';

     // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
     if (navigator.sendBeacon) {
       navigator.sendBeacon(url, body);
     } else {
       fetch(url, { body, method: 'POST', keepalive: true });
     }
   }
   ```

   - Google Analytics 사용시

   ```javascript
   export function reportWebVitals({ id, name, label, value }) {
     // Use `window.gtag` if you initialized Google Analytics as this example:
     // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_document.js
     window.gtag('event', name, {
       event_category:
         label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
       value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
       event_label: id, // id unique to current page load
       non_interaction: true, // avoids affecting bounce rate.
     });
   }
   ```

4. Typescript

```javascript
// pages/_app.tsx

import type { AppProps, NextWebVitalsMetric } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export default MyApp;
```

### 16. Debugging

### 17. Codemods

- Nextjs는 기능이 더이상 사용되지 않을때 코드를 업그레이드하는데 도움이 되는 Codemod 변환을 제공함

1. 사용법
   - npx @next/codemod transform path
     - transform : 변환의 이름은 아래에서 사용가능한 변환을 참조
     - path : 변환할 파일 또는 디렉토리
     - --dry : 코드가 편집 되지 않음
     - --print : 비교를 위해 변경된 출력을 인쇄
2. Nextjs 9

   - **name-default-component**
     - npx @next/codemod name-default-component
     ```javascript
     // my-component.js
     // before
     export default function () {
       return <div>Hello World</div>;
     }
     // after
     export default function MyComponent() {
       return <div>Hello World</div>;
     }
     ```
   - **withamp-to-config**

     - npx @next/codemod withamp-to-config

     ```javascript
     // Before
     import { withAmp } from 'next/amp';

     function Home() {
       return <h1>My AMP Page</h1>;
     }

     export default withAmp(Home);
     // After
     export default function Home() {
       return <h1>My AMP Page</h1>;
     }

     export const config = {
       amp: true,
     };
     ```

3. Nextjs 6
   - **url-to-withrouter**
     - npx @next/codemod url-to-withrouter
     ```javascript
     // From
     import React from 'react';
     export default class extends React.Component {
       render() {
         const { pathname } = this.props.url;
         return <div>Current pathname: {pathname}</div>;
       }
     }
     // To
     import React from 'react';
     import { withRouter } from 'next/router';
     export default withRouter(
       class extends React.Component {
         render() {
           const { pathname } = this.props.router;
           return <div>Current pathname: {pathname}</div>;
         }
       }
     );
     ```

### 18. Internationalizaed Routing

- Nextjs는 i18n 라우팅을 기본적으로 지원함
- 로케일 목록, 기본 로케일 및 도메인 별 로케일을 제공할 수 있으며 Nextjs가 자동으로 라우팅을 처리함

1. 시작하기

   - next.config.js에 i18n 구성 포함
   - 로케일은 UTS 로케일 식별자
   - 일반적으로 로케일 식별자는 대시로 구분 된 언어, 지역 및 스크립트로 구성됨.

   ```javascript
   // next.config.js
   module.exports = {
     i18n: {
       locales: ['en-US', 'fr', 'nl-NL'],
       defaultLocale: 'en-US',
       domains: [
         {
           domain: 'example.com',
           defaultLocale: 'en-US',
         },
         {
           domain: 'example.nl',
           defaultLocale: 'nl-NL',
         },
         {
           domain: 'example.fr',
           defaultLocale: 'fr',
         },
       ],
     },
   };
   ```

2. 하위 경로 라우팅
   - 하위 경로 라우팅은 로케일은 URL 경로에 넣음. 기본로케일에는 접두부가 없음
   ```javascript
   // next.config.js
   module.exports = {
     i18n: {
       locales: ['en-US', 'fr', 'nl-NL'],
       defaultLocale: 'en-US',
     },
   };
   ```
   - /blog
   - /fr/blog
   - /nl-nl/blog
3. 도메인 라우팅

   - 도메인 라우팅을 사용해 다른 도메인에서 제공할 로케일을 구성할 수 있음

   ```javascript
   // next.config.js
   module.exports = {
     i18n: {
       locales: ['en-US', 'fr', 'nl-NL'],
       defaultLocale: 'en-US',

       domains: [
         {
           domain: 'example.com',
           defaultLocale: 'en-US',
         },
         {
           domain: 'example.fr',
           defaultLocale: 'fr',
         },
         {
           domain: 'example.nl',
           defaultLocale: 'nl-NL',
         },
       ],
     },
   };
   ```

   - example.com/blog
   - example.fr/blog
   - example.nl/blog

4. 자동 로케일 감지

   - 사용자가 애플리케이션 루트를 방문하면 Nextjs는 Accept-Language 헤더와 현재 도메인을 기반으로 사용자가 선호하는 로케일을 자동으로 감지하려고 시도함.

5. 자동 로케일 감지 비활성화
   ```javascript
   // next.config.js
   module.exports = {
     i18n: {
       localeDetection: false,
     },
   };
   ```
   - Nextjs는 사용자의 기본언어에 기초하지 않으며 로케일 정보는 next.config.js에 설정된대로 제공한다.
6. 로케일 정보 액세스
   - useRouter를 통해 로케일 정보에 액세스할 수 있다
     - locale : 현재 활성 로케일 포함
     - locales : 구성된 모든 로케일 포함
     - defaultLocale : 구성된 기본 로케일 포함
7. 로케일 간 전환

   - next/link, next/router로 로케일을 전환할 수 있다.

   ```javascript
   import Link from 'next/link';

   export default function IndexPage(props) {
     return (
       <Link href="/another" locale="fr">
         <a>To /fr/another</a>
       </Link>
     );
   }
   ```

   ```javascript
   export default function IndexPage(props) {
     const router = useRouter();

     return (
       <div
         onClick={() => {
           router.push('/another', '/another', { locale: 'fr' });
         }}
       >
         to /fr/another
       </div>
     );
   }
   ```

8. 검색 엔진 최적화
   - Nextjs는 자동으로 lang 속성을 사용자가 방문하는 언어로 추가한다.
   - Nextjs는 페이지 변형에 대해 알지 못하므로 hreflang을 next/head를 통해 직접 추가해야한다.
9. 자동으로 정적으로 최적화 된 페이지
   - 각 로케일에 대해 페이지 버전이 생성됨.
10. 비동적 getStaticProps 페이지
11. 동적 getStaticProps 페이지
