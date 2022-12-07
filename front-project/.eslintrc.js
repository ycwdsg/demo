module.exports = {
  parser: 'vue-eslint-parser',
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    './.eslintrc-auto-import.json',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: '*.html',
      processor: 'vue/.vue'
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.vue'],
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'import/extensions': 0,
    'import/no-named-as-default': 0,
    'no-return-await': 0,
    // 关闭引入文件报错提醒
    'import/no-unresolved': 0,
    // 关闭单个导出命名模块报错提醒
    'import/prefer-default-export': 0,
    'vue/multi-word-component-names': 0,
    // 关闭promise必须then、catch捕获
    '@typescript-eslint/no-floating-promises': 0,
    // 关闭限制js某些语法
    'no-restricted-syntax': 0,
    'no-unused-expressions': 0,
    'no-undef': 0,
    'no-param-reassign': 0,
    // 关闭非空断言警告
    '@typescript-eslint/no-non-null-assertion': 0,
    // 关闭禁用返回any类型
    '@typescript-eslint/no-unsafe-return': 0,
    // 关闭禁用any赋值
    '@typescript-eslint/no-unsafe-assignment': 0,
    // 关闭禁止any的成员访问
    '@typescript-eslint/no-unsafe-member-access': 0,
    // 启用eval函数
    'no-eval': 0
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts']
      }
    }
  }
};
