import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import UserImg from "../../assets/images/am.jpg";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" className="link">
            <span className="logo">add.In</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={UserImg} alt="user avatar" className="topAvatar" /> 
        </div>
      </div>
    </div>
  )
};
