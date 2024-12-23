const CheckBox02Com = ({onCheckBox, isChecked}) => {
    return (<>
        <label>확인</label>
        <input type="checkbox" onClick={onCheckBox} checked = {isChecked} />
    </>)
}

export default CheckBox02Com