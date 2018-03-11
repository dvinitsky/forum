import React, { Component } from 'react';
import './Post.css';

class Post extends Component {

  render() {

      return (
        <div class="Post">

          <p class='post-body'>{this.props.post.text}</p>


          <footer>
            <p class='post-footer'>Posted by: {this.props.post.username}</p>
            <p class='post-footer'>Date: {this.props.post.date}</p>
          </footer>


        </div>
      )

  }
}

export default Post;
