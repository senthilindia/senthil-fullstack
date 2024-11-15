import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div> 
            <h3>Cisco Security Client</h3>
            <small className='text-light'>ReactJs | NodeJs | AWS | Docker</small>
            <div className="portfolio__item-cta">
               <a href="https://www.cisco.com/c/en/us/support/security/anyconnect-secure-mobility-client/series.html" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div> 
            <h3>Nokia Networks</h3>
            <small className='text-light'>ReactJs | NodeJs | MaterialUI</small>
            <div className="portfolio__item-cta">
               <a href="https://www.nokia.com/we-are-nokia/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image last-img">
                <img src={IMG3} alt="" />
            </div> 
            <h3>JP Morgan Chase</h3>
            <small className='text-light'>ReactJs | EmberJS | RactiveJS | NodeJs</small>
            <div className="portfolio__item-cta">
               <a href="https://www.jpmorgan.com/commercial-banking" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
        </article>

      </div>
    </section>
  )
}

export default Myprojects