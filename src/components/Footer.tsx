import { EmptyProps } from "@/definitions"
import { Link } from "gatsby"
import React from "react"
import { Github, Linkedin, Twitter } from "./icons"
import Logo from "./UI/Logo"

const Footer: React.FC<EmptyProps> = () => {
  return (
    <footer className="bg-darkBlue px-24 py-6">
      <div className="flex justify-between">
        <Logo />

        <ul className="flex gap-4">
          <li>
            <Linkedin className="h-8 w-auto cursor-pointer" />
          </li>
          <li>
            <Twitter className="h-8 w-auto cursor-pointer" />
          </li>
          <li>
            <Github className="h-8 w-auto cursor-pointer fill-white" />
          </li>
        </ul>
      </div>
      <div className="flex justify-between mt-16">
        <p>© {new Date().getFullYear()} Blog. All rights reserved.</p>
        <div>
          <ul className="flex gap-4">
            <li>
              <Link to="/">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Privacy policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
