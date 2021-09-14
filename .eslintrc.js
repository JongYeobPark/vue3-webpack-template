module.exports = {
  env: {
    //브라우저와 노드 환경에서 코드 검사를 하겠다는 의미
    browser: true,
    node: true
  },
  extends: [
    //코드검사를 할 기본적인 규칙들

    //vue
    //'plugin:vue/vue3-essential',            // Lv1 약한 규칙
    'plugin:vue/vue3-strongly-recommended',   // Lv2 중간으로 엄격한 규칙
    //'plugin:vue/vue3-recommended',          // Lv3 가장 엄격한 규칙

    //js
    'eslint:recommended'                      //eslint에서 제공하는 규칙
  ],
  parserOptions: {
    //ES6이상에서의 문법을 구버전 브라우저에서 돌아갈수 있게
    //ES5로 변경시키켜주는 역할
    parser: 'babel-eslint' 
  },
  rules: {
    "vue/html-closing-bracket-newline": ["error", {
      //닫히는 > 를 새로운 줄에 적용하고 싶지 않은 경우
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        //빈태그부분에 슬래시 기호 여부
        //always:쓴다 never:안쓴다
        "void": "always",
        //div같은 내용이 들어가는 태그 사이에 내용이 없으면 닫히는 태그를 쓸건지 여부
        //always: 쓴다, never: 안쓴다
        "normal": "never",
        //컴포넌트에 내용이 들어가는 태그 사이에 내용이 없으면 닫히는 태그를 쓸건지 여부
        //always: 쓴다, never: 안쓴다
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  }
}