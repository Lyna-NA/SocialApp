import Post from "../post/Post";
import SharePost from "../sharePost/SharePost";
import "./feed.css";
import { Posts } from "../../dummyData";

let Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <SharePost />
        {Posts.map((element) => (
          <Post key={element.id} post={element} />
        ))}
      </div>
    </div>
  );
};
export default Feed;
