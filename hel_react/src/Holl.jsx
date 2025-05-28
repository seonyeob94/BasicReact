import { useState } from 'react'
import "./Holl.css"

function Holl() {
  const [mine, setMine] = useState(".")
  const [com, setCom] = useState("..")
  const [res, setRes] = useState("...")

  const myclick=()=>{
         let rnd = Math.random();
         let _com;
         console.log(rnd)
		if(rnd>0.5){
            _com="홀";
        }
		else{
             _com="짝";
        }

      let _res=""
      console.log("mine"+mine)
      console.log("com"+com)
      console.log("_com"+_com)
		if(mine==_com){

            _res="이김";
        }
		else{
            _res="짐";
        }

        setCom(_com)
        setRes(_res)
  }


  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>나</td>
            <td>
              <input type="text" value={mine} onChange={e => setMine(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>컴</td>
            <td>
              <input type="text" value={com} readOnly />
            </td>
          </tr>
          <tr>
            <td>결과</td>
            <td>
              <input type="text" value={res} readOnly />
            </td>
          </tr>
          <tr>
              <td colSpan="2">
                  <input onClick={myclick} type="button" value="게임하기"/>
              </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Holl
