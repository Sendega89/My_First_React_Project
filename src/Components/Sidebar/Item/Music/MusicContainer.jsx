import React from "react";
import Music from "./Music";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getMusicList, setMusicList} from "../../../../redux/music_Reducer";

const MusicContainer = (props) => {

    return <div>
        <Music getMusicList={props.getMusicList}
               musicData={props.musicData}
               setMusicList={props.setMusicList}/>
    </div>
}
let mapStateToProps = (state) => ({
    musicData: state.musicPage.musicData
});



export default compose(
    connect(mapStateToProps, {getMusicList,setMusicList}),
    withRouter,
)(MusicContainer)

