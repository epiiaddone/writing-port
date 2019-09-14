import React from "react";

export default function Banner({ children, title, subtitle }) {
  return (
    <div className="mod-banner">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
