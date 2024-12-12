import React from "react";

function SharedTopSection({ title, desc }) {
  return (
    <div className="section-parent">
      <h4 className="section-title">{title}</h4>
      <p className="section-description">{desc}</p>
    </div>
  );
}

export default SharedTopSection;
