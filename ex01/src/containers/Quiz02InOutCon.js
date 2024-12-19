import QuizCom from "../components/Quiz02InOutCom"
import { useState } from "react"

function Quiz02(){
    const [msg, setMsg] = useState("")
    const onIn = () => {
        setMsg("어서오세요")
    }
    const onOut = () => {
        setMsg("안녕히가세요")
    }
    return(
        <>
            <QuizCom onIn={onIn} onOut={onOut} msg={msg}/>
        </>
    )
}

export default Quiz02