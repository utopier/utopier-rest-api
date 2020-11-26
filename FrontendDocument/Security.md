# Security

- Reference
  - https://developers.google.com/web/fundamentals/security
  - https://owasp.org/www-project-top-ten/

---

## 목차

1. Overview
2. Content Security Policy
3. Encrypting Data In Transit
   - Why HTTPS matters
   - Important Security Terminology
   - Enabling HTTPS on Your Servers
4. Preventing Mixed Content
   - What Is Mixed Content?
   - Preventing Mixed Content
5. Help, I've been hacked
   - Overview
   - How do I know if my site is hacked?
   - Top ways websites get hacked by spammers
   - Build a support team
   - Quarantine your site
   - Access spam damage
   - Hacked with malware
   - Identify the vulnerability
   - Clean and maintain your site
   - Request a review
   - Glossary for hacked sites
   - FAQs for hacked sites
6. OWASP 10
   - Injection
   - Broken Authentication
   - Sensitive Data Exposure
   - XML External Entities(XXE)
   - Broken Access Control
   - Security Misconfiguration
   - Cross-Site Scripting XSS
   - Insecure Deserialization
   - Using Components with Known Vulnerabilities
   - Insufficient Logging & Monitoring

---

## 1. Overview

1. 전송중인 데이터 암호화
   - HTTPS 사용
2. 콘텐츠 보안 정책
   - CSP로 페이지가 로드할 수 있는 리소스와 리소스가 로드 되는 위치를 세부적으로 제어
3. 혼합 콘텐츠 방지
   - HTTPS와 HTTP가 혼합 된 콘텐츠를 찾아 수정

---

## 2. Content Security Policy

- 웹의 보안 모델은 동일 출처 정책을 기반으로 함.
- XSS는 의도된 콘텐츠와 함께 악성코드를 전송하도록 사이트를 속여 동일 출처 정책을 우회함.
- 브라우저는 페이지에 표시되는 모든 코드를 해당 페이지의 보안 출처에 합법적으로 일부로 신뢰하기 때문에 문제가 발생함.
- 최신 브라우저에서 XSS 공격을 방어 하기 위해 콘텐츠 보안 정책(CSP)을 사용해야함.

1. 소스 허용 목록
   - **정책은 다양한 자원에 적용됨**
   - **구현 세부 정보**
   - **샌드 박싱**
   - **메타 태그**
2. 인라인 코드는 사용하지 않기
   - **인라인 코드를 사용해야 하는 경우**
3. 평가도
4. 보고
   - **보고서 전용**
5. 실제 사례
   - **소셜 미디어 위젯**
   - **잠금**
   - **SSL 전용**
6. 미래

---

## 3. Encrypting Data In Transit

### 3-1. Why HTTPS matters

1. HTTPS는 웹 사이트의 무결성을 보호함
2. HTTPS는 사용자의 개인 정보와 보안을 보호함
3. HTTPS는 웹의 미래

### 3-2. Important Security Terminology

1. 공개 및 개인 키 쌍이란
2. 인증 기관이란
3. 인증서 서명 요청이란

### 3-3. Enabling HTTPS on Your Servers

1. 키 및 인증서 서명 요청 생성
   - **공개/개인 키 쌍 생성**
   - **인증서 서명 요청 생성**
   - **인증 기관에 CSR 제출**
2. 서버에서 HTTPS 활성화
3. 사이트 내 URL을 상대적으로 만들기
4. HTTP를 HTTPS로 리디렉션
5. 엄격한 전송 보안 및 보안 쿠키 켜기
   - **검색 순위**
   - **공연**
   - **리퍼러 헤더**
   - **광고 수익**

---

## 4. Preventing Mixed Content

### 4-1. What Is Mixed Content?

1. 혼합 콘텐츠의 두가지 유형
   - **수동 혼합 콘텐츠**
   - **활성 혼합 콘텐츠**
2. 혼합 콘텐츠 사양
   - **이전 브라우저**

### 4-2. Preventing Mixed Content

1. 사이트를 방문해 혼합 콘텐츠 찾기
   - **사이트에서 혼합 콘텐츠 찾기**
   - **혼합 콘텐츠 수정**
   - **비표준 태그 사용주의**
2. 규모에서 혼합된 콘텐츠 처리
   - **콘텐츠 보안 정책**
   - **콘텐츠 보안 정책과 혼합된 콘텐츠 찾기**
   - **CSP로 보고하는 대안**
   - **안전하지 않은 요청 업그레이드**
   - **모든 혼합 콘텐츠 차단**

---

## 5. Help, I've been hacked

### 5-1. Overview

### 5-2. How do I know if my site is hacked?

### 5-3. Top ways websites get hacked by spammers

### 5-4. Build a support team

### 5-5. Quarantine your site

