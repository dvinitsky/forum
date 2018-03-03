import React, { Component } from 'react';
import './App.css';
import TopicList from './Components/TopicList/TopicList';
import PostList from './Components/PostList/PostList';
//test test
class App extends Component {
  constructor(props){
    super(props);
    this.chooseTopic = this.chooseTopic.bind(this);
    this.state={
      topicList: [
        { topicID: 0,
          name: 'Technology'
        }, { topicID: 1,
          name: 'Sports'
        }, { topicID: 2,
          name: 'Politics'
        }, { topicID: 3,
          name: 'TV'
        }
      ],
      //doing stuff here
      postList: [
          { topicID: 0,
            text: "Sample Text 1"
          }, { topicID: 0,
            text: "Sample Text 2"
          }, { topicID: 0,
            text: "Sample Text 3"
          }, { topicID: 1,
            text: "Sample Text 4"
          }, { topicID: 1,
            text: "Sample Text 5"
          }, { topicID: 1,
            text: "Sample Text 6"
          }, { topicID: 2,
            text: "Sample Text 7"
          }, { topicID: 2,
            text: "Sample Text 8"
          }, { topicID: 2,
            text: "Sample Text 9"
          }, { topicID: 3,
            text: "Sample Text 10"
          }, { topicID: 3,
            text: "Sample Text 11"
          }, { topicID: 3,
            text: "Sample Text 12"
          }
      ],
      selectedTopicID: 0
    };

  }

  chooseTopic(id){
    this.setState({selectedTopicID: id});
    //sets the state properly
  }

  render() {
    return (
      <div className="App">
          <h1 className="App-title">Blue Forum</h1>
          <div className="Body">
            <TopicList onClick={this.chooseTopic} topicList={this.state.topicList}/>
            <PostList selectedTopicID={this.state.selectedTopicID} posts={this.state.postList}/>
          </div>
      </div>
    );
  }
}

export default App;
