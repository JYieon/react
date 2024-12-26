import "../styles/test.css"
import styled, {css} from "styled-components" //재사용이 용이

const CssCom1 = () => {
    const style = {color : "blue", fontSize : "30px"} 
    return (<>
        <div style={style}>CssCom</div>
        <div style={{color : "blue", fontSize : "30px"}}>CssCom</div>
        <div className="test">test css</div>
    </>)
}

const Div01 = styled.div`
    color : red; font_size : 30px
`

const colorList = ["red", "blue"]
const H101 = styled.h1`
    background : ${colorList[0]};
    color : ${colorList[1]}
`

const CssCom2 = () => {
    return(<>
        <Div01>연습중!!</Div01>
        <H101>h1</H101>
    </>)
}

// css를 새롭게 재정의하는 방법
const Button01 = styled.button`
    width : 500px;
    backgoround : green; 
    ${props => props.myWidth && css`
            background : gold; width : ${props.myWidth}
        `}
`

const CssCom = (props) => {
    console.log("props : ", props)
    return(<>
        <Button01 {...props} /> 
        {/* 변수에 props 전달 가능. props의 모든 값은 전달 */}
    </>)
}

export default CssCom