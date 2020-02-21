const path = require('path')
const { run } = require('../../utils')
module.exports = () => {
    const cmd = getBin()
    const srcPath = path.resolve(process.cwd(),'./lib/utils')
    console.log('process.cwd()',process.cwd(),srcPath)

    const params = []
    

    params.push('-c',path.resolve(__dirname,'./.eslintrc.json'))

    // params.push('--fix')

    params.push(srcPath)
    run(cmd,params)
}

function getBin() {
    const modulePath = require.resolve('eslint')
    const bin = path.resolve(modulePath, '../../bin/eslint.js')
    return bin
}
