const open = require("open");
const { promisify } = require('util')
const server = require('../src/ui/backend/index')
const sampleServer = require('../src/ui/example/server')
const clear = require('clear');

const figlet = promisify(require('figlet'))
const listen = promisify(server.listen)

module.exports = async () => {
    const port = 3000
    // await listen(port)

    // 原有界面
    // server.listen(port, async () => {
    //     clear()
    //     // 打印欢迎画面
    //     const data = await figlet('MIKU Welcome')
    //     console.log(data)

    //     open(`http://localhost:${port}`);
    // })

    // 测试界面
    sampleServer.listen(port, async () => {
        clear()
        // 打印欢迎画面
        const data = await figlet('MIKU Sample')
        console.log(data)
        open(`http://localhost:${port}`);
    })

    process.on('SIGTERM', function () {
        process.exit(0);
    });


    // disMemery()
}

function disMemery() {
    const os = require('os')
    const clui = require('clui')
    const Progress = clui.Progress;

    const thisProgressBar = new Progress(20);

    // var used = os.totalmem() - os.freemem()
    // var human = Math.ceil(used / 1000000) + ' MB'
    setInterval(() => {
        console.log(thisProgressBar.update(os.freemem() / os.totalmem()));
    }, 100)

}