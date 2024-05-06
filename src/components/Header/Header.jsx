import React from 'react'
import "./Header.css"
import FacebookIcon from "@mui/icons-material/Facebook";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ExtensionIcon from "@mui/icons-material/Extension";
import { Avatar } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
// Trong 1 component bắt buộc phải bọc ngoài 1 thẻ div 
// Nếu muốn tạo thêm 1 thẻ div thì phải lồng div bên ngoài
// Tuy nhiên nếu dùng div bọc ngoài có khả năng bị xung đột, phá vỡ màn hình -> Vậy nên thay <div></div> thành fragemet <></>
// Bọc tất cả các thẻ div -> không gây xung đột

/**
 ESS6
 * Variable: let: Biến cục bộ; var: Biến sử dụng cho tất cả; const: hằng số không đổi
    for(let i = 0 ; i < 10; i++){
        console.log(i);
    }
 * Arrow Function: Hello = () => {};
 * Array method: 
 * -- push ():thêm ptu vào trong mảng
 * -- map(): gọi để list  
 * -- filter(): lọc
 VD: const arr = ["a", "b", "c"];
        array.push("d");
 *  Syntax Template literals: 

 */

const Header = () => {

    // Khai báo Array method
    const listIcon = [
        {
          id: 1,
          item: HomeIcon,
          class: "homeicon",
        },
        {
          id: 2,
          item: OndemandVideoIcon,
          class: "videoicon",
        },
        {
          id: 3,
          item: StorefrontIcon,
          class: "storeicon",
        },
        {
          id: 4,
          item: GroupIcon,
          class: "groupicon",
        },
        {
          id: 5,
          item: ExtensionIcon,
          class: "extendsionicon",
        },
      ];

    // Array method: filter
    // const newList = listIcon.filter((icon) => icon.status == 1)
    // console.log(newList)

    //Toán tử ... : copy
    const newList = [...listIcon];
    console.log(newList);

    return (
        <>
            <div className="header-container">
                <div className="header-search">
                    <div className="header-search_logo">
                        <FacebookIcon className="logo-facebook" />
                    </div>
                    <div className="search-input">
                        <SearchIcon className="icon" />
                        <input className="input" type="text" placeholder="Search facebook" />
                    </div>
                </div>
                <div className="header-icon">
                    <ul>
                        {/* 
                        - Set key vì trong React phải có phân biệt giữa các item -> nếu không có key thì sẽ gây lỗi warning 
                        - map giống vòng lệnh for -> list ra toàn bộ item.
                        - Cách viết này giúp code clean hơn, gọn gàng và xinh đẹp - thay vì phải code nhiều lệnh li để gọi nhiều icon
                        */}

                        {listIcon.map(icon => (
                            <li key={icon.id} className={`list ${icon.class}`}>
                                <icon.item />
                            </li>
                        ))}

                    </ul>
                </div>
                <div className="header-alert">
                    <div className="header-alert_profile">
                        <Avatar
                            alt="Remy Sharp"
                            src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
                        />

                        <span className="profile-name">Duc hai</span>
                    </div>
                    <div className="header-alert_communicate">
                        <div className="icon_item">
                            <ChatBubbleIcon />
                            <span className="number_alert">1</span>
                        </div>
                        <div className="icon_item">
                            <NotificationsIcon />
                            <span className="number_alert">3</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header

