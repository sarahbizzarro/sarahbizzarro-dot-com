import React from "react"
import Nav from "./nav"
import "../styles/globals.css"
import "../styles/App.css"
import "../styles/Nav.css"
import "../styles/Pottery.css"
import "../styles/Blog.css"
import "../styles/Connect.css"
import "../styles/Sabbatical.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="container">
      <div className="nav-width">
        <Nav />
      </div>
      <div className="grow">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
