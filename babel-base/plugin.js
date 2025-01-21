/**
 * 编写一个babel插件，将箭头函数转换为function
 */
import babel from '@babel/core'
import fs from 'node:fs'
const code = fs.readFileSync('./test.js','utf-8')

const transformFunction = ({type:t}) =>{
    return {
        name:'transFormFunction',
        visitor:{
            // 匹配
            ArrowFunctionExpression(path){
                console.log(path.node);
                // 箭头函数转换为普通函数
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

const result = babel.transform(code,{
    plugins:[transformFunction]
})
