# GitFlow

---

# 목차

1. Git CheatSheet
   - 초기화와 설정
   - 기본 사용법
   - 브랜치
   - 로깅
   - 원격 저장소
   - reset & revert
   - cherry-pick & rebase
2. GitFlow

---

## 1. Git CheatSheet

1. 초기화와 설정

- **git init**
  - 새 저장소 초기화
- **git clone <저장소 url>**
  - 저장소 복제
- **git remote add <원격저장소> <저장소 url>**
  - 새 원격 저장소 추가
- **git config --global user.name "your name"**
  **git config --global user.email "your email"**
  - 전역 사용자명, 이메일 구성
- **git config user.name "your name"**
  **git config user.email "your email"**
  - 저장소별 사용자명, 이메일 구성(해당 디렉터리)
- **git config --global --list**
  - 전역 설정 정보 조회
- **git config --list**
  - 저장소별 설정 정보 조회
- **git config --global color.ui "auto"**
  - Git 출력결과 색상 활성화

2. 기본 사용법

- **git add <파일>**
  - 새로운 파일을 추가하거나 존재하는 파일 스테이징
- **git commit -m "message"**
  - version 만들기
- **git commit -am "message"**
  - 수정되고 추적되는 모든 파일의 변경사항 커밋
- **git checkout HEAD <파일> [<파일>]**
  - 작업 트리의 변경사항 돌려놓기
- **git reset HEAD <파일> [<파일>]**
  - 커밋되지 않고 스테이징된 변경사항 재설정
- **git commit -m "message" --amend**
  - 마지막 커밋 고치기
- **git commit -C HEADER --amend**
  - 이전 커밋 수정하고 커밋 메시지 재사용

3. 브랜치

- **git branch**
  - 지역 브랜치 목록
- **git branch -r**
  - 원격 브랜치 목록
- **git branch -a**
  - 지역, 원격을 포함한 모든 브랜치 목록
- **git branch <새로운 브랜치>**
  - 현재 브랜치에서 새로운 브랜치 생성
- **git checkout <브랜치>**
  - 다른 브랜치 체크아웃
- **git branch -b <새로운 브랜치>**
  - 현재 브랜치에서 새 브랜치 생성후 체크아웃
- **git branch <새 브랜치> <브랜치 생성 위치>**
  - 다른 시작 지점에서 브랜치 생성
- **git branch -f <기존 브랜치> [<브랜치를 생성할 위치>]**
  - 기존 브랜치를 새 브랜치로 덮어쓰기
- **git checkout -m <기존 브랜치> <새로운 브랜치>**
  - 브랜치를 옮기거나 브랜치명 변경
- **git merge <브랜치>**
  - 다른 브랜치를 현재 브랜치로 합치기
- **git cherry-pick <커밋명>**
  - 선택해서 합치기
- **git cherry-pcik -n <커밋명>**
  - 커밋하지 않고 선택하여 합치기
- **git merge --squash <브랜치>**
  - 브랜치의 이력을 다른 브랜치에 합치기
- **git branch -d <삭제할 브랜치>**
  - 브랜치 삭제

4. 로깅

- **git log**
  - 모든 이력 보기
- **git log -p**
  - 변경사항을 보여주는 패치와 함께 로그 표시하기
- **git log -1**
  - 1개의 항목만 보이도록 로그 개수 제한하기
- **git log -20 -p**
  - 20개 항목과 패치만 보이도록 로그 제한하기
- **git log --since="6 hours"**
  - 6개월 동안의 커밋 로그 보기
- **git log --before="2 days"**
  - 이틀 전까지의 커밋 보기
- **git log -1 HEAD-3**
  **git log -1 HEAD^^^**
  **git log -1 HEAD~1^^**
  - HEAD보다 세 개 이전의 커밋 로그보기
- **git log <시작지점>...<끝로그>**
  - 두 지점 사이의 커밋 로그 보기
- **git log --pretty=oneline**
  - 각 항목의 로그 이력 한 줄씩 보기
