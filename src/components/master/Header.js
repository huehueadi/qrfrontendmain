import React from 'react'

function Header() {
  return (
   <header id="page-topbar">
  <div className="navbar-header">
    <div className="d-flex">
      {/* LOGO */}
      <div className="navbar-brand-box">
        <a href="index.html" className="logo logo-dark">
          <span className="logo-sm">
            <img src="assets/images/logo-light.png" alt height={22} />
          </span>
          <span className="logo-lg">
            <img src="assets/images/logo-light.png" alt height={20} />
          </span>
        </a>
        <a href="index.html" className="logo logo-light">
          <span className="logo-sm">
            <img src="assets/images/logo-light.png" alt height={22} />
          </span>
          <span className="logo-lg">
            <img src="assets/images/logo-light.png" alt height={20} />
          </span>
        </a>
      </div>
    </div>
    <div className="d-flex">
      <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="mdi mdi-bell-outline bx-tada" />
          <span className="badge bg-danger rounded-pill">3</span>
        </button>
      </div>
    </div> 
</header>

  )
}

export default Header