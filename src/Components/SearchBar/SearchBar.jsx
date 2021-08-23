import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_search: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            user_search : event.target.value
        });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchQuery(this.state)
    }
    
    render() { 
        return ( 
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='video-search'>Search</label>
                    <input onChange={this.handleChange}></input>
                    <button type="submit">Submit</button>
                </form>
  
        );
    }
}

export default SearchBar