import React from 'react'
import EntryPage from './Pages/EntryPage'
import AboutUs from './Pages/AboutUs'
import Mobile from './Pages/Mobile'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

import '../../style/Auth.css'

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <EntryPage />
            <AboutUs />
            <Mobile />
            <Footer />

        </div>
    )
}

export default Home
