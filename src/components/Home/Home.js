import React from 'react'
import { HomeHeader } from './HomeHeader'
import { HomeStatistics } from './HomeStatistics'
import { HomeSimpleSteps } from './HomeSimpleSteps'
import { HomeAboutUs } from './HomeAboutUs'
import { HomeWhoWeHelp } from './HomeWhoWeHelp'
import { HomeContactForm } from './HomeContactForm'

const Home = () => {
    return (
        <>
            <HomeHeader />
            <HomeStatistics />
            <HomeSimpleSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <HomeContactForm />
        </>
    )
}

export default Home