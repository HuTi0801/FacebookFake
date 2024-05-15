import React, { useEffect } from 'react'
import listStories from "../../../data/StoriesList.json"
import Avatar from '@mui/material/Avatar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
/*
*** Lưu ý khi CSS cho đối tượng dùng thư viện Bootstrap hoặc MUI 
- Nếu tách thanh file css riêng thì phải có thêm !important -> để thuộc tính đc áo dụng
- Nếu không muốn dùng !important thì phải css ngay trong React (file jsx)
*/

const Stories = () => {
  const space = 200;
  // Trạng thái có thể thay đổi
  const [position, setPosition] = React.useState(0);
  const [showLeftButton, setLeftButton] = React.useState(false);
  const [showRightButton, setRightButton] = React.useState(false);
  // Khai báo lấy độ dài của thằng story-container
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [storiesWidth, setStoriesWidth] = React.useState(0);
  useEffect(() => {
    const storiesContainer = document.querySelector(".story-container"); //lấy thẻ có class stories-container
    const parentWidth = storiesContainer.clientWidth; //lấy chiều dài width của thằng classstories-container
    const stories = document.querySelector(".stories");
    const storiesWidth = stories.clientWidth; //lấy chiều dài width của thằng class stories
    setContainerWidth(parentWidth); //lưu lại độ dài stories-container
    setStoriesWidth(storiesWidth); //lưu lại độ dài stories
    handleScroll(parentWidth, storiesWidth, position);

  }, [position]);
  //Đây là các đối số truyền vào hoàn toàn khác vs các biến trong useEffect
  const handleScroll = (containerWidth, storiesWidth, position) => {
    setLeftButton(position < 0); //true false
    setRightButton(containerWidth - position <= storiesWidth); //false
  };
  //storiesWidth: 737 , containerWidth: 737, position: -100 => 737 - (-100) = 837

  const handleScrollLeft = () => {
    setPosition(prev => prev + space)
  }

  const handleScrollRight = () => {
    setPosition(prev => prev - space)
  }
  //function này khai báo hàm - code CSS trực tiếp trong React
  const storyStyle = (urlImage) => {
    return {
      position: "relative",
      backgroundImage: `url(${urlImage})`,
      width: "95px",
      height: "180px",
      padding: "2px",
      borderRadius: "10px",
      color: "white",
      cursor: "pointer",
      flex: "0 0 auto"
    }
  }

  return (
    <div className='story-container'>
      {showLeftButton && (
        <div className='scroll-button left' onClick={handleScrollLeft} >
          <ArrowBackIosIcon />
        </div>
      )}
    

      {showRightButton && (
        <div className="scroll-button right" onClick={handleScrollRight}>
          <ArrowForwardIosIcon />
        </div>
      )}

      <div className='stories' style={{ transform: `translateX(${position}px)` }}>
        {listStories.map((story) => (
          <div className='story-box' style={storyStyle(story.background)} key={story.id}>
            <Avatar alt="Remy Sharp" src={story.avatar} style={{ zIndex: "2", border: "3px solid white" }} />
            <p className='username'>{story.username}</p>
          </div>
        ))}
      </div>
    </div >
  )
}

export default Stories
