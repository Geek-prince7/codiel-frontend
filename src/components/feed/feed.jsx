import React from 'react';
import "./feed.css";
import Share from "../share/share";
import Posts from "../posts/posts";

export default function feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        <Posts/>
      </div>
    </div>
  )
}
