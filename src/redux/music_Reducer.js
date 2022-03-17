
import {ITunesAPI as iTunesAPI} from "../api/iTunesAPI";

const SET_MUSIC_LIST = 'music_Reducer/SET_MUSIC_LIST';


let initialState = {
    musicData: [
        {
            id: 1,
            collection_image: 'collection_image',
            artist: 'The Beatles',
            track: 'Hey Jude',
            collection: 'Gold hits',
            genre: 'Pop',
            trackCount: '17',
            price:'5.13 USD',
            trackDuration:'3:18',
            trackPrice:'1.13 USD',
        },
        {
            id: 1,
            collection_image: 'collection_image',
            artist: 'The Beatles',
            track: 'Hey Jude',
            collection: 'Gold hits',
            genre: 'Pop',
            trackCount: '17',
            price:'5.13 USD',
            trackDuration:'3:18',
            trackPrice:'1.13 USD',
        },
    ]

}
const music_Reducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_MUSIC_LIST:
            let newMusicItem = {
                id:' 12',
                collection_image: 'collection_image 5',
                artist: 'Artist 45th',
                track: 'Trackrthr',
                collection: 'Collection erhgeg',
                genre: 'Genre erheh',

            };
            return {
                ...state,
                musicData: [...state.musicData, newMusicItem],

            };

        default:
            return state;
    }
}

export const setMusicList = () => ({type: SET_MUSIC_LIST});


export const getMusicList = () => async (dispatch) => {
    let response = await iTunesAPI.getMusic();
    //dispatch(setMusicList(response.data));
}


export default music_Reducer;