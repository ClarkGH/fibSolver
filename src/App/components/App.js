import React from 'react';
import fibbonaciSolver from '../scripts/fibbonaciSolver';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 0,
      answerValue: 1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const n = parseInt(this.state.inputValue);

    this.setState({ answerValue: fibbonaciSolver(n) });
  }

  render() {
    return(
      <div>
        <h1>Fibbo-Notch it!</h1>
        <p>Get the Nth fibonacci value!</p>
        <p className='output'>Your value is: {this.state.answerValue}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Get Nth value: 
            <input type='number' value={this.state.inputValue} onChange={this.handleChange} />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}


export default App;