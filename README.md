# kaikeba-cli

> KKB项目工程化辅助工具
对项目开发周期中遇到的代码格式规范，TDD测试驱动，部署上线，持续集成提供辅助支持。



## Installing / Getting started

```
kkb init
kkb ui
```





## Developing
### 命令行部分
```bash
# clone first
npm i
npm link
kkb ui

```
### ui部分
## 启动后端
```bash
cd src/ui/backend
nodemon index.js

cd src/ui/frontend
npm start
```






## Deploying / Publishing



## Features
- 代码格式检查
    - ESLint规则
    - Prettier格式化代码
    - EditorConfig编码样式统一
    - 设置Git提交的校验钩子
- Jest单元测试
    - 测试驱动开发
    - 覆盖率报告
    - 设置Git提交的校验钩子
- Docker部署支持
    - 一键服务器部署
- TravisCI支持
    - 自动化回归测试
    - 服务器部署
    - Codecov是一个开源的测试结果展示

