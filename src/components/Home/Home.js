import React from 'react';
import "./Home.css";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";

function Home() {
    return (
        <div className="home">
            <Banner />
            <h1>Live anywhere</h1>
            <div className="home__section">
                <Card 
                    src="https://images.unsplash.com/photo-1474221550179-c492fb337327?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                    title="3 Bedroom Flat in Bournemouth"
                    description="Superhost with stunning view of the beachside in Sunny Bournemouth."
                    price="$40/night"
                />
                <Card 
                    src="https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with this stunning penthouse."
                    price="$50/night"
                />
                <Card 
                    src="https://images.unsplash.com/photo-1588625500633-a0cd518f0f60?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    title="1 Bedroom apartment"
                    description="Superhost with great amenities and a fabolous shopping complex nearby."
                    price="$60/night"
                />
                <Card 
                    src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    title="2 Bedroom apartment"
                    description="Superhost with great amenities and a fabolous shopping complex nearby."
                    price="$55/night"
                />
            </div>

            <h1>Discover Experiences</h1>
            <h2>Unique activities with local experts – in person or online.</h2>
            <div className="home__section">
                <Card
                    src="https://images.unsplash.com/photo-1598968457686-c184b8ca7244?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                    title="Online Expriences"
                    description="Unique activities we can do together, led by a world of hosts."
                />
                <Card
                    src="https://images.unsplash.com/photo-1521207070815-bf59af82d0d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
                />
                <Card
                    src="https://images.unsplash.com/photo-1522050212171-61b01dd24579?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family."
                />
            </div>
            
        </div>
    )
}

export default Home;
