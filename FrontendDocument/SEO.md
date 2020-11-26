# SEO

- Reference
  1. SEO
     - https://www.twinword.co.kr/blog/search-engine-optimization-guide/
     - https://developers.google.com/search/docs/beginner/seo-starter-guide?hl=ko&visit_id=637410949955786301-3645636598&rd=1
  2. https
     - https://letsencrypt.org/ko/docs/
  3. robots.txt & sitemap.xml
  4. next/head(title, description)
     - https://nextjs.org/docs/api-reference/next/head
  5. Open Graph & Twitter Card
     - https://ogp.me/
     - https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started
  6. Mobile Web
     - https://developers.google.com/web/fundamentals
     - https://web.dev/responsive-web-design-basics/
  7. 대표주소
     - https://www.twinword.co.kr/blog/how-to-set-your-preferred-domain/
  8. 키워드 및 콘텐츠 최적화
  9. schema.org
     - https://developers.google.com/search/docs/guides/search-gallery?hl=ko
     - https://developers.google.com/search/docs/data-types/article?hl=ko
     - https://search.google.com/structured-data/testing-tool?hl=ko
     - https://www.twinword.co.kr/blog/structured-data-google-ranking/
     - https://support.google.com/webmasters/topic/4599161?hl=ko&ref_topic=9456381

---

## 목차

- **SEO**
  1. 검색엔진최적화
     - 개념
     - 중요성
     - 검색엔진최적화 vs 검색광고
  2. SEO 방법
     - HTTPS
     - robots.txt & sitemap.xml
     - SEO meta Tag
     - 소셜 SEO meta Tag
     - 이미지 태그 및 최적화
     - 모바일 최적화
     - 대표 주소 설정
     - 키워드 및 콘텐츠 최적화

1. https
2. robots.txt & sitemap.xml
3. next/head(title, description)
4. Open Graph & Twitter Card
5. Mobile Web
6. 대표주소
7. 키워드 및 콘텐츠 최적화
8. schema.org
   1. 구조화된 데이터 작동 방식 이해
   2. 가이드라인
   3. Codelab
   4. 자바스크립트로 구조화된 데이터 생성
   5. 구조화된 데이터
9. Google Search

---

## **SEO**

## 1. 검색엔진최적화

### 1-1. 개념

- SEO란 검색엔진 결과 페이지에서 웹사이트or웹페이지의 순위와 노출도를 올려 트래픽의 양과 질을 높이는 작업.
- SEO란 직접 트래픽 or 돈을 지불하는 키워드 광고가 아닌 자연검색어 결과를 개선하는 것.
- 전세계 검색엔진 점유율과 국가별 검색엔진 점유율을 참고해 SEO 우선순위를 정할 것.
  - https://www.twinword.co.kr/blog/search-engine-statistics/

### 1-2. 중요성

- 디지털마케팅회사의 구글 검색결과 페이지 웹로그 분석 결과 91.5%의 트래픽이 검색결과 첫 페이지에 집중되어 있다고 나옴.
- 평균적으로 첫페이지의 1순위는 총 트래픽의 32%, 10순위는 2% 트래픽을 기대할 수 있음.
- 트래픽 증감에 따라 회사의 매출, 수익이 크게 영향을 받음.
- 검색결과 첫페이지에 노출시키려면 검색엔진최적화나 검색광고를 해야함.

### 1-3. 검색엔진최적화 vs 검색광고

- 검색광고가 검색엔진최적화 상위 노출보다 더 위에 보이지만 검색엔진에 비용을 지불해야함. 보통 클릭당비용(Cost Per Click, CPC)방식으로 비용이 책정됨.
- 또한 검색광고는 링크에 Ad라고 표시되는데 많은 사람들이 광고라고 표시되어 있는 검색결과보다 자연스럽게 올라오는 검색결과를 선호함.
- 검색엔진최적화는 작업을 시작하고 검색엔진에 반영되기까지 최소 3개월이 걸리지만 검색광고의 경우 검색엔진 광고 플랫폼에 광고를 등록하고 돈을 입금하면 바로 검색엔진 첫페이지에 노출될 수 있음.
- 검색엔진최적화 VS 검색광고마케팅
  - https://www.twinword.co.kr/blog/what-is-the-difference-between-seo-and-ppc/

## 2. SEO 방법

- 구글 SEO 순위 랭킹 요소는 약 200개인데 모든 요소가 동일한 중요도를 갖지 않기 때문에 가장 중요한 최적화 요소를 파악하고 적용해도 SEO 효과를 얻을 수 있음.

### 2-1. HTTPS

