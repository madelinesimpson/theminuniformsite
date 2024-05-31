import cloudOne from '/Users/madelinesimpson/ThemInUniform/client/src/assets/cloud1.png'
import cloudTwo from '/Users/madelinesimpson/ThemInUniform/client/src/assets/cloud2.png'
import cloudThree from '/Users/madelinesimpson/ThemInUniform/client/src/assets/cloud3.png'
import cloudFour from '/Users/madelinesimpson/ThemInUniform/client/src/assets/cloud4.png'
import title from '/Users/madelinesimpson/ThemInUniform/client/src/assets/2.png'
import music from '/Users/madelinesimpson/ThemInUniform/client/src/assets/musicnew.png'
import shop from '/Users/madelinesimpson/ThemInUniform/client/src/assets/shop.png'
import shows from '/Users/madelinesimpson/ThemInUniform/client/src/assets/shows.png'
import about from '/Users/madelinesimpson/ThemInUniform/client/src/assets/about.png'
import settings from '/Users/madelinesimpson/ThemInUniform/client/src/assets/settings screen.png'
import exit from '/Users/madelinesimpson/ThemInUniform/client/src/assets/exit.png'
import footprintPic from '/Users/madelinesimpson/ThemInUniform/client/src/assets/footprint_coverart.jpg'
import ltjPic from '/Users/madelinesimpson/ThemInUniform/client/src/assets/ltjcoverart.png'
import mystery from '/Users/madelinesimpson/ThemInUniform/client/src/assets/question mark.jpg'
import instagram from '/Users/madelinesimpson/ThemInUniform/client/src/assets/Instagram.png'
import youtube from '/Users/madelinesimpson/ThemInUniform/client/src/assets/Youtube.png'
import tiktok from '/Users/madelinesimpson/ThemInUniform/client/src/assets/Tiktok.png'
import facebook from '/Users/madelinesimpson/ThemInUniform/client/src/assets/Facebook.png'
import spotify from '/Users/madelinesimpson/ThemInUniform/client/src/assets/Spotify.png'
import apple from '/Users/madelinesimpson/ThemInUniform/client/src/assets/Apple.png'
import scroll from '/Users/madelinesimpson/ThemInUniform/client/src/assets/scroll.png'
import React, { useState } from 'react'
import SongCard from '/Users/madelinesimpson/ThemInUniform/client/src/components/SongCard.jsx'
import pictureFrame from '/Users/madelinesimpson/ThemInUniform/client/src/assets/picture frame.png'
import Show from '/Users/madelinesimpson/ThemInUniform/client/src/components/Show.jsx'
import { render } from 'react-dom'


export default function Background () {
    const [toggle, setToggle] = useState(true);
    const [showstoggle, setShowsToggle] = useState(true);
    const [abouttoggle, setAboutToggle] = useState(true);
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
            <div className={`reverseBG ${classNamesReverse}`}></div>
            <div className="blueBG"></div>
            <div className={`title ${classNamesOG} ${classNamesDim}`}>
                <img className="titleImg" src={title}/>
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
                    <SongCard coverUrl={mystery} songtitle="Rearview Sunset" />
                    <SongCard coverUrl={mystery} songtitle="Raisins" />
                </div>
                <img className="exit" src={exit} onClick={musicPopup}/>
            </div>
            <div id="showsWindow" style={{ display: showstoggle ? 'none' : 'flex' }}>
                <div id="rectangle"><h1 className="inventory">Shows Inventory</h1></div>
                <img className="showsFrame" src={settings}/>
                <div className="showsList">
                   <Show />
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
            <div className={`music ${classNamesOG}`}>
                <img className="musicimg" src={music} onClick={musicPopup}/>
            </div>
            <div className={`shop ${classNamesOG}`}>
                <img className="shopimg" src={shop}/>
            </div>
            <div className={`shows ${classNamesOG}`}>
                <img className="showsimg" src={shows} onClick={showsPopup}/>
            </div>
            <div className={`about ${classNamesOG}`}>
                <img className="aboutimg" src={about} onClick={aboutPopup}/>
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