import AboutText from '../assets/about.svg'
import Us from '../assets/us.png'

const About = () => {
  return (
      <div className='h-screen pt-28'>
        <div className="flex h-full flex-col items-end">
          <img className="w-full px-1 lg:w-3/5" src={AboutText} alt='About Text' />
          <div className="py-10 flex justify-end items-center">
            <p className="w-full pl-2 lg:w-[400px] text-md lg:text-3xl text-Oblue ZT-Italic">(a young couple passionate about design and web development)</p>
          <img className="w-1/2 md:w-2/5 lg:w-1/5" src={Us} alt='Developers' />
          </div>
          <div className='h-full flex items-end justify-center w-screen mb-4'>
            <p className="text-md lg:text-2xl text-Oblue ZT text-center px-6">This website uses TMDB and TMDB APIs but is not endorsed, certified or otherwise approved by TMDB.</p>
          </div>
        </div>
        
      </div>
  )
}

export default About
