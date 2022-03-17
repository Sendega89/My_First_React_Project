import * as axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://itunes.apple.com/search?term=',
    });

export const ITunesAPI = {

    getMusic() {
        return (
            instance.get(`The Beatles`)
                .then(response => {
                    return response.data
                })
        )
    }
}