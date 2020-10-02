import React from 'react';
import Dots from './dots'

import './element.scss'

const element = (props) => {
  
    return (
        <div className="container">
                <div className="circle" style={{backgroundColor: `${props.color}`, 
                    background: `${props.back}`, transform: `${props.tran}`}}></div>
                <div className="loremTextBlock">
                    <div className="header"></div>
                    <div className="loremBody">
                        <div className="long"></div>
                        <div className="mid"></div>
                        <div className="short"></div>
                    </div>
                    <Dots/>
                </div>
        </div>
    );
}

export default element;
