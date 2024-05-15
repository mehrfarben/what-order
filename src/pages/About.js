import MePhoto from "../assets/ben.png"
import TMDB from "../assets/tmdb logo.svg"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className='homeApp'>
      <div className='aboutApp'>
        <div className='aboutContainer'>
          <img className='mePhoto' src={MePhoto} alt='site owner' />
          <p className='meText'> This site has been developed by Alim Karaca </p>
          <Link to='https://www.themoviedb.org/'>
            <img className='tmdbLogo' src={TMDB} alt='' />
          </Link>
          <p>This website uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.</p>
        </div>
      </div>
    </div>
  )
}

export default About
