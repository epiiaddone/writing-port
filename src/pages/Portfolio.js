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
      </div>
    </>
  );
}
