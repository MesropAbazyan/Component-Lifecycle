import {useEffect, useState} from 'react';

export default function Example() {
  const [name, setNAme] = useState('');

  useEffect(() => {
    console.log('Mounted Example');
    return () => {
      console.log('Unmounted Example');
    }
  }, []);
  // when we pass an empty array to "useEffect", 
  // it is called only once

  useEffect(() => {
    console.log('Updated Name');
    return () => {
      console.log('Cleaning up Update');
    }
  }, [name]);

  return <div>
    <input 
      type='text' 
      value={name} 
      onChange={(evt) => setNAme(evt.target.value)} 
    />
  </div>;
}

// In React, every instance of a component goes through a lifecycle 
// that consists of creation (mounting), updating, and deletion (unmounting). 
// Mounting is the initial phase in which 
// the instance of the component is created and inserted into the DOM.
// In the updating phase, the component gets updated while being present in the DOM. 
// In the unmounting phase, the component is removed from the DOM.