import React from 'react'
import HeroCarsoul from '../components/HeroCarsoul'
import ServicesCard from '../components/ServicesCard'
import WelcomeComfy from '../components/WelcomeComfy'
import ClientTerminal from '../components/ClientTerminal'
import ProtectionPlans from '../components/ProtectionPlans'
import RunningCounter from '../components/RunningCounter'
import Contact from '../components/Contact'
import CardAllService from '../components/CardAllService'
import Sale from '../components/Sale'

const Home = () => {
    return <>

        <HeroCarsoul />
        <ServicesCard />
        <WelcomeComfy />
        <CardAllService />
        <Sale />
        <ProtectionPlans />
        <ClientTerminal />
        <RunningCounter />
        <Contact />

    </>
}

export default Home