import { useState } from "react"
import StoreCom from "../components/Quiz03StoreCom"

function StoreCon(){
    const [store, setStore] = useState(
        {msg : "", inData : 0, outData : 0}
    )
    const inStore = () => {
        setStore({...store, inData : store.inData+1, msg:"어서오세요"})
    }
    const outStore = () => {
        if(store.inData - store.outData === 0){
            alert("나갈 손님이 없습니다!!!")   
        }else{
            setStore({...store,msg:"안녕히가세요", outData : store.outData + 1})
        }
    }

    return(
        <StoreCom store={store} inStore={inStore} outStore={outStore}/>
    )

}

export default StoreCon