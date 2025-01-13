// JSX 解析测试用例
const TestCases = () => {
  return (
    <>
      {/* 基本元素 */}
      <div id="basic">Hello World</div>
      
      {/* 属性传递 */}
      <input type="text" disabled={true} />
      
      {/* 嵌套组件 */}
      <div>
        <span>Nested</span>
      </div>
      
      {/* 条件渲染 */}
      {true && <p>Conditional Render</p>}
      
      {/* 列表渲染 */}
      {[1, 2, 3].map(num => <li key={num}>{num}</li>)}
      
      {/* 事件处理 */}
      <button onClick={() => console.log('clicked')}>Click me</button>
    </>
  );
};

export default TestCases;
