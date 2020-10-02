import React from 'react';
import Element from './element'

import './Dwindow.scss'

const Dwindow = () => {

    return (
        <div className='window'>
        <div className="header1">
        <div className="search"></div> 
            <div className="ham">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
        <div className="container">
            <Element color="rgb(244,175,0)" back="linear-gradient(175deg, rgba(244,175,0,1) 0%, rgba(205,108,235,1) 100%)"/>
            <Element color="rgb(0,244,237)" back="linear-gradient(162deg, rgba(0,244,237,1) 0%, rgba(108,142,235,1) 52%)"/>
            <Element color="rgb(233,0,244)" back="linear-gradient(162deg, rgba(233,0,244,1) 0%, rgba(152,108,235,1) 52%)"/>
        </div>
            
        </div>
    );
}

export default Dwindow;
