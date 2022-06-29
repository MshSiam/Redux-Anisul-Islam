import React, { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>This is Counter App.</h1>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter
