import React from 'react'
import "./sidebar.css"
import {RssFeed,Chat,PlayCircleFilledOutlined,Group,Bookmark,HelpOutline,WorkOutline,Event,School} from "@material-ui/icons"
export default function sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon'/>
            <span className="sidebarListItemText">Feed</span>

          </li>
          <li className="sidebarListItem">
            <Chat className='sidebarIcon'/>
            <span className="sidebarListItemText">Chats</span>

          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className='sidebarIcon'/>
            <span className="sidebarListItemText">Videos</span>

          </li>
          <li className="sidebarListItem">
            <Group className='sidebarIcon'/>
            <span className="sidebarListItemText">Groups</span>

          </li>
          <li className="sidebarListItem">
            <Bookmark className='sidebarIcon'/>
            <span className="sidebarListItemText">Bookmarks</span>

          </li>
          <li className="sidebarListItem">
            <HelpOutline className='sidebarIcon'/>
            <span className="sidebarListItemText">Questions</span>

          </li>
          <li className="sidebarListItem">
            <WorkOutline className='sidebarIcon'/>
            <span className="sidebarListItemText">Jobs</span>

          </li>
          <li className="sidebarListItem">
            <Event className='sidebarIcon'/>
            <span className="sidebarListItemText">Events</span>

          </li>
          <li className="sidebarListItem">
            <School className='sidebarIcon'/>
            <span className="sidebarListItemText">Courses</span>

          </li>
        </ul>
        <button className='sidebarButton'>Show more</button>
        <hr className='sidebarHr'/>
        {/* ------------------------------------ Friend list ----------------------------------- */}
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/assets/person/2.png" alt="no dp" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Mannu</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.png" alt="no dp" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Mannu</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.png" alt="no dp" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Mannu</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.png" alt="no dp" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Mannu</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.png" alt="no dp" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Mannu</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.png" alt="no dp" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Mannu</span>
          </li>


        </ul>
      </div>
    </div>
  )
}

