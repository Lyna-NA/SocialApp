import "./sharePost.css";

let SharePost = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={PF+"person/1.jpeg"} alt="" />
          <input placeholder="What's in your mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <span className="material-symbols-outlined shareIcon">
                perm_media
              </span>
              <span className="sharedOptionText ">Photo or video</span>
            </div>
            <div className="shareOption">
              <span className="material-symbols-outlined shareIcon">label</span>
              <span className="sharedOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <span className="material-symbols-outlined shareIcon">
                location_on
              </span>
              <span className="sharedOptionText">Location</span>
            </div>
            <div className="shareOption">
              <span className="material-symbols-outlined shareIcon">sentiment_satisfied</span>
              <span className="sharedOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};
export default SharePost;
