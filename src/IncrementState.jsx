import React, {useState} from 'react'

const IncrementState = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            {counter} <button onClick={increment}>Increase</button>
        </div>
    )
}

export default IncrementState
