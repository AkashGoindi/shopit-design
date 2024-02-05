import React, {Fragment} from "react";

import "../styles/topbar.css";

const Topbar = () => {
  return(
    <Fragment>
      <div className="translucent_block">
      </div>
      <div className="topbar bg-white default-shadow">
        <div>
          <span className="topbar-item">
            <i className="far fa-check-square"></i>
          </span>
          <span className="topbar-item">
            <i className="far fa-comment-alt"></i>
          </span>
          <span className="topbar-item">
            <i className="far fa-envelope"></i>
          </span>
          <span className="topbar-item">
            <i className="far fa-calendar"></i>
          </span>
          <span className="topbar-item">
            <i style={{color: "gold"}} className="far fa-star"></i>
          </span>
        </div>
        <div>
          <span className="topbar-item">
            <img alt="country_flag" src={require("../assets/images/country.png")} />
            <span className="ml-2" style={{fontSize: "14px"}}>English</span>
          </span>
          <span className="topbar-item">
            <i className="fas fa-th-large"></i>
          </span>
          <span className="topbar-item">
            <i className="fas fa-search"></i>
          </span>
          <span className="topbar-item">
            <i className="far fa-bell"></i>
          </span>
          <span className="topbar-item">
            <span className="user-name">John Doe</span>
            <span className="user-placeholder">JD</span>
            <img />
          </span>
        </div>
      </div>
    </Fragment>  
  );
} 

export default Topbar;