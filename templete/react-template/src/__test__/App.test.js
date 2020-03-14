import React from 'react'
import Enzyme, { shallow } from 'enzyme'     //本例子只以shallow(浅渲染，只渲染父组件)为例
import App from '../App'     //导入需测试的组件

import Adapter from 'enzyme-adapter-react-16'; //适应React-16
Enzyme.configure({ adapter: new Adapter() })    //适应React-16，初始化

test('App', () => {
  const item = shallow(<App />); //传入数据'item'
console.log('App',item.text())
  expect(item.text()).toContain('Edit src/App.js and save to reload.Learn React')
})