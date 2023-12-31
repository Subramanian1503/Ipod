import React from "react";
import "./DisplayScreen";
import "./ControlMenu";
import DisplayScreen from "./DisplayScreen";
import ControlMenu from "./ControlMenu";
import CoverFlow from "./CoverFlow";
import Music from "./Music";
import Settings from "./Settings";
import Games from "./Games";
import { Routes, Route } from "react-router-dom";

class Ipod extends React.Component {
  constructor() {
    super();
    this.state = {
      menuItems: ["CoverFlow", "Music", "Games", "Settings"],
      initialActiveMenuItem: 0,
    };
  }

  handleRotateEvent(event) {
    // Destrcting the state object with required variables
    const { menuItems, initialActiveMenuItem } = this.state.menuItems;

    // Finding the total menu item length to proceed further
    const totalMenuItemsCount = menuItems.length;
    const clockWiserotate = true;

    // If the rotation event is clockwise
    if (clockWiserotate) {
      // Find current active menu item for this triggered event
      const currentMenuItemIndex = initialActiveMenuItem + 1;

      // If the current menu item is less than the total menu item length then the active menu item will be in range
      if (currentMenuItemIndex < totalMenuItemsCount) {
        this.setState({
          initialActiveMenuItem: currentMenuItemIndex,
        });
      } else {
        // If the current menu item is greater than total menu items then the active menu needs to be the first one
        this.setState({
          initialActiveMenuItem: 0,
        });
      }
    } else {
      // Find the current active menu item after triggering the event
      const currentMenuItemIndex = initialActiveMenuItem - 1;

      // Find the last index of the total menu item
      const lastMenuItemIndex = totalMenuItemsCount - 1;

      // If the current active menu item poinitng to less than first active menu item, then moving the active to last menu item
      if (currentMenuItemIndex < 0) {
        this.setState({
          initialActiveMenuItem: lastMenuItemIndex,
        });
      } else {
        // If not then assigning the current menu item
        this.setState({
          initialActiveMenuItem: currentMenuItemIndex,
        });
      }
    }
  }

  handleClockWiseRotateEvent = (event) => {
    // Destrcting the state object with required variables
    const { menuItems, initialActiveMenuItem } = this.state;

    // Finding the total menu item length to proceed further
    const totalMenuItemsCount = menuItems.length;

    // Find current active menu item for this triggered event
    const currentMenuItemIndex = initialActiveMenuItem + 1;

    // If the current menu item is less than the total menu item length then the active menu item will be in range
    if (currentMenuItemIndex < totalMenuItemsCount) {
      this.setState({
        initialActiveMenuItem: currentMenuItemIndex,
      });
    } else {
      // If the current menu item is greater than total menu items then the active menu needs to be the first one
      this.setState({
        initialActiveMenuItem: 0,
      });
    }
  };

  handleAntiClockWiseRotateEvent = (event) => {
    // Destrcting the state object with required variables
    const { menuItems, initialActiveMenuItem } = this.state;

    // Finding the total menu item length to proceed further
    const totalMenuItemsCount = menuItems.length;

    // Find the current active menu item after triggering the event
    const currentMenuItemIndex = initialActiveMenuItem - 1;

    // Find the last index of the total menu item
    const lastMenuItemIndex = totalMenuItemsCount - 1;

    // If the current active menu item poinitng to less than first active menu item, then moving the active to last menu item
    if (currentMenuItemIndex < 0) {
      this.setState({
        initialActiveMenuItem: lastMenuItemIndex,
      });
    } else {
      // If not then assigning the current menu item
      this.setState({
        initialActiveMenuItem: currentMenuItemIndex,
      });
    }
  };

  render() {
    return (
      <div className="ipodContainer">
        {/* home menu item */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <DisplayScreen
                menuItems={this.state.menuItems}
                initialActiveMenuItem={this.state.initialActiveMenuItem}
              />
            }
          />

          {/* cover flow menu item */}
          <Route exact path="/CoverFlow" Component={CoverFlow} />

          {/* music menu item */}
          <Route exact path="/Music" Component={Music} />

          {/* settings menu item */}
          <Route exact path="/Settings" Component={Settings} />

          {/* games menu item */}
          <Route exact path="/Games" Component={Games} />
        </Routes>

        <ControlMenu
          handleClockWiseRotateEvent={this.handleClockWiseRotateEvent}
          handleAntiClockWiseRotateEvent={this.handleAntiClockWiseRotateEvent}
          currentSelectedMenu={
            this.state.menuItems[this.state.initialActiveMenuItem]
          }
        />
      </div>
    );
  }
}

export default Ipod;
