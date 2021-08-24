import React, { Component } from 'react';


class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video_id : '',
            text : ''
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const newComment = {
            text: this.state
        }
    }

    handleChange = (event) => {
        this.setState({text : event.target.value});
        console.log(event)
    }
    

render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>Add comment</label>
            <textarea onChange={this.handleChange}></textarea>
            <button type="submit">Submit</button>
        </form>
    )
}

}

export default AddComment