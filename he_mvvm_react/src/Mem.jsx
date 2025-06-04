import "./Mem.css"
import {useEffect, useState} from "react";
import axios from "axios";

function Mem() {

    const [list, setList] = useState([
        {'m_id': "1", 'm_name': "1", 'tel': "1", 'email': "1"},
        {'m_id': "2", 'm_name': "2", 'tel': "2", 'email': "2"},
        {'m_id': "3", 'm_name': "3", 'tel': "3", 'email': "3"}
    ])

    let [vo, setVo] = useState({

        'm_id': ".", 'm_name':"..", 'tel':"...", 'email':"..."
    })

    useEffect(() => {

        fn_list();
    }, []);


    const fn_clear = () => {
        setVo({'m_id': "", 'm_name': "", 'tel': "", 'email': ""})
    }

    const fn_list = async () => {
        let resp = await axios.get('http://localhost:8080/api/mem_list.ajax') // Spring Boot API 주소
        setList(resp.data)
        /*console.log(resp)
        let ...list = resp.data.list
        setList(...list)*/
    }

    const fn_one = async (e) => {
        const pm_id = e.target.dataset.m_id
        console.log(e.target.dataset.m_id);

        let resp = await axios.get('http://localhost:8080/api/mem_detail', {
            params: {
                m_id: pm_id
            }
        });

        setVo(resp.data);


    }

    const fn_add = async () => {
        let resp = await axios.post('http://localhost:8080/api/mem_add', vo)
        let cnt = resp.data
        console.log("resp:", resp);
        console.log("resp.data:", resp.data);
        if (cnt === 1) {
            alert("추가 완료!");
            fn_list()
            fn_clear();
        } else {
            alert("추가 실패!");
        }

    }

    const fn_mod = async () => {
        let resp = await axios.post('http://localhost:8080/api/mem_mod', vo)
        let cnt = resp.data
        if (cnt === 1) {
            alert("수정 완료!");
            fn_list()
            fn_clear();
        } else {
            alert("수정 실패!");
        }
    }

    const fn_del = async () => {
        if (confirm("한번 지워진 데이터는 복구 불가능합니다.\n정말 삭제하겠습니까?")) {

            let resp = await axios.post('http://localhost:8080/api/mem_del', vo)
            let cnt = resp.data
            if (cnt === 1) {
                alert("삭제 완료!");
        fn_clear()
        await fn_list()
            } else {
                alert("삭제 실패!");
            }
        }


    }

    return (
        <>
            Mem 화면

            <table>
                <thead>
                <tr>
                    <td>사번</td>
                    <td>이름</td>
                    <td>전화</td>
                    <td>이메일</td>
                </tr>
                </thead>
                <tbody>
                {list.map((vo, index) => (
                    <tr key={index}>
                        <td><a onClick={fn_one} data-m_id={vo.m_id}>{vo.m_id}</a></td>
                        <td>{vo.m_name}</td>
                        <td>{vo.tel}</td>
                        <td>{vo.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <br/>
            <table>
                <tbody>
                <tr>
                    <td>사번</td>
                    <td>
                        <input type="text" value={vo.m_id} onChange={(e) => {
                            setVo({...vo, ['m_id']: e.target.value})
                        }}/>
                    </td>
                </tr>
                <tr>
                    <td>이름</td>
                    <td>
                        <input type="text" value={vo.m_name} onChange={(e) => {
                            setVo({...vo, ['m_name']: e.target.value})
                        }}/>
                    </td>
                </tr>
                <tr>
                    <td>전화</td>
                    <td>
                        <input type="text" value={vo.tel} onChange={(e) => {
                            setVo({...vo, ['tel']: e.target.value})
                        }}/>
                    </td>
                </tr>
                <tr>
                    <td>이메일</td>
                    <td>
                        <input type="text" value={vo.email} onChange={(e) => {
                            setVo({...vo, ['email']: e.target.value})
                        }}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <input type="button" value="추가" onClick={fn_add}/>
                        <input type="button" value="수정" onClick={fn_mod}/>
                        <input type="button" value="삭제" onClick={fn_del}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default Mem
