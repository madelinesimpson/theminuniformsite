import './EPK.css'
import smiths from './assets/smithsfade.png'
import handwrite from './assets/handwrite.png'
import apple from './assets/whiteapple.png'
import spot from './assets/whitespotify.png'
import insta from './assets/whiteinsta.png'
import tik from './assets/whitetiktok.png'
import you from './assets/whiteyoutube.png'
import face from './assets/whitefacebook.png'
import mirror from './assets/mirrordark.png'
import phone from './assets/phonedark.png'
import SpotifyEmbed from './SpotifyEmbed';
import PlaylistEmbed from './PlaylistEmbed';
import SoundcloudEmbed from './SoundcloudEmbed';
import React, { useState, useEffect } from 'react'
import useWindowDimensions from './WindowDimensions'

function EPK() {
  const [headerOpacity, setHeaderOpacity] = useState(1);
  const[aboutOpacity, setAboutOpacity] = useState(0);
  const[musicOpacity, setMusicOpacity] = useState(0);
  const {height, width} = useWindowDimensions();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [width]);


  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const headerFadeOutPoint = 500;
    const newHeaderOpacity = 1 - scrollTop / headerFadeOutPoint;
    setHeaderOpacity(newHeaderOpacity < 0 ? 0 : newHeaderOpacity);

    const aboutFadeInPoint = 500;
    const aboutFadeInEndPoint = 550;
    const aboutFadeOutStartPoint = 1050;
    const aboutFadeOutEndPoint = 1150;
    let newAboutOpacity;

    if (width > 1480) {   
      if (scrollTop <= aboutFadeInPoint) {
        newAboutOpacity = 0;
      } else if (scrollTop > aboutFadeInPoint && scrollTop <= aboutFadeInEndPoint) {
        newAboutOpacity = (scrollTop - aboutFadeInPoint) / (aboutFadeInEndPoint - aboutFadeInPoint);
      } else if (scrollTop > aboutFadeInEndPoint && scrollTop <= aboutFadeOutStartPoint) {
        newAboutOpacity = 1;
      } else if (scrollTop > aboutFadeOutStartPoint && scrollTop <= aboutFadeOutEndPoint) {
        newAboutOpacity = 1 - (scrollTop - aboutFadeOutStartPoint) / (aboutFadeOutEndPoint - aboutFadeOutStartPoint);
      } else {
        newAboutOpacity = 0;
      }

      setAboutOpacity(newAboutOpacity);
 
        const musicFadeInPoint = 1100;
        const musicFadeInEndPoint = 1200;
        const musicFadeOutStartPoint = 2500;
        const musicFadeOutEndPoint = 2600;

        let newMusicOpacity;

        if (scrollTop <= musicFadeInPoint) {
          newMusicOpacity = 0;
        } else if (scrollTop > musicFadeInPoint && scrollTop <= musicFadeInEndPoint) {
          newMusicOpacity = (scrollTop - musicFadeInPoint) / (musicFadeInEndPoint - musicFadeInPoint);
        } else if (scrollTop > musicFadeInEndPoint && scrollTop <= musicFadeOutStartPoint) {
          newMusicOpacity = 1;
        } else if (scrollTop > musicFadeOutStartPoint && scrollTop <= musicFadeOutEndPoint) {
          newMusicOpacity = 1 - (scrollTop - musicFadeOutStartPoint) / (musicFadeOutEndPoint - musicFadeOutStartPoint);
        } else {
          newMusicOpacity = 0;
        }

        setMusicOpacity(newMusicOpacity);
    }
    else {
      
      if (scrollTop <= aboutFadeInPoint) {
        newAboutOpacity = 0;
      } else if (scrollTop > aboutFadeInPoint && scrollTop <= aboutFadeInEndPoint) {
        newAboutOpacity = (scrollTop - aboutFadeInPoint) / (aboutFadeInEndPoint - aboutFadeInPoint);
      } else {
        newAboutOpacity = 1;
      }
      setAboutOpacity(newAboutOpacity);
      setMusicOpacity(1);
    }

  };

  return (
    <>
      <div className="socialicons">
        <a href="https://www.instagram.com/theminuniform" target="_blank">
            <img className="instaicon" src={insta}></img>
        </a>
        <a href="https://www.tiktok.com/@theminuniform_" target="_blank">
            <img className="tikicon" src={tik}></img>
        </a>
        <a href="https://www.youtube.com/@ThemInUniform" target="_blank">
            <img className="youicon" src={you}></img>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61553254210681" target="_blank">
            <img className="faceicon" src={face}></img>
        </a>
        <a href="https://open.spotify.com/artist/5OdDYFHJuz1Ryd5rRZHDxK?si=br07eDJsRrWzKPqBAi5btQ" target="_blank">
            <img className="spoticon" src={spot}></img>
        </a>
        <a href="https://music.apple.com/us/artist/them-in-uniform/1736897481" target="_blank">
            <img className="appleicon" src={apple}></img>
        </a>
      </div>
      <div className="scrollcontainer">
        <section className="epkHeader">
            <img className="smithsIMG" src={smiths} style={{opacity: headerOpacity}}/>
            <img className="handwrite" src={handwrite} style={{opacity: headerOpacity}}/>
        </section>
        <section className = "bioEPK">
            <img className="mirror" src={mirror} style={{opacity: aboutOpacity}}/>
            <div className="bioEPKtext" style={{opacity: aboutOpacity}}>
              <h3>ABOUT US</h3>
              <p>Them in Uniform is a spirited indie rock trio formed by Georgia Tech students 
              Madeline Simpson and Eli Scornik, who bring a dynamic blend of vocals and guitar, complemented by the rhythmic precision of drummer 
              Tyler Morgan. The band infuses traditional indie rock with a touch of angst that resonates with college students and rock aficionados alike. 
              With each performance, Them in Uniform invites listeners to join their sonic journey, where rock meets a dash of collegiate charm.</p>
            </div>
            <img className="phone" src={phone} style={{opacity: aboutOpacity}}/>
        </section>
        <section className="musicEPK">
            <div className="songsOnSpotify" style={{opacity: musicOpacity}}>
              <h3>DISCOGRAPHY</h3>
              <p>The first two singles off of our debut EP "Hindsight"</p>
                <SpotifyEmbed className="spotifyembed" link="https://open.spotify.com/embed/track/1uT9cX4bCuD5rOyWV6KkYt?utm_source=generator&theme=0" />
                <SpotifyEmbed className="spotifyembed" link="https://open.spotify.com/embed/track/583RqrRjKV5NoXyActUjVI?utm_source=generator&theme=0" />
            </div>
            <div className="demos" style={{opacity: musicOpacity}}>
              <h3>DEMOS</h3>
              <p>A collection of currently unreleased songs from "Hindsight" and songs written for our next EP</p>
              <div className="demoembeds">
                <SoundcloudEmbed className="individualdemo" apilink="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1756314699&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
                <SoundcloudEmbed apilink="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1855883595&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
                <SoundcloudEmbed apilink="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1874713773&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
              </div>
            </div>
            <div className="playlistsSpotify" style={{opacity: musicOpacity}}>
              <h3>FEATURED PLAYLISTS</h3>
              <div className="playlistEmbeds">
                <div>
                <PlaylistEmbed link="https://open.spotify.com/embed/playlist/63hLmAaQUbPzBTg5R726DR?utm_source=generator&theme=0" />
                </div>
                <div>
                  <PlaylistEmbed link="https://open.spotify.com/embed/playlist/6p6x9VKcravXKkLWg6gA5x?utm_source=generator&theme=0" />
                </div>
                <div>
                  <PlaylistEmbed link="https://open.spotify.com/embed/playlist/50hKe1E5PmISXMtWbMdB3F?utm_source=generator&theme=0" />
                </div>
                <div>
                  <PlaylistEmbed link="https://open.spotify.com/embed/playlist/3SjfB5XN3PvnbhVGHzCeJk?utm_source=generator&theme=0" />
                </div>
              </div>
            </div>
        </section>
        <section className="pressEPK">
          <div className="socialstats">
            <h3>HIGHLIGHTS</h3>
            <p>01/30/24- Founders Eli Scornik and Madeline Simpson travel to Tampa to record debut EP "Hindsight" just a few weeks after meeting in a jam group at Georgia Tech</p>
            <p>02/16/24 - With Tyler Morgan on the drums, the newly formed trio plays their debut show to an eager crowd of nearly 100 friends and fans</p>
            <p>04/04/24 - The group sells out their 4th show ever as the headliner at Smith's Olde Bar</p>
            <p>04/05/24 - "Footprint," the first single off of "Hindsight," is released on all platforms</p>
            <p>05/24/24 - The second single "A Letter to Jack" is released on all platforms</p>
            <p>06/13/24 - Them in Uniform amasses 1000+ monthly listeners on Spotify alone</p>
          </div>
          <div className="centerQuote">
            <p>"Atlanta watch out, your next big college band has arrived... Despite the group's young age they have already shown the ability to write about tough topics in a mature way... If their starting point for originals is already this good, I can't wait to see what the band has in store for us over the next couple years." - Listener's Bouquet </p>
          </div>
          <div className="achievements">
            <h3>UPCOMING SHOWS</h3>
            <p>Boggs Social & Supply - Atlanta, GA - 09/28/24</p>
            <p>Boggs Social & Supply - Atlanta, GA - 10/13/24</p>
            <p>David's 105 - Monroe, GA - 10/04/24</p>
            <h5>The group had to turn down offers to play at The Masquerade, The Vinyl, and 529 EAV this summer due to scheduling conflicts, but they plan to play these venues in the fall (dates not solidifed yet) </h5>
          </div>
          <p className="contactus">Contact us: <br></br>contact@theminuniform.com</p>
        </section>
      </div>
    </>
  );
}
  
export default EPK
  