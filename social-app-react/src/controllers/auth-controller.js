import axios from "axios";

class AuthController {
  async login(userCredential) {
    axios.defaults.baseURL = "http://localhost:5000/api/auth";
    axios.defaults.withCredentials = false;

    try {
      let response = await axios.post("login", {
        email: userCredential.email,
        password: userCredential.password,
      });
      if(response.data.status == true){
        return {
          status: true,
          message: "Logged In Successfully!",
          user: response.data.user
        };
      }
    } catch (error) {
      return { status: false, message: error.response.data.error.message };
    }
  }

  async register(user) {
    axios.defaults.baseURL = "http://localhost:5000/api/auth";
    axios.defaults.withCredentials = false;
    console.log("front", user);

    try {
      let response = await axios.post("/register", {
        username: user.username,
        email: user.email,
        password: user.password,
      });
      console.log(response.data);
      return {
        status: true,
        message: "Registered Successfully!",
      };
    } catch (error) {
      //Error
      console.log(error);
      return { status: false, message: "Registration failed. Try again." };
    }
  }
}
export default AuthController;
