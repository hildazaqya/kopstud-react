import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Menu from "./Menu";
import Benefit from "./Benefit";
import Socmed from "./Socmed";
import Footer from "./Footer";

class KopstudApp extends React.Component {
    render() {
        return (
            <div>
            <Navbar />
            <Hero />
            <About />
            <Menu />
            <Benefit />
            <Socmed />
            <Footer />
            </div>
            )
    }
}

export default KopstudApp;