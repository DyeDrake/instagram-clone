import "../styles/cardMenu.scss";
import { ReactComponent as Inbox } from "../images/messages.svg";
import { ReactComponent as Comments } from "../images/comments.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";
import { ReactComponent as Bookmark } from "../images/bookmark.svg";

function CardMenu() {
    return (
        <div className="cardMenu">
            <div className="interactions">
                <Notifications className="menu-icon" />
                <Comments className="menu-icon" />
                <Inbox className="menu-icon" />
            </div>
            <Bookmark className="menu-icon" />
        </div>
    );
}

export default CardMenu;