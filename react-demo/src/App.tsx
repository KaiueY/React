import Card from "./components/Card";

function App() {
  return (
    <>
      <Card/>
      <button onClick={()=>window.onShow()}>Click</button>
    </>
  )
}

export default App;
