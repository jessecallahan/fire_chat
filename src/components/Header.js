import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <div className="header">
        <h1>Fire Chat</h1>
        <h2> <Link to="/">Home</Link></h2>
        <h2>  <Link to="/signin">Sign In</Link></h2>
        <h2>  <Link to="/CreateChatRoom">Create Chat</Link></h2>




      </div>
    </React.Fragment>
  );
}


export default Header;