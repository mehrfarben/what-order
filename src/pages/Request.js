import React, { useRef } from "react"
import emailjs from "@emailjs/browser"


export const Request = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm("service_alim31", "template_5ohcr2l", form.current, {
        publicKey: "d9Q9NCiR-Y1TbHz7C",
      })
      .then(
        () => {
          console.log("SUCCESS!")
        },
        (error) => {
          console.log("FAILED...", error.text)
        }
      )
  }

  return (
    <div className='h-screen pt-48 p-16'>
      <div className="ACondensed text-[5vw] font-[900]">
        REQUEST AN ORDER
      </div>
      <div className="ABook text-[5vw]">
      FOR A MOVIE/TV SERIES
      </div>
      <div className='flex flex-col  w-1/2'>
        <form className="flex flex-col gap-5" ref={form} onSubmit={sendEmail}>
          <input className="bg-transparent border-b-2 border-Oblue outline-none text-Oblue ZT text-5xl placeholder:text-Oblue" placeholder="name"  type='text' name='user_name' />
          <input className="bg-transparent border-b-2 border-Oblue outline-none text-Oblue ZT text-5xl placeholder:text-Oblue" placeholder="e-mail" type='email' name='user_email' />
          <input className="bg-transparent border-b-2 border-Oblue outline-none text-Oblue ZT text-5xl placeholder:text-Oblue" placeholder="name of the movie or tv series" name='message' required />
          <span className="flex items-start mt-6">
            <p className="text-8xl text-Oblue ">→</p>
          <button className="bg-Oblue w-36 py-4 px-8 rounded-full text-Owhite ZT text-4xl" type='submit'>send</button>
          </span>        
        </form>
      </div>
    </div>
  )
}

export default Request