- 구글은 HTTP 보다 HTTPS를 사용하는 사이트에 더 높은 점수를 부여함.
- 그리고 HTTPS가 아닌 사이트에 접속하면 주소창에 경고가 표시됨.

### 2-2. robots.txt & sitemap.xml

- **robots.txt**
  - robots.txt는 사이트에 대한 검색엔진 로봇들의 접근을 제어하고 사이트맵 위치를 알려주는 역할
  - robots.txt는 사이트의 루트 디렉토리에 위치해야함.
- **sitemap.xml**
  - sitemap.xml은 사이트내 모든 페이지 목록을 나열한 파일로 일반적인 크롤링 과정에서 쉽게 발견되지 않는 페이지도 문제없이 크롤링되고 색인될 수 있게 해줌.
  - 사이트 구성이 복잡하고 깊은 계층구조를 가질 경우 필수적으로 설정해야함.
- **robots.txt & sitemap.xml 설정 방법**
  - https://www.twinword.co.kr/blog/basic-technical-seo/

### 2-3. SEO meta Tag(title, meta description)

- title Tag는 페이지 제목, meta description은 페이지의 내용을 요약. 두 태그 모두 태그 길이 제한을 가지고 있음. 적정 길이를 넘어가면 검색결과페이지에서 뒷부분이 잘리는 것을 인지하고 있어야함.
- 페이지별로 해당되는 title 태그와 meta description 태그를 갖고 있어야함.
- title, meta description 태그는 사용자 클릭율에 큰 영향을 미치기 때문에 클릭율을 높이고 싶으면 사람들이 관심있어 할만한 키워드, 문구를 통해 태그 최적화, 구글 SEO 작업을 해야함.

### 2-4. 소셜 SEO meta Tag

- 구글 웹사이트 최적화 랭킹 요소에는 웹사이트의 소셜미디어 활동 관련 지표가 있음. 소셜미디어에서의 공유, 들어오는 트래픽 같은 지표를 통해 웹사이트 품질을 평가하고 있음.
- Open Graph 태그는 소셜미디어에서 웹페이지 URL이 공유될 때 웹페이지의 정보가 표시되는 방식을 관리해주는 역할을 함. 오픈그래프 태그를 사용하지 않으면 각 소셜미디어 크롤러가 임의으로 제목, 이미지, 설명 컨텐츠를 가져가서 마음대로 사용하게 됨.
- Open Graph 태그와 트위터 카드 태그를 설정해줘야함.
- 타겟 고객이 많이 사용하는 소셜미디어 채널 확인
  - https://www.twinword.co.kr/blog/sns-marketing-strategy/

### 2-5. 이미지 태그 및 최적화

- 해마다 이미지 검색 사용 비중이 높아지고 있음.
- 구글 이미지 검색의 중요성
  - https://www.twinword.co.kr/blog/seo-for-google-image-search/
- 검색엔진최적화에 있어서 가장 중요한 것은 이미지 Alt 태그로 사이트에서 사용되는 이미지에는 가능하면 Alt 태그를 설정해줘야함.
- 이미지 Alt 태그는 구글 이미지 검색순위와 스크린리더 사용자들에게 영향을 줌.

### 2-6. 모바일 최적화

- 2015년 모바일 검색이 데스크탑 검색을 넘어서면서 구글은 모바일 퍼스트 전략을 추구하고 있음.
- 모바일 최적화는 매우 중요한 구글 SEO 랭킹 요소.
- 구글 모바일 친화성 테스트
  - https://search.google.com/test/mobile-friendly
- 모바일 최적화를 위한 2가지 방법
  1. 반응형 웹사이트
  2. 별도의 모바일용 웹사이트
     - Canonical, Alternate Tag 활용

### 2-7. 대표 주소 설정

- 검색엔진최적화 핵심은 내 도메인, URL 최적화 점수를 높이는 것인데, 하나의 페이지 접속방법이 여러가지가 있으면 하나의 대표 주소를 설정하고 나머지에 대해선 리다이렉트를 설정하는 것이 좋음.
- 웹사이트의 대표 주소를 설정하는 방법
  - https://www.twinword.co.kr/blog/how-to-set-your-preferred-domain/

### 2-8. 키워드 및 콘텐츠 최적화

