import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import RequestText from '../assets/request.svg'
import Ok from "../assets/ok.svg"


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
    <div className='pt-32 lg:pt-48 lg:p-16'>
      <div className="flex justify-center w-full mb-8">
        <img className="px-2 lg:w-4/5" src={RequestText} alt="" />
      </div>
      <div className='flex flex-col h-full justify-between mt-32 lg:mt-0 w-4/5 lg:w-1/2'>
        <form className="flex flex-col pl-4 gap-5" ref={form} onSubmit={sendEmail}>
          <input className="bg-transparent border-b-2 border-Oblue outline-none text-Oblue ZT text-3xl lg:text-5xl placeholder:text-Oblue" placeholder="name"  type='text' name='user_name' />
          <input className="bg-transparent border-b-2 border-Oblue outline-none text-Oblue ZT text-3xl lg:text-5xl placeholder:text-Oblue" placeholder="e-mail" type='email' name='user_email' />
          <input className="bg-transparent border-b-2 border-Oblue outline-none text-Oblue ZT text-2xl lg:text-5xl placeholder:text-Oblue" placeholder="name of the movie or tv series" name='message' required />
          <span className="flex items-center gap-1 mt-6">
            <img className="size-24" src={Ok} alt="" />
          <button className="bg-Oblue w-28 lg:w-36 py-2 lg:py-4 rounded-full text-Owhite ZT text-2xl lg:text-4xl hover:bg-Owhite hover:text-Oblue hover:border-2" type='submit'>send</button>
          </span>        
        </form>
      </div>
    </div>
  )
}

export default Request
