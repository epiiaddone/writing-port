import React from "react";

export default function ArticleBox({ children, data }) {
  return (
    <div class="articleBox">
      <img class="articleBox--image" src={data["src"]} alt={data["alt"]}></img>
      <div class="articleBox--title">
        <a href={"/" + data["location"]} role="button">
          {data["title"]}
        </a>
      </div>
    </div>
  );
}
