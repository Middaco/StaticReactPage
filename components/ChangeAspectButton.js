import React from "react"

function changeAspect(){
    
    const mainContainer = document.getElementById('main-container')
    const footerContainer = document.getElementById('footer-container')
    const linkToPersonalPage = document.getElementById('link-to-personal-page')
    
    console.log(mainContainer.style.backgroundColor)
    if (mainContainer.style.backgroundColor == 'rgb(26, 27, 33)' || 
            mainContainer.style.backgroundColor == ""){ // app is in dark mode
        mainContainer.style.backgroundColor = "#F5F5F5" 
        mainContainer.style.color = "#4A4E74"   
        footerContainer.style.backgroundColor = "#D5D4D8" //white
        
    }else{ //app is in light mode
        mainContainer.style.backgroundColor = '#1A1B21'
        mainContainer.style.color = "white"
        footerContainer.style.backgroundColor = "#161619"  //black

    }
    linkToPersonalPage.style.color = mainContainer.style.color
}

export default function ChangeAspectButton(){
    return (
        <button className="aspect-button" onClick={changeAspect}>
            Change aspect
        </button>
    )
}