function Header(props){ //props값은 괄호에서 받아준다
    console.log("props : ", props)
    return(
        <>
        <h2>HEADER 영역</h2>
        props.test : {props.test}<br></br>
        props.number : {props.number}<br></br>
        </>
    )
}

export default Header