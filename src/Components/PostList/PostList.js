import React, { Component } from 'react';
import './PostList.css';
import Post from '../Post/Post';

class PostList extends Component {
  constructor(props){
    super(props);
    this.chooseTopic = this.chooseTopic.bind(this);
    this.state={
      selectedTopicID: this.props.selectedTopicID
    };
  }

  chooseTopic(id){
    this.setState({selectedTopicID: id});
  }


  render() {
    let key = 0;

    let filteredArray = this.props.posts.filter(post => post.topicID === this.props.selectedTopicID);

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
