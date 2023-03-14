// ---------import from react and other css & js file------------------------------------------------------------------//
import React from "react";
import './App.css';
import './index.css';
import Tooltip from './Tooltip';

class App extends React.Component {


  // ---------creating the constructor                ------------------------------------------------------------------//
  constructor() {
    super();
    this.state = {
      position: "top",
      hovering: false,
    };
  }


  // ---------creating the handleclick function to handle the click-----------------------------------------------------//
  handleClick = (pos) => {
    this.setState({
      position: pos,
    });
  };



  // ---------creating function to handle mouse/pointer hover/enter event------------------------------------------------//
  handleMouseEnter = () => {
    this.setState({
      hovering: true,
    });
  };

// ---------creating function to handle mouse leave event---------------------------------------------------------------//
  handleMouseLeave = () => {
    this.setState({           
      hovering: false,
    });
  };


  render() {
    return (
  
       <div className="App">
        <div className="heading">Tool-Tip</div>

        <div className="btn-position">

        <div className="grp-name">
              Select the position of Hovering!
            </div>
          
          <nav className="navigation">
            

{/*---------creating the event and button for hover on top ------------------------------------------------------------*/}
            <button 
              className={this.state.position === "top" ? "btn active" : "btn-top"}
              onClick={(e) => {
                this.handleClick("top");
              }}
            >
              Top
            </button>


{/*-------- creating the event and button for hover on left -----------------------------------------------------------*/}
            <button
              className={this.state.position === "left" ? "btn active" : "btn-left"}
              onClick={(e) => {
                this.handleClick("left");
              }}
            >
              Left
            </button>
            

{/*--------- creating the event and button for hover on right  --------------------------------------------------------*/}
            <button                   
              className={this.state.position === "right" ? "btn active" : "btn-right"}
              onClick={(e) => {
                this.handleClick("right");
              }}
            >
              Right
            </button>

{/* --------creating the event and button for hover on down -----------------------------------------------------------*/}
            <button
              className={this.state.position === "down" ? "btn active" : "btn-down"}
              onClick={(e) => {
                this.handleClick("down");
              }}
            >
              Down
            </button>

          </nav>


{/* ------ handle mouse hover events ----------------------------------------------------------------------------------*/}
          <div
            className="Hover-btn"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >
            <center> Hover over Me!</center> 
          </div>
           
          {this.state.hovering && (
            <Tooltip position={this.state.position} />
          )}
          </div>
       </div> 
      
    );
  }
}

export default App;