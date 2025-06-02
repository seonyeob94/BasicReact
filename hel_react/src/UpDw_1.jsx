import {useEffect, useRef, useState} from 'react'
import "./UpDw.css"

function UpDw() {
    let [mine, setMine] = useState("")
    let [txt, setTxt] = useState("")
    let com = useRef(0)

    useEffect(() => {
        com.current = parseInt((Math.random() * 99).toString()) + 1;
        console.log(com.current);
    }, []);

    console.log("kjskdfjksdjfk", com.current)

    const myclick = () => {
        let imine = parseInt(mine);

        let line = "";

        if (com.current == imine) {
            line = mine + "\t" + "정답<br/>\n";
            alert(mine + " 정답입니다.");
        } else if (com.current > imine) {
            line = mine + "\t" + "작다<br/>\n";
        } else {
            line = mine + "\t" + "크다<br/>\n";
        }

        setTxt(txt+line)
        setMine("")
    }


    return (
        <>
            <table>
                <tbody>
                <tr>
                    <td>맞출수</td>
                    <td>
                        <input type="text" value={mine} onChange={(e) => {
                            setMine(e.target.value)
                        }}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <input type="button" onClick={myclick} value="맞춰보기"/>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <div id="mydiv" dangerouslySetInnerHTML={{ __html: txt }} />
                    </td>
                </tr>
                </tbody>
            </table>


        </>
    )
}

export default UpDw
