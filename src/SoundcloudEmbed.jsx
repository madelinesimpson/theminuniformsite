import React from 'react';

export default function SoundcloudEmbed(props) {
  return (
      <>
        <iframe width="100%" 
        height="100" 
        scrolling="no" 
        frameBorder="no" 
        allow="autoplay" 
        style={{borderRadius: "10px", marginBottom: "10px"}}
        src={props.apilink}>     
        </iframe>
    </>
  );
}
