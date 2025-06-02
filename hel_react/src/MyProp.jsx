// MyProp.jsx
import React from 'react';

function MyProp({ alt, src }) {
  return (
      <>
      속성: {alt}
        <img src={src} />

      </>
  );
}

export default MyProp;
