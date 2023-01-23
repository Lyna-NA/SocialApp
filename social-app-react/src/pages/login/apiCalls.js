import AuthController from "../../controllers/auth-controller";

const authController = new AuthController();

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await authController.login(userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.user });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};