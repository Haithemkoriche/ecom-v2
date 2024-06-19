import React from 'react';
import "./DescriptionBox.css"
function DescriptionBox(props) {
    const {description} = props;
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box show">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p
                    dangerouslySetInnerHTML={{__html: description}}
                />
            </div>
        </div>
    );
}

export default DescriptionBox;