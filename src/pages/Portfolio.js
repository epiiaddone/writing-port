import React from "react";
import ArticleBox from "../components/ArticleBox";

export default function Portfolio() {
  return (
    <>
      <div class="articleBox--container">
        <ArticleBox
          data={{
            title: "What is Bitcoin?",
            location: "WhatIsBitcoin"
          }}
        ></ArticleBox>
        <ArticleBox
          data={{
            title: "Five Hobbies That Make Money?",
            location: "FiveHobbiesThatMakeMoney"
          }}
        ></ArticleBox>
      </div>
    </>
  );
}
