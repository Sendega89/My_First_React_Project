import {Accordion, AccordionContext, Card, useAccordionButton} from "react-bootstrap";
import {useContext} from "react";
import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import s from "./Music.module.css";


function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <button
            type="button"
            style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

 function Example(props) {
     let duration = new Date(props.trackDuration)
    return (
        <Accordion defaultActiveKey={props.id}>
            <Card>
                <Card.Header>
                    <div  className={s.items_block_wrapper}>
                        <div className={s.music_item}>
                            <img src={props.collection_image} alt="collection_image"/>
                        </div>
                        <div className={s.music_item}>{props.artist}</div>
                        <div className={s.music_item}>{props.track}</div>
                        <div className={s.music_item}>{props.collection}</div>
                        <div className={s.music_item}>{props.genre}</div>
                    </div>
                    <ContextAwareToggle eventKey={props.id}>Click me!</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey={props.id}>
                    <Card.Body>
                        <div className={s.artist_track_block}>{props.artist} - {props.track}</div>
                        <div className={s.details_block_1}>
                            <div><b>Collection:</b> {props.collection}</div>
                            <div><b>Track count:</b> {props.trackCount}</div>
                            <div><b>Price:</b> {props.price} USD</div>
                        </div>
                        <div className={s.details_block_2}>
                            <div><b>Track duration:</b> {duration.getMinutes()}:{duration.getSeconds()} min</div>
                            <div><b>Track Price:</b> {props.trackPrice} USD</div>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default Example;