import React from 'react'

const NavHeader = () => {
  return (
    <div className="nav-header">
    <div className="brand-logo">
      <a href="/">
        {" "}
        <img
          className="logo-tabib"
          src="assets/images/download.png"
          alt=""
        />
      </a>
      <a href="/">
        <img
          className="brand-title" style={{ width: "200px", height: "50px" }}
          src="assets/images/logo.png"
          alt=""
        />
      </a>
    </div>
  </div>
  )
}

export default NavHeader