function Child(props){
    console.log("child props : ", props)
    const {name} = props
    const [a,b,c] = props.children //children에 있는 값이 a,b,c에 순차적으로 저장됨
    const arr = props.children

    return (
        <>
            a : {a}, b : {b}, c : {c}<br></br>
            <h3>name : {props.name}</h3>
            <h3>children : {props.children}</h3>
        </>
    )
}

export default Child