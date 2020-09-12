import React , {useState} from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {

  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className="header">
      <div className="header__left">
      <MenuIcon />
      <Link to="/">
      <img
          className="header__logo"
          src="//upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/245px-YouTube_Logo_2017.svg.png"
        />
      </Link>
        
      </div>
      
      <div className="header__input">
        <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
        
      </div>
      <div className="header__rigth">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GhXV8Ugr1DHuY2SV5CR2Y-cJSTtDiO6PrStfl2zxA=s88-c-k-c0x00ffffff-no-rj-mo" />
      </div>
    </div>
  );
}

export default Header;
