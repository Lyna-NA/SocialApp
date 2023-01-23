import { useContext } from "react";
import { useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "./apiCalls";
import "./login.css";

let LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { user, isFetching, dispatch } = useContext(AuthContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    loginCall(
      { email: emailRef.current.value, password: passwordRef.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lynasocial</h3>
          <span className="loginDesc">
            Connect with firends and the world around you on Lynasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={onSubmitHandler}>
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              required
              ref={emailRef}
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              minLength="6"
              required
              ref={passwordRef}
            />
            <button className="loginButton" type="submit">
              {isFetching ? "Loading" : "Log In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              "Create New Account"
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
