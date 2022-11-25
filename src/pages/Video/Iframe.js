import React from "react";

export default function Iframe({ videoSrc }) {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoSrc}?&autoplay=1`}
      title="Trailer"
      frameBorder={"0"}
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
