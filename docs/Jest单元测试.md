# Jest单元测试

>https://blog.csdn.net/weixin_34054866/article/details/88015810 基础知识介绍系统
>
>https://www.jianshu.com/p/bf8070c33824 实例描述完整



## 技术选型

### Jest

Jest是Facebook开源的一个前端测试框架，主要用于React和React Native的单元测试，已被集成在create-react-app中。Jest特点：

1. 易用性：基于Jasmine，提供断言库，支持多种测试风格
2. 适应性：Jest是模块化、可扩展和可配置的
3. 沙箱和快照：Jest内置了JSDOM，能够模拟浏览器环境，并且并行执行
4. 快照测试：Jest能够对React组件树进行序列化，生成对应的字符串快照，通过比较字符串提供高性能的UI检测
5. Mock系统：Jest实现了一个强大的Mock系统，支持自动和手动mock
6. 支持异步代码测试：支持Promise和async/await
7. 自动生成静态分析结果：内置Istanbul，测试代码覆盖率，并生成对应的报告

### Enzyme

Enzyme是Airbnb开源的React测试工具库库，它功能过对官方的测试工具库ReactTestUtils的二次封装，提供了一套简洁强大的 API，并内置Cheerio，

实现了jQuery风格的方式进行DOM 处理，开发体验十分友好。在开源社区有超高人气，同时也获得了React 官方的推荐。



## 测试环境搭建

安装Jest、Enzyme，以及babel-jest。如果React的版本是15或者16，需要安装对应的enzyme-adapter-react-15和enzyme-adapter-react-16并配置。

```bash
npm i jest enzyme babel-jest enzyme-adapter-react-16 -s
```







```
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

```

在package.json中的script中增加"test: jest --config .jest.js"

```js
// .jest.js
module.exports = {
  setupFiles: [
    './test/setup.js',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  testRegex: '.*\\.test\\.js$',
  collectCoverage: false,
  collectCoverageFrom: [
    'src/components/**/*.{js}',
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js"
  },
  transform: {
    "^.+\\.js$": "babel-jest"
  },
};

```

- setupFiles：配置文件，在运行测试案例代码之前，Jest会先运行这里的配置文件来初始化指定的测试环境
- moduleFileExtensions：代表支持加载的文件名
- testPathIgnorePatterns：用正则来匹配不用测试的文件
- testRegex：正则表示的测试文件，测试文件的格式为xxx.test.js
- collectCoverage：是否生成测试覆盖报告，如果开启，会增加测试的时间
- collectCoverageFrom：生成测试覆盖报告是检测的覆盖文件
- moduleNameMapper：代表需要被Mock的资源名称
- transform：用babel-jest来编译文件，生成ES6/7的语法



## JestAPI

- describe(name, fn)：描述块，讲一组功能相关的测试用例组合在一起
- it(name, fn, timeout)：别名test，用来放测试用例
- afterAll(fn, timeout)：所有测试用例跑完以后执行的方法
- beforeAll(fn, timeout)：所有测试用例执行之前执行的方法
- afterEach(fn)：在每个测试用例执行完后执行的方法
- beforeEach(fn)：在每个测试用例执行之前需要执行的方法

全局和describe都可以有上面四个周期函数，describe的after函数优先级要高于全局的after函数，describe的before函数优先级要低于全局的before函数

```js
beforeAll(() => {
  console.log('global before all');
});
 
afterAll(() => {
  console.log('global after all');
});
 
beforeEach(() =>{
  console.log('global before each');
});
 
afterEach(() => {
  console.log('global after each');
});
 
describe('test1', () => {
  beforeAll(() => {
    console.log('test1 before all');
  });
  
  afterAll(() => {
    console.log('test1 after all');
  });
  
  beforeEach(() => {
    console.log('test1 before each');
  });
  
  afterEach(() => {
    console.log('test1 after each');
  });
  
  it('test sum', () => {
    expect(sum(2, 3)).toEqual(5);
  });
  
  it('test mutil', () => {
    expect(sum(2, 3)).toEqual(7);
  });
  
})
```

