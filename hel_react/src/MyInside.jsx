import {useState} from 'react'
import React from 'react';


function Inside({children}) {

    return (
        <>
            MYINSIDE START<br/>
            {children} <br/>
            MYINSIDE END<br/>

        </>
    )
}

export default Inside
