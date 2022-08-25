import axios from 'axios';

const KEY = 'AIzaSyBqkUtgZnJUIjz-7ow_v6GzoyeKwTr55n4'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5, 
        key: KEY
    }
});

