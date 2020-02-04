import React, { setState } from 'react';
import axios from 'axios';
import Usercard from './Components/Usercard';
import Followercard from './Components/Followercard';

class App extends React.Component {
  state = {
    users: {},
    followers: []
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/brennuck")
    .then(res => {
      console.log("Response" ,res);
      this.setState({
        ...this.state,
        users: res.data
      })
    })
    .catch(err => {
      console.log(err);
    })

    axios.get("https://api.github.com/users/brennuck/followers")
    .then(res2 => {
      console.log("lets see 2 in 1", res2)
      this.setState({
        ...this.state,
        followers: res2.data
      })
    })
    .catch(err2 => {
      console.log(err2.response)
    })
  }

  render() {
    console.log( "Hello" ,this.state)
    return (
      <div>
        <Usercard users={this.state.users} />
        <Followercard followers={this.state.followers} />
      </div>
    )
  }
}

export default App;
