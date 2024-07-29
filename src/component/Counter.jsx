import { useState } from "react"

function Counter (){
    const [count, setCount] = useState(0)
    const [feedback,setFeedback] = useState()
    return(
        <div>
            <button onClick={() => setCount(count+1)}>+</button>
            <button onClick={() => setCount(count-1)}>-</button>
            <h1>you have clicked {count}</h1>
        </div>
    )
}

export default Counter;