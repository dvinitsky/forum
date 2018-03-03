import React, { Component } from 'react';
import './PostList.css';
import Post from '../Post/Post';

class PostList extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedTopicID: this.props.selectedTopicID
      //is not being set properly
    };
  }
  
  

  render() {
      console.log('selected id: ' + this.state.selectedTopicID);

    
    let key = 0;
    
    let filteredArray = this.props.posts.filter(post => post.topicID === this.state.selectedTopicID);
    console.log('filteredarra:' + filteredArray[0].text)
    
      return (
        <div className="PostList">
        
          {filteredArray.map(post => {
            key++;
            return <Post key={key} post={post}/>  
            })}
      
        
        </div>
      
      )
  }
}

export default PostList;