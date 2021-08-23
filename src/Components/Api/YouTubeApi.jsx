import axios from "axios";

const KEY= 'AIzaSyCYaSiKtKMiU-P91FpjJZJ5crSaBuMczVw'
//spencer's API key 'AIzaSyDs-up5MDmxBJK_Rrkw_l8sicAkHOgYpk4'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/vs/',
    params:{
        part: 'snippet',
        maxResults : 10,
        key : KEY
    }
})