import { useState } from "react"

function Events() {
    const [form, setform] = useState({
        email:"" , phone:""
    });
    const handleClick=()=>{
        alert("hey im clicked");
    }
    const handleMouseOver=()=>{
        alert("Hey im an mouse over");
    }
    const handleChange=(e)=>{
       setform({...form,[e.target.name]:e.target.value})
    }
    return (
    <div>
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>
      <div className="red" onMouseOver={handleMouseOver}>
        Im red div
      </div>
      <input type="text" name="email" value={form.email?form.email:""} onChange={handleChange}/>
      <input type="text" name="phone" value={form.phone?form.phone:""} onChange={handleChange}/>
    </div>
  )
}

export default Events
