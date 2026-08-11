import { useState } from "react"

function Counter() {
    const[count,setCount]=useState(0);
    return (
    <div>
        The count is {count}
        <button onClick={()=>setCount(count+1)}>Update Count</button>
    </div>
  )
}

export default Counter
