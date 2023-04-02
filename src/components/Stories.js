import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import Story from './Story';
import '../styles/stories.scss';

function Stories() {
    const [selected, setSelected] = React.useState([]);

    const isItemSelected = (id) => !!selected.find((el) => el === id);

    const handleClick = (id) => ({ scrollToItem }) => {
        setSelected((currentSelected) =>
            isItemSelected(id)
                ? currentSelected.filter((el) => el !== id)
                : currentSelected.concat(id)
        );
        scrollToItem(id);
    };

    const items = Array(20)
        .fill(0)
        .map((_, ind) => ({ id: `element-${ind}`, title: `Element ${ind + 1}` }));

    return (
        <div className="stories">
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                {items.map(({ id, title }) => (
                    <Story
                        itemId={id}
                        title={title}
                        key={id}
                        onClick={handleClick(id)}
                        selected={isItemSelected(id)}
                    />
                ))}
            </ScrollMenu>
        </div>
    );
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);

    return (
        <button className="scroll-button" disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            {'<'}
        </button>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

    return (
        <button className="scroll-button" disabled={isLastItemVisible} onClick={() => scrollNext()}>
            {'>'}
        </button>
    );
}

export default Stories;