- 구글, 네이버 검색엔진 최적화에서 키워드 및 컨텐츠 최적화는 매우 중요한 부분을 차지하고 있음.
- 콘텐츠 기획시 웹사이트가 어떤 분야, 주제와 관련이 있어야 할지에 대해 생각해보고 그 주제와 관련된 키워드를 찾은 후 콘텐츠를 작성하는 편이 좋음.
- 키워드 최적화는 키워드 리서치 툴을 활용해 시작할 수 있음. 구글 키워드 플래너나 트윈워드 아이디어즈에 키워드를 입력하면 키워드와 관련된 연관 키워드를 받아 볼 수 있음. 검색량이 높고 경쟁지수가 낮은 키워드를 선정해 웹사이트 콘텐츠, 타이틀 및 메타스크립션 태그, 이미지 Alt 태그, URL 이름 등 다양한 부분에 적용.
- 트래픽을 쓸어 담는 검색엔진 최적화
  - https://www.twinword.co.kr/seo-book-by-twinword/

---

## 1. https

---

## 2. robots.txt & sitemap.xml

---

## 3. next/head(title, description)

---

## 4. Open Graph & Twitter Card

---

## 5. Mobile Web

---

## 6. 대표주소

---

## 7. 키워드 및 콘텐츠 최적화

---

## 8. schema.org

### 8-1. 구조화된 데이터 작동 방식 이해

- 구조화된 데이터는 페이지에 대한 정보를 제공하고 페이지 컨텐츠를 분류하기 위한 표준화된 형식으로 Google Search에 페이지의 의미를 확실히 전달해 내용을 파악하는데 도움을 줌.
- Google Search는 구조화된 데이터를 사용해 특수 검색결과 기능 및 개선사항을 실현함.
  - https://developers.google.com/search/docs/guides/search-gallery?hl=ko
- 리치 결과 테스트로 구조화된 데이터의 유효성을 검사하고 Google 검색 기능을 미리 볼수 있음.
  - https://search.google.com/test/rich-results?hl=ko

