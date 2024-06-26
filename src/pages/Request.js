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
    <div className='homeApp'>
      <div className='requestApp'>
        <h1>request an order for a movie series/tv </h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>
            Name
          </label>
          <input className='text' type='text' name='user_name' />
          <label>
            Email
          </label>
          <input className='text' type='email' name='user_email' />
          <label>
            Name of the movie or tv series <strong className='red'>*</strong>
          </label>
          <textarea className='text' name='message' required />
          <input className='sendBtn' type='submit' value='Send' />
        </form>
      </div>
    </div>
  )
}

export default Request
