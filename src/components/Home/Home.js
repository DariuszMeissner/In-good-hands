import React from 'react'
import { HomeHeader } from './HomeHeader'
import { HomeThreeColumns } from './HomeThreeColumns'
import { HomeSimpleSteps } from './HomeSimpleSteps'
import { HomeAboutUs } from './HomeAboutUs'
import { HomeWhoWeHelp } from './HomeWhoWeHelp'
import { HomeContactForm } from './HomeContactForm'

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <HomeContactForm />
        </div>
    )
}

export default Home