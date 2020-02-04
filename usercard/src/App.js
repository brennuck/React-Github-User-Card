import React, { setState } from 'react';
import axios from 'axios';
import Usercard from './Components/Usercard';

class App extends React.Component {
  state = {
    users: {}
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
  }

  render() {
    console.log( "Hello" ,this.state)
    return (
      <div>
        <Usercard users={this.state.users} />
      </div>
    )
  }
}

export default App;
