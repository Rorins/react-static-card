import React from "react";
import ProfilePhoto from "./components/ProfilePhoto.js";
import MainInfo from "./components/MainInfo.js";

export default function Card(){
    return(
    <main class="card">
        <ProfilePhoto />
        <MainInfo />
    </main>
    )
}