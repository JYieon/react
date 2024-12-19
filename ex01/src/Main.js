function Main({tel, nick, MyClick}){
    return (
        <>
            <h5>main 영역</h5>
            tel : {tel} <br></br>
            nick : {nick}
            <button onClick={MyClick}></button>
        </>
    )
}

export default Main