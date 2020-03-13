"use strict";

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Console, { LogEntry, LogMessage } from 'react-console-component';
import './main.css';
import * as io from 'socket.io-client';
const socket = io();

interface EchoConsoleState {
	// count: number;
}

class EchoConsole extends React.Component<{}, EchoConsoleState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			count: 0,
		}

		// setTimeout(() => {
		// 	const logEntry: LogEntry = {
		// 		label: '',
		// 		command: '',
		// 		message: []
		// 	}
		// 	if (this.child.console.state.log.length === 0) {
		// 		this.child.console.setState({
		// 			log: [logEntry]
		// 		}, this.child.console.scrollIfBottom());
		// 	}
		// 	this.child.console.log('text\n' + new Date());
		// }, 100);

		socket.on('console', (data: string) => {
			console.log('console receive:', data)
			this.child.console.log(data);
		})
	}
	child: {
		console?: Console,
	} = {};

	echo = (text: string) => {
		// socket.emit("command", {
		// 	command: 'lint',
		// 	payload: {
		// 		data: 'abc'
		// 	}
		// });
		
		socket.emit('console', text)
		this.setState(
			this.child.console.return
		);
	}


	promptLabel = () => {
		return 'Miku>'
	}

	render() {
		return <Console ref={ref => this.child.console = ref}
			handler={this.echo}
			promptLabel={this.promptLabel}
			welcomeMessage={"Welcome to the react-console demo!\nThis is an example of a simple echo console."}
			autofocus={true}
		/>;

	}
}

export function init(element: Element) {
	ReactDOM.render(<EchoConsole />, element);
}
