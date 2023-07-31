//PRESS "rfc" TO present the " React function base components"
import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
  
  const bgGreen=()=>{
   document.body.style.backgroundColor='green';
  }
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" color='white'>Home</a>
        </li>
        {/* <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/" color='white'>About</a>
        </li> */}
       
        
      </ul>
      <button type="button" className="btn btn-success" onClick={bgGreen}>Green</button>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
          {/* <div className="form-check form-switch" >
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault"onClick={props.togglemode}>Enable Dark Mode</label>
    </div> */}
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
   
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes/*This 'p' should be in small*/={title:PropTypes.string.isRequired,  aboutText:PropTypes.string }

    //Default propts

    Navbar.defaultProps = {
        title: 'Stranger'
      };