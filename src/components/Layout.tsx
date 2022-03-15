import React from "react"
import Footer from "./Footer"
import Header from "./Header"

const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-primary">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
