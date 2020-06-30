import React from 'react'
import Hero from './hero'
import SectionOne from './sectionOne'
import SectionTwo from './sectionTwo'

import homeStyles from './home.module.css'

const Page = () => (
    <>
    <Hero />
    <div className="bg">
    <SectionOne />
    <SectionTwo />
    </div>

    </>
)

export default Page