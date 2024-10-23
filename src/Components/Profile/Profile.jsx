import React from "react";
import "./Profile.css"
import { useContext } from "react"; 
import { LoginContext } from "../../Context/LoginContext/LoginContext";

function Profile(){
    const {userName} = useContext(LoginContext);

    return (
       <div className="Profile-container">
            <p className="profile-p">User Name: {userName}</p>
       </div>
    );
}
export default Profile;