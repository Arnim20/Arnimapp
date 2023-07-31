import React from 'react';
import { Link } from 'react-router-dom';
export function Demo(){
    return(
        <h1>Named Component</h1>
    );
}
 export  function FirstComponent(){
    return (
        <>
        <h1>This is my First Headig</h1>
        <p>This is my para</p>
        <img src="image/new.png" alt='logo'/>
        </>
    );
}

//export default FirstComponent;