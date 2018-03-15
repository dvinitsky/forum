import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  constructor(props){
    super(props);
    this.topicID = -1;
    this.text = "";
    this.date = "";
    this.username = "";
  }
/*
  setTopicID(ID) {
    this.topicID = ID;
  }
  settext(text) {
    this.text = text;
  }
  setDate(dateString) {
    this.date = dateString;
  }
  setUsername(username) {
    this.username = username;
  }
*/

  render() {

      return (
        <div className="Post">

          <p className='post-body'>{this.props.post.text}</p>


          <footer>
            <p className='post-footer'>Posted by: {this.props.post.username}</p>
            <p className='post-footer'>Date: {this.props.post.date}</p>
          </footer>


        </div>
      )

  }
}

export default Post;
