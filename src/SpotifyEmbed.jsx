import React from 'react';

export default function SpotifyEmbed(props) {
  return (
    <iframe
      style={{ borderRadius: '12px' }}
      src={props.link}
      width="100%"
      height="154"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}
