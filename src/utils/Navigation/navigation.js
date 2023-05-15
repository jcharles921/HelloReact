import logo from './logo.svg';
// import Bookmarks from './Bookmarks.svg'

import React from 'react';
import { useState } from 'react';


// })

// const styleDesc="none";


const Nav = () => {
//     const [styleDesc,setIsHovered]= useState({
//     display:"hidden"
const[styleDesc,setIsHovered]=useState('none')
const activeState=()=>{
    setIsHovered("block")
 
}
const inactiveState=()=>{
    setIsHovered("none")
   
}
const[styleDesc2,setIsHovered2]=useState('none')
const activeState2=()=>{
    setIsHovered2("block")
 
}
const inactiveState2=()=>{
    setIsHovered2("none")
   
}

    return ( 
        <header>
            <div className="navigation">
            <div className='icons'>
            <img src={logo} alt='Charles' />
            <svg className='bookslogo' onMouseEnter={activeState} onMouseLeave={inactiveState} width="37" height="42" viewBox="0 0 37 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_502_6)">
                <path d="M36.75 27.5625V3.9375C36.75 1.76285 34.9863 0 32.8125 0H7.875C3.5257 0 0 3.5257 0 7.875V34.125C0 38.4743 3.5257 42 7.875 42H34.125C35.5745 42 36.75 40.8245 36.75 39.4488C36.75 38.4874 36.208 37.6835 35.4375 37.2258V30.5517C36.2414 29.7609 36.75 28.7273 36.75 27.5625ZM11.7387 10.5H27.4887C28.2844 10.5 28.875 11.0906 28.875 11.8125C28.875 12.5344 28.2844 13.125 27.5625 13.125H11.7387C11.0906 13.125 10.5 12.5344 10.5 11.8125C10.5 11.0906 11.0906 10.5 11.7387 10.5ZM11.7387 15.75H27.4887C28.2844 15.75 28.875 16.3406 28.875 17.0625C28.875 17.7844 28.2844 18.375 27.5625 18.375H11.7387C11.0906 18.375 10.5 17.7844 10.5 17.0625C10.5 16.3406 11.0906 15.75 11.7387 15.75ZM31.5 36.75H7.875C6.42551 36.75 5.25 35.5745 5.25 34.125C5.25 32.6755 6.42551 31.5 7.875 31.5H31.5V36.75Z" fill="white" fillOpacity="1"/>
                </g>
                <defs>
                <clipPath id="clip0_502_6">
                <rect width="36.75" height="42" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <svg className='bookmark' onMouseEnter={activeState2} onMouseLeave={inactiveState2} width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.5 8.75H10.5C8.56975 8.75 7 10.3197 7 12.25V40.25L17.5 33.9483L28 40.25V12.25C28 10.3197 26.4303 8.75 24.5 8.75ZM24.5 34.0672L17.5 29.869L10.5 34.0672V12.25H24.5V34.0672Z" fill="white" fillOpacity="1"/>
                <path d="M31.5 1.75H17.5C15.5697 1.75 14 3.31975 14 5.25H28C29.9303 5.25 31.5 6.81975 31.5 8.75V27.0252L35 31.381V5.25C35 3.31975 33.4303 1.75 31.5 1.75Z" fill="white" fillOpacity="1"/>
            </svg>
            </div>
            

            <div className="button-container">
            <a href="/index.html"><button className="nav_button">Home</button></a>
                    <a href="/#"><button className="nav_button">About</button></a>
                    <a href="/#"><button className="nav_button">Blog</button></a>
                    <a href="/#"><button className="nav_button">Login</button></a>

            </div>


        </div>
        <div className="description" style={{display: styleDesc}}>
                    <React.Fragment>
                <svg width="178" height="119" viewBox="0 0 178 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="14" width="178" height="105" rx="15" fill="#F4A261" fillOpacity="0.98"/>
                    <path d="M35 0L48.8564 26.25H21.1436L35 0Z" fill="#F4A261" fillOpacity="0.98"/>
                </svg>
                </React.Fragment>
                <span className="booktext">
                    <h4>Explore my bookstore</h4> 
                    Where knowledge and adventure meet
                </span>
    
        </div>
        <div className="description2" style={{display: styleDesc2}}>
        <React.Fragment>
      <svg width="178" height="119" viewBox="0 0 178 119" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="14" width="178" height="105" rx="15" fill="#F4A261" fillOpacity="0.98"/>
        <path d="M35 0L48.8564 26.25H21.1436L35 0Z" fill="#F4A261" fillOpacity="0.98"/>
      </svg>
    </React.Fragment>
    <span className="booktext">
                    <h4>Exiting founds</h4> 
                    A list of Ressources that i found intersting
                </span>
        </div>
        </header>
        
        
        


     );
}
 
export default Nav;
