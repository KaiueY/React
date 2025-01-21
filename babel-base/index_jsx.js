import Babel from '@babel/core'
import presetEnv from '@babel/preset-env' //es6 -> es5 
import  fs from 'node:fs'
import react from '@babel/preset-react'//支持jsx文件

const file  = fs.readFileSync('./test.jsx','utf8')

const result = Babel.transform(file,{
    // presets:[presetEnv]//必须加这一行才能解析
    presets:[
        [presetEnv,{useBuiltIns:"usage",corejs:3}],
        react
    ]
})
console.log(result.code);



"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.array.map.js");
// JSX 解析测试用例
var TestCases = function TestCases() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "basic"
  }, "Hello World"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    disabled: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Nested")), true && /*#__PURE__*/React.createElement("p", null, "Conditional Render"), [1, 2, 3].map(function (num) {
    return /*#__PURE__*/React.createElement("li", {
      key: num
    }, num);
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return console.log('clicked');
    }
  }, "Click me"));
};
var _default = exports["default"] = TestCases;