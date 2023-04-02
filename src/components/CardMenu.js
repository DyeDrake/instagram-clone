import "../styles/cardMenu.scss";
import { ReactComponent as Inbox } from "../assets/messages.svg";
import { ReactComponent as Comments } from "../assets/comments.svg";
import { ReactComponent as Notifications } from "../assets/notifications.svg";
import { ReactComponent as Bookmark } from "../assets/bookmark.svg";

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