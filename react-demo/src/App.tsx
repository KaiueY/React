import Card from "./components/Card";
import './components/Message/index'; // 确保导入 Message 组件

function App() {
  const showMessages = () => {
    window.Message?.success('操作成功！');
    setTimeout(() => {
      window.Message?.error('发生错误！');
    }, 1000);
    setTimeout(() => {
      window.Message?.warning('注意事项！');
    }, 2000);
    setTimeout(() => {
      window.Message?.info('提示信息');
    }, 3000);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Card />
      <div style={{ marginTop: '20px' }}>
        <button onClick={showMessages}>
          显示所有消息类型
        </button>
      </div>
      <button onClick={() => window.Message.success('成功提示')}>
        显示成功消息
      </button>
    </div>
  );
}

export default App;
