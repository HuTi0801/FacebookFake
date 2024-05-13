import React from 'react'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import EventIcon from '@mui/icons-material/Event';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LikePages from "../../data/LikePages.json"
import DragHandleIcon from '@mui/icons-material/DragHandle';
const LeftHome = () => {
  const listItem = [
    {
      id: 1,
      icon: OndemandVideoIcon,
      class: "Watch",
    },
    {
      id: 2,
      icon: EventIcon,
      class: "Events",
    },
    {
      id: 3,
      icon: PeopleAltIcon,
      class: "Friends",
    },
    {
      id: 4,
      icon: AccessAlarmIcon,
      class: "Memories",
    },
    {
      id: 5,
      icon: DragHandleIcon,
      class: "Memories",
    },
    {
      id: 6,
      icon: DragHandleIcon,
      class: "Memories",
    }
  ]
  const initItem = 4;
  const lastItem = listItem.length;

  const [dataList, setDataList] = React.useState([]);
  const [dataPages, setDataPages] = React.useState(LikePages);
  const [numberList, setNumberList] = React.useState(initItem);
  const [numberPages, setNumberPages] = React.useState(initItem);
  React.useEffect(() => {
    setDataList(listItem.slice(0, numberList));
    setDataPages(LikePages.slice(0, numberPages));
  }, [numberList, numberPages]);

  const handleShowPage = () => {
    setNumberList(lastItem);
  };

  const handleHidePage = () => {
    setNumberList(initItem);
  };

  return (
    <div className='lefthome-container'>
      <div className='topleft'>
        <ul>
          {dataList.map(item => (
            <li key={item.id}>
              <div className='icon'><item.icon /></div>
              <span className='text'>{item.class}</span>
            </li>
          ))}
        </ul>
        <button className='btn-see-more' onClick={() => {
          {
            numberList == initItem && handleShowPage();
          }
          {
            numberList == lastItem && handleHidePage();
          }
        }}>
          <span className='text'>{numberList === initItem ? "See More" : "Hide"}</span>
          <span className='icon'><ArrowDropDownIcon /></span>
        </button>
      </div>
      <div className='bottomleft'>
        <div className='title'>
          <span className='text'>Shortcut</span>
          <span className='icon'><ArrowDropDownIcon /></span>
        </div>
        <div className='list-page'>
          <ul>
            {
              dataPages.map((page) => (
                <li key={page.id}>
                  <img src={page.image} className='image'></img>
                  <span className='text'>{page.pageName}</span>
                </li>
              ))
            }
          </ul>
          <button className='btn-see-more' onClick={() => {
            {
              numberPages === initItem && setNumberPages(LikePages.length);
            }
            {
              numberPages === LikePages.length && setNumberPages(initItem);
            }
          }}>
            <span className='text'>{numberPages === initItem ? "See More" : "Hide"}</span>
            <span className='icon'><ArrowDropDownIcon /></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LeftHome
