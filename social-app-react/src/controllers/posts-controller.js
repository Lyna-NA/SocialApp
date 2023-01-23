import axios from "axios";

class PostsController {

  async create(post) {
    axios.defaults.baseURL = "http://localhost:5000/api/posts";
    axios.defaults.withCredentials = false;

    try {
      let response = await axios.post("/", post);
      if (response.data.length != 0) {
        return response.data;
      }
      return [];
    } catch (error) {
      //Error
      return [];
    }
  }

  async readUserPosts(username) {
    axios.defaults.baseURL = "http://localhost:5000/api/posts";
    axios.defaults.withCredentials = false;

    try {
      let response = await axios.get(`/profile/${username}`);
      if (response.data.length != 0) {
        return response.data.userPosts;
      }
      return [];
    } catch (error) {
      //Error
      return [];
    }
  }

  async readTimelinePosts(userId) {
    axios.defaults.baseURL = "http://localhost:5000/api/posts";
    axios.defaults.withCredentials = false;

    try {
      let response = await axios.get(`/timeline/${userId}`);
      if (response.data.length != 0) {
        return response.data.timelinePosts;
      }
      return [];
    } catch (error) {
      //Error
      return [];
    }
  }

  async updatePostLikes(postId, userId) {
    axios.defaults.baseURL = "http://localhost:5000/api/posts";
    axios.defaults.withCredentials = false;

    try {
      let response = await axios.put(`/${postId}/like`, {
        userId: userId,
      });
      if (response.data.length != 0) {
        return response.data;
      }
      return [];
    } catch (error) {
      //Error
      return [];
    }
  }
}
export default PostsController;