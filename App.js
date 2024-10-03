import React from "react"
import ProfilePicture from "./components/ProfilePicture"
import Header from "./components/Header"
import EmailButton from "./components/Email"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import ChangeAspectButton from "./components/ChangeAspectButton" 

export default function App(){
    return (
        <div id='main-container' className='main-container'>
            <div className='sub-main-container'>
                <ChangeAspectButton />
                <ProfilePicture />
            </div>
            <Header />
            <EmailButton />
            <MainContent />
            <Footer />
        </div>
    )
}