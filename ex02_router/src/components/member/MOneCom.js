import { useSearchParams } from "react-router-dom"

const MOneCom = () => {
    const arr = [100, 200, 300]
    const [a, b, c] = arr
    console.log(a+", "+b)
    const [params] = useSearchParams()
    console.log("params : ", params)
    return (<div>{params.get("id")} : MOneCom</div>)
}

export default MOneCom