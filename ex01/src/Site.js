function Site({a_tag}) {
    let li = []
    for(let i = 0; i < 3; i++){
        li = li.concat(<li><a href={a_tag[i].href}>{a_tag[i].txt}</a></li>)
    }
    return(
        <nav><ul>{li}</ul></nav>
    )
}

export default Site