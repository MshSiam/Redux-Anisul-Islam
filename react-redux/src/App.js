import "./App.css"
import Counter from "./components/Counter"
import CounterRedux from "./components/CounterRedux"

function App() {
  return (
    <div className="App">
      <h1>Welcome to react redux</h1>
      <Counter></Counter>
      <CounterRedux></CounterRedux>
    </div>
  )
}

export default App

// state  = count:0
// action = increment, decrement, reset
// reducers =
// store
// providing store in react
// use store
