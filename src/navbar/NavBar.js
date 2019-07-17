import React from "react";
import "./navbar.css";
import Navbarvalues from '../Navbarvalues/Navbarvalues'
const NavBar = props => {
  let listofvalues=props.navalues;
  return (
    <>
      <header> Dashboard </header>
      <div className="header-container">
        <div className="breadcumb">
          <span>Home / Dashboard / Workplace</span>
        </div>
        <div className="main-container">
          <div className="title">
            <img
              alt="main avatar"
              className="avatar"
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
            />
            <div className="container-datavalue">
              <span className="principal-title">
                Good morning, Serati Ma, i wish you happiness every day!
              </span>
              <span className="subtitle">
                Interaction expert | Ant gold service-some certain business
              </span>
            </div>
          </div>
          <div className="data">
          {listofvalues.map(values => {
          return <Navbarvalues props={values} key={values.id} />;
        })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
