import React from "react";
import "../css/ControlMenu.css";
import ZingTouch from "zingtouch";
import { Link } from "react-router-dom";

class ControlMenu extends React.Component {
  componentDidMount() {
    // Create region for zing touch to handle rotate event
    const zingtouchRegion = new ZingTouch.Region(document.body);
    // Get the wheel element to detect rotate component in it
    const controlWheel = document.getElementById("wheelButton");
    // Bind the call back function with the rotate event of the wheel element
    zingtouchRegion.bind(
      controlWheel,
      "rotate",
      (event) => {
        const distanceFromLast = event.detail.distanceFromLast;
        if (distanceFromLast > 0) {
          this.props.handleClockWiseRotateEvent();
        } else {
          this.props.handleAntiClockWiseRotateEvent();
        }
      },
      false
    );
  }

  render() {
    return (
      /* control menu buttons container */
      <div className="controlMenuContainer">
        {/* wheel button with all controls  */}
        <div id="wheelButton">
          {/* menu button */}
          <div id="menuButton">
            <b>
              <Link style= { {textDecoration: "none", color: "black"}}to={-1}>Menu</Link>
            </b>
          </div>

          {/* backward button */}
          <img
            src="https://cdn-icons-png.flaticon.com/128/3318/3318703.png"
            alt="backward_button"
            className="buttons"
            id="backward_button"
            onClick={this.handleBackwardButton}
          ></img>

          {/* forward button */}
          <img
            src="https://cdn-icons-png.flaticon.com/128/4211/4211386.png"
            alt="fastforward_button"
            className="buttons"
            id="fast_forward_button"
            onClick={this.handleFastForwardButton}
          ></img>

          {/* pause/play button */}
          <img
            src="https://cdn-icons-png.flaticon.com/128/7960/7960808.png"
            alt="pause_play_buttons"
            className="buttons"
            id="pause_play_button"
            onClick={this.handlePlayPauseButton}
          ></img>

          {/* select button */}
          <div id="centerButton"></div>
        </div>
      </div>
    );
  }
}

export default ControlMenu;
