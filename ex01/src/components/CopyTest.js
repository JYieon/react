function CopyTest(){
    let arr01 = [1,2,3]
    const arr02 = [...arr01]
    // const arr02 = [arr01[0], arr01[1], arr01[2]]
    arr02[3] = 1234

    const obj01 = {id:"aaa", name:"홍길동"}
    // const obj02 = obj01 // 얕은복사
    const obj02 = {...obj01, id:"다른값"} //깊은복사. id에 대한 값만 변경
    obj02['name'] = "김개똥" //obj01도 동일하게 적용

    arr01.push(1000) //얕은 복사. 기존 주소에 있는 배열에 값 추가
    arr01 = arr01.concat(2000) //깊은 복사. 배열에 값은 추가한 후에 새로운 주소에 저장
    //react는 깊은복사를 사용하기 때문에 push보다는 concat을 주로 사용

    return(<>
        obj01<br></br>
        id : {obj01.id}<br></br>
        name : {obj01.name}<br></br>
        <hr></hr>
        obj02<br></br>
        id : {obj02.id}<br></br>
        name : {obj02.name}<br></br>
        <hr></hr>
        arr01
        <ul>
            {arr01.map(n => <li>{n}</li>)}
        </ul>
        <hr></hr>
        arr02
        <ul>
            {arr02.map(n => <li>{n}</li>)}
        </ul>
    </>)
}

export default CopyTest