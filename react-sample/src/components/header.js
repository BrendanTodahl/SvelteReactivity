import React from 'react'
import { navLinks } from '../data'
import ActiveLink from './activeLink'

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {navLinks.map((link, index) => {
            return (
              <li>
                <ActiveLink href={link.path} key={index} text={link.name} />
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}