import React from 'react';
import "./WelcomeSection.css";

function WelcomeSection() {
    return (
        <section className="hero-container">
            <div className="container">
                <div className="bar-hero">
                    <div className="hero__photo">
                        <img src="http://source.unsplash.com/QLEu_4Xj-fk/365x430" alt="Person with laptop" />
                    </div>
                    <div className="hero__body half">
                        <h4 className="hero__subtitle">The all-in-one SEO tool for Business.</h4>
                        <h1 className="hero__title">The SEO tool you need to grow your traffic and revenue.</h1>
                        <footer className="hero__footer">
                            <button className="btn btn--primary">Try for free</button>
                            <button className="btn btn--outline">Discover more</button>
                        </footer>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WelcomeSection;