import { useState } from 'react'
import "./Gugu.css"

function Gugu() {
	let [dan, setDan] = useState("..")
	let [result, setResult] = useState("...")
	const myclick = () => {



        let num = parseInt(dan);

		  let str = '';
		  for (let i = 1; i <= 9; i++) {
			str += `${num} x ${i} = ${num * i}\n`;
		  }
		  setResult(str);


	}
	return (
		<>
			<table>
    <tbody>
    <tr>
        <td>출력단수</td>
        <td>
            <input type="text" value={dan} onChange={e => setDan(e.target.value)}/>
        </td>
    </tr>
    <tr>
        <td colSpan="2">
            <button onClick={myclick}>
                출력하기
            </button>
        </td>
    </tr>
    <tr>
        <td colSpan="2">
            <textarea rows="13" cols="17" value={result} readOnly />
        </td>
    </tr>
    </tbody>
</table>

		</>
	)
}

export default Gugu
