import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="VartotojoVardas" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Vardas Pavardė" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="el. paštas" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="slaptažodis" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+3706 86 00000" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Adresas, Gatvė, namo Nr., buto Nr." />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newUserBtnWrapper">
          <button className="newUserButton">Create User</button>
        </div>
        
      </form>
    </div>
  );
}
