import React, {useState} from 'react'

function FormState() {
    const [inputValue, setInputValue] = useState('Pedro');

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue)
    }
    return (
        <div>
            <input placeholder='enter something.....' onChange={onChange}/>
            {inputValue}
        </div>
    )
}

export default FormState
