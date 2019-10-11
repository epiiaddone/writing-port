import React from "react";

export default function Banner({ children, title, subtitle }) {
  return (
    <div className="mod-banner primary-bg">
      <h1 class="text--page-title">{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
