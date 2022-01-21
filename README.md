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
## eslint
> eslint install 
  
```npm i -D eslint```
> .eslintrc.json 파일 설정, 설정이 끝나면 필요한 패키지 자동 설치(@typescript-eslint/eslint-plugin, @typescript-eslint/parser)     
   
```npx eslint --init```  
```
How would you like to use ESLint?
 To check syntax and find problems
What type of modules does your project use?
 JavaScript modules (import/export)
Which framework does your project use?
 None of these
Does your project use TypeScript? (y/N)
 y
Where does your code run? (Press space to select, a to toggle all, i to invert selection)
 Node
What format do you want your config file to be in? (Use arrow keys)
 JSON
The config that you've selected requires the following dependencies:
 @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
Would you like to install them now with npm? (Y/n)
 Y
```
> .eslintrc.json 파일생성된 후 설정 추가
```
{
  ...
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "parserOptions": {
    "project": "./tsconfig.json",
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "ignorePatterns": ["dist/", "node_modules/"]
  ...
}
```
> eslint 적용 확인   

```const a: String = "abc" <- error!```

## prettier
> prettier install   

```npm i -D prettier```   
> eslint 와 prettier 충돌되지 않도록 isntall(eslint-config-prettier는 prettier와 충돌되는 eslint 규칙들을 무시하는 설정이고, eslint-plugin-prettier는 Prettier를 사용해 포맷팅을 하도록 ESLint 규칙을 추가하는 플러그인)

```npm i -D eslint-config-prettier eslint-plugin-prettier```
> .eslintrc.json, .prettierrc.json 설정

```
.prettierrc.json

{
  "printWidth": 80,			// 한 줄의 라인 수
  "tabWidth": 2,			// tab의 너비
  "useTabs": false,			// tab 사용 여부
  "semi": true,				// ; 사용 여부
  "singleQuote": true,			// 'string' 사용 여부
  "quoteProps": "consistent",		// 객체 property의 따옴표 여부
  "trailingComma": "es5",		// 끝에 , 사용 여부
  "bracketSpacing": true,		// Object literal에 띄어쓰기 사용 여부 (ex: { foo: bar })
  "arrowParens": "always",		// 함수에서 인자에 괄호 사용 여부 (ex: (x) => y)
  "endOfLine": "lf"			// 라인 엔딩 지정
}
```

> eslint에서 prettier를 extends에 사용하기 위해 plugin:prettier/recommended, prettier/@typescript-eslint를 추가  
```
.eslintrc.json

{
  ...
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  ...
}
```
> 완료 후 vscode format on save 
