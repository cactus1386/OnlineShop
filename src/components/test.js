import React from 'react';
import { useState } from 'react'; 
export default function List() {
    const [state,setState]=useState('');

    return(
        <>
        {e => setState(e.target.value)}
        
        </>
    )
}
