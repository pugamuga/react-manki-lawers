import React, { useState } from 'react'

import BarsIcon from "../assets/img/bars.png"
import CloseIcon from "../assets/img/close.png"

import { navigation } from "../data.js";
import { Link } from "react-scroll";


const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='lg:hidden relative z-20'>
        <button onClick={()=>setIsOpen(!isOpen)}>
            <img src={BarsIcon} alt="close" />
        </button>
        <ul className=' bg-slate-700 fixed top-0 w-full h-screen
        text-white transition-all flex flex-col'>
            <li></li>
        </ul>
    </nav>
  )
}

export default NavMobile