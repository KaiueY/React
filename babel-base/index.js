import Babel from '@babel/core'
import presetEnv from '@babel/preset-env' //es6 -> es5 
import  fs from 'node:fs'
// import react from '@babel/preset-react'//支持jsx文件
// import { plugins } from '@babel/preset-env/lib/plugins-compat-data'

const file  = fs.readFileSync('./test.js','utf8')
//  const transformFunction = ({types:t}) => {
//         return {
//             name:'transformFunction',
//             visitor:{
//                 //匹配
//                 ArrowFunctionExpression(path){
//                     console.log(path.node);
//                     const node = path.node
//                     const arrowFuntion = t.functionExpression(
//                         null,
//                         node.params,
//                         t.blockStatement([t.returnStatement(node.body)]),
//                         node.async
//                     )
//                     path.replaceWith(arrowFuntion)
                    
//                 }
//             }
//         }
//     }
const result = Babel.transform(file,{
    // presets:[presetEnv]//必须加这一行才能解析
    presets:[
        [presetEnv,{useBuiltIns:"usage",corejs:3}]
        // es6新特性需要core-js支持
        // usage 按需引入 如filter等
        // entry 手动引入
    ]
    //1.预设
    // presets:[
    //     [presetEnv,{
    //         useBuiltIns:"usage",
    //         corejs:3
    //     }],
    //     react
    // ],
    // 2.插件
    // plugins:[transformFunction]
   
})

console.log(result.code);


// "use strict";

// function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
// function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
// function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
// function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
// //语法
// var a = function a() {
//   var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
//   return 1 + params;
// };
// var b = [1, 2, 3];
// var c = [].concat(b, [4, 5]);
// var Babel = /*#__PURE__*/_createClass(function Babel() {
//   _classCallCheck(this, Babel);
// });
// new Babel();
// //API
// var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(function (x) {
//   return x % 2 === 0;
// });
// var y = Object.assign({}, {
//   name: 1
// });