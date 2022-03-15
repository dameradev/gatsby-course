import React from "react"
import { EmptyProps } from "@/definitions"
import { HomeIcon } from "@heroicons/react/outline"
import { Link } from "gatsby"

const Header: React.FC<EmptyProps> = () => {
  return (
    <header className="bg-darkBlue flex justify-between px-24 items-center">
      <div className="py-4 flex items-center">
        <HomeIcon className="h-8 w-auto mr-2" />
        <span className="mt-1">Home</span>
      </div>
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
