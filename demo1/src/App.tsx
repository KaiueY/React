
import { useState } from 'react';
import './App.css'

function App() {



  //1.插值语句jsx tsx ｛｝字符串 数字 数组（普通类型）元素 三元表达式 API调用
  //2.插值语向支持对象怎么弄 ［｛name:1｝］ ｛name:1｝ let obj = ｛name:1｝ 需要序列化 JSON.stringify()
  //3.点击事件<button onClick={fo(' love',e)}>{str}</button> 这样会直接调用，而不是点击 需要 =》 < button onClick={(e) => fo(' love',e)}>{str}</>
  //4.泛型需要写为<T,>加一个逗号 否则被认为是元素
  const [str, setStr] = useState('kailinHu')
  const fo = (params: string, e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    setStr((prevStr) => prevStr + params);
  }
  const sevtion = `<section><div>No1 html</div>
    <div>No2 html</div></section>`
  const arr = [1, 2, 3, 4, 5, 6, 7,]
  return (
    <>

      <h1>插值语句</h1>
      <div><h2>String</h2>{'kailin'}</div>
      <div><h2>boolean</h2>{true}</div>
      <div><h2>array</h2>{'[1,2,3,4,5]'}</div>
      <div><h2>array with object</h2>{[[1, 2], 3,]}</div>
      <div><h2>object</h2>{ }</div>
      <button onClick={(e) => fo(' love', e)}>{str}</button>
      {/* 样式  */}
      {/* 也可以声明一个对象 放入{}   */}
      <div style={{ color: 'red' }}>这将会是一句红色语句 </div>
      {/* 绑定多个类 */}
      <div className='' id='id'></div>
      <div className='test test2' id='id'>这将是粉色</div>
      <div className={`test test2`} id='id'>这将是粉色</div>
      {/* 添加html v-html 代码片段*/}
      <div dangerouslySetInnerHTML={{ __html: sevtion }}></div>
      {/* 循环渲染  v-for*/}
      <div>
        {arr.map(v => {
          return <div key={v}>{v}</div>
        })}
      </div>
    </>
  )
}

export default App
