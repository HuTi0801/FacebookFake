import React from 'react'
import Stories from "./Stories"
import PostStatus from "./PostStatus"
import NewContent from "./NewContent"
import "./NewsFeed.css"

const NewsFeed = () => {
  return (
    <div className='newsfeed-container'>
      <Stories/>
      <PostStatus/>
      <NewContent/>
    </div>
  )
}

export default NewsFeed
