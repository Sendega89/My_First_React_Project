import React, {useState} from "react";
import s from './Music.module.css';
import SearchForm from "./SearchForm";




const Music = (props) => {
    let musicElements = props.musicData.map(p => <Item
        key={p.id}
        artist={p.artist}
        id={p.id}
        collection_image={p.collection_image}
        track={p.track}
        collection={p.collection}
        genre={p.genre}
        trackCount={p.trackCount}
        price={p.price}
        trackDuration={p.trackDuration}
        trackPrice={p.trackPrice}
    />);

    return <div className={s.wrapper}>
        <div className={s.search_form_block}>
        <h1>ITunes music</h1>
        <div>
            <SearchForm getMusicList={props.getMusicList} />
        </div>
        </div>
        <div className={s.parameters_item}>
            <div></div>
            <div>Artist</div>
            <div>Track</div>
            <div>Collection</div>
            <div>Genre</div>
            <div></div>
        </div>
        <div>
            {musicElements}
        </div>
    </div>
}
export default Music;


export const Item = (props) => {
    let [trackDetail, setTrackDetail] = useState(false);
    return <div className={s.item_wrapper}>
<div className={s.main_items}>
        <div className={s.music_item}>{props.collection_image}</div>
        <div className={s.music_item}>{props.artist}</div>
        <div className={s.music_item}>{props.track}</div>
        <div className={s.music_item}>{props.collection}</div>
        <div className={s.music_item}>{props.genre}</div>
        <div className={s.music_item}>{trackDetail && <b onClick={()=>setTrackDetail(!trackDetail)}>-</b> ||
                !trackDetail && <b onClick={()=>setTrackDetail(!trackDetail)}>+</b>}
        </div>
</div>
<div className={s.detail_items}>
        {trackDetail && <div className={s.track_detail_wrapper}>
            <div>{props.artist} - {props.track}</div>

        <div>
            <div>Collection: {props.collection}</div>
            <div>Track count: {props.trackCount}</div>
            <div>Price: {props.price}</div>
                <div>
            <div>Track duration: {props.trackDuration}</div>
            <div>Track Price: {props.trackPrice}</div>
                </div>
        </div>

        </div>}
        </div>
    </div>
}