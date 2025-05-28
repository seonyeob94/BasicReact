import {useEffect, useState} from 'react'


function Life01() {
	const [msg, setMsg] = useState("Life01")
	useEffect(() => {

    console.log('Life01 mount');
		 return()=>{
		   console.log('Life01 unmount');
	};

	 }, []);
	return (
		<>
			{msg}


		</>
	)
}

export default Life01
