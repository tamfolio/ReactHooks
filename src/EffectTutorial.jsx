import React, {useEffect} from 'react';
import axios from 'axios';

function EffectTutorial() {


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
        console.log(response)})
    })

    return (
        <div>
           <h1>Hello World</h1> 
        </div>
    )
}

export default EffectTutorial
