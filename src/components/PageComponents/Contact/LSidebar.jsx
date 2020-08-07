import React from 'react'


import { 
  FaEnvelope, 
  FaInstagram, 
  FaFacebook, 
  FaTwitter, 
  FaResearchgate, 
  FaLinkedin } 
  from 'react-icons/fa'


const LSidebar = () => (
    <>
    <div className="sidebar">
      <section>


                  {/**<p className="mb-2">Phone</p>
                                                <p className="mb-2"><a href="tel:#">760-555-5555</a></p>**/}
                  <h4 className="followus">Email</h4>
                  <p className="followus">
                    <FaEnvelope />
                    <a href="mailto:rachel@gurlin.com">
                      rachel@gurlin.com
                    </a>
                  </p>
                <h4 className="followus">Follow Me</h4>
                <div className="followus">
                  <a href="https://twitter.com">
                    <FaTwitter />
                  </a>
                  <a href="https://linkedin.com">
                    <FaLinkedin />
                  </a>
                  <a href="https://facebook.com">
                    <FaFacebook />
                  </a>
                  <a href="https://instagram.com">
                    <FaInstagram />
                  </a>
                  <a href="https://researchgate.com">
                    <FaResearchgate/>
                  </a>
                </div>
        <footer>

        </footer>
      </section>
      <hr />

    </div>
    </>
)

export default LSidebar