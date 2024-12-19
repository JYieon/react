import { useState } from "react";

function Quiz01(){
    const [num, setData] = useState(0)
    const up = () => {
        setData(num + 1)
    }
    const down = () => {
        setData(num - 1)
    }
    return (
        <>
            {num}<hr></hr>
            <button onClick={up}>+</button>
            <button onClick={down}>-</button>
        </>
    )
}

export default Quiz01