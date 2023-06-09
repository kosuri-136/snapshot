import React from "react";
import "../styles/Image.css";

const Image = ({ url, title }) => {
  return (
    <div className="image-container">
      <img className="image-main" src={url} alt={title} />
    </div>
  );
};

export default Image;
