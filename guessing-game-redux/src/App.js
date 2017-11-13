import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { ACTION_chooseGamemode, ACTION_getInput, ACTION_runComparison, ACTION_reset } from './actions';

class App extends Component {

  //Gamemode/Difficulty Selection
  chooseGamemode(mode, instructions){
    
    let newInstructions = instructions;
    let randomNum;

    if(mode === "Standard"){
      randomNum = Math.floor((Math.random()*10)+1);
      

    }else if(mode === "Expert"){
      randomNum = Math.floor((Math.random()*100)+1);
      
    }
    
    
    this.props.dispatch(ACTION_chooseGamemode(mode, newInstructions, randomNum));
  }

  //Get Input
  getInput(e){
    
    let input = e.target.value;
    

    console.log(input);

    this.props.dispatch(ACTION_getInput(input));
  }

  //Run Comparison
  runComparison(userNum, correctNum){
    
    let win = false;
    let attempts = 0;


    if(userNum == correctNum){
      win = true;
      attempts++;
    
    }else if(userNum > correctNum){
      alert('You are too high go lower.');
      attempts++;

    }else if(userNum < correctNum){
      alert('You are too low go higher.');
      attempts++;

    }
    
    this.props.dispatch(ACTION_runComparison(win, attempts));
  }

  //Reset
  reset(){
    this.props.dispatch(ACTION_reset());
  }

  render() {
    return (
      <div className="App">
        <div className="difficulty-selector">
	            <h1>Guessing Game</h1>
	            <h2>Game Mode</h2>
	            
              <div className = "controller-buttons">
	              <button className="standard" onClick={() => this.chooseGamemode("Standard", "Pick a number between 1 and 10")} >Standard</button>
	              <button className="expert" onClick={() => this.chooseGamemode("Expert", "Pick a number between 1 and 100")} >Expert</button>
	            </div>
	      
        </div>

	      <div className="game">
	            <div className="text">

              {this.props.difficulty !== '' && this.props.instructions !== '' &&(
                <div>
                    <div>
                    <h2 className="difficulty-display">{this.props.difficulty}</h2>
	                  <p>{this.props.instructions}</p>
	                  <p className="attempts">Attempts: {this.props.userAttempts}</p>
                    <label htmlFor="guess">Your Guess: <input id="guess" name="guess" type="number" placeholder="Guess" onChange={(e) => this.getInput(e)} required/></label>
                  </div> 

	                <div>
	                  <input type="submit" name="submit" onClick={() => this.runComparison(this.props.userGuess, this.props.correctNumber)} value="Submit"/>
	                  <input type="reset" name="reset" onClick={() => this.reset()}  value="Reset"/>
	                </div>
                </div>
                
              )
              }  
               
              
              {this.props.win === true &&(
                <p>{this.props.message}</p>
              )  
              }  
	            </div>
	      </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
    difficulty: state.difficulty,
    instructions: state.instructions,
    userGuess: state.userGuess,
    userAttempts: state.userAttempts,
    correctNumber: state.correctNumber,
    win: state.win,
    message: state.message
});

export default connect(mapStateToProps)(App);
