import { HomeIcon } from "@heroicons/react/outline"
import { Link } from "gatsby"
import React from "react"

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <HomeIcon className="h-8 w-auto" />
      <span className="mt-1 ml-2">Home</span>
    </Link>
  )
}

export default Logo
