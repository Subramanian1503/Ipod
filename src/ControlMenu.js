import React from 'react';
import './css/ControlMenu.css';

class ControlMenu extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {

    }

    shouldComponentUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {

        return (
            <div className='ipodContainer'>
                <div className="displayContainer">
                    <div className='menuDisplayContainer'>
                        <div className='menuDisplay'>
                            <b className='displayHeader'>iPod.js</b>
                            <ul className='menuItems'>
                                <li className='list_item'>Cover Flow</li>
                                <li className='list_item'>Music</li>
                                <li className='list_item'>Games</li>
                                <li className='list_item'>Settings</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* control menu buttons container */}
                <div className='controlMenuContainer'>

                    {/* wheel button with all controls  */}
                    <div className='wheelButtons'>

                        {/* menu button */}
                        <div id="menuButton">
                            <b>Menu</b>
                        </div>

                        {/* backward button */}
                        <img src="https://cdn-icons-png.flaticon.com/128/3318/3318703.png" alt="backward_button" className='buttons' id="backward_button"></img>

                        {/* forward button */}
                        <img src="https://cdn-icons-png.flaticon.com/128/4211/4211386.png" alt="fastforward_button" className='buttons' id="fast_forward_button"></img>

                        {/* pause/play button */}
                        <img src="https://cdn-icons-png.flaticon.com/128/7960/7960808.png" alt="pause_play_buttons" className='buttons' id="pause_play_button"></img>

                        {/* select button */}
                        <div id='centerButton'>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ControlMenu;