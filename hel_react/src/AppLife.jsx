import React, { useState } from 'react';
import Life01 from "./Life01.jsx";
import Life02 from "./Life02.jsx";

function AppLife() {

  const [showFirst, setShowFirst] = useState(true);

  const click = () => {
    setShowFirst(prev => !prev);
  };

  return (
    <>
      {showFirst ? <Life01 /> : <Life02 />}
      <button onClick={click}>toggle</button>
    </>
  );
}

export default AppLife;
