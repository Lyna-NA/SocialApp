import axios from "axios";

class uploadController {

  async uploadImg(data) {
    axios.defaults.baseURL = "http://localhost:5000/api/upload";
    axios.defaults.withCredentials = false;

    try {
      let response = await axios.post("/", data);
      if (response.data.status == true) {
        console.log("uploadRes",response);
        return {
          status: true,
          message: "Image has been uploaded Successfully!",
        };
      }
    } catch (error) {
      return { status: false, message: error.message };
    }
  }
}
export default uploadController;
