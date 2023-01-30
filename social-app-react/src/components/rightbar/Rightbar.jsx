import "./rightbar.css";
import { Users } from "../../dummyData";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import OnlineFriend from "../onlineFriend/OnlineFriend";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings?.includes(user?._id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        axios.defaults.baseURL = "http://localhost:5000/api/users";
        axios.defaults.withCredentials = false;
        const friendList = await axios.get("/friends/" + user._id);
        setFriends(friendList.data);
        console.log("friends: ", friends);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    axios.defaults.baseURL = "http://localhost:5000/api/users";
    axios.defaults.withCredentials = false;
    try {
      if (followed) {
        let response = await axios.put(`/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        console.log("res1", response);
        if (response.status == true) {
          dispatch({ type: "UNFOLLOW", payload: user._id });
        }
      } else {
        let response = await axios.put(`/${user._id}/follow`, {
          userId: currentUser._id,
        });
        console.log("res2", response);
        if (response.status == true) {
          dispatch({ type: "FOLLOW", payload: user._id });
        }
      }
      setFollowed(!followed);
    } catch (err) {
      console.log(err);
    }
  };

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImage" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <OnlineFriend key={u.id} friend={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? (
              <span className="material-symbols-outlined followIcon">person_remove</span>
            ) : (
              <span className="material-symbols-outlined followIcon">
                person_add
              </span>
            )}
            {followed ? "Unfollow" : "Follow"}
          </button>
        )}
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1 ? "Single" : "Married"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    PF + (friend.profile_picture || "person/defaultImg.jpeg")
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
