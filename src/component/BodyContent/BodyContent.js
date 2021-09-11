import React from 'react';
import LeftSide from './LeftSide/LeftSide';
import MiddleBannar from './MiddleBannar/MiddleBannar';
import RightSide from './RightSide/RightSide';

const BodyContent = () => {
    return (
        <div className="">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <LeftSide></LeftSide>
                    </div>
                    <div className="col-md-6">
                        <MiddleBannar></MiddleBannar>
                    </div>
                    <div className="col-md-3">
                        <RightSide></RightSide>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodyContent;