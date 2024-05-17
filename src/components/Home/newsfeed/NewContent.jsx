import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SendIcon from "@mui/icons-material/Send";
import NewsPost from "../../../data/NewsPost.json"
const NewContent = () => {
  const listButton = [
    {
      id: 1,
      icon: ThumbUpIcon,
      text: "Like"
    },
    {
      id: 2,
      icon: ChatBubbleIcon,
      text: "Comment"
    },
    {
      id: 3,
      icon: SendIcon,
      text: "Share"
    }
  ]
  const shuffleData = (array) => {
    return array.sort(() => Math.random() - 0.5)
  }
  return (
    <div className='newscontent-container'>
      {shuffleData(NewsPost).map(post => (
        <div className='news-box' key={post.id}>
          <div className='news-box_header'>
            <Avatar alt="Remy Sharp"
              src={post.avatar} />
            <div className='header-infor'>
              <p>{post.username}</p>
              <small>{post.time}</small>
            </div>
            <MenuIcon className="icon-setting" />
          </div>

          <p className='news-box_status'>{post.post}</p>
          <img src={post.postImage} className='news-box_img'></img>

          <div className='news-box_total-reaction'>
            <div className='like'>
              <ThumbUpIcon htmlColor='blue' />
              <FavoriteIcon htmlColor='red' />
              <span>JohnWish and 200 others reaction</span>
            </div>
            <div className='comment'>
              <span>100</span>
              <span>comments</span>
            </div>
          </div>

          <hr className='line' />

          <div className='news-box_button'>
            {listButton.map((btn) => (
              <div className='button' key={btn.id}>
                <btn.icon />
                <span>{btn.text}</span>
              </div>
            ))}
          </div>

          <hr className='line' />

          <div className='news-box_list-comment'>
            <p className='view-more'>View more comments</p>

            <div className='user-comment'>
              <Avatar alt="Remy Sharp" src="https://i.pinimg.com/236x/12/37/b3/1237b30268db9ee0c9cbe3a79b1ff8fa.jpg" />
              <div className='comment'>
                <p>David Teo</p>
                <p>So, great!</p>
              </div>
            </div>

            <div className='input-comment'>
              <Avatar alt="Remy Sharp" src="https://i.pinimg.com/236x/12/37/b3/1237b30268db9ee0c9cbe3a79b1ff8fa.jpg" />
              <div className='user-input'>
                <input type='text' className='input' />
                <SendIcon className='icon' />
              </div>
            </div>

          </div>

        </div>
      ))}
    </div>
  )
}

export default NewContent
