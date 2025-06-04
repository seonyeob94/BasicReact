<script>
    import axios from "axios";
    import {onMount} from "svelte";


    let list = [];

    let vo = {'m_id': "..", 'm_name': "..", 'tel': "..", 'email': ".."}

    const fn_clear = () => {
        vo = {'m_id': "", 'm_name': "", 'tel': "", 'email': ""}
    }

    onMount(async () => {
        fn_list();
    });

    const fn_list = async () => {
        let resp = await axios.get('http://localhost:8080/api/mem_list.ajax') // Spring Boot API 주소
        list = resp.data
    }

    const fn_one = async (e) => {
        const pm_id = e.target.dataset.m_id;
        console.log("dfhllfd", pm_id)

        let resp = await axios.get('http://localhost:8080/api/mem_detail', {
            params: {
                m_id: pm_id
            }
        });

        vo = resp.data;
    }

    const fn_add = async () => {
        if (!vo.m_id) {
            alert("사번을 입력해주세요.");
            return;
        }

        if (list.some(mem => mem.m_id === vo.m_id)) {
            alert("이미 있는 사번입니다.");
            return;
        }

        let resp = await axios.post('http://localhost:8080/api/mem_add', vo)
        let cnt = resp.data.cnt

        if (cnt === 1) {
            alert("추가 완료!");
            fn_list()
        } else {
            alert("추가 실패!");
        }
        fn_clear();
    }

    const fn_mod = async () => {
        let resp = await axios.post('http://localhost:8080/api/mem_mod', vo)
        let cnt = resp.data.cnt
        if (cnt.data === 1) {
            alert("수정 완료!");
            fn_list()
        } else {
            alert("수정 실패!");
        }
        fn_clear();
    }

    const fn_del = async () => {
        if (confirm("한번 지워진 데이터는 복구 불가능합니다.\n정말 삭제하겠습니까?")) {

            let resp = await axios.post('http://localhost:8080/api/mem_del', vo)
            let cnt = resp.data.cnt
            if (cnt.data === 1) {
                alert("삭제 완료!");
            } else {
                alert("삭제 실패!");
            }
        }

        fn_clear()
        await fn_list()

    }
</script>


EMP 화면


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
    {#each list as vo}
        <tr>
            <td><a onclick={fn_one} data-m_id={vo.m_id}>{vo.m_id}</a></td>
            <td>{vo.m_name}</td>
            <td>{vo.tel}</td>
            <td>{vo.email}</td>
        </tr>
    {/each}
    </tbody>
</table>
<br/>
<table>
    <tbody>
    <tr>
        <td>사번</td>
        <td>
            <input type="text" bind:value={vo.m_id}/>
        </td>
    </tr>
    <tr>
        <td>이름</td>
        <td>
            <input type="text" bind:value={vo.m_name}/>
        </td>
    </tr>
    <tr>
        <td>전화</td>
        <td>
            <input type="text" bind:value={vo.tel}/>
        </td>
    </tr>
    <tr>
        <td>이메일</td>
        <td>
            <input type="text" bind:value={vo.email}/>
        </td>
    </tr>
    <tr>
        <td colspan="2">
            <input type="button" value="추가" onclick={fn_add}/>
            <input type="button" value="수정" onclick={fn_mod}/>
            <input type="button" value="삭제" onclick={fn_del}/>
        </td>
    </tr>
    </tbody>
</table>
<style>
    table, tr, td {
        border: 1px solid darkolivegreen;
        text-align: center;
    }

    input[type='text'] {
        width: 50px;
    }

    a {
        color: blue;
        text-decoration: underline;
    }
</style>