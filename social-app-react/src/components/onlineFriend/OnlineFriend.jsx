import "./onlineFriend.css"

const OnlineFriend = ({friend}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          src={PF+friend.profilePicture}
          alt=""
          className="rightbarProfileImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{friend.username}</span>
    </li>
  );
};
export default OnlineFriend;
