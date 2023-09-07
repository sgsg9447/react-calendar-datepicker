module.exports = {
  root: true,
  //프로젝트의 루트에서 찾아지는 최상위 설정 파일
  env: { browser: true, es2020: true },
  //브라우저 전역 변수를 인식, ES2020 글로벌들과 구문들을 사용 가능하게 함
  extends: [
    "plugin:@typescript-eslint/recommended",
    //TypeScript에 권장되는 기본 규칙들
    "plugin:react-hooks/recommended",
    //React Hooks의 권장 규칙들
    "plugin:unicorn/recommended",
    //Unicorn 플러그인의 권장 규칙들
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  //ESLint 검사에서 제외할 패턴 (빌드 된 결과물 디렉토리, 해당 ESLint 설정 파일 자체)
  parser: "@typescript-eslint/parser",
  //TypeScript 코드를 파싱하기 위해 사용되는 파서
  plugins: [
    //프로젝트에서 사용하는 추가 ESLint 플러그인들
    "eslint-plugin-unicorn",
    "react-refresh",
    "simple-import-sort",
    "unused-imports",
    "import",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    //React 컴포넌트를 export 할 때의 규칙
    "unicorn/filename-case": "off",
    //파일 이름의 케이스(대소문자 패턴)를 강제하는 규칙 off
    "unicorn/prevent-abbreviations": "off",
    //축약어 사용피하도록 권장 off
    "unicorn/no-null": "off",
    //null 값의 사용을 피하도록 권장 off
    "unicorn/prefer-query-selector": "off",
    //querySelector메서드의 사용을 getElementById, getElementsByClassName 등 대신 권장하는 규칙 off
    "unicorn/better-regex": "off",
    //더 간결하고 명확한 정규 표현식을 사용하도록 권장하는 규칙 off
    "unicorn/no-useless-undefined": "off",
    //불필요하게 undefined를 반환하거나 설정하는 것을 방지하는 규칙 off
    "simple-import-sort/imports": "error",
    //import 문장의 정렬을 강제하는 규칙
    "simple-import-sort/exports": "error",
    //export 문장의 정렬을 강제하는 규칙
    "import/first": "error",
    //모든 import 문장이 다른 코드 이전에 있어야 함을 요구하는 규칙
    "import/newline-after-import": "error",
    //import 문장 다음에는 새 줄이 와야 함
    "import/no-duplicates": "error",
    //중복된 import 문장을 방지하는 규칙
    "no-unused-vars": "off",
    //사용되지 않는 변수를 허용하지 않는 ESLint의 기본 규칙 off
    "unused-imports/no-unused-imports": "error",
    //사용되지 않는 import를 허용하지 않는 규칙입니다
    "unused-imports/no-unused-vars": [
      //사용되지 않는 변수를 허용하지 않는 규칙(특정 패턴(예: _로 시작하는 변수)은 예외로 처리)
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
