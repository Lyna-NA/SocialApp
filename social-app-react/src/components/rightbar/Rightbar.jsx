import "./rightbar.css";
import { Users } from "../../dummyData";
import OnlineFriend from "../onlineFriend/OnlineFriend";

let Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src={PF+"gift.png"} alt="" className="birthdayImage" />
          <span className="birthdayText">
            <b>Nada Ahmed</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src={PF+"ad.png"} alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendsList">
          {Users.map((element) => (
            <OnlineFriend key={element.id} friend={element} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
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
            <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : "Married"}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={PF+"person/6.jpeg"}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">David Malan</span>
          </div>
          <div className="rightbarFollowing">
            <img
               src={PF+"person/6.jpeg"}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">David Malan</span>
          </div>
          <div className="rightbarFollowing">
            <img
               src={PF+"person/6.jpeg"}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">David Malan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={PF+"person/6.jpeg"}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">David Malan</span>
          </div>
          <div className="rightbarFollowing">
            <img
               src={PF+"person/6.jpeg"}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">David Malan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={PF+"person/6.jpeg"}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">David Malan</span>
          </div>
          <div className="rightbarFollowing">
            <img
               src={PF+"person/6.jpeg"}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">David Malan</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user? <ProfileRightbar/> : <HomeRightBar />}
      </div>
    </div>
  );
};
export default Rightbar;
