import React from 'react';
import fibbonaciSolver from '../scripts/fibbonaciSolver';
import styled, { css } from 'react-emotion';

const Container = styled('div') `
  font-family: Arial;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 600px;
  height: 210px;
  background-color: #ccc;
  border-radius: 20px;
  text-align: center;  
`;

const inputField = css`
  height: 22px;
  font-size: 18px;
  width: 70px;
  vertical-align: bottom;
`

const submitButton = css`
  padding: 8px 15px;
  border: 0 none;
  cursor: pointer;
  -webkit-border-radius: 5px;
  margin: 0px 0px 0px 4px;
  border-radius: 5px; 
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 0,
      answerValue: "Please submit a positive integer below 1477.",
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
      <Container>
        <h1>Fibbo-Notch it!</h1>
        <p>Get the Nth fibonacci value!</p>
        <p>Your value is: {this.state.answerValue}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Submit Nth value: 
            <input className={inputField} type='number' value={this.state.inputValue} onChange={this.handleChange} />
          </label>
          <input className={submitButton} type='submit' value='Submit' />
        </form>
      </Container>
    );
  }
}

export default App;
