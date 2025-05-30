import React, {useEffect, useRef, useState} from 'react'
import "./Strike.css"


function Strike() {
    const [num, setNum] = useState('');
    const [res, setRes] = useState("")
    const arrRef = useRef([])


    useEffect(() => {
        const temp = [];
        while (temp.length < 3) {

            const rand = Math.floor(Math.random() * 10);
            if (!temp.includes(rand)) temp.push(rand);

        }
        arrRef.current = temp
        console.log("arrRef.current", arrRef.current)
    }, [])
    const myclick = () => {
        const arr1 = [];
        for (let i = 0; i < 3; i++) {
            arr1.push(parseInt(num.charAt(i)));
        }
        console.log(arr1)
        let cnt = 0;
        let totalMatch = 0;

        for (var i = 0; i < 3; i++) {
            if (arr1[i] == arrRef.current[i]) {
                cnt++;
            }
            if (arr1.includes(arrRef.current[i])) {
                totalMatch++;
            }
        }
        console.log("cnt",cnt)
        console.log("totalMatch",totalMatch)
         totalMatch = totalMatch - cnt;
        setRes(preRes => preRes += num + " : " + cnt + "스크라이크" + totalMatch + "볼\n")

        if (cnt > 2) {
            setTimeout(() => {
                alert('🎉 정답입니다!');
            }, 50);
        }
    }

    return (
        <>
            <table>
                <tbody>
                <tr>
                    <td>맞출수</td>
                    <td>
                        <input type="text" value={num} onChange={e => setNum(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <input type="button" value="맞춰보기" onClick={myclick}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <div id="mydiv"><pre>{res}</pre></div>
                    </td>
                </tr>
                </tbody>
            </table>

        </>
    )
}

export default Strike
