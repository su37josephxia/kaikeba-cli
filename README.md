# kaikeba-cli
## 项目简介

​	miku-cli是一款可视化项目管理cli工具，用户可以基于此管理工具来一键化配置项目代码风格、单元测试、基于Docker部署等。

​	命名miku。取自初音未来Hatsune Miku，虽为虚拟，但仍象征未来之可能性，也代表了些新生的、皆为合成之物所带来的亮点，就像我们的cli工具一样一键启动。



## 项目亮点
- 支持react的可视化项目化管理工具
- 全部UI界面操作
- 包含所有工程周期
- 相关配置文章展出


## 项目核心功能模块
* 创建开发模板
  * 下载
  * npm
* UI界面
* 代码风格统一
  * Eslint
  * Prettier
  * EditorConfig
* Jest单元测试
  * 执行测试
  * 覆盖率检测
* 提交前校验钩子配置
  * 代码格式校验
  * Jest
* TravisCI配置
  * 模板
  * 配置
* 部署
  * 基于Docker
  * nginx模板
  * 反向代理配置
  * 域名配置
* 代码监控
  * sentry
* 生成Readme模板
* 修改package描述




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

