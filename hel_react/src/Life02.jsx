import {useEffect, useState} from 'react'


function Life02() {
	const [msg, setMsg] = useState("Life02")
	useEffect(() => {

    console.log('Life02 mount');
		 return()=>{
		   console.log('Life02 unmount');
	};

	 }, []);
	return (
		<>
			{msg}


		</>
	)
}

export default Life02
