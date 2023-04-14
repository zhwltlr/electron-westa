## 실행 화면

<img src="https://user-images.githubusercontent.com/100506719/226811485-accb8802-44a6-46d7-9a84-4b690aff39bd.png" alt="exeImg" />

<br />
<br />

## 적용 순서

---

### 1 . yarn add electron concurrently wait-on cross-env

    // package.json
    "main": "public/main.js",
    "homepage": "./",
    "name": "react-electron",
    "author": "zhwltlr",
    "description": "test",
    "license": "ISC",

- concurrently는 리액트와 일렉트론을 같이 사용하기 위한 모듈,
- wait-on는 concurrently로 리액트와 일렉트론을 설정한 상태에서의 순서를 정해주는 역할
- cross-env는 특정 OS에 상관없이 환경변수를 적용하는 역할

<br />

### 2. yarn add @electron/remote

- @electron/remote 모듈은 Electron.js 버전 12 이상에서만 사용할 수 있으며, 이전 버전에서는 remote 모듈을 사용한다. remote 모듈은 보안 취약점이 있어서, 앵간하면 electron/remote 모듈을 사용하는 것이 권장된다고 한다.

<br />

### 3. yarn add @electron-forge/cli

- 애플리케이션 프로젝트 구조 생성 : 기본적인 프로젝트 구조를 생성
- 설정 파일 생성 : 개발에 필요한 설정 파일들을 자동으로 생성, ex. package.json, webpack.config.js
- 빌드 도구 : Electron Forge는 애플리케이션 빌드에 필요한 도구들을 제공. ex.웹팩을 사용하여, JavaScript, HTML, CSS 파일들을 빌드 & 패키징
- 패키징 : Electron Forge는 애플리케이션을 패키징하는 기능, Windows, MacOS, Linux 등의 다양한 플랫폼에서 동작하는 설치 파일을 생성
- 배포 : GitHub, AWS, Azure 등의 클라우드 서비스를 사용하여 애플리케이션을 배포할 수 있게 해줌

- <b> npm run make</b>

<br />

---

## 더 자세한 설명은 블로그 참조

- <a href="https://blog.naver.com/zhwltlr/223066117498">블로그 바로가기</a>
