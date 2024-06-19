import React from 'react';
import "./About.css";
import about01 from "../../../components/FrontEnd/assets/about-01.jpg"
function About() {
    return (
        <div className="about">
            <div className="responsive-container-block bigContainer">
                <div className="responsive-container-block Container">
                    <img className="mainImg"
                         src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eaboutus1.svg" />
                    <div className="allText aboveText">
                        <p className="text-blk headingText">
                            Our Mission
                        </p>
                        <p className="text-blk description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper
                            suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum
                            ut.
                        </p>
                        <button className="explore btn btn-primary">
                            Explore
                        </button>
                    </div>
                </div>
                <div className="responsive-container-block Container bottomContainer">
                    <img className="mainImg"
                         src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/xpraup2.svg"/>
                    <div className="allText bottomText">
                        <p className="text-blk headingText">
                            Our Vision
                        </p>
                        <p className="text-blk description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper
                            suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum
                            ut.
                        </p>
                        <button className="explore btn btn-primary">
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;