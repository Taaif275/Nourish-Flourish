import React from "react";
import Header from "./Componets/Header.jsx";
import Footer from "./Componets/Footer.jsx";
import Card1 from "./Cards/Card1.jsx";
import TeamPage from "./Cards/team.jsx"
import "./index.css"

function Home() {
    return (
        <div className="app-container">
            <Header />
            <main className="content">
                <Card1 />
            </main>
            <TeamPage />
            <Footer />
        </div>
    );
}

export default Home;
