import {Link, useNavigate} from "react-router-dom"

const MListCom = ({list, onClick}) => {
    const navigate = useNavigate()
    const index = () => navigate("/") //redirect같은
    const before = () => navigate(-1) //이전페이지, 다음페이지 할 때 숫자부여
    return (<div>
        {list.map(data => (
            <div key={data.id}>id : {data.id}, name : <span>{data.name}</span></div>
        ))}
        <button onClick={()=>onClick("aaa")}>삭제</button>
        <div>회원목록1</div>
        <div>회원목록2</div>
        <div>회원목록3</div><hr></hr>
        <Link to="/member/one?id=3">3번 상세페이지</Link>
        <Link to="/member/update/1">1번 수정페이지</Link>
        <hr></hr>
        <div onClick={index}>index이동</div>
        <div onClick={before}>이전</div>
    </div>)
}

export default MListCom