import { useState } from 'react'
import "./Holl.css"

function Holl() {
  const [mine, setMine] = useState("..")
  const [com, setCom] = useState("..")
  const [res, setRes] = useState("..")

  const myclick=()=>{
         let rnd = Math.random();
         let newcom;
         console.log(rnd)
		if(rnd>0.5){
            newcom="홀";
        }
		else{
             newcom="짝";
        }

        setCom(newcom)
      console.log("mine"+mine)
      console.log("com"+com)

		if(mine==newcom){
            setRes("이김");
		}
		else{
			setRes("짐");
		}
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
