import React, { Component } from "react";
class Header extends Component
{
    render(){
        return(
            <div>
            <nav className ="navbar sticky-top navbar-dark bg-dark">
                <div className ="container-fluid">
                    <a className ="navbar-brand" href="index.html">SCP FOUNDATION</a>
                </div>

            </nav>
            <div className="intro-img">
            <img className="img-fluid" src="Images/scpimg.jpg" height="300px" alt="scp"></img>
            <br></br>
            <hr></hr>
          </div>
             <h2 className="text-center text-info">
                 SCP FOUNDATION
                <small className="text-muted ">- 20 PAGES</small>
            </h2>
          </div>  
            
        );
    }

}
export default Header;