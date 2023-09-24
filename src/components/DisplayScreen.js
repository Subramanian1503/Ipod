import React from "react";
import "../css/DisplayScreen.css";
import MenuItem from "./MenuItem";

class DisplayScreen extends React.Component {
  isActive(currentMenu) {
    // get the index of the current menu from the menu list
    const currentMenuIndex = this.props.menuItems.indexOf(currentMenu);
    // Check if this index is the initialActiveMenuItem
    if (currentMenuIndex === this.props.initialActiveMenuItem) {
      // return true
      return true;
    } else {
      // return false
      return false;
    }
  }

  render() {
    return (
      // display screen container
      <div id="displayContainer">
        {/* Display menu container */}
        <div className="menuDisplayContainer">
          {/* Display menu  */}
          <div className="menuDisplay">
            {/* Display header */}
            <b className="displayHeader">iPod.js</b>

            {/* Display menu items */}
            <ul className="menuItems">
              {this.props.menuItems.map((menuItem, index) => (
                <MenuItem
                  key={menuItem}
                  name={menuItem}
                  isActive={this.isActive(menuItem)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayScreen;
