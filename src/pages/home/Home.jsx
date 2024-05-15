import React from 'react'
import "./Home.css"
import LeftHome from '../../components/Home/LeftHome'
import NewsFeed from '../../components/Home/newsfeed/NewsFeed'
import RightHome from '../../components/Home/RightHome'
import LikePages from "../../data/LikePages.json"

const Home = () => {
  return (
    <div className='home-container'>
      <LeftHome LikePages = {LikePages}/>
      <NewsFeed/>
      <RightHome/>
    </div>
  )
}

export default Home
