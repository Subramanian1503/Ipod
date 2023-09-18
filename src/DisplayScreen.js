import React from 'react';
import './css/DisplayScreen.css';

class DisplayScreen extends React.Component {

    render() {
        return (
            // display screen container
            <div className="displayContainer">

                {/* Display menu container */}
                <div className='menuDisplayContainer'>

                    {/* Display menu  */}
                    <div className='menuDisplay'>

                        {/* Display header */}
                        <b className='displayHeader'>iPod.js</b>

                        {/* Display menu items */}
                        <ul className='menuItems'>
                            <li className='list_item active'>Cover Flow</li>
                            <li className='list_item'>Music</li>
                            <li className='list_item'>Games</li>
                            <li className='list_item'>Settings</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default DisplayScreen;