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
    params.push('-c', path.resolve(__dirname, './.eslintrc.json'))

    // params.push('--fix')
    
    // 当前目录
    const srcPath = path.resolve(process.cwd(), './lib/utils')
    console.log('代码检查目录', process.cwd(), srcPath)

    emitter.emit('data', `检查代码目录：${process.cwd(), srcPath}`)
    params.push(srcPath)
    run(emitter, cmd, params)
    return emitter
}

function getBin() {
    const modulePath = require.resolve('eslint')
    const bin = path.resolve(modulePath, '../../bin/eslint.js')
    return bin
}