1. 형식
   - Google 검색의 구조화된 데이터는 대부분 schema.org 용어를 사용하나 Google 검색 동작의 경우 최종적으로 developers.google.com를 참조해야함.
   - Google 검색에 향상된 디스플레이로 표시하기 위해 정확한 권장 속성을 적용하는 것이 중요함.
   - **테스트 도구**
     - 개발중 : 리치결과테스트(https://search.google.com/test/rich-results?hl=ko)
     - 배포후 : 리치결과상태보고서(https://support.google.com/webmasters/answer/7552505?hl=ko)
   - **Google 검색 구조화된데이터 지원 형식**
     1. JSON-LD(권장)
     2. 마이크로데이터
     3. RDFa
2. 가이드라인
   - https://developers.google.com/search/docs/guides/sd-policies?hl=ko
3. 빌드, 테스트, 출시
   - https://developers.google.com/search/docs/guides/prototype?hl=ko
   - https://codelabs.developers.google.com/codelabs/structured-data/index.html?hl=ko

### 8-2. 가이드라인

- 구조화된 데이터가 Google 검색결과에 포함되려면 아래의 가이드라인을 반드시 따라야 함.
- 가이드라인을 위반하는 페이지, 사이트는 검색순위가 낮아지거나 리치결과에 포함되지 못할 수 있음.
- 페이지에 스팸성 구조화된 데이터, 콘텐츠가 있는 것으로 확인되면 직접 조치가 적용됨.
  - https://search.google.com/search-console/manual-actions?hl=ko

1. 기술 가이드라인

- 리치 결과 테스트와 URL 검사 도구를 사용해 기술 가이드 준수 여부 테스트
  - **형식**
    - JSON-LD(권장), 마이크로데이터, RDFa 중 하나를 사용.
  - **액세스**
    - robots.txt, NOINDEX, 기타 액세스 제어 방법을 사용해 Googlebot이 구조화된 데이터 페이지 액세스 차단하지 않기.

2. 품질 가이드라인

- 품질 가이드라인은 자동화된 테스트 도구가 없으며 이를 위반하면 리치결과로 표시되지 않거나 스팸으로 표시됨.
  - **콘텐츠**
    - Google 웹마스터 품질 가이드라인 따르기
    - 최신 정보 제공
    - 본인 및 사용자가 생성한 원본 콘텐츠 제공
    - 페이지 독자에게 표시되지 않는 콘텐츠 마크업하지 않기
    - 페이지 주제와 관련없는 가짜 리뷰, 콘텐츠와 오해의 소지가 있는 콘텐츠 마크업하지 않기
    - 구조화된 데이터를 사용해 사용자를 속이거나 혼랍스럽게 만들지 않기
    - 소아 성태, 수간, 성폭력, 폭력적이거나 잔인한 행위, 대상이 분명한 혐오, 위험한 행위를 조장하면 안됨
    - 불법 활동과 관련된 컨텐츠 마크업 하지 않기. 이는 교육적인 목적은 괜찮음.
    - JobPosting의 컨텐츠는 채용 정보 콘텐츠 정책(https://developers.google.com/search/docs/data-types/job-posting?hl=ko#content-policies)준수
  - **관련성**
    - 구조화된 데이터가 관련된 페이지 컨텐츠를 실제로 표현해야함.
  - **완전성**
    - 리치 결과 유형에 필요한 모든 속성 및 권장 속성 지정
  - **위치**
  - **구체성**
  - **이미지**
  - **여러 항목이 있는 페이지**

### 8-3. Codelab(레시피 블로그)

1. 개요
   - 레시피 구조화된 데이터 추가하는 방법
   - 일반적인 함정을 피하는 방법
   - 구조화된 데이터를 테스트하고 검증하는 방법
2. 구조화된 레시피 데이터 추가
   - **구조화된 데이터 유형 정의**
     - 구조화된 데이터 및 JSON-LD
       - JSON-LD는 페이지의 script 요소 내에 있어야 함.
       - JSON-LD는 대소문자를 구분함.
     ```html
     <html>
       <head>
         <script type="application/ld+json">
           {
             "@context": "http://schema.org/",
             "@type": "Recipe"
           }
         </script>
       </head>
     </html>
     ```
   - **필수 및 권장 속성 추가**
     - Tip
       - 속성의 순서는 중요하지 않음
       - 각 항목이 쉼표로 구분되어 있는지 확인
       - 속성 목록 끝에 매달려있는 쉼표 확인
     - 레시피 문서에서 필수 및 추천 속성 찾기(https://developers.google.com/search/docs/data-types/recipe#recipe_properties)
     ```html
     <html>
       <head>
         ...
         <script type="application/ld+json">
           {
             "@context": "http://schema.org/",
             "@type": "Recipe",
             "name": "Party Coffee Cake",
             "image": "https://www.leannebrown.com/wp-content/uploads/2016/12/up-close-pear-cake.jpg",
             "author": {
               "@type": "Person",
               "name": "Mary Stone"
             },
             "datePublished": "2018-03-10",
             "description": "This coffee cake is awesome and perfect for parties.",
             "prepTime": "PT20M",
             "cookTime": "PT30M",
             "totalTime": "PT50M",
             "recipeYield": "10 servings",
             "recipeCategory": "Dessert",
             "recipeCuisine": "American",
             "keywords": "cake for a party, coffee",
             "nutrition": {
               "@type": "NutritionInformation",
               "calories": "270 calories"
             },
             "recipeIngredient": [
               "2 cups of flour",
               "3/4 cup white sugar",
               "2 teaspoons baking powder",
               "1/2 teaspoon salt",
               "1/2 cup butter",
               "2 eggs",
               "3/4 cup milk"
             ],
             "recipeInstructions": [
               {
                 "@type": "HowToStep",
                 "text": "Preheat the oven to 350 degrees F. Grease and flour a 9x9 inch pan."
               },
               {
                 "@type": "HowToStep",
                 "text": "In a medium bowl, combine flour, sugar, and cinnamon."
               },
               {
                 "@type": "HowToStep",
                 "text": "Mix in butter until the entire mixture is crumbly."
               },
               {
                 "@type": "HowToStep",
                 "text": "In a large bowl, combine flour, sugar, baking powder, and salt."
               },
               {
                 "@type": "HowToStep",
                 "text": "Mix in the butter."
               },
               {
                 "@type": "HowToStep",
                 "text": "Spread into the prepared pan."
               },
               {
                 "@type": "HowToStep",
                 "text": "Sprinkle the streusel mixture on top of the cake."
               },
               {
                 "@type": "HowToStep",
                 "text": "Bake for 30 to 35 minutes, or until firm."
               },
               {
                 "@type": "HowToStep",
                 "text": "Allow to cool."
               }
             ],
             "video": [
               {
                 "@type": "VideoObject",
                 "name": "How to make a Party Coffee Cake",
                 "description": "This is how you make a Party Coffee Cake.",
                 "thumbnailUrl": [
                   "https://example.com/photos/1x1/photo.jpg",
                   "https://example.com/photos/4x3/photo.jpg",
                   "https://example.com/photos/16x9/photo.jpg"
                 ],
                 "contentUrl": "http://www.example.com/video123.flv",
                 "embedUrl": "http://www.example.com/videoplayer.swf?video=123",
                 "uploadDate": "2018-02-05T08:00:00+08:00",
                 "duration": "PT1M33S",
                 "interactionStatistic": {
                   "@type": "InteractionCounter",
                   "interactionType": {
                     "@type": "http://schema.org/WatchAction"
                   },
                   "userInteractionCount": 2347
                 },
                 "expires": "2019-02-05T08:00:00+08:00"
               }
             ]
           }
         </script>
       </head>
     </html>
     ```
   - **구조화된 데이터 유효성 검사**
     - 리치 결과 테스트(https://search.google.com/test/rich-results)에서 해당 사이트의 URL을 입력 후 테스트.
3. 구조화된 레시피 데이터에 리뷰 삽입
   - **개별 리뷰 추가**
     1. 필수 및 추천 속성 추가
     ```html
     <html>
       <head>
         ...
         <script type="application/ld+json">
           {
             "@context": "http://schema.org/",
             "@type": "Recipe",
             // ...
             // other recipe structured data
             // ...
             "review": {
               "@type": "Review",
               "reviewRating": {
                 "@type": "Rating",
                 "ratingValue": "4",
                 "bestRating": "5"
               },
               "author": {
                 "@type": "Person",
                 "name": "Mary Stone"
               },
               "datePublished": "2018-05-01",
               "reviewBody": "This cake is delicious!",
               "publisher": "The cake makery"
             }
           }
         </script>
       </head>
     </html>
     ```
     2. 구조화된 테스트 도구에서 테스트(https://search.google.com/structured-data/testing-tool/u/0/)
   - **모든 리뷰에 대한 총 평점 추가**
     ```html
     <html>
       <head>
         ...
         <script type="application/ld+json">
           {
             "@context": "http://schema.org/",
             "@type": "Recipe",
             // other recipe structured data
             // review structured data
             "aggregateRating": {
               "@type": "AggregateRating",
               "ratingCount": "18",
               "ratingValue": "4"
             }
           }
         </script>
       </head>
     </html>
     ```
     - 리치 결과 테스트
   - **최종 JSON-LD 샘플**
     - https://codelabs.developers.google.com/codelabs/structured-data/index.html#3

### 8-4. 자바스크립트로 구조화된 데이터 생성

- 자바스크립트로 구조화된 데이터를 생성하는 두가지 방법
  1. Google 태그 관리자
  2. 맞춤 자바스크립트

1. Google 태그 관리자를 사용해 동적으로 JSON-LD 생성
   - Google 태그 관리자(https://tagmanager.google.com/?hl=ko)는 코드를 수정하지 않고 웹사이트에서 태그를 관리할 수 있는 플랫폼
     1. 사이트에 Google 태그 관리자를 설정하고 설치
     2. 컨테이너에 새 맞춤 HTML 태그 추가
     3. 원하는 구조화된 데이터 블록을 태그 컨텐츠에 붙여넣기
     4. 컨테이너
   - **Google 태그 관리자에서 변수 사용**
2. 맞춤 자바스크립트로 구조화된 데이터 생성
   ```javascript
   fetch('https://api.example.com/recipes/123')
     .then((response) => response.text())
     .then((structuredDataText) => {
       const script = document.createElement('script');
       script.setAttribute('type', 'application/ld+json');
       script.textContent = structuredDataText;
       document.head.appendChild(script);
     });
   ```
3. 서버 측 렌더링 사용
4. 구현 테스트
   - 리치 결과 테스트(https://goo.gle/richresults)

### 8-5. 빌드, 테스트 및 출시

- Google Search Console(https://search.google.com/search-console?hl=ko)에서 사이트 소유자로 확인받으면 여러가지 유용한 디버깅 및 모니터링 보고서와 렌더링, 가용성, 구조화된 데이터 색인 생성 테스트용 도구를 제공함.

1. 새 페이지 만들기
   - **권장 절차**
     1. 페이지와 기능 유형에 맞는 구조화된 데이터 가이드라인 준수
     2. 리치 결과 테스트로 코드 유효성 검사
     3. URL 검사 도구를 사용해 페이지가 Google에 어떻게 인식되는지 테스트
     4. Google에서 페이지 색인을 생성하고 나면 적용가능한 리치 결과 상태 보고서를 사용해 오류 및 정상처리된 데이터 확인
     5. 새 템플릿을 출시하거나 코드를 업데이트한 후에는 적용 가능한 리치 결과 상태 보고서를 사용해 주기적으로 모니터링.
2. 기존 페이지 수정하기
3. 직접 조치가 적용된 페이지 수정하기
   - **구조화된 데이터왁 관련된 일반적인 오류**

---

## 9. Google Search
