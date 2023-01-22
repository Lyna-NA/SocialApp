import axios from "axios";

class UserController {
  //  CRUD
  //   async save(user) {
  //     axios.defaults.baseURL = "http://localhost:5000/api/users";
  //     axios.defaults.withCredentials = true;

  //     try {
  //       let formData = new FormData();
  //       formData.append("name", task.name);
  //       formData.append("image", task.image);
  //       formData.append("brief_details", task.briefDetails);
  //       formData.append("details", task.details);
  //       formData.append("from_date", task.fromDate);
  //       formData.append("to_date", task.toDate);
  //       formData.append("category_id", task.categoryId);
  //       let response = await axios.post(`/tasks`, formData);
  //       return {
  //         status: true,
  //         message: response.data.message,
  //         object: response.data.object,
  //       };
  //     } catch (error) {
  //       return { status: false, message: error.response.data.message };
  //     }
  //   }

  async read(props) {
    axios.defaults.baseURL = "http://localhost:5000/api/users";
    axios.defaults.withCredentials = false;

    try {
      let response = await axios.get(`?${props.key}=${props.value}`);
      if (response.data.status == true) {
        return response.data.data;
      }
      return [];
    } catch (error) {
      //Error
      return [];
    }
  }

  //   async update(updatedTask) {
  //     // let token = localStorage.getItem("token");
  //     axios.defaults.baseURL = "https://tasks-api.mr-dev.tech/api";
  //     axios.defaults.withCredentials = true;

  //     try {
  //       let formData = new FormData();
  //       formData.append("_method", "PUT");
  //       formData.append("name", updatedTask.name);
  //       formData.append("brief_details", updatedTask.briefDetails);
  //       formData.append("details", updatedTask.details);
  //       formData.append("from_date", updatedTask.fromDate);
  //       formData.append("to_date", updatedTask.toDate);
  //       formData.append("category_id", updatedTask.categoryId);
  //       if(updatedTask.image != null){
  //         formData.append("image", updatedTask.image);
  //       }

  //       let response = await axios.post(`/tasks/${updatedTask.id}`, formData);
  //       console.log(response.data);
  //       return {
  //         status: true,
  //         message: response.data.message,
  //         object: response.data.object,
  //       };
  //     } catch (error) {
  //       //Error
  //       return { status: false, message: error.response.data.message };
  //     }
  //   }

  //   async delete(id) {
  //     let token = localStorage.getItem("token");
  //     try {
  //       let response = await axios.delete(
  //         `https://we-start-tasks-app-5c968-default-rtdb.firebaseio.com/${id}.json?auth=${token}`
  //       );
  //       return true;
  //     } catch (error) {
  //       //Error
  //       return false;
  //     }
  //   }
}
export default UserController;