import React from 'react';
import './Selement.scss'

const Selement = (props) => {
    return (
        <div className="container3">
        <div className="circle3" style={{backgroundColor: `${props.color}`, 
            background: `${props.back}`, transform: `${props.tran}`}}></div>
        <div className="loremTextBlock3">
            <div className="header3"></div>
            <div className="loremBody3">
                <div className="long3"></div>
                <div className="mid3"></div>
                <div className="short3"></div>
            </div>
        </div>
</div>
    );
}

export default Selement;

