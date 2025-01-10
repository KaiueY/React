import Babel from '@babel/core'
import presetEnv from '@babel/preset-env' //es6
import  fs from 'node:fs'

const file  = fs.readFileSync('./test.js','utf8')

const result = Babel.transform(file,{
    presets:[presetEnv]
})

console.log(result);