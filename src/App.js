import React, { Component } from 'react';
import './App.css';
import TopicList from './Components/TopicList/TopicList';
import PostList from './Components/PostList/PostList';


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
      postList: [
          { topicID: 0,
            text: "Hi! My name is Daniel, and this is my first time posting. I'm opening this forum up to anyone who likes the color blue, or even tolerates it.... so everyone!!",
            username: "dannyboy",
            date: "9-13-17"
          }, { topicID: 0,
            text: "Anyone know how to make a website? I'd really love one.",
            username: "kellbell",
            date: "9-15-17"
          }, { topicID: 0,
            text: "I can help you with that.... for a price.",
            username: "dannyboy",
            date: "9-21-17"
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
  }

  render() {
    return (
      <html className="App">
        <header>
          <h1 className="App-title">Blue Forum</h1>
          <nav>
            <TopicList onClick={this.chooseTopic} topicList={this.state.topicList}/>
          </nav>
        </header>

        <main>
            <PostList selectedTopicID={this.state.selectedTopicID} posts={this.state.postList}/>
        </main>

      </html>
    );
  }
}

export default App;
