
import {ITunesAPI as iTunesAPI} from "../api/iTunesAPI";

const SET_MUSIC_LIST = 'music_Reducer/SET_MUSIC_LIST';

let initialState = {
    musicData: [
        {
            id: '',
            collection_image: '',
            artist: '',
            track: '',
            collection: '',
            genre: '',
            trackCount: '',
            price:'',
            trackDuration:'',
            trackPrice:'',
        },

    ]

}
const music_Reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_MUSIC_LIST:

            let newMusicItem = action.trackData.map(item => ({
                key:item.trackTimeMillis,
                id:item.artistId,
                collection_image: item.artworkUrl100,
                artist: item.artistName,
                track: item.trackName,
                collection: item.collectionName,
                genre: item.primaryGenreName,
                trackName:item.trackName,
                trackCount: item.trackCount,
                price:item.trackPrice,
                trackDuration:item.trackTimeMillis,
                trackPrice:item.trackPrice,
            }))
            return {
                ...state,
                musicData: newMusicItem,

            };

        default:
            return state;
    }
}

export const setMusicList = (response) => ({type: SET_MUSIC_LIST, trackData:response});


export const getMusicList = (searchText) => async (dispatch) => {
  let searchResponse =searchText.split(' ').join('+')
    let response = await iTunesAPI.getMusic(searchResponse);

    dispatch(setMusicList(response));

}


export default music_Reducer;