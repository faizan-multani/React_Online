import { useState } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
import "./App.css"

function App() {
  const [counter, setCounter] = useState(0)

  //let counter = 15

  const addValue = () => {
    if (counter < 20) {
      // increament should be below 20
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      // decreament should be above 0
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>useState()</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      {/* <p>footer: {counter}</p> */}
    </>
  )
}

export default App
