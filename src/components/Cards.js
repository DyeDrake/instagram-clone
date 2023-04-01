import "../styles/cards.scss"
import Stories from "./Stories";
import HorizontalScroll from "react-scroll-horizontal";

function Cards(){
    return(
        <div className="cards">
            <HorizontalScroll className="scroll" reverseScroll={true}>
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />

            </HorizontalScroll>
        </div>
    )
}

export default Cards;