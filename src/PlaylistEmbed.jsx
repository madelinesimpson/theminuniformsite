import React from 'react';
import useWindowDimensions from './WindowDimensions';

export default function PlaylistEmbed(props) {
  const {height, width} = useWindowDimensions();
  if (width > 768) {
    return (
      <iframe
        style={{ borderRadius: '12px' }}
        src={props.link}
        width="350px"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    );
  }
  else {
    return (
      <iframe
        style={{ borderRadius: '12px' }}
        src={props.link}
        width="320px"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    );
  }
}
