import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { GrGithub } from 'react-icons/gr'
import { BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
      <a href="https://www.linkedin.com/in/nandani-pandey-204b69257" target='_blank' rel="noreferrer"> <BsLinkedin /> </a>
      <a href="https://github.com/NandaniPandey" target='_blank' rel="noreferrer"><GrGithub /> </a>
      <a href="https://instagram.com/nandanii_2711?igshid=MmU2YjMzNjRlOQ==" target='_blank' rel="noreferrer"><BsInstagram /> </a>
    </div>
  )
}

export default HeaderSocials