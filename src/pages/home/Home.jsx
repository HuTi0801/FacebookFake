import React from 'react'
import "./Home.css"
import LeftHome from '../../components/Home/LeftHome'
import NewsFeed from '../../components/Home/newsfeed/NewsFeed'
import RightHome from '../../components/Home/RightHome'
import LikePages from "../../data/LikePages.json"
import { getUser } from '../../apis/userRequest'
import { useDispatch } from 'react-redux'
import { getDataUser } from "../../redux/actions/userActions"
const Home = () => {
  const [data, setData] = React.useState();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getDataUser())
    const fetchData = async () => {
      fetch('https://664b523835bbda10987c7312.mockapi.io/api/v1/users', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      }).then(res => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      }).then(tasks => {
        // Do something with the list of tasks
      }).catch(error => {
        console.log(error)
      })
      try {
        const response = await getUser();
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])
  return (
    <div className='home-container'>
      <LeftHome LikePages={LikePages} />
      <NewsFeed />
      <RightHome />
    </div>
  )
}

export default Home
