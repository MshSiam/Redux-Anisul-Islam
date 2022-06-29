import React from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import {
  decrementCounter,
  incrementCounter
} from "./services/actions/counterActions"

const CounterRedux = () => {
  let count = useSelector((state) => state.count)
  // console.log(count)

  const dispatch = useDispatch()
  const handleIncrement = () => {
    dispatch(incrementCounter())
  }
  const handleDecrement = () => {
    dispatch(decrementCounter())
  }
  return (
    <div>
      <h1>This is Counter (Redux) App.</h1>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default CounterRedux
