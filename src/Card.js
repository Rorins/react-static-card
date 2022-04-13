import React from "react";
import ProfilePhoto from "./components/ProfilePhoto.js";
import MainInfo from "./components/MainInfo.js";
import Footer from "./components/Footer.js";

export default function Card(){
    return(
    <main class="card">
        <ProfilePhoto />
        <MainInfo />
        <Footer />
    </main>
    )
}