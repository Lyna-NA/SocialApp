import { useRef } from "react";
import AuthController from "../../controllers/auth-controller";
import "./register.css";
import { useNavigate } from 'react-router-dom';

let RegisterPage = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatedPasswordRef = useRef();

  const authController = new AuthController();

  const navigator = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (checkData()) {
      await save();
    }
  };

  const checkData = () => {
    if (passwordRef.current.value != repeatedPasswordRef.current.value) {
      repeatedPasswordRef.current.setCustomValidity("Passwords don't match!");
      return false;
    }
    return true;
  };

  const save = async () => {
    const user = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    const response = await authController.register(user);
    console.log(response);
    navigator('/login');
  }

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
          <form className="loginBox" required onSubmit={onSubmitHandler}>
            <input
              placeholder="Username"
              required
              className="loginInput"
              ref={usernameRef}
            />
            <input
              placeholder="Email"
              required
              className="loginInput"
              type="email"
              ref={emailRef}
            />
            <input
              placeholder="Password"
              required
              className="loginInput"
              type="password"
              ref={passwordRef}
            />
            <input
              placeholder="Repeated Password"
              required
              className="loginInput"
              type="password"
              ref={repeatedPasswordRef}
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
