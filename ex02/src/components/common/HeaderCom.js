import {Link} from "react-router-dom"
import {Outlet} from "react-router-dom"

const HeaderCom = () => {
    return(<>
        <header>
            <Link to="/">Home</Link> &nbsp;
            <Link to="/member/list">Member</Link> &nbsp;
            <hr></hr>
        </header>
        <main>
            <Outlet />
        </main>
    </>)
}
export default HeaderCom