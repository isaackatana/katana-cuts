import React from 'react'

function Contact() {
  return (
    <>
    <div className="contact">
      <form action="" method="post">
        <div className="names">
          <input type="text"  placeholder='First name'/>
          <input type="text" placeholder='Last name'/>
        </div>
        <input type="email" name="" id="" placeholder='Email' />
        <textarea name="" id="" placeholder='Message ...' required></textarea>
        <div>
          <input type="file" name="" id="" />
          <button action='submit'>Send</button>
        </div>

      </form>
    </div>
    </>
  )
}

export default Contact