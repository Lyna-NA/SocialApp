import "./closeFriend.css";

let CloseFriend = ({ friend }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="sidebarFriendItem">
      <img src={PF+friend.profilePicture} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">{friend.username}</span>
    </li>
  );
};
export default CloseFriend;
