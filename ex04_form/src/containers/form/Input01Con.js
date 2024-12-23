import Input01Com from "../../components/form/Input01Com"
import { useState } from "react"

const Input01Con = () => {
    const [input, setInput] = useState({username:"", password:""})
    const onChange = (e) => { //e는 이벤트에 관한 변수
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)

        setInput({...input, [e.target.name] : e.target.value}) //변하는 값만 바꿔줌

        // if(e.target.name == "username")
        //      setInput({username : e.target.value, password : input.password})
        // else setInput({username : input.value, password : e.target.password})

    }
    const mySubmit = () => {
        e.preventDefault() //submit으로 동작할 때, 다른 페이지로 이동을 막아준다.
        console.log("이동 방지 : ", e.target)
    }
    return (<><Input01Com input={input} mySubmit={mySubmit} onChange={onChange} /></>)
}
export default Input01Con