import CheckBox02Com from "../../components/form/CheckBox02Com"
import { useState } from "react"

const CheckBox02Con = () => {
    const [isChecked, setIsChecked] = useState(false)
    const onCheckBox = () => {
        setIsChecked(!isChecked)
    }

    const init = [
        {key:1, label:"게임", isChecked:false},
        {key:2, label:"멍", isChecked:false},
        {key:3, label:"잠", isChecked:false}
    ]

    const ageInit = [
        {key:1, value:"10대", name:"age", isChecked:true},
        {key:2, value:"20대", name:"age", isChecked:false},
        {key:3, value:"30대", name:"age", isChecked:false}
    ]

    const [hobby, setHobby] = useState(init)
    const [age, setAge] = useState(ageInit)
    
    const onChangeHobby = (key) => {
        console.log("key : ", key)
        const updateHobby = hobby.map(data => (
            data.key === key ? {...data, isChecked:!data.isChecked} : data
        ))
        console.log("변경 전 : ", hobby)
        console.log("변경 후 : ", updateHobby)
        setHobby(updateHobby)
    }

    const onChangeAge = (key) => {
        console.log("key : ", key)
        const updateAge = age.map(data => (
            data.key === key ? {...data, isChecked:!data.isChecked} : {...data, isChecked:false}
        ))
        console.log("변경 전 : ", age)
        console.log("변경 후 : ", updateAge)
        setAge(updateAge)
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        console.log("취미 선택 : ", hobby)
    }
    
    return (<>
        <AgeCheckComponent onChangeAge={onChangeAge} age={age} onSubmit={onSubmit} />
        <CheckBoxComponent onChangeHobby={onChangeHobby} hobby={hobby} onSubmit={onSubmit}/>
        <CheckBox02Com onCheckBox={onCheckBox} isChecked={isChecked} />    
    </>)
}

export const CheckBoxComponent = ({onSubmit, onChangeHobby, hobby}) => {
    return (<>
        <form onSubmit={onSubmit}>
            {hobby.map(data =>(
                <>
                    <span key={data.key}></span>
                    <label>{data.label}</label>  
                    <input type="checkbox" checked={data.isChecked} onChange={()=>onChangeHobby(data.key)} />
                </>
            ))}
            <button>클릭</button>
        </form>    
    </>)
}

export const AgeCheckComponent = ({onSubmit, onChangeAge, age}) => {
    return (<>
        <form onSubmit={onSubmit}>
            {age.map(data =>(
                <>
                    <span key={data.key}></span>
                    <label>{data.value}</label>  
                    <input type="checkbox" name={data.name} checked={data.isChecked} onChange={()=>onChangeAge(data.key)} />
                </>
            ))}
            <button>클릭</button>
        </form>    
    </>)
}

export default CheckBox02Con