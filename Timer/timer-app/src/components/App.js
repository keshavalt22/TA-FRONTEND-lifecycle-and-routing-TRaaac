import React from 'react';
import Stopwatch from './Stopwatch';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      stopwatch: false,
      countDown : false,
    }
  }

  close = (key) => {
    this.setState({ [key] : false });
  };

  render(){
    return (
      <div className='container'>
        <div>
        {
          this.state.stopwatch ? 
          (<Stopwatch close = {this.close}/>) : 
          (<button onClick={() => this.setState({ stopwatch: true })}>
            Show Stopwatch
          </button>)
        }
        </div>
      </div>
    )
  }
}


export default App;
