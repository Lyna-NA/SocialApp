import { useEffect, useState } from "react";
import SharePost from "../sharePost/SharePost";
import "./feed.css";
// import { Posts } from "../../dummyData";
import Post from "../post/Post";
import PostsController from "../../controllers/posts-controller";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

let Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  let postsController = new PostsController();

  const fetchData = async () => {
    let response = username
      ? await postsController.readUserPosts(username)
      : await postsController.readTimelinePosts(user._id);
    setPosts(
      response.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, [username, user._id]);

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
