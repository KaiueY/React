import swc from '@swc/core'

const result = swc.transformFileSync('./test.jsx',{
    jsc:{
        parser:{
            syntax:'ecmascript'
        },
        target:'es5'
    }
})
console.log(result.code);
