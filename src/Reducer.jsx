import React, {useReducer} from 'react'

const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1, showText: state.showText
            }
        case "toggle":
            return {
                count: state.count, showText: !state.showText
            }
        default:
            return state;
    }
}

function Reducer() {
    const [state,dispatch] = useReducer(reducer,
         {count:0, showText: true})
    return (
        <div>
            <h1>{state.count}</h1>
            <button
            onClick={() => {
                dispatch({type: 'INCREMENT'})
                dispatch({type: 'toggle'})
            }}
            >
                CLick here
            </button>

            {state.showText && <p>This is a Text</p>}
        </div>
    )
}

export default Reducer
