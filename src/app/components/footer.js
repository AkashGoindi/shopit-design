import React from "react";

import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <p>COPYRIGHT © 20xx Sample,All rights Reserved</p>
      </div>
      <div>
        <p> 
          Hand-crafted & Made with
          <span style={{color: "red"}}><i className="far fa-heart ml-2"></i></span>
        </p>
      </div>
    </div>
  );
}

export default Footer;