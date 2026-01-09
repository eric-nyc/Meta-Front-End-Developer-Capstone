import React, { useState } from 'react'

function App() {
  // Declare a state variable named 'count' and a function to update it 'setCount'
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>You clicked the button {count} times.</p>
      {/* When the button is clicked, call setCount to update the state */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// The export default keywords specify the main component in the file
export default App;
