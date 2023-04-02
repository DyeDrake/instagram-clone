import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";

function Cards() {
    const commentsOne = [
        {
            user: "elon_the_one",
            text: "Woah dude, this is awesome! 🔥",
            id: 1,
        },
        {
            user: "theGorilla",
            text: "Like!",
            id: 2,
        },
        {
            user: "erenYeager",
            text: "Niceeeee!",
            id: 3,
        },
    ];

    const commentsTwo = [
        {
            user: "UzumakiNa.a",
            text: "Amazing content, keep it up!",
            id: 4,
        },
    ];

    const commentsThree = [
        {
            user: "Ichi.Goo",
            text: "Love this!",
            id: 5,
        },


    ];

    const commentsFour = [
        {
            user: "Ichi.Goo",
            text: "Love this!",
            id: 5,
        },


    ];

    const commentsFive = [
        {
            user: "Ichi.Goo",
            text: "Love this!",
            id: 5,
        },


    ];

    const commentsSix = [
        {
            user: "Ichi.Goo",
            text: "Love this!",
            id: 5,
        },


    ];

    return (
        <div className="cards">
            <Stories />

            <Card
                accountName="simba_Kigi"
                storyBorder={true}
                image="https://picsum.photos/800/900"
                comments={commentsOne}
                likedByText="dadatlacak"
                likedByNumber={89}
                hours={16}
            />
            <Card
                accountName="elon_the_one"
                image="https://picsum.photos/800"
                comments={commentsTwo}
                likedByText="therealadamsavage"
                likedByNumber={47}
                hours={12}
            />
            <Card
                accountName="ErenYeager"
                storyBorder={true}
                image="https://picsum.photos/800/1000"
                comments={commentsThree}
                likedByText="mapvault"
                likedByNumber={90}
                hours={4}
            />
            <Card
                accountName="Squic.Ward"
                storyBorder={true}
                image="https://picsum.photos/800/950"
                comments={commentsThree}
                likedByText="mapvault"
                likedByNumber={90}
                hours={4}
            />
            <Card
                accountName="Annie Reinhart"
                storyBorder={true}
                image="https://picsum.photos/800"
                comments={commentsThree}
                likedByText="mapvault"
                likedByNumber={90}
                hours={4}
            />
            <Card
                accountName="Yagami Ligh.t"
                storyBorder={true}
                image="https://picsum.photos/800/900"
                comments={commentsThree}
                likedByText="mapvault"
                likedByNumber={90}
                hours={4}
            />
        </div>
    );
}

export default Cards;