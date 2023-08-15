import React from 'react'
import './Footer.css'
import { FaSnapchatGhost } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer-logo'>Nandani Pandey</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://www.snapchat.com/add/nandanii_11?share_id=ls_YJ-gT-7Q&locale=en-US"><FaSnapchatGhost /> </a>
        <a href=" https://twitter.com/Nandani_2711?t=prsi9TYrDl_rWbvSfPsb-A&s=08"><BsTwitter /> </a>
        <a href="https://instagram.com/nandanii_2711?igshid=MmU2YjMzNjRlOQ=="><BsInstagram /> </a>
        <a href="https://github.com/NandaniPandey"><FaGithub /> </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Nandani Pandey. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer 