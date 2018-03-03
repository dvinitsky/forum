import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  
  render() {
    
      return (
        <div>{this.props.post.text}</div>
      
      )
      
  }
}

export default Post;