import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../HeroSection/HeroSection'
import LaunchpadSection from '../LaunchpadSection/LaunchpadSection'
import Advantage from '../Advantage/Advantage'
import Message from '../Message/Message'
import Tokenomics from '../Tokenomics/Tokenomics'
import Footer from '../Footer/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <LaunchpadSection />
            <Advantage />
            <Message />
            <Tokenomics />
            <Footer />
        </>
    )
}

export default Home