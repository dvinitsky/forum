import React, { Component } from 'react';
import './TopicList.css';
import Topic from '../Topic/Topic';

class TopicList extends Component {

  render() {
    let key = -1;

    return (
      <div className="TopicList">

        {this.props.topicList.map(topic => {
          key++;

          return <Topic onClick={this.props.onClick} key={key} id={key} topicList={this.props.topicList}/>
        })}

      </div>
    )
  }
}

export default TopicList;
