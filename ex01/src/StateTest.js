import {useState} from "react"

const StateTest = () => {
    const [data, setData] = useState(0)
    let num = 0
    console.log("start : ", data)
    const click = () => {
        console.log("click : ", data)
        // num = num + 1 //start 한번 출력. 화면에 있는 값 변경안됨
        setData(data + 1) //start가 계속 출력. data가 변경될때마다 처음부터 코드를 읽음(새롭게 화면을 그려줌)
    }
    return (
        <>
            data : {data}<br></br>
            <button onClick={click}>클릭</button>
        </>
    )
}

export default StateTest