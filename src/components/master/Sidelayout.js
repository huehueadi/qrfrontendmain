import React from 'react'
import { Link } from 'react-router-dom'

function Sidelayout() {
  return (
    <div className="vertical-menu">
  <div data-simplebar className="h-100">
    <div className="user-sidebar text-center">
      <div className="dropdown">
        <div className="user-img">
          <img src="assets/images/users/avatar-7.jpg" alt className="rounded-circle" />
          <span className="avatar-online bg-success" />
        </div>
        <div className="user-info">
          <h5 className="mt-3 font-size-16 text-white">Administrator</h5>
        </div>
      </div>
    </div>
    
    
    <div id="sidebar-menu">
     
      <ul className="metismenu list-unstyled" id="side-menu">
        <li className="menu-title">Menu</li>
        <li>
          <Link to="/qrmanagement" className="waves-effect">
            <i className="dripicons-home" /><span className="badge rounded-pill bg-info float-end">3</span>
            <span>Qr Management</span>
          </Link>
        </li>
        <li>
        <Link to="/slot_management" className="waves-effect">
            <i className="dripicons-calendar" />
            <span>Slot Management</span>
         </Link>
        </li>
        <li>
          <a href="calendar.html" className=" waves-effect">
            <i className="dripicons-calendar" />
            <span>Landing page </span>
          </a>
        </li>
        <li>
          <Link to="/add_brand" className='waves-effect'>
            <i className="dripicons-calendar" />
            <span>Add Brand</span>
          </Link>
        </li>
        <li>
        <Link to="/analytics" className='waves-effect'>
        <i className="dripicons-calendar" />
            <span>Analytics</span>
         </Link>
        </li>

      </ul>
    </div>
   
  </div>
</div>
)
}

export default Sidelayout