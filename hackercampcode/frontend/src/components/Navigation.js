import React, { Component } from 'react'

export default class Navigation extends Component {

    constructor(props) {
      super(props)
      this.openMenu = this.openMenu.bind(this);
      this.state = {
         appName: 'HackerCamp({code});',
      }
    }

    openMenu = () => {
        document.getElementById("mySidenav").style.width = "100%";
    }
    
  render() {
    return (
      <div>
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={this.closeMenu}>&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="openMenu" onclick={this.openMenu}>&#9776;</span>
        <a className="navbar-brand" href="#">{this.state.appName}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Programming & Hacking Tutorials <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Select Subject
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Cyber Security</a>
                    <a className="dropdown-item" href="#">Software Development</a>
                    <a className="dropdown-item" href="#">DevOps Subjects</a>
                    <a className="dropdown-item" href="#">Artificial Intelligence</a>
                </div>
            </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>
      </div>
    )
  }
}
