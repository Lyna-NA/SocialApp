import { useEffect, useState } from "react";
import SharePost from "../sharePost/SharePost";
import "./feed.css";
// import { Posts } from "../../dummyData";
import Post from "../post/Post";
import PostsController from "../../controllers/posts-controller";

let Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  let postsController = new PostsController();
  const fetchData = async () => {
    let response = username
      ? await postsController.readUserPosts(username)
      : await postsController.readTimelinePosts("63cad169815804be7c7bacf1");
    // console.log(response.timelinePosts);
    setPosts(response);
    // console.log("posts:", posts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <SharePost />
        {posts.map((element) => (
          <Post key={element._id} post={element} />
        ))}
      </div>
    </div>
  );
};
export default Feed;
