import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import FacebookIcon from '@mui/icons-material/Facebook';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
// Trong 1 component bắt buộc phải bọc ngoài 1 thẻ div 
// Nếu muốn tạo thêm 1 thẻ div thì phải lồng div bên ngoài
//Tuy nhiên nếu dùng div bọc ngoài có khả năng bị xung đột, phá vỡ màn hình -> Vậy nên thay <div></div> thành fragemet <></>
// Bọc tất cả các thẻ div -> không gây xung đột
const Header = () => {
    return (
        <>
            <div className='header-container'>

                <div className='header-search'>
                    <FacebookIcon />
                    <div className='search-input'>
                        <SearchIcon />
                        <input type='text' placeholder='Search Facebook'></input>
                    </div>

                </div>
                <div className='header-icons'>
                    <ul>
                        <li><HomeIcon/></li>
                        <li><FeaturedVideoIcon/></li>
                        <li><StorefrontIcon/></li>
                        <li><PeopleIcon/></li>
                        <li><SportsEsportsIcon/></li>
                    </ul>
                </div>
                <div className='header-alert'></div>
            </div>

        </>
    )
}

export default Header

