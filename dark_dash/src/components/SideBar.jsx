import React from 'react'

const SideBar = () => {
  return (
    <div>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          {/* <a className="sidebar-brand brand-logo" href="index.html"><img src="assets/images/digitaldoor.png" alt="logo"/></a> */}
          <div className="navbar-profile" style={{marginRight:"8px"}}>
                  
                    <img className="img-sm rounded-circle" src="assets/images/imc.png" alt=""/>
                    
                  </div>
          <h3>DIGITAL DOOR</h3>
        </div>
      </nav>
    </div>
  )
}

export default SideBar