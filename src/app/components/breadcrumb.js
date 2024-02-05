import React from "react";

import "../styles/breadcrumb.css";

const Breadcrumb = props => {

  return (
    <div className="custom_breadcrumb">
      <div className="d-flex align-items-center">
        <div className="pageName">
          <h4>{props.currentPage}</h4>
        </div>
        <div className="breadcrumb_trail ml-2">
          <p><span style={{color: "#7367F0"}}>Home</span> >> <span style={{color: "#7367F0"}}>eCommerce</span> >> Shop</p>
        </div>
      </div>
      <div className="breadcrumb_options">
        <i className="fas fa-cog"></i>
      </div>
    </div>
  );
} 

export default Breadcrumb;