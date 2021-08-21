import React, { Component } from 'react';
import axios from 'axios';
import './App.css'
import VideoPlayer from './VideoPlayer/VideoPlayer';
import SearchBar from './SearchBar/SearchBar'
import youTubeKey from './Api/YouTubeApi';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        
        }            
    }

    async getVideos(){
        try{
          let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=warhammer&key=${youTubeKey}&part=snippet`)
          console.log(response.data)
        }
        catch(ex){
          console.log("error!")
        }
      }



    
    
    render(){
        return(
            <div>
                <button onClick={() => this.getVideos()}>test console.log</button>
                <VideoPlayer/>        
                <SearchBar/>
            </div>
        )
    }


}    

export default App;