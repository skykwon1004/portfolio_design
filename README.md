# 권은진 포트폴리오
- **`작업 기간 :`** 24.03 - 진행 중
- **`배포 링크 :`** [링크](https://portfolio-eunjin.netlify.app/){:target="_blank"}
<!-- - **`Figma 구상도 :`** [디자인 시안](https://www.figma.com/file/1Gmg1R2fYyPPrbyeWpOkWa/%ED%8F%AC%EC%BC%93%EB%AA%AC-%EB%8F%84%EA%B0%90?type=design&node-id=0%3A1&mode=design&t=hblSPKcI41uNVdQo-1) -->
- **`Stack` :** Vite, React, TypeScript, Zustand, Tailwind

## 설명
노션, 템플릿 소스 등을 이용할 수 있었지만 저만의 포트폴리오 사이트를 가지고 싶어 제작했습니다.
주요 색상인 black & yellow로 심플하고 차분한 느낌을 줬고,
간단한 자기 소개와 프로젝트, 이력 등 중요도 순으로 배치해 내용을 구성했습니다.
이를 통해 포트폴리오를 보는 사람들에게 원하는 정보를 쉽게 전달할 수 있도록 했습니다.

## 작업 사항
- TypeScript 써서 만들어 보기
- `Vite` 활용해 Webpack 기반 서버에 비해 응답성이 뛰어난 개발 경험
- `Zustand`활용해 다크모드/라이트모드 구현
- `Tailwind CSS`를 활용해 일관된 스타일의 반응형 작업
- `react-scroll`라이브러리 활용해 header의 각 nav 메뉴로 스크롤 이동하게 구현

<!-- ## Trouble Shooting
- **`문제점 :`** 포켓몬 데이터 리스트를 업데이트 하는 useEffect가 초기 렌더링시 1번만 호출되어야 하는데 3번 호출 되는 이슈
- **`해결 방안 :`** 초기 렌더링 시 모켓몬 리스트가 빈 배열로 들어오는데 이 때 useEffect가 2번 호출되는 이슈를 확인, useEffect에 포켓몬 데이터 리스트가 있을 경우에만 실행하도록 수정.
```typescript
useEffect(() => {
  const eventScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
      upDatePokemon();
    }
  };

  if (pokemonList.length > 0) {
    window.addEventListener('scroll', eventScroll);
    return () => {
      window.removeEventListener('scroll', eventScroll);
    };
  }
}, [pokemonList]);
``` -->
<!-- 
## 추가 기능(예정)
- [x] 검색 기능
  - [ ] 필터링 기능
- [ ] 반응형
- [ ] 마이페이지
   - [ ] 간단한 로그인
   - [ ] 북마크 기능
- [x] 한국어, 영어 지원
  - [ ] 한국어 검색 가능하도록 하기
- [ ] 이미지 로딩 시 끊김 현상 개선하기
- [ ] 디테일 화면 적용 느림 현상 개선하기

## 관련 링크
[기능] [다크모드 구현하기](https://velog.io/@crg1050/다크모드-구현-하기-react-reduxToolkit-styled-components)<br>
[기능] [검색 기능 구현하기](https://velog.io/@crg1050/포켓몬-도감-URLSearchParams메서드를-활용해-검색-페이지-구현)<br>
[이슈] [useEffect 불필요한 호출 막기](https://velog.io/@crg1050/포켓몬-도감-불필요한-데이터-불러오는-이슈)<br>
[이슈] [불필요한 렌더링 막기](https://velog.io/@crg1050/포켓몬-도감-컴포넌트-분리하기)<br>

## 작업 화면
|Main|Detail|
|------|---|
|![스크린샷 2024-02-01 오전 12 53 28](https://github.com/jieun419/poke-dex/assets/109754988/505a473e-1480-4658-a6b4-aa3983f3eafd)|![스크린샷 2024-02-01 오전 12 53 38](https://github.com/jieun419/poke-dex/assets/109754988/6d198a72-278d-4c68-8132-649c1268ccca)|
|- 상단 로고와 검색버튼, 다크 모드 버튼<br>- 검색창(작업 전)<br>- 포켓몬 리스트를 확인 할 수 있다.|- 포켓몬 카드 클릭 시 상세 정보를 확인할 수 있다.|

|Dark Mode|Dark Mode Detail|
|------|---|
|![스크린샷 2024-02-01 오전 12 54 00](https://github.com/jieun419/poke-dex/assets/109754988/af888682-82e1-4896-beaa-963eba53f516)|![스크린샷 2024-02-01 오전 12 54 12](https://github.com/jieun419/poke-dex/assets/109754988/dc3be58e-6dbe-4022-8385-d44ecc036eff)|
|- 다크 모드의 화면|- 다크 모드의 화면|

|Search Page|Search Page - Nothing|
|------|---|
|![스크린샷 2024-02-01 오전 12 54 41](https://github.com/jieun419/poke-dex/assets/109754988/03b2b008-3a1d-4c9f-b547-dfd02a93e566)|![스크린샷 2024-02-01 오전 12 54 54](https://github.com/jieun419/poke-dex/assets/109754988/e0016f0a-75f2-4db9-88aa-af837b6c95cf)|
|- 검색창 입력 후 엔터시 검색 페이지로 이동<br>- 뒤로가기 버튼 클릭시 이전 기록으로 이동<br>- 검색한 리스트 표시|- 검색한 포켓몬이 없을 경우|

### Git Commit( feat: “커밋 내용” )

```
init: 초기 세팅을 했을 경우
setup: 폴더 혹은 전체적인 구조의 변경이 있을 경우
feat: 새로운 기능을 추가할 경우
fix: 버그를 고친 경우
docs: 문서를 수정한 경우
style: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
refactor: 프로덕션 코드 리팩토링
test: 테스트 추가, 테스트 리팩토링 (코드 변경 X)
chore: 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우 (코드 변경 X)
design: CSS 등 사용자 UI 디자인 변경
comment: 필요한 주석 추가 및 변경
rename: 파일 혹은 폴더명을 수정하는 경우
remove: 사용하지 않는 파일 혹은 폴더를 삭제하는 경우
``` -->