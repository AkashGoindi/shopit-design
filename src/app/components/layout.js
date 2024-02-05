import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import Sidebar from "./sidebar.js"
import Topbar from "./topbar.js";
import Footer from "./footer";
import "../styles/layout.css";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  render(){
    return(
      <div className="layout">
        <div className="layout-sidebar bg-white default-shadow">
          <Sidebar />
        </div>
        <div className="layout-content">
          <Topbar />
          <div style={{marginTop: '100px'}}>
            { this.props.children }
            <Footer />
          </div>  
        </div>
      </div>
    );
  }
}

export default Layout;