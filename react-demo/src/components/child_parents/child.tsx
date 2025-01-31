// 子组件
const  Child = ({ onSendData }) => {
    const clickHandler = () => {
      onSendData({ value: 123 }); // 通过回调函数传递数据
    };
  
    return <button onClick={clickHandler}>发送数据</button>;
  }

  export default Child;