## node.js, express, typescript
> ts-node는 typescript 실행을 위해, tsc-watch는 저장시 실시간 컴파일해서 서버에 반영.  

```npm i express```   
```npm i -D typescript ts-node @types/node @types/express tsc-watch```   

> package.json 파일 script에   
> "start": "tsc-watch --onSuccess \"ts-node dist/app.js\"" 추가   
> watch를 성공하면 dist/app.js를 실행 시킨다는 의미.  

```
{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "nodejs practice",
  "main": "index.js",
  "scripts": {
    "start": "tsc-watch --onSuccess \"ts-node dist/app.js\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "devDependencies": {
    "@types/express": "^4.17.13",
    "@types/node": "^17.0.10",
    "ts-node": "^10.4.0",
    "tsc-watch": "^4.6.0",
    "typescript": "^4.5.5"
  }
}
```

```npx tsc --init```
>tsconfig(typescript 설정파일)
```
{
 "compilerOptions": {

  "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
  "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
  "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지 
  "checkJs": true, // 일반 js 파일에서도 에러체크 여부 
  "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
  "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
  "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
  "outDir": "./", //js파일 아웃풋 경로바꾸기
  "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
  "removeComments": true, //컴파일시 주석제거 

  "strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
  "noImplicitAny": true, //any타입 금지 여부
  "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기 
  "strictFunctionTypes": true, //함수파라미터 타입체크 강하게 
  "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
  "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
  "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기

  "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
  "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
  "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기 
  "noFallthroughCasesInSwitch": true, //switch문 이상하면 에러내기 
 },
 "include": ["src/**/*"],
 "exclude": ["node_modules"] //컴파일을 제외시킬 폴더
}
```
