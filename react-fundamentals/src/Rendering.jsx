import { useState } from "react";

function Rendering() {
    const [showBtn, setShowBtn] = useState(false);

    return (
        <div>
            {showBtn ? <button>Conditional</button> : "nothing"}

            <button onClick={() => setShowBtn(!showBtn)}>
                Show
            </button>
        </div>
    );
}

export default Rendering;