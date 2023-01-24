import "./post.css";
// import { Users } from "../../dummyData";
import { useEffect, useState } from "react";
import UserController from "../../controllers/user-controller";
import PostsController from "../../controllers/posts-controller";
import { format } from "timeago.js";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // const user = Users.filter((e) => (e.id === post.userId))[0];
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  let userController = new UserController();
  let postController = new PostsController();

  const {user: currUser} = useContext(AuthContext);

  const fetchUser = async () => {
    let response = await userController.read({key: "userId", value: post.userId});
    setUser(response);
  };

  const setIsLikedFunc = () => {
    setIsLiked(post.likes.includes(currUser._id));
  }

  useEffect(() => {
    setIsLikedFunc();
  }, [currUser._id, post.likes]);

  useEffect(() => {
    fetchUser();
  }, [post.userId]);

  let onLikeClickHandler = async() => {
    let response = await postController.updatePostLikes(post._id, currUser._id);
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                src={PF + (user.profile_picture || "person/defaultImg.jpeg")}
                alt=""
                className="postProfileImage"
              />
            </Link>

            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <span className="material-symbols-outlined">more_vert</span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.description}</span>
          <img src={PF + post.image} alt="" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/assets/like.png"
              alt=""
              className="likeIcon"
              onClick={onLikeClickHandler}
            />
            <img
              src="/assets/heart.png"
              alt=""
              className="likeIcon"
              onClick={onLikeClickHandler}
            />
            <span className="postLikeCounter">{like} likes</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comments} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
