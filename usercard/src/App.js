import React, { setState } from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/brennuck")
    .then(res => {
      console.log("Response" ,res);
      this.setState({
        users: res.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
      </div>
    )
  }
}

export default App;
