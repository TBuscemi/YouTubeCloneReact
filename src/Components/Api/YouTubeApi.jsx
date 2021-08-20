import axios from "axios";

const KEY= AIzaSyCYaSiKtKMiU-P91FpjJZJ5crSaBuMczVw

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/vs/',
    params:{
        part: 'snippet',
        maxResults : 10,
        key : KEY
    }
})