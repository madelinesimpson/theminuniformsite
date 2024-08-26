import cloudOne from './assets/cloud1.png'
import cloudTwo from './assets/cloud2.png'
import cloudThree from './assets/cloud3.png'
import cloudFour from './assets/cloud4.png'
import title from './assets/2.png'
import music from './assets/musicnew.png'
import shop from './assets/shop.png'
import shows from './assets/shows.png'
import about from './assets/about.png'
import settings from './assets/settings screen.png'
import exit from './assets/exit.png'
import footprintPic from './assets/footprint_coverart.jpg'
import ltjPic from './assets/ltjcoverart.png'
import mystery from './assets/question mark.jpg'
import instagram from './assets/Instagram.png'
import youtube from './assets/Youtube.png'
import tiktok from './assets/Tiktok.png'
import facebook from './assets/Facebook.png'
import spotify from './assets/Spotify.png'
import apple from './assets/Apple.png'
import React, { useState } from 'react'
import SongCard from './SongCard.jsx'
import pictureFrame from './assets/pixel frame.png'
import contact from './assets/contact.png'
import subscribe from './assets/subscribe.png'
import plane from './assets/plane.png'
import Show from './Show.jsx'
import { render } from 'react-dom'


export default function Background () {
    const [toggle, setToggle] = useState(true);
    const [showstoggle, setShowsToggle] = useState(true);
    const [abouttoggle, setAboutToggle] = useState(true);
    const [contacttoggle, setContactToggle] = useState(true);
    const [classNamesOG, setClassNamesOG] = useState("");
    const [classNamesReverse, setClassNamesReverse] = useState("");
    const [classNamesCloud, setClassNamesCloud] = useState("");
    const [classNamesDim, setClassNamesDim] = useState("");

    const musicPopup = () => {
        if(toggle==false) {
            setToggle(true);
        }
        else {
            setToggle(false);
        }
        dimBG();
    };

    const showsPopup = () => {
        if(showstoggle==false) {
            setShowsToggle(true);
        }
        else {
            setShowsToggle(false);
        }
        dimBG();
    };

    const aboutPopup = () => {
        if(abouttoggle==false) {
            setAboutToggle(true);
        }
        else {
            setAboutToggle(false);
        }
        dimBG();
    };

    const contactPopup = () => {
        if(contacttoggle==false) {
            setContactToggle(true);
        }
        else {
            setContactToggle(false);
        }
        dimBG();
    };

    const startStopAnimationOG = () => {
        setClassNamesOG(classNamesOG ? "" : "animationog");
    };

    const startStopAnimationReverse = () => {
        setClassNamesReverse(classNamesReverse ? "" : "animationreverse")
    }

    const startStopClouds = () => {
        setClassNamesCloud(classNamesCloud ? "" : "freeze");
    }

    const dimBG = () => {
        setClassNamesDim(classNamesDim ? "" : "dim");
    }

    const doBoth = () => {
        startStopAnimationOG();
        startStopAnimationReverse();
        startStopClouds();
        setAboutToggle(true);
        setShowsToggle(true);
        setToggle(true);
    }
    

    return  (
        <>
            <div className={`ogBG ${classNamesOG} ${classNamesDim}`}></div>
            {/*<div className={`reverseBG ${classNamesReverse}`}></div>*/}
            <div className={`blueBG ${classNamesDim}`}></div>
            <div className={`title ${classNamesOG} ${classNamesDim}`}>
                <img className="titleImg" src={title}/>
                {/*<img className={`plane ${classNamesCloud}`} src={plane}/>*/}
            </div>
            <div className={`cloud ${classNamesDim}`}>
                <img className={`cloudimg1 ${classNamesCloud}`} src={cloudOne}/>
                <img className={`cloudimg2 ${classNamesCloud}`} src={cloudTwo}/>
                <img className={`cloudimg3 ${classNamesCloud}`} src={cloudThree}/>
                <img className={`cloudimg4 ${classNamesCloud}`} src={cloudFour}/>
                <img className={`cloudimg5 ${classNamesCloud}`} src={cloudTwo}/>
            </div>
            <div id="musicWindow" style={{ display: toggle ? 'none' : 'flex' }}>
                <img className="frame" src={settings}/>
                <div id="rectangle"><h1 className="inventory">Music Inventory</h1></div>
                <div className="songs">
                    <SongCard coverUrl={footprintPic} songtitle="Footprint" link="https://hypeddit.com/theminuniform/footprint-1"/>
                    <SongCard coverUrl={ltjPic} songtitle="A Letter to Jack" link="https://hypeddit.com/theminuniform/alettertojack"/>
                    <SongCard coverUrl={mystery} songtitle="Heart Tattoo" />
                    <SongCard coverUrl={mystery} songtitle="First of Many" />
                    <SongCard coverUrl={mystery} songtitle="Raisins" />
                </div>
                <img className="exit" src={exit} onClick={musicPopup}/>
            </div>
            <div id="showsWindow" style={{ display: showstoggle ? 'none' : 'flex' }}>
                <div id="rectangle"><h1 className="inventory">Shows Inventory</h1></div>
                <div className="biggerWrapper">
                <img className="showsFrame" src={settings}/>
                <div className="showsWrapper">          
                    <div className="showsList">
                        <Show />
                    </div>
                </div>  
                </div>
                <img className="exitShow" src={exit} onClick={showsPopup}/>
            </div>
            <div id="aboutWindow" style={{ display: abouttoggle ? 'none' : 'flex' }}>
                <img className="aboutFrame" src={settings}/>
                <div className="bio">
                    <h1>Them in Uniform is a spirited indie rock trio formed by Georgia Tech students Madeline Simpson and Eli Scornik, 
                        who bring a dynamic blend of vocals and guitar, complemented by the rhythmic precision of drummer Tyler Morgan. 
                        The band infuses traditional indie rock with a touch of angst that resonates with college students and rock aficionados 
                        alike. With each performance, Them in Uniform invites listeners to join their sonic journey, where rock meets a dash 
                        of collegiate charm.</h1>
                        <img className="pictureFrame" src={pictureFrame}/>
                </div>
                <img className="exitAbout" src={exit} onClick={aboutPopup}/>
            </div>
            <div id="contactWindow" style={{display: contacttoggle ? 'none' : 'flex'}}>
                <img className="contactFrame" src={settings}/>
                <div className="contactInfo">
                    <h1>Email for information and booking:
                    <br></br>
                    contact@theminuniform.com
                    </h1>
                    <h2>(We also respond to Instagram DMs @theminuniform)</h2>
                </div>
                <img className="exitContact" src={exit} onClick={contactPopup}/>
            </div>
            <div className={`music ${classNamesOG} ${classNamesDim}`}>
                <img className="musicimg" src={music} onClick={musicPopup}/>
            </div>
            <div className={`shows ${classNamesOG} ${classNamesDim}`}>
                <img className="showsimg" src={shows} onClick={showsPopup}/>
            </div>
            <div className={`about ${classNamesOG} ${classNamesDim}`}>
                <img className="aboutimg" src={about} onClick={aboutPopup}/>
            </div>
            <div className={`contact ${classNamesOG} ${classNamesDim}`}>
                <img className="contactimg" src={contact} onClick={contactPopup}/>
            </div>
            <div className={`subscribe ${classNamesOG} ${classNamesDim}`}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScmnhT58EkjcDDn1lKNKMcin7W0SQ3fppac1OoK2cwSv9TN6w/viewform?usp=sf_link" target="_blank">
                    <img className="subscribeimg" src={subscribe}/>
                </a>
            </div>
            {/*<div className="arrowSign" onClick={doBoth}>
            </div>*/}
            <div className={`socials ${classNamesDim}`}>
                {/*<div className="scroll">
                    <img className="scrollimg" src={scroll} />
            </div>*/}
                <div className="icons">
                    <a href="https://www.instagram.com/theminuniform" target="_blank">
                        <img className="instagram" src={instagram}/>
                    </a>
                    <a href="https://www.youtube.com/@ThemInUniform" target="_blank">
                        <img className="youtube" src={youtube}/>
                    </a>
                    <a href="https://www.tiktok.com/@theminuniform_" target="_blank">
                        <img className="tiktok" src={tiktok}/>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61553254210681" target="_blank">
                        <img className="facebook" src={facebook}/>
                    </a>
                    <a href="https://open.spotify.com/artist/5OdDYFHJuz1Ryd5rRZHDxK?si=br07eDJsRrWzKPqBAi5btQ" target="_blank">
                        <img className="spotify" src={spotify}/>
                    </a>
                    <a href="https://music.apple.com/us/artist/them-in-uniform/1736897481" target="_blank">
                        <img className="apple" src={apple}/>
                    </a>
                </div>
            </div>
        </>
    );
}