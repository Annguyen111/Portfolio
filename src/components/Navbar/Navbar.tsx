import React from 'react'
import { Link } from 'react-scroll'
import { navbar_links } from '../../constants/navbarLink'

export default function Navbar() {
  return (
    <>
      {navbar_links.map((link) => (
        <li
          key={link.id}
          className='transition-all duration-400 cursor-pointer lg:relative lg:list-item text-left lg:w-auto w-full rounded-sm lg:border-none border-b border-solid border-[#aab5c880]'
        >
          <Link
            className='transition-all duration-300 lg:px-[4px] lg:py-4 xl:p-4  uppercase lg:text-sm xl:text-base font-medium text-white hover:text-[#e0874b] block text-sm px-[2px] py-4'
            to={link.to}
            spy={true}
            smooth={true}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  )
}
