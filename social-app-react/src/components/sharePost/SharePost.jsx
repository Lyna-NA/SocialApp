import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import PostsController from "../../controllers/posts-controller";
import UploadController from "../../controllers/upload-controller";
import "./sharePost.css";

let SharePost = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user } = useContext(AuthContext);
  const [file, setFile] = useState(null);

  let descriptionRef = useRef();

  const postsController = new PostsController();
  const uploadController = new UploadController();

  const onFileSelectedHandler = (event) => {
    setFile(event.target.files[0]);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const newPost = {
      userId: user._id,
      description: descriptionRef.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.image = fileName;
      console.log(newPost);
      try {
      const response = await uploadController.uploadImg(data);
      console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await postsController.create(newPost);
      window.location.reload();
    } catch (error) {
       console.log(error);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={PF + (user.profile_picture || "person/defaultImg.jpeg")}
            alt=""
          />
          <input
            placeholder={`What's in your mind ${user.username} ?`}
            className="shareInput"
            ref={descriptionRef}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={onSubmitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <span className="material-symbols-outlined shareIcon">
                perm_media
              </span>
              <span className="sharedOptionText ">Photo or video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={onFileSelectedHandler}
              />
            </label>
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
              <span className="material-symbols-outlined shareIcon">
                sentiment_satisfied
              </span>
              <span className="sharedOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};
export default SharePost;