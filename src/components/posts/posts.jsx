import React from 'react'
import "./posts.css";
import {MoreVert} from "@material-ui/icons"

export default function posts() {
  return (
    
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/2.png" alt="..." className="postProfileImg" />
                    <span className="postUsername">Mannu</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>

                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey !its my first post :)</span>
                <img src="/assets/posts/1.jpg" alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/like.png" alt="" />
                    <img className='likeIcon' src="/assets/heart.png" alt="" />
                    <span className="postsLikeCounter">32 people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>

        </div>
        
    </div>
  )
}

