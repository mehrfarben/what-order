import AboutText from '../assets/about.svg'
import Us from '../assets/us.png'

const About = () => {
  return (
      <div className=' pt-28'>
        <div className="flex flex-col items-end">
          <img className="w-11/12 lg:w-3/5" src={AboutText} alt='About Text' />
          <div className="py-10 flex justify-end items-center">
            <p className="w-1/4 lg:w-[400px] text-lg lg:text-3xl text-Oblue ZT-Italic">(a young couple passionate about design and web development)</p>
          <img className="w-3/5 lg:w-1/5" src={Us} alt='Developers' />
          </div>
        </div>
        <div className='flex items-end justify-center w-screen h-[150px] lg:h-full'>
        <p className="text-xl lg:text-4xl text-Oblue ZT ">This website uses TMDB and TMDB APIs but is not endorsed, certified or otherwise approved by TMDB.</p>
        </div>
      </div>
  )
}

export default About
