import React from 'react';
import Selement from './Selement'
import './Mwindow.scss'
const Mwindow = () => {
    return (
        <div className='mwindow'>
        <div className="header2">
        <div className="searc2"></div> 
            <div className="ham2">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
        <div className="container2">
            <Selement color="rgb(244,175,0)" back="linear-gradient(175deg, rgba(244,175,0,1) 0%, rgba(205,108,235,1) 100%)" />
            <Selement color="rgb(0,244,237)" back="linear-gradient(162deg, rgba(0,244,237,1) 0%, rgba(108,142,235,1) 52%)" />
            <Selement color="rgb(233,0,244)" back="linear-gradient(162deg, rgba(233,0,244,1) 0%, rgba(152,108,235,1) 52%)" />
            <Selement color="rgb(244,175,0)" back="linear-gradient(175deg, rgba(244,175,0,1) 0%, rgba(205,108,235,1) 100%)" />
            <Selement color="rgb(0,244,237)" back="linear-gradient(162deg, rgba(0,244,237,1) 0%, rgba(108,142,235,1) 52%)" />
            <Selement color="rgb(233,0,244)" back="linear-gradient(162deg, rgba(233,0,244,1) 0%, rgba(152,108,235,1) 52%)" />
            <Selement color="rgb(244,175,0)" back="linear-gradient(175deg, rgba(244,175,0,1) 0%, rgba(205,108,235,1) 100%)" />
            <Selement color="rgb(0,244,237)" back="linear-gradient(162deg, rgba(0,244,237,1) 0%, rgba(108,142,235,1) 52%)" />
            
        </div>

            
        </div>
    );
}

export default Mwindow;
