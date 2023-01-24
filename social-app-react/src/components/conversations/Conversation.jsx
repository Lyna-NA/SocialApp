import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      axios.defaults.baseURL = "http://localhost:5000/api/users";
      axios.defaults.withCredentials = false;
      try {
        const res = await axios("?userId=" + friendId);
        setUser(res.data.data);
      } catch (err) {
        console.log(err);
      }
      console.log("conv", user);
    };
    getUser();
  }, [ currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={
          user?.profile_picture
            ? PF + user.profile_picture
            : PF + "person/defaultImg.jpeg"
        }
        alt=""
      />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
}
