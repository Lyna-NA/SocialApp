import "./sidebar.css";

let Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <span class="material-symbols-outlined sidebarIcon">rss_feed</span>
            <span className="sidebarListItemText"> Feed</span>
          </li>
          <li className="sidebarListItem">
            <span class="material-symbols-outlined sidebarIcon">chat</span>{" "}
            <span className="sidebarListItemText"> Chats</span>
          </li>
          <li className="sidebarListItem">
            <span class="material-symbols-outlined sidebarIcon">
              play_circle
            </span>{" "}
            <span className="sidebarListItemText"> Videos</span>
          </li>
          <li className="sidebarListItem">
            <span class="material-symbols-outlined sidebarIcon">group</span>{" "}
            <span className="sidebarListItemText"> Groups</span>
          </li>
          <li className="sidebarListItem">
            <span class="material-symbols-outlined sidebarIcon">bookmark</span>{" "}
            <span className="sidebarListItemText"> Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <span class="material-symbols-outlined sidebarIcon">help</span>{" "}
            <span className="sidebarListItemText"> Questions</span>
          </li>
          <li className="sidebarListItem">
            <span class="material-symbols-outlined sidebarIcon">work</span>{" "}
            <span className="sidebarListItemText"> Jobs</span>
          </li>
          <li className="sidebarListItem">
            <span class="material-symbols-outlined sidebarIcon">event</span>{" "}
            <span className="sidebarListItemText"> Events</span>
          </li>
          <li className="sidebarListItem">
            <span class="material-symbols-outlined sidebarIcon">school</span>{" "}
            <span className="sidebarListItemText"> Courses</span>
          </li>
        </ul>
        <button className="sidebarButton"> Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
            <li className="sidebarFriendItem">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Akram M.</span>
            </li>
            <li className="sidebarFriendItem">
                <img src="/assets/person/3.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Amjad Y.</span>
            </li>
            <li className="sidebarFriendItem">
                <img src="/assets/person/4.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Muna Z.</span>
            </li>
            <li className="sidebarFriendItem">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Akram M.</span>
            </li>
            <li className="sidebarFriendItem">
                <img src="/assets/person/3.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Amjad Y.</span>
            </li>
            <li className="sidebarFriendItem">
                <img src="/assets/person/4.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Muna Z.</span>
            </li>
            <li className="sidebarFriendItem">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Akram M.</span>
            </li>
            <li className="sidebarFriendItem">
                <img src="/assets/person/3.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Amjad Y.</span>
            </li>
            <li className="sidebarFriendItem">
                <img src="/assets/person/4.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Muna Z.</span>
            </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
