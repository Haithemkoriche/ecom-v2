import React from 'react';
import Hero from "../../components/FrontEnd/Hero/Hero.jsx";
import Popular from "../../components/FrontEnd/Popular/Popular.jsx";
import NewCollections from "../../components/FrontEnd/NewCollections/NewCollections.jsx";
import NewsLetter from "../../components/FrontEnd/NewsLetter/NewsLetter.jsx";
import Service from "../../components/FrontEnd/Service/Service.jsx";
import WelcomeSection from "../../components/FrontEnd/WelcomeSection/WelcomeSection.jsx";


function Shop() {
    return (
        <div>
            <Hero />
            <Service />
            <Popular />
            <WelcomeSection />
            <NewCollections />
            <NewsLetter />
        </div>
    );
}

export default Shop;