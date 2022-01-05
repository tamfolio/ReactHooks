import React, {useState, useEffect} from 'react';
import axios from 'axios';

function EffectTutorial() {
    const[data, setData] = useState("");
    const[count, setCount] = useState(0);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
          setData(response.data[0].email);
        console.log("API was called")
        });
    }, []);

    return (
        <div>
           <h1>Hello World {data}</h1> 
           <h1>{count}</h1>
           <button
           onClick={() => {
               setCount(count + 1);
           }}
           >Click me</button>
        </div>
    )
}

export default EffectTutorial
