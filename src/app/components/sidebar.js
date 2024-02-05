import React, {Fragment} from "react";

const Sidebar = () => {
  return(
    <Fragment>
        <div className="logo-container">
          <div className="d-flex align-items-center">
            <i className="fab fa-battle-net"></i>
            <span className="company-name ml-2">
              SAMPLE
            </span>
          </div>
          <div>
            <input className="custom-radio" type="radio" />
          </div>  
        </div>
        <div>

        <ul>
          <li className="nav-item">
            <i className="fas fa-home"></i>
            <span>Dashboard</span>
          </li>
        </ul>

          <p className="nav-header">Apps</p>
          <ul className="nav-ul">
            <li className="nav-item">
              <i className="far fa-envelope"></i>
              <span>Email</span>
            </li>
            <li className="nav-item">
              <i className="far fa-comment-alt"></i>
              <span>Chat</span>
            </li>
            <li className="nav-item">
             <i className="far fa-check-square"></i>
              <span>Todo</span>
            </li>
            <li className="nav-item">
              <i className="far fa-calendar"></i>
              <span>Calander</span>
            </li>
            <li className="nav-item">
             <i className="fas fa-shopping-cart"></i>
              <span>E commerce</span>
            </li>
          </ul>

          <p className="nav-header">UI Elements</p>
          <ul className="nav-ul">
            <li className="nav-item">
              <i className="fas fa-list-ul"></i>
              <span>Data List</span>
            </li>
            <li className="nav-item">
              <i className="fas fa-table"></i>
              <span>Content</span>
            </li>
            <li className="nav-item">
              <i className="fas fa-fill-drip"></i>
              <span>Color</span>
            </li>
            <li className="nav-item">
              <i className="far fa-eye"></i>
              <span>Icons</span>
            </li>
            <li className="nav-item">
              <i className="far fa-credit-card"></i>
              <span>Card</span>
            </li>
            <li className="nav-item">
              <i className="fas fa-briefcase"></i>
              <span>Components</span>
            </li>
            <li className="nav-item">
              <i className="fas fa-cubes"></i>
              <span>Extra Components</span>
            </li>
          </ul>

          <p className="nav-header">UI Elements</p>
          <ul className="nav-ul">
            <li className="nav-item">
              <i className="fas fa-list-ul"></i>
              <span>Data List</span>
            </li>
            <li className="nav-item">
              <i className="fas fa-table"></i>
              <span>Content</span>
            </li>
            <li className="nav-item">
              <i className="fas fa-fill-drip"></i>
              <span>Color</span>
            </li>
            <li className="nav-item">
              <i className="far fa-eye"></i>
              <span>Icons</span>
            </li>
            <li className="nav-item">
              <i className="far fa-credit-card"></i>
              <span>Card</span>
            </li>
            <li className="nav-item">
              <i className="fas fa-briefcase"></i>
              <span>Components</span>
            </li>
            <li className="nav-item">
              <i className="fas fa-cubes"></i>
              <span>Extra Components</span>
            </li>
          </ul>

        </div>
      </Fragment>
  );
}

export default Sidebar;