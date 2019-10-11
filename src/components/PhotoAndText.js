import React from "react";

export default function PhotoAndText({ children, data }) {
  return (
    <div class="section--middle">
      <img
        class="section--inner__left"
        src={data["src"]}
        alt={data["alt"]}
      ></img>
      {children}
    </div>
  );
}
