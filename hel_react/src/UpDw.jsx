
import { useRef, useState, useEffect } from 'react'
import "./UpDw.css"


function UpDw() {
	const [mine, setMine] = useState("...")
	const [res, setRes] = useState("")
	const [count, setCount] = useState(1)
	let com = useRef(0);

	useEffect(() => {
		com.current=parseInt(Math.floor(Math.random() * 99 + 1))
    	console.log('com', com)
  }, [])


	const  reset=()=>{
		com.current=parseInt(Math.floor(Math.random() * 99 + 1))
		setMine("")
		setRes("")
		setCount(1)
   		console.log('reset com ', com)
	}
	const myclick=()=>{
		 let imine= Math.floor(mine)
		//1-99의 숫자외 거르기
		 if(Number.isNaN(imine)||imine<1||imine>99){
			 alert("1-99 사이의 숫자를 입력하세요")
			 return
		 }

        var line = "";
        if (com.current == imine) {
            line = mine + "은(는)\t" + "정답\n";
            setRes(preRes=>preRes+line)
             setTimeout(()=>{
                 alert(mine+ " : " + count + "번 시도에 정답입니다")
             },100)

        } else if (com.current > imine) {
            line = mine + "은(는)\t" + "작다\n";
            setRes(preRes=>preRes+line)
        } else {
            line = mine + "은(는)\t" + "크다\n";
            setRes(preRes=>preRes+line)
        }

		setCount(preCount=>preCount+1)
	}

	return (
		<>
			<table>
				<tbody>
				<tr>
					<td>맞출수</td>
					<td>
						<input type="number" value={mine}  onChange={e => setMine(e.target.value)}/>
					</td>
				</tr>
				<tr>
					<td colSpan="2">
						<input type="button" value="맞춰보기" onClick={myclick}/>
						<input type="button" value="reset" onClick={reset}/>
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
