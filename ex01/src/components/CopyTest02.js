import { useState } from "react"

function CopyTest02(){
    const [arr, setArr] = useState([1,2]) 
    const onBtn = () => {
        // arr.push("안녕")
        console.log("arr : ", arr)
        setArr(arr.concat("안녕"))
    }

    const [obj, setObj] = useState({name:"김개똥", addr:"개똥별"})
    const onChangeName = () => {
        setObj({name:"홍길동", addr:obj.addr})
    }
    const onChangeAddr = () => {
        setObj({...obj, addr:"별이"}) //데이터가 여러개일때 유용
    }

    return(<>
        name : {obj.name}<br></br>addr : {obj.addr}<br></br>
        <button onClick={onChangeName}>이름 변경</button>
        <button onClick={onChangeAddr}>주소 변경</button>
        <hr></hr>
        arr : {arr}<br></br>
        <button onClick={onBtn}>클릭</button>
    </>)
}

export default CopyTest02