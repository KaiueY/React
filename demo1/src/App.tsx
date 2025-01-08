
import { useState } from 'react';
import './App.css'

function App() {



  //1.插值语句jsx tsx ｛｝字符串 数字 数组（普通类型）元素 三元表达式 API调用
  //2.插值语向支持对象怎么弄 ［｛name:1｝］ ｛name:1｝ let obj = ｛name:1｝ 需要序列化 JSON.stringify()
  //3.点击事件
  const [str,setStr] =useState('kailinHu')
  const fo = (params:string,e: React.MouseEvent<HTMLButtonElement>) =>{
    console.log(e);
    setStr((prevStr) => prevStr + params);
  }
  return (
    <>
      <h1>插值语句</h1>
      <div><h2>String</h2>{'kailin'}</div>
      <div><h2>boolean</h2>{true}</div>
      <div><h2>array</h2>{'[1,2,3,4,5]'}</div>
      <div><h2>array with object</h2>{[[1,2],3,]}</div>
      <div><h2>object</h2>{}</div>
      <button onClick={(e) => fo(' love',e)}>{str}</button>
    </>
  )
}

export default App
