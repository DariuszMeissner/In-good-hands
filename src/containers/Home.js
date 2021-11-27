import React from 'react'
import { HomeHeader } from '../components/Home/HomeHeader'
import { HomeThreeColumns } from '../components/Home/HomeThreeColumns'
import { HomeSimpleSteps } from '../components/Home/HomeSimpleSteps'
import { HomeAboutUs } from '../components/Home/HomeAboutUs'
import { HomeWhoWeHelp } from '../components/Home/HomeWhoWeHelp'
import { HomeContactForm } from '../components/Home/HomeContactForm'

export const Home = () => {
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
