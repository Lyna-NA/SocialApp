import "./closeFriend.css";

let CloseFriend = ({ friend }) => {
  return (
    <li className="sidebarFriendItem">
      <img src={friend.profilePicture} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">{friend.username}</span>
    </li>
  );
};
export default CloseFriend;
