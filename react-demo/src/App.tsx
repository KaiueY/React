import Card from "./components/Card";
import './components/Message/index'; // 确保导入 Message 组件

function App() {
  const showErrorMessages = () =>{
    setTimeout(() => {
      window.Message?.error('发生错误！');
    }, 1000);
  };
  const showSuccessMessages = () =>{
    setTimeout(() => {
      window.Message?.success('操作成功！');
    }, 1000);
  };
  const showTipMessages = () =>{
    setTimeout(() => {
      window.Message?.warning('信息提示！');
    }, 1000);
  };
  return (
    <div style={{ padding: '20px' }}>
      <Card />
      <div style={{ marginTop: '20px' }}>
        <button onClick={showErrorMessages}>
          错误提示
        </button>
                <button onClick={showSuccessMessages}>
          提示信息
        </button>
                <button onClick={showTipMessages}>
          成功信息
        </button>
      </div>
      <button onClick={() => window.Message.success('成功提示')}>
      </button>
    </div>
  );
}

export default App;
