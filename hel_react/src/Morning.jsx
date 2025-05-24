import { useState } from 'react'


function Morning() {
	const [msg, setMsg] = useState("Good Morning")
	const myclick = () => {
		setMsg("Good Evening")

	}
	return (
		<>
			{msg}
			<button onClick={myclick}>
				click
			</button>

		</>
	)
}

export default Morning
