import React from "react";
import profilePhoto from "../images/profile-photo.jpg";

export default function ProfilePhoto(){
    return(
        <div className="profile-photo">
            <img src={profilePhoto} />
        </div>
    )
}