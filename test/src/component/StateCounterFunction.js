import React, {useState} from 'react'




function CounterFunction() {


    const [count, setCount] = useState(0)

    return (
        <div>
            <h4> i denna functional component använder vi useState och du ar nu klickat  {count}</h4>
            <button onClick={() => setCount(count + 1)}>klick</button>
        </div>
    )
}

export default CounterFunction
