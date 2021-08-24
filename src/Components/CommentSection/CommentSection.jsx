import axios from 'axios';
import React, { Component } from 'react';



const CommentSection = (props) => {

    


    return (
        <table>
            {console.log(props)}
            {console.log(props.allComments)}
            <thead>
                <tr>
                    <th>Comments</th>
                </tr>
            </thead>
            <tbody>
                {/* {props.allComments.map(allComments => (
                    <tr>
                        <td>{allComments.text}</td>
                </tr>))} */}
            </tbody>
        </table>
    );
}


export default CommentSection;