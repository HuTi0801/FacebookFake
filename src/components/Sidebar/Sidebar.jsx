import React from 'react'
import "./Sidebar.css"
import { Avatar } from "@mui/material";
import FlagIcon from '@mui/icons-material/Flag';
import { blue, orange } from '@mui/material/colors';
import GroupIcon from "@mui/icons-material/Group";
import MessageSharpIcon from '@mui/icons-material/MessageSharp';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Sidebar = () => {
    return (
        <div>
            <div className='sidebar-container'>
                <div className='sidebar-top'>
                    <div className="sidebar-top_profile">
                        <Avatar
                            alt="Remy Sharp"
                            src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
                        />
                        <span className="profile-name">Duc hai</span>
                    </div>
                    <div className='sidebar-top_communicate'>
                        <div className='sidebar-top_icon'>
                            <FlagIcon sx={{ color: orange[500] }} fontSize='large' />
                            <span className='flag-icon'>Trang</span>
                        </div>
                        <div className='sidebar-top_icon'>
                            <GroupIcon sx={{ color: blue[500] }} fontSize='large' />
                            <span className='group-icon'>Bạn bè</span>
                        </div>
                        <div className='sidebar-top_icon'>
                            <MessageSharpIcon sx={{ color: blue[500] }} fontSize='large' />
                            <span className='message-icon'>Message</span>
                        </div>
                        <div className='sidebar-top_icon'>
                            <GroupsSharpIcon sx={{ color: blue[500] }} fontSize='large' />
                            <span className='groups-sharp-icon'>Trang</span>
                        </div>
                        <div className='sidebar-top_icon'>
                            <ArrowDropDownIcon sx={{ color: blue[500] }} fontSize='large' />
                            <span className='arrow-dropdown-icon'>Xem thêm</span>
                        </div>
                    </div>
                </div>
                <div className='sidebar-bottom'>
                    <div className='sidebar-bottom_content'>
                        Lối tắt của bạn
                    </div>
                    <div className='sidebar-bottom_group'>
                        <div className='sidebar-bottom_icon'>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
                            />
                            <span className="name">Gen Z học Marketing</span>
                        </div>

                        <div className='sidebar-bottom_icon'>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
                            />
                            <span className="name">Marketing - Chuyện Người Trong Nghề (Public)</span>
                        </div>

                        <div className='sidebar-bottom_icon'>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
                            />
                            <span className="name">Cộng đồng Digital Marketing</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
