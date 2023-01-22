import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";
import { useEffect, useState } from "react";
import UserController from "../../controllers/user-controller";
import { useParams } from "react-router-dom";

let ProfilePage = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const param = useParams();
  const [user, setUser] = useState({});

  let userController = new UserController();

  const fetchUser = async () => {
    let response = await userController.read({
      key: "username",
      value: param.username,
    });
    setUser(response);
    // console.log("userProfile", user);
  };

  useEffect(() => {
    fetchUser();
  }, [user.username]);

  return (
    <>
      <Topbar />
      <div className="profileContainer">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={PF + (user.cover_picture || "person/defaultCover.jpeg")}
                alt=""
                className="profileCoverImage"
              />
              <img
                src={PF + (user.profile_picture || "person/defaultImg.jpeg")}
                alt=""
                className="profileUserImage"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDescription">{user.description}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={user.username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfilePage;
