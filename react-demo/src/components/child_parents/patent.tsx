
import Child from "./child";
const Parent = () => {
    const handleChildData = (data:{string:string}) => {
      console.log("来自子组件的数据:", data);
    };
  
    return <Child onSendData={handleChildData} />;
  }

  export default Parent