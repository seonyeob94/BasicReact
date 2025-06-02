import {useEffect, useRef, useState} from 'react'
import "./Strike.css"


function Strike() {
    let [mine, setMine] = useState("")
    let [txt, setTxt] = useState("")
    let com = useRef("123")

    const myclick = () => {
        let s = getS(com.current, mine)
        let b = getB(com.current, mine);

        let line = `${mine}\t${s}S${b}B<br/>`;
        if (s == 3) {
            setTimeout("alert(" + mine + "+''+'축하합니다.')")
        }

        setTxt(txt + line)
        setMine("")
    }

    useEffect(() => {
        let arr9 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9
        ];

        for (let i = 0; i < 1000; i++) {
            let rnd = parseInt((Math.random() * 9).toString());
            let temp = arr9[0];
            arr9[0] = arr9[rnd];
            arr9[rnd] = temp;
        }
        com.current = arr9[0] + "" + arr9[1] + "" + arr9[2];
        console.log("com", com.current);
    }, []);

    const getS = (com, mine) => {
        let ret = 0;

        let c1 = com.substring(0, 1);
        let c2 = com.substring(1, 2);
        let c3 = com.substring(2, 3);
        let m1 = mine.substring(0, 1);
        let m2 = mine.substring(1, 2);
        let m3 = mine.substring(2, 3);

        if (c1 == m1) ret++;
        if (c2 == m2) ret++;
        if (c3 == m3) ret++;

        return ret;
    }
    const getB = (com, mine) => {
        let ret = 0;

        let c1 = com.substring(0, 1);
        let c2 = com.substring(1, 2);
        let c3 = com.substring(2, 3);
        let m1 = mine.substring(0, 1);
        let m2 = mine.substring(1, 2);
        let m3 = mine.substring(2, 3);

        if (c1 == m2 || c1 == m3) ret++;
        if (c2 == m1 || c2 == m3) ret++;
        if (c3 == m1 || c3 == m2) ret++;

        return ret;
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
                        <div dangerouslySetInnerHTML={{ __html: txt }} />
                    </td>
                </tr>

                </tbody>

            </table>

        </>
    )
}

export default Strike
