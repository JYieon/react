function Nav(props){
    const {name} = props //props가 가진 key와 일치하는 value를 저장
    const {addr : abcd} = props //addr값을 abcd라는 이름으로 사용하
    const {name : n, addr} = props
    return(
        <nav>
            <ul>
                <li><a href="#">{name}</a></li>
                <li><a href="#">{abcd}</a></li>
                <li><a href="#">{n}</a></li>
            </ul>
        </nav>
    )
}

export default Nav