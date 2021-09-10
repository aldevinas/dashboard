import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userContainer">
        <div className="userShow">
        <div className="userTitleContainer">
        <h1 className="userUpdateTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create New</button>
        </Link>
      </div>
          <div className="userShowTop">
            <img
              src="https://teachingandlearning.schulich.yorku.ca/wp-content/uploads/2019/10/avatar6.png"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Marija Pavizdys</span>
              <span className="userShowUserTitle">Modelis</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">marija99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">28.05.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+370 686 00000</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">marija99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Vilnius | LT</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username:</label>
                <input
                  type="text"
                  placeholder="marija99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name:</label>
                <input
                  type="text"
                  placeholder="Marija Pavizdys"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email:</label>
                <input
                  type="text"
                  placeholder="marija99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone:</label>
                <input
                  type="text"
                  placeholder="+370 686 00000"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address:</label>
                <input
                  type="text"
                  placeholder="Vilnius | LT"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://teachingandlearning.schulich.yorku.ca/wp-content/uploads/2019/10/avatar6.png"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
