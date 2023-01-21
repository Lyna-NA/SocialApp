import Post from "../post/Post";
import SharePost from "../sharePost/SharePost";
import "./feed.css";

let Feed = () => {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <SharePost />
                <Post />
            </div>
        </div>
    )
}
export default Feed;