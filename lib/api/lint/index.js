const path = require('path')
const { run } = require('../../utils')
const EventEmitter = require('events');
module.exports = () => {
    // 声明一个日志事件
    const emitter = new EventEmitter()

    const cmd = getBin()
    const srcPath = path.resolve(process.cwd(),'./lib/utils')
    console.log('process.cwd()',process.cwd(),srcPath)
    const params = []
    
    params.push('-c',path.resolve(__dirname,'./.eslintrc.json'))

    // params.push('--fix')
    params.push(srcPath)
    run(emitter,cmd,params,)

    return emitter
}

function getBin() {
    const modulePath = require.resolve('eslint')
    const bin = path.resolve(modulePath, '../../bin/eslint.js')
    return bin
}
