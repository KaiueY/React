const { config } = require('@swc/core')
const path = require('path')
//swc只支持commen js
module.exports = config({
    entry: {
        web: path.join(__dirname, './test.js')
    },
    output:{
        path:path.join(__dirname,'./dist'),
        name:'test.js'
    }
})
