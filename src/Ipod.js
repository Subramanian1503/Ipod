import React from 'react';
import './DisplayScreen';
import './ControlMenu';
import DisplayScreen from './DisplayScreen';
import ControlMenu from './ControlMenu';

class Ipod extends React.Component {

    render() {
        return (
            <div className='ipodContainer'>
                <DisplayScreen />
                <ControlMenu />
            </div>
        );
    }
}

export default Ipod;