import Babel from '@babel/core'
// import presetEnv from '@babel/preset-env' //es6 -> es5 
import  fs from 'node:fs'
// import react from '@babel/preset-react'//支持jsx文件
// import { plugins } from '@babel/preset-env/lib/plugins-compat-data'

const file  = fs.readFileSync('./test.js','utf8')
 const transformFunction = ({types:t}) => {
        return {
            name:'transformFunction',
            visitor:{
                //匹配
                ArrowFunctionExpression(path){
                    console.log(path.node);
                    const node = path.node
                    const arrowFuntion = t.functionExpression(
                        null,
                        node.params,
                        t.blockStatement([t.returnStatement(node.body)]),
                        node.async
                    )
                    path.replaceWith(arrowFuntion)
                    
                }
            }
        }
    }
const result = Babel.transform(file,{
    // presets:[presetEnv]
    //1.预设
    // presets:[
    //     [presetEnv,{
    //         useBuiltIns:"usage",
    //         corejs:3
    //     }],
    //     react
    // ],
    // 2.插件
    plugins:[transformFunction]
   
})

console.log(result.code);