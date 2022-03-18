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

    return <div>
        <div className={s.search_form_block}>
        <h1>ITunes music</h1>
        <div>
            <SearchForm getMusicList={props.getMusicList} />
        </div>
        </div>

        <div className={s.parameters_items}>
            <div className={s.parameters_items_item}>Artist</div>
            <div>Track</div>
            <div>Collection</div>
            <div>Genre</div>
        </div>
        <div >
            {musicElements}
        </div>

    </div>
}
export default Music;


export const Item = (props) => {
    let [trackDetail, setTrackDetail] = useState(false);
    if (props.id.length !=0) {
        let duration = new Date(props.trackDuration)
    return  <div  className={s.items_block_wrapper}>
        <div className={s.music_item}>
            <img src={props.collection_image} alt="collection_image"/>
        </div>
        <div className={s.music_item}>{props.artist}</div>
        <div className={s.music_item}>{props.track}</div>
        <div className={s.music_item}>{props.collection}</div>
        <div className={s.music_item}>{props.genre}</div>
        <div className={s.music_item}>{trackDetail && <b onClick={()=>setTrackDetail(!trackDetail)}>-</b> ||
                !trackDetail && <b onClick={()=>setTrackDetail(!trackDetail)}>+</b>}</div>
        {trackDetail && <>
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
            </>

        }

    </div>
    } else {
        return <div></div>
    }
}