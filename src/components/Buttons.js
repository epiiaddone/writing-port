import React from "react";

export default function Buttons({ buttonData }) {
  buttonData = buttonData.map(item => {
    return (
      <div class={item["classList"]}>
        <a href={"/" + item["location"]} role="button">
          {item["text"]}
        </a>
      </div>
    );
  });
  return <div class="button--container">{buttonData}</div>;
}
