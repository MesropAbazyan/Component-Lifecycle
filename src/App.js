import { useState } from 'react';
import Example from './Example';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Hello</h1>
      <h1>Armenia</h1>

            {/* <Example /> */}

      <button onClick={() => setShow(!show)}>Click me</button>
      {
        show ? <Example /> : null
      }
    </div>
  );
}

export default App;
