# Python

- References
  - https://www.fun-coding.org/
  - https://dojang.io/course/view.php?id=7

---

## 목차

1. 파이썬 기초
   - 입출력, 형변환
   - 변수, 조건문, 리스트, 문자열
   - 반복문, 조건문, 리스트
   - 튜플, 딕셔너리, 집합
   - 문자열 관련 함수
   - 정규 표현식
2. 파이썬 특수 문법
   - 중첩 함수(Nested function)
   - First-class function
   - Closure function
   - 데코레이터(Decorator)
   - 이터레이터(iterator)
   - 파이썬 Comprehension
   - 파이썬 제너레이터(Generator)
3. 파이썬 객체지향 프로그래밍
   - 프로그래밍 언어론
   - OOP
   - class와 object
   - 생성자와 소멸자 메서드
   - public, private, protected
   - 상속
   - 클래스 속성과 메서드
   - 연산자 중복(Operator Overloading)
   - 다중 상속
   - 포함(Composition)
   - SOLID
   - 디자인패턴
   - 특별한 파이썬 클래스 작성법(namedtuple)
4. 파이썬 자료구조
   - 데이터구조와 알고리즘이란
   - 시간복잡도
   - 공간복잡도
   - 배열
   - 큐
   - 스택
   - 링크드리스트
   - 해쉬테이블
   - 블록체인과 해쉬
   - 트리
   - 힙
5. 파이썬 기본 알고리즘
   - 알고리즘 복잡도 표현 방법
   - 버블 정렬
   - 삽입 정렬
   - 선택 정렬
   - 재귀 용법
   - 동적계획법과 분할 정복
   - 병합 정렬
   - 퀵 정렬
   - 순차 탐색
   - 이진 탐색
   - 이진 트리 탐색
6. 파이썬 고급 알고리즘
   - 그래프
   - 깊이 우선 탐색(DFS)
   - 너비 우선 탐색(BFS)
   - 탐욕 알고리즘
   - 최단 경로 알고리즘
   - 최소 신장 트리(Kruskal Algorithm)
   - 최소 신장 트리(Prim's Algorithm)
   - 백 트래킹 기법

---

## 1. 파이썬 기초

1. 입출력, 형변환

   - 입력

     ```python
     x = input('문자열을 입력하세요: ') # hello python(입력)
     print(x) # hello python

     # 두 수를 입력받아 더하기
     a = int(input('첫번째 숫자: '))
     b = int(input('두번째 숫자: '))
     print(a+b)

     # 입력 값을 변수 두 개에 저장
     a,b = input('숫자 두 개를 입력 : ').split(' ') # 1 3
     print(int(a)+int(b)) # 4

     # map을 사용해 정수로 변환하기
     a,b = map(int, input('숫자 두 개를 입력 : ').split())
     print(a + b)
     ```

   - 출력
     ```python
     # 여러개 값 출력
     print(1,2,3)
     print('python','basic')
     # sep : 값 사이에 문자 넣기
     print(1,2,3, sep=", ")
     print('python','basic',sed="-")
     # \n로 줄바꿈
     print(1, 2, 3, sep='\n')
     # end
     print(1, end=' ')
     print(2, end=' ')
     print(3)
     ```
   - 형변환
     ```python
     number = 1000
     print(type(number)) # <class 'int'>
     number = str(number)
     print(type(number)) # <class 'str'>
     ```

2. 변수, 조건문, 리스트, 문자열

   - 문자열

     ```python
     # 문자열
     string = 'python'
     # 여러 줄
     hello = '''Hello, world!
     안녕하세요.
     Python입니다.'''
     ```

   - 리스트

     ```python
     # 리스트
     a = [1,2,3,4]
     player = ['son', 29, 181.3, True]

     # 빈 리스트
     a = []
     b = list()

     # range로 리스트 만들기
     a = list(range(10))
     b = list(range(3,11))
     c = list(range(-3, 9, 2))
     d = list(range(10, 0, -2))
     ```

   - if, elif, else

     ```python
     # if문 들여쓰기 유의
     if x = 7:
         print('x는 7입니다')

     # if문에서 코드 생략
     if x = 7:
         pass # TODO: x가 7일때 처리 로직 필요

     # 중첩 if문
     if x >= 0:
        print('x는 0이상')

        if x == 7:
            print('x는 7')

        if x == 10:
            print('x는 10')
     ```

3. 반복문, 조건문, 리스트
4. 튜플, 딕셔너리, 집합
5. 문자열 관련 함수
6. 정규 표현식
