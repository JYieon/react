function Quiz02({onIn, onOut, msg}){
    return(
        <>
            {msg === ""?<b>값이 존재하지 않음</b>:msg}<br></br>
            <button onClick={onIn}>IN</button>
            <button onClick={onOut}>OUT</button>
        </>
    )
}

export default Quiz02