- **git log - -stat**
  - 각 항목마다 영향 받은 줄의 통계 보기
- **git log - -name-status**
  - 커밋할 시점의 파일 상태 보기
- **git diff**
  - 현재 작업트리와 인덱스 차이점 보기
- **git diff --cached**
  - 인덱스와 저장소 차이점 보기
- **git diff HEAD**
  - 작업 트리와 저장소 차이점 보기

5. 원격 저장소

- **git clone <저장소>**
  - 저장소 복제
- **git clone - -depth 200 <저장소>**
  - 마지막 200개의 커밋만 포함하여 저장소 복제하기
- **git remote add <원격 저장소> <저장소 url>**
  - 새로운 원격 저장소 추가하기
- **git branch -r**
  - 모든 원격 브랜치 목록 보기
- **git branch <새로운 브랜치> <원격 브랜치>**
  - 원격 브랜치에서 지역 브랜치 생성하기
- **git branch <새로운 브랜치> <원격 태그>**
  - 원격 태그에서 지역 브랜치 생성하기
- **git fetch**
  - origin 저장소에서 합치지 않고 지역 브랜치로 변경 사항 가져오기
- **git fetch <원격 저장소>**
  - 원격 저장소에서 합치지 않고 지역 브랜치로 변경 사항 가져오기
- **git pull <원격 저장소>**
  - 원격 저장소에서 변경 사항을 가져와 현재 브랜치에 합치기
- **git pull**
  - origin 저장소에서 변경 사항을 가져와 현재 브랜치에 합치기
- **git push <원격 저장소> <지역 브랜치>:<원격 브랜치>**
  - 지역 브랜치를 원격 브랜치에 푸싱하기
- **git push <원격 저장소> <지역 브랜치>**
  - 지역 브랜치를 동일한 이름의 원격 브랜치에 푸싱하기
- **git remote prune <원격 저장소>**
  - 원격 저장소에서 쓸모가 없어진 원격 브랜치 제거하기
- **git remote rm <원격 저장소>**
  - 원격 저장소를 제거하고 관련된 브랜치도 제거하기

---

## 2. GitFlow

1. Git-flow의 5가지 브랜치
   - **master** : 제품 출시
     - origin/master
     - master 브랜치에 병합한다는 것은 새버전을 배포한다는 것을 의미한다
     - master 브랜치에서 커밋될 때 CICD pipeline을 구축해서 운영 서버로 자동배포한다.
   - **develop** : 다음 출시 버전 개발
     - origin/develop
     - 프로젝트를 진행하는 개발자들이 함께 보며 업무를 진행하는 브랜치
     - develop 브랜치의 코드가 안정화되고 배포할 준비가 되면 master 브랜치로 병합하고 배포버전으로 태그를 단다.
   - **feature** : 기능 개발
     - 시작 브랜치 : develop
     - 병합대상 브랜치 : devlop
     - 브랜치 이름 규칙 : master,develop,release-, hotfix-를 제외
     - git-flow 이용시 feature/branch-name 형식
     - 이슈 추적 사용시 feature/(issue-number)-(feature-name)
   - **release** : 이번 출시 버전 준비
     - 시작 브랜치 : develop
     - 병합대상 브랜치 : develop, master
     - 브랜치 이름 규칙 : release-\*
     - relase 브랜치는 실제 배포할 상태가 된 경우에 생성하는 브랜치
     - release를 master 브랜치로 병합한다. 나중에 이 배포버전을 찾기 쉽도록 태그를 만들어 현재 병합되는 커밋을 가리키도록 한다. 이때 배포된 기능에 반영될 수 있도록 develop 브랜치에도 함께 병합한다.
   - **hotfix** : 출시 버전에서 발생한 버그 수정
     - 시작 브랜치 : master
     - 병합대상 브랜치 : develop, master
     - 브랜치이름 규칙 : hotfix-\*
     - 이미 배포한 운영버전에서 발생한 문제를 해결하기 위해 만든다.
