import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <div className="memberWrapper">
             <img
            src="https://www.w3schools.com/w3images/avatar6.png"
            alt="user avatar"
            className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Jonas Paprastasis</span>
              <span className="widgetSmUserTitle">Egzaminatorius</span>
            </div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <div className="memberWrapper">
             <img
            src="https://www.w3schools.com/w3images/avatar6.png"
            alt="user avatar"
            className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Saulius Paliulis</span>
              <span className="widgetSmUserTitle">Vadovas</span>
            </div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <div className="memberWrapper">
             <img
            src="https://ritecaremedicalofficepc.com/wp-content/uploads/2019/09/img_avatar.png"
            alt="user avatar"
            className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Janina Jankute</span>
              <span className="widgetSmUserTitle">Mokytoja</span>
            </div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <div className="memberWrapper">
             <img
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt="user avatar"
            className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Antanas Bardakas</span>
              <span className="widgetSmUserTitle">SEO</span>
            </div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <div className="memberWrapper">
             <img
            src="https://www.w3schools.com/w3images/avatar6.png"
            alt="user avatar"
            className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Kenis Parkelis</span>
              <span className="widgetSmUserTitle">Sodininkas</span>
            </div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
