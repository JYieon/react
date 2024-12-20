function StoreCom({store, inStore, outStore}){
    return(<>
        {store.msg == ""?<p>오픈 전입니다</p>:
        <>
        in number : {store.inData}<br />
        out number : {store.outData}<br />
        in - out = {store.inData - store.outData}
        </>
        }
        <hr />
        <button onClick={inStore}>IN</button>
        <button onClick={outStore}>OUT</button>
    </>)
}

export default StoreCom