import React from 'react';
import Header from "../../components/header/header";
import LeftBar from "../../components/leftbar/sidebar";
import Feed from "../../components/feed/feed";
import RightBar from "../../components/rightbar/rightbar";
import "./home.css"

export default function home(){
    return (
        <div>
            <Header/>
            <div className="homeContainer">
                <LeftBar/>
                <Feed/>
                <RightBar/>
            </div>
        </div>
    )
}