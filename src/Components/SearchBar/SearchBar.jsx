import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: "",
            field : ""
  
        }
    }
    onChange=(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit=(ex) =>{
        ex.preventDefault()
        this.props.filter(this.state.field, this.state.search)
    }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} name="searchTerm"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
  
      );
    }
}

export default SearchBar