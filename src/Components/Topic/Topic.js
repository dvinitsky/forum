import React, { Component } from 'react';
import './Topic.css';

class Topic extends Component {
   constructor(props){
    super(props);
    this.chooseTopic = this.chooseTopic.bind(this);
  }


  chooseTopic(){
    this.props.onClick(this.props.id);
  }

  render() {
    let name = this.props.topicList[this.props.id].name;

    return (
      <div>
        <div onClick={this.chooseTopic} className="Topic">{name}</div>
        <div>
        </div>
      </div>
    );
  }
}

export default Topic;
