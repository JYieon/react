import {useReducer} from "react"

const myReducer = (state, action) => { //원하는 함수 만들기
    console.log("reducer 실행 action : ", action)
    console.log("reducer 실행 state : ", state)
    switch(action.type){
        case "up" : return {value : state.value + 1}
        case "down" : return {value : state.value - 1}
        default : return state
    }
    return state //마지막에 state값 무조건 return 넣어야 함.
}

const initialState = {value : 0}
const ReducerCom = () => {
    const [state, dispatch] = useReducer(myReducer, initialState)
    console.log("reducer com 동작", state)
    // dispatch() // myReducer동작
    const up = () => {
        dispatch({type : "up"})
    }
    const down = () => {
        dispatch({type : "down"})

    }
    return(<>
        <div>{state.value}</div>
        <button onClick={up}>up</button>
        <button onClick={down}>down</button>
    </>)
}

export default ReducerCom