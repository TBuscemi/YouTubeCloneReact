import React, { Component } from 'react';
import axios from 'axios';
import './App.css'
import VideoPlayer from './VideoPlayer/VideoPlayer';
import SearchBar from './SearchBar/SearchBar'
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        data: []
        }            
    }




    
    
    render(){
        return(
            <div>
                <VideoPlayer/>        
                <SearchBar/>
            </div>
        )
    }


}    

export default App;