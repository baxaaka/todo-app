import React from 'react';
import RightElements from './RightElements';
import { NavLink } from 'react-router-dom';
const index = ({info}) => {
    return (
        <>
        {/* <!-- Navbar --> */}
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  {/* <!-- Container wrapper --> */}
  <div className="container-fluid">
    {/* <!-- Toggle button --> */}
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    {/* <!-- Collapsible wrapper --> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <!-- Navbar brand --> */}
      <a className="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="15"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      {/* <!-- Left links --> */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/">
            <NavLink to='/' >
            Dashboard

            </NavLink>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >
          <NavLink to='/team'>
            
            Team
            </NavLink>
            </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
          <NavLink to='projects'>
            
            Projects
            </NavLink>
            </a>
        </li>
      </ul>
      {/* <!-- Left links --> */}
    </div>
    {/* <!-- Collapsible wrapper --> */}

    {/* <!-- Right elements --> */}

      <RightElements info={info}/>

    {/* <!-- Right elements --> */}
  </div>
  {/* <!-- Container wrapper --> */}
</nav>
{/* <!-- Navbar --> */}
        
        
        </>
    );
};

export default index;
