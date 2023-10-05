import React from 'react'

const NavHeader = () => {
  return (
    <div className="nav-header">
    <div className="brand-logo">
      <a href="index.html">
        {" "}
        <img
          className="logo-tabib"
          src="assets/images/download.png"
          alt=""
        />
      </a>
      <a href="index.html">
        <img
          className="brand-title"
          src="assets/images/logo.png"
          alt=""
        />
      </a>
    </div>
  </div>
  )
}

export default NavHeader