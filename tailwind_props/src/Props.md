# Props :
- props (short for properties) are used to pass data from a parent component to a child component. They allow components to be dynamic and reusable by providing different data to the same component at runtime.

## Key Concepts :
- Props are read-only: Once props are passed to a component, they cannot be modified by the child component. If you need to change the data, you would have to lift the state up to the parent component.
- Props are used to communicate between components: They allow a parent component to pass data and behavior (functions) to its child components.

```
import React from 'react';

function Greeting({ name }) { // here we passed name as prop
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return (
    <div>
      <Greeting name="Alice" /> {/* Passing the 'name' prop */}
      <Greeting name="Bob" /> {/* Passing a different 'name' prop */}
    </div>
  );
}

export default App;

```