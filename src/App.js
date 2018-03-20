import React, { Component } from 'react';
import './App.css';
import TopicList from './Components/TopicList/TopicList';
import PostList from './Components/PostList/PostList';


class App extends Component {
  constructor(props){
    super(props);
    this.chooseTopic = this.chooseTopic.bind(this);
    this.captureComment = this.captureComment.bind(this);
    this.captureComment = this.captureComment.bind(this);
    this.postComment = this.postComment.bind(this);
    this.captureUsername = this.captureUsername.bind(this);
    this.showUsername = this.showUsername.bind(this);
    this.getDate = this.getDate.bind(this);
    this.ifEnterSubmit = this.ifEnterSubmit.bind(this);
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

  captureComment(e){
    this.setState({comment: e.target.value});
  }

  getDate(){
    let fullDate = new Date();
    let date = fullDate.getDate();
    let month = fullDate.getMonth() + 1;
    let year = fullDate.getFullYear().toString().substring(2,4);
    return month + '-' + date + '-' + year;
  }

  postComment(){
    let newPost = {
      topicID: this.state.selectedTopicID,
      text: this.state.comment,
      username: this.state.currentUsername,
      date: this.getDate()
    };

    let tempPostList = this.state.postList;
    tempPostList.push(newPost);

    this.setState({postList: tempPostList});
    document.getElementById('text').value='';
  }

  captureUsername(e){
    this.setState({username: e.target.value});
  }

  ifEnterSubmit(e){
    if(e.key === 'Enter'){
      this.showUsername();
    }
  }

  showUsername(){
    document.getElementById('username').innerHTML = 'Current Username: '  + this.state.username;
    document.getElementById('username-input').value='';
    this.setState({currentUsername: this.state.username});

  }

  render() {

    return (
      <div className="App">
        
        <div id='test1'>

          <div id='username-group'>
            <h2>Username:</h2>
            <input id="username-input" className="username-input" onChange={this.captureUsername} onKeyPress={this.ifEnterSubmit}/>
            <br />
            <button onClick={this.showUsername} id='username-submit'>Submit</button>
              <p id='username'></p>
          </div>
          
          <nav>
            <TopicList onClick={this.chooseTopic} topicList={this.state.topicList}/>
          </nav>
  
        </div>
      

        <div id='test2'>
          <h1 className="App-title">Blue Forum</h1>

          <main>
            <PostList selectedTopicID={this.state.selectedTopicID} posts={this.state.postList}/>
            <textarea id='text' onChange={this.captureComment} placeholder="Write a comment"></textarea>
            <button className='post-submit' onClick={this.postComment}>Submit</button>
          </main>

          <h3>Site by Daniel Vinitsky</h3>
          <h3><a href="http://www.danielvinitsky.com">danielvinitsky.com</a></h3>

        </div>

        
        
      </div>
    );
  }
}

export default App;


