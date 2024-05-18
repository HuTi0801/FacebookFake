import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SendIcon from "@mui/icons-material/Send";
import NewsPost from "../../../data/NewsPost.json"
const NewContent = () => {
  const [data, setData] = React.useState(NewsPost);
  const [actionLike, setActionLike] = React.useState([]);
  const [dataComment, setDataComment] = React.useState(
    [NewsPost.map((el) => { return el.listComment })][0]
  );
  const [inputComment, setInputComment] = React.useState("")
  const handleClick = (id) => {
    const index = actionLike.indexOf(id); //lấy vị trí id trong mảng actionLike
    if (index === -1) {
      setActionLike([...actionLike, id])
      const addPeopleLike = data.map(element => {
        if (element.id === id) {
          return { ...element, peopleLike: [...element.peopleLike, "Duc Hai"] }
        }
        return element;
      })
      setData(addPeopleLike);
    } else {
      const updateLike = [...actionLike] //bản sao/ cắt, thêm, sửa, xóa
      updateLike.splice(index, 1)
      setActionLike(updateLike)
      const removePeopleLike = data.map(element => {
        if (element.id === id) {
          return { ...element, peopleLike: element.peopleLike.splice(0, element.peopleLike.length - 1) }
        }
        return element;
      })
      setData(removePeopleLike);
    }
  }
  //------------------------------------DEMO 03 - 04 -------------------------------------
  // const handleComment = (id) => {
  //   NewsPost.map(post => {
  //     if(post.id === id){
  //       const userComment = {
  //         id: "abc",
  //         username: "Duc Hai",
  //         comment: inputComment, 
  //         avatar: "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau-012.jpg"
  //       }
  //     }
  //   })
  // }
  const demo = []
  const listButton = [
    {
      id: 1,
      icon: ThumbUpIcon,
      text: "Like",
      click: "like"
    },
    {
      id: 2,
      icon: ChatBubbleIcon,
      text: "Comment",
      click: "cmt"
    },
    {
      id: 3,
      icon: SendIcon,
      text: "Share",
      click: "share"
    }
  ]
  // const shuffleData = (array) => {
  //   return array.sort(() => Math.random() - 0.5)
  // }
  return (
    <div className='newscontent-container'>
      {data.map(post => (
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
              {post.peopleLike.length > 1 ? (
                <span> {post.peopleLike[0]} and {post.peopleLike.length - 1} others</span>
              ) : <span>{post.peopleLike[0]}</span>}
            </div>

            <div className='comment'>
              <span>100</span>
              <span>comments</span>
            </div>
          </div>

          <hr className='line' />

          <div className='news-box_button'>
            {listButton.map((btn) => (
              <div className='button' key={btn.id} onClick={() => {
                { btn.click === "like" && handleClick(post.id); }
              }}>
                <btn.icon style={btn.click === "like" ? { color: actionLike.includes(post.id) ? "blue" : "" } : {}
                } />
                <span>{btn.text}</span>
              </div>
            ))}
          </div>

          <hr className='line' />

          <div className='news-box_list-comment'>
            <p className='view-more'>View more comments</p>
            {post.listComment.map((cmt) => (
              <div className='user-comment'>
                <Avatar alt="Remy Sharp" src={cmt.avatar} />
                <div className='comment'>
                  <p>{cmt.username}</p>
                  <p>{cmt.comment}</p>
                </div>
              </div>
            ))}
            <div className='input-comment'>
              <Avatar alt="Remy Sharp" src="https://i.pinimg.com/236x/12/37/b3/1237b30268db9ee0c9cbe3a79b1ff8fa.jpg" />
              <div className='user-input'>
                <input type='text' className='input' 
                onChange={(e) => setInputComment(e.target.value)}/>
                <SendIcon className='icon' onClick={() => handleComment(post.id)}/>
              </div>
            </div>

          </div>

        </div>
      ))}
    </div>
  )
}

export default NewContent