### 5-6. Access spam damage

### 5-7. Hacked with malware

### 5-8. Identify the vulnerability

### 5-9. Clean and maintain your site

### 5-10. Request a review

### 5-11. Glossary for hacked sites

### 5-12. FAQs for hacked sites

---

## 6. OWASP 10

### 6-1. Injection

- https://owasp.org/www-project-top-ten/2017/A1_2017-Injection
- SQL, NoSQL, OS, LDAP Injection은 공격자가 신뢰할 수 없는 데이터를 쿼리 or 명령의 일부로 인터프리터에 전송 될 때 발생.
- 의도치 않은 명령을 실행하거나 적절한 권한 없이 데이터에 액세스하도록 할 수 있음.

### 6-2. Broken Authentication

- https://owasp.org/www-project-top-ten/2017/A2_2017-Broken_Authentication
- 공격자가 암호, 키, 세션 토큰을 수정하거나 가로채서 다른 사용자 신원을 획득하는 것.

### 6-3. Sensitive Data Exposure

- https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure
- 공격자는 취약하게 보호되는 데이터를 수정하거나 가로채서 범죄를 수행함.
- 브라우저와 데이터를 교환할 때 특별한 예방 조치가 필요.

### 6-4. XML External Entities(XXE)

- https://owasp.org/www-project-top-ten/2017/A4_2017-XML_External_Entities_(XXE)
- 오래되거나 잘못 구성된 XML 프로세서는 XML 문서 내에서 외부 엔티티 참조를 평가함.
- 외부 엔티티는 파일 URI 처리기, 내부 파일 공유, 내부 포트 검색, 원격 코드 실행 및 서비스 거부 공격을 사용해 내부 파일을 공개하는데 사용할 수 있음.

### 6-5. Broken Access Control

- https://owasp.org/www-project-top-ten/2017/A5_2017-Broken_Access_Control
- 공격자는 손상된 액세스를 악용해 다른 사용자 계정에 접속, 데이터 획득 및 수정, 액세스 권한 변경 등을 수행.

### 6-6. Security Misconfiguration

- https://owasp.org/www-project-top-ten/2017/A6_2017-Security_Misconfiguration
- 가장 일반적인 문제로 안전하지 않은 기본 구성, 불완전하거나 임시 구성, 개방형 클라우드 스토리지, 잘못 구성된 HTTP 헤더, 민감한 정보가 포함된 자세한 오류 메시지로 문제가 발생함.
- 모든 OS, Framework, Library, Application Program을 안전하게 구성해야 하며 적시에 패치 및 업그레이드를 해야함.

### 6-7. Cross-Site Scripting XSS

- https://owasp.org/www-project-top-ten/2017/A7_2017-Cross-Site_Scripting_(XSS)
- XSS 결함은 애플리케이션이 적절한 유효성 검사나 이스케이프 없이 새 웹 페이지에 신뢰할 수 없는 데이터를 포함하거나 HTML, JavaScript로 생성할 수 있는 브라우저 API를 사용해 사용자 제공 데이터로 기존 웹페이지를 업데이트 할 떄마다 발생함.
- XSS를 사용해 브라우저에서 스크립트를 실행해 사용자 세션을 가로채거나 웹사이트를 손상시키거나 악성사이트로 리디렉션 할 수 있음.

### 6-8. Insecure Deserialization

- https://owasp.org/www-project-top-ten/2017/A8_2017-Insecure_Deserialization
- 안전하지 않은 역직렬화는 종종 원격 코드 실행으로 발생함.
- 역직렬화 결함으로 인해 원격 코드가 실행되지 않더라도 재생 공격, 주입 공격, 권한 상승 공격을 포함한 공격을 수행하는데 사용할 수 있음.

### 6-9. Using Components with Known Vulnerabilities

- https://owasp.org/www-project-top-ten/2017/A9_2017-Using_Components_with_Known_Vulnerabilities
- 라이브러리, 프레임워크, 기타 소프트웨어 모듈과 같은 구성요소는 응용 프로그램과 동일한 권한으로 실행됨.
- 취약한 구성요소가 악용되면 심각한 데이터 손실, 서버 탈취를 촉진할 수 있음.

### 6-10. Insufficient Logging & Monitoring

- https://owasp.org/www-project-top-ten/2017/A10_2017-Insufficient_Logging%2526Monitoring
- 침해를 감지하는데 걸리는 시간은 200일 이상이며 일반적으로 내부 프로세스 or 모니터링이 아닌 외부 당사자가 감지함.
- 불충붕한 로깅 및 모니터링은 사고 대응 누락으로 공격자가 시스템을 추가 공격하고 지속성을 유지하고 더 많은 시스템으로 피벗하고 데이터 변조, 추출, 파괴할 수 있도록 함.
