
import React from 'react';


function MyProp(props) {

  const { alt } = props;

  return (
    <div style={{ /* 스타일 */ }}>
      속성: <strong>{alt}</strong> {/* 추출한 'alt' 값 사용 */}
    </div>
  );
}



export default MyProp;