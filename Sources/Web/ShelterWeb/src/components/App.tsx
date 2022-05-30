import React from "react";
import "./App.css";
import Account from "./Account/Account";
import socials from "./../assets/socials.png";
import LoginBackground from "./../assets/Login.png";
import Home from "./Home/Home";
/*style={{backgroundImage: `url(${LoginBackground})`, height:"60rem", backgroundSize: "cover"}}>*/
function App() {
  return (
    <div className="App">
      <Account />
      {/*<Home />*/}
      <div className="Footer">
        <hr
          style={{
            color: "#0080ff",
            backgroundColor: "#0080ff",
            height: 5,
          }}
        />
        Shelter 2022 All Right Reserved Term of Use Privacy Policy
        <img src={socials} className="socials" alt="socials" />
      </div>
    </div>
  );
}

export default App;
