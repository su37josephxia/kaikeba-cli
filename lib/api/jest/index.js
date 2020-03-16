const path = require('path')
const { run } = require('../../utils')
const EventEmitter = require('events');
module.exports = payload => {
    console.log('payload:', payload)
    // 声明一个日志事件
    const emitter = new EventEmitter()

    const cmd = getBin()

    const params = []

    // 强制使用package包下的eslint配置
    // params.push('--config', path.resolve(__dirname, './.jest.js'))

    // params.push('--fix')
    
    // 当前目录
    console.log('process.cwd:',process.cwd())

    let srcPath = path.resolve(process.cwd(),'./src')
    // TODO 测试临时位置
    srcPath = path.resolve(__dirname ,'../../template/react-template/src')
    console.log('Jest测试', process.cwd(),srcPath)
    emitter.emit('data', `测试目标：${srcPath}`)
    params.push('--rootDir',srcPath)
    run(emitter, cmd, params)
    return emitter
}

function getBin() {
    const modulePath = require.resolve('jest')
    const bin = path.resolve(modulePath, '../../bin/jest.js')
    return bin
}
