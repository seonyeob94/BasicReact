import { useState } from 'react'


function Count() {
	const [count, setCount] = useState("100")
	const myclick = () => {
		setCount(preCount =>{
			const next = parseInt(preCount)+1;

			setCount(next.toString())
		})
	}
	return (
		<>
			{count}
			<button onClick={myclick}>
				INCREASE
			</button>

		</>
	)
}

export default Count
