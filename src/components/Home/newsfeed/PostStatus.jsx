import React from 'react'
import Avatar from '@mui/material/Avatar';
import ImageIcon from "@mui/icons-material/Image";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
const PostStatus = () => {
  const listFile = [
    {
      id: 1,
      text: "Photo/Video",
      icon: ImageIcon,
      color: "green",
    },
    {
      id: 2,
      text: "Tag Friend",
      icon: PersonAddIcon,
      color: "blue",
    },
    {
      id: 3,
      text: "Feeling Activity",
      icon: EmojiEmotionsIcon,
      color: "yellow",
    },
  ];
  return (
    <div className='poststatus-container'>
      <div className='post-input'>
        <Avatar alt="Remy Sharp" src="https://i.pinimg.com/236x/12/37/b3/1237b30268db9ee0c9cbe3a79b1ff8fa.jpg" />
        <input type="text" placeholder='What is on your mind?' className='input' />
      </div>
      <div className='post-file'>
        {listFile.map(file =>
          <div key={file.id} className='post-file-children'>
            <file.icon style={{color: `${file.color}`}}/>
            <span>{file.text}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostStatus
