import "./topbar.css";
import {Link} from "react-router-dom"

const Topbar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration: "none"}}>
          <span className="logo">Lynasocial</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <span className="material-symbols-outlined searchIcon">search</span>
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <span className="material-symbols-outlined">person</span>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <span className="material-symbols-outlined">chat</span>{" "}
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <span className="material-symbols-outlined">notifications</span>{" "}
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img src={PF + "person/1.jpeg"} alt="" className="topbarImage" />
      </div>
    </div>
  );
};
export default Topbar;
