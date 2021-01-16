# Learn React demo
a demo 
开始一个新项目
``` 
create-react-app demo01
npm i
git add .
git commit -m 'init'
npm run eject
npm start
```


用这个开启一个react+ts新项目...
```
npx create-react-app my-app --template typescript
```
 

组件名称必须以大写字母开头

创建一个react新项目时报各种错误：
```
git add .
git commit -m 'init'
npm run eject
npm start


Failed to compile.

./src/index.tsx
Module not found: Can't resolve './App' in '/Users/taohongjie/Desktop/Learning/learnReact/ts-demo/src'
^C%                                                                               


// 问题
Failed to compile.

./src/index.tsx
Error: [BABEL] /Users/taohongjie/Desktop/Learning/learnReact/my-app/src/index.tsx: Cannot find module '@babel/plugin-syntax-jsx' (While processing: "/Users/taohongjie/Desktop/Learning/learnReact/my-app/node_modules/babel-preset-react-app/index.js")

//解决
```


TypeScript 引入第三方包，报无法找到模块错误
https://www.jianshu.com/p/35742227738e