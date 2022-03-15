import React from "react"
import { EmptyProps } from "@/definitions"
import { Link } from "gatsby"
import Logo from "./UI/Logo"

const Header: React.FC<EmptyProps> = () => {
  return (
    <header className="bg-darkBlue flex justify-between px-24 py-4 items-center">
      <Logo />
      <nav>
        <ul className="uppercase">
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
