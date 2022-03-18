import * as axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://itunes.apple.com/search?term=',
    });

export const ITunesAPI = {

    getMusic(searchResponse) {
        return (
            instance.get(`${searchResponse}&entity=musicVideo`)
                .then(response => {
                    return response.data.results
                })
        )
    }
}