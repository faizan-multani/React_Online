# Hooks :
- hooks are predefined or inbuilt method/function in react js, which will perform some specific task.

# React Hooks :
# 1. useState():
- The useState hook is used to declare state variables in a functional component.

### example: 
```
import React, { useState } from 'react';// to import hooks

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter < 20){ // increament should be below 20
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter > 0){ // decreament should be above 0
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
```

# 2.useEffect() :
- The useEffect hook allows you to perform side effects in functional components.
- its basically to add/perform some additional task.

```
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component rendered or updated!');
  }, [count]); // The effect runs when `count` changes

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}
```
- in the above code ,it is same as useState() but when we click on increament/decreament button in the console window it shows the cound also by using 'useEffet()'.
- in case of 'useState()' it doest not show . 