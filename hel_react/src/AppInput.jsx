// App.jsx
import React, { useRef, useState } from 'react';
import MyInput from './MyInput.jsx';

function App() {
  const obj       = useRef(null);
  const [text, setText] = useState('hello');

  const myclick = () => {
     obj.current.value = 'bye';

    setText('bye');
  };

  return (
    <>
      <input type="text" defaultValue="hello" ref={obj}/>
      <br/>

      <MyInput value={text} />
      <br/>

      <button onClick={myclick}>change Text</button>
      <br/>
    </>
  );
}

export default App;
