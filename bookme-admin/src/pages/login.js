import React, { useContext } from "react";
import { CoreContext } from "../core/context";
import Logo from "../images/logo.png";

export const Login = () => {
  console.log("entered login");

  const { setCurrentPage, email, setEmail, password, setPassword } = useContext(
    CoreContext
  );

  return (
    <>
      <div className="myForm">
        <img src={Logo} alt="Logo" />
        <div className="item">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            name="email"
            className="text-input"
            placeholder="email"
          />

          <div className="passShow"></div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            value={password}
            className="password-input"
            placeholder="password"
          />

          <button
            type="button"
            className="forwardButton"
            disabled={false}
            onClick={() => setCurrentPage(1)}
          > 
            <b>Login</b>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
