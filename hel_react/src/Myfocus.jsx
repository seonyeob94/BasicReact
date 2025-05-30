import React, { useRef } from 'react';


function Myfocus() {

	const inputRef = useRef(null);
	const myclick=()=>{
		inputRef.current.focus();
	}

	return (
		<>
			<input type="text" ref={inputRef}/>
			<button onClick={myclick}>focus</button>

		</>
	)
}

export default Myfocus
