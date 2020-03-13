import * as React from 'react';
import './App.css';
import { Button } from 'antd';
import io from 'socket.io-client';
const socket = io();



const logo = require('./logo.svg');
class App extends React.Component<{}, {}> {
  // socket: any
  constructor(props: any) {
    super(props);
    this.state = { isToggleOn: true };

    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleClick = this.handleClick.bind(this);

    // this.socket = io()

    socket.on('console', (data: any) => {
      console.log('console receive:', data)
    })
  }
  handleClick() {
    console.log('click...lint')
    // this.setState(prevState => ({
    //   isToggleOn: !prevState.isToggleOn
    // }));

    socket.emit("command", {
      command: 'lint',
      payload: {
        data: 'abc'
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button type="primary" onClick={this.handleClick} >Lint</Button>
      </div>
    );
  }
}

export default App;
