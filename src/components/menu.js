import "../styles/menu.scss";
import {ReactComponent as Home} from "../images/home.svg";
import {ReactComponent as Inbox} from "../images/messages.svg";
import {ReactComponent as Explore} from "../images/explore.svg";
import {ReactComponent as Notifications} from "../images/notifications.svg";

function Menu(){
    return(
        <div className="menu">
            <Home className="menu-icon" />
            <Inbox className="menu-icon" />
            <Explore className="menu-icon"/>
            <Notifications className="menu-icon" />
            {/*profileIconComponent*/}
        </div>
    )
}

export default Menu;