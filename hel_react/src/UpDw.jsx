import { useState } from 'react'
import "./UpDw.css"


function UpDw() {
	const [com, setCom] = useState(Math.floor(Math.random() * 99 + 1))
	const [mine, setMine] = useState("...")
	const [res, setRes] = useState("")
	console.log(com)
	const myclick=()=>{
		 let imine= Math.floor(mine)

        var line = "";
        if (com == imine) {
            line = mine + "은(는)\t" + "정답\n";
            setRes(preRes=>preRes+line)
             setTimeout(()=>{
                 alert(mine + " 정답입니다")
             },100)

        } else if (com > imine) {
            line = mine + "은(는)\t" + "작다\n";
            setRes(preRes=>preRes+line)
        } else {
            line = mine + "은(는)\t" + "크다\n";
            setRes(preRes=>preRes+line)
        }
	}

	return (
		<>
			<table>
				<tbody>
				<tr>
					<td>맞출수</td>
					<td>
						<input type="text" value={mine}  onChange={e => setMine(e.target.value)}/>
					</td>
				</tr>
				<tr>
					<td colSpan="2">
						<input type="button" value="맞춰보기" onClick={myclick}/>
					</td>
				</tr>
				<tr>
					<td colSpan="2">
						<div id="mydiv">
							<pre>{res}</pre>
						</div>
					</td>
				</tr>
				</tbody>
			</table>

		</>
	)
}

export default UpDw
