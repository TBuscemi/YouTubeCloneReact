import React, { Component } from 'react';
import axios from 'axios';
import './App.css'
import VideoPlayer from './VideoPlayer/VideoPlayer';
import SearchBar from './SearchBar/SearchBar'
// import YouTubeKey from './Api/YouTubeApi';
import RelatedVideos from './RelatedVideo/RelatedVideo';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        relatedVideos: []
        }            
    }

    // handleFormSubmit = async (searchResult) => {
    //     const response = await youtube.get('/search', {
    //         params: {
    //             q: searchResult
    //         }
    //     })

    //     this.setState({
    //         videos: response.data.items
    //     })
    //     console.log('this is resp', response);
    // }

    // newSearch = (user_search) => {
    //     console.log("Inside newSearch: ", user_search);

    //     axios.get('https://www.googleapis.com/youtube/v3/search?q=' + {user_search} + '&key=AIzaSyCYaSiKtKMiU-P91FpjJZJ5crSaBuMczVw&maxResults=5')
    //     .then(response => this.setState({
    //         videos: response.data
    //      }));
        
    //      console.log("State Videos items: ", this.state.videos.items);
    // }

    componentDidMount(){
        this.newSearch();
    }

    async newSearch(user_search){
        
        try{  
            
            let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=' + {user_search} + '&key=AIzaSyCYaSiKtKMiU-P91FpjJZJ5crSaBuMczVw&maxResults=5');
            console.log(user_search)
            console.log(response.data.items)
            let relatedVideos = response.data.items;
            let videoArray = []
            for (let i = 0; i < relatedVideos.length; i++) {
                console.log(relatedVideos[i].id.videoId)
                videoArray.push(relatedVideos[i].id.videoId)
            }
            this.setState({relatedVideos:videoArray})
        }
        catch(ex) {
            console.log('error in API call!');
        }
    }
    
    
    render(){
        return(
            <div>
                <SearchBar searchQuery={this.newSearch} />
                <VideoPlayer/>        
                <RelatedVideos videos={this.state.relatedVideos}/>          
            </div>
        )
    }


}    

export default App;