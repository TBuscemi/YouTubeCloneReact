import React, { Component } from 'react';
import axios from 'axios';
import './App.css'
import VideoPlayer from './VideoPlayer/VideoPlayer';
import SearchBar from './SearchBar/SearchBar'
// import YouTubeKey from './Api/YouTubeApi';
import RelatedVideos from './RelatedVideo/RelatedVideo';
import Comment from './Comment/Comment';
import CommentSection from './CommentSection/CommentSection';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        relatedVideos: [],
        comments: {}
        }            
    }

    componentDidMount(){
        this.newSearch();
    }

   

    async newSearch(search_term){
        if (search_term === "" || search_term === null){
            return;
        }
        try{  
            
            console.log("Search Term: ", search_term)
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search_term}&key=AIzaSyCYaSiKtKMiU-P91FpjJZJ5crSaBuMczVw&maxResults=5`);
            console.log("Response Items: ", response.data.items)
            let relatedVideoData = response.data.items;
            let videoArray = []
            for (let i = 0; i < relatedVideoData.length; i++) {
                console.log(relatedVideoData[i].id.videoId)
                videoArray.push(relatedVideoData[i].id.videoId)
            }
            this.setState({relatedVideos:videoArray})
        }
        catch(ex) {
            console.log('error in API call!');
        }
    }
    
    async addComment(newComment){ 
        try{
          await axios.post("http://127.0.0.1:8000/comments/", newComment)
        }
        catch(ex){
            console.log("something broke in addComment")
        }
    } 
     
    
    componentDidMount(){
        this.getComments();
    }


    async getComments(){ 
        try{
            let response = await axios.get('http://127.0.0.1:8000/comments/')
            let commentData = response.data;
            let commentArray = [];
            for (let i = 0; i < commentData.length; i++) {
                console.log(commentData[i].text)
                commentArray.push(commentData[i].text)
                console.log(commentArray)
            }
            this.setState({
                comments : commentArray
            });
            console.log(this.state.comments)
        }
        catch(ex){
            console.log("something broke in get comments")
            console.log(this.state.comments)
        }
    } 

    render(){
        return(
            <div>
                <SearchBar searchQuery={this.newSearch} />
                <VideoPlayer/>        
                <RelatedVideos videos={this.state.relatedVideos}/>
                <Comment commentAdded={this.addComment} />
                <CommentSection allComments={this.state.comments}/>
                
            </div>
        )
    }


}    

export default App;