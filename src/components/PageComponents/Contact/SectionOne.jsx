import React from 'react'
import { Link } from 'gatsby'
import LSidebar from './LSidebar'
import ContactForm from './contactForm'

import { Banner2, Airport1 } from '../../../images/index'


const SectionOne = () => (
<section id="main" className="wrapper sidebar right">
  <div className="inner">
    <header className="major">
      <h1 className="Quentin" style={{textAlign: 'left'}}>Contact</h1>
    </header>
    {/* Content */}
    <div className="content">
      <p>Fill out the form below to send me a message. I'll will get back to you as soon as I can!</p>

    <br />
      <ContactForm />
    </div>
    <LSidebar />
  </div>
 
</section>

)

export default SectionOne