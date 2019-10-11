import React from "react";
import Banner from "../components/Banner";
import Buttons from "../components/Buttons";
import PhotoAndText from "../components/PhotoAndText";

export default function Home() {
  return (
    <>
      <Banner title="Content Writing" subtitle="">
        <h3 class="text--page-subtitle">
          <span class="emp-txt">100%</span> Unique.
          <span class=" gap--left--small emp-txt">100%</span> Effective.
        </h3>
        <div class="banner--list">
          <span>Blogs</span>
          <div class="text--seperation-bullet"></div>
          <span>Articles</span>
          <div class="text--seperation-bullet"></div>
          <span>SEO Content</span>
          <div class="text--seperation-bullet"></div>
          <span>Rewrites</span>
          <div class="text--seperation-bullet"></div>
          <span>Landing pages</span>
          <div class="text--seperation-bullet"></div>
          <span> Product Descriptions</span>
          <div class="text--seperation-bullet"></div>
          <span>Academic Articles</span>
          <div class="text--seperation-bullet"></div>
          <span>Guides</span>
          <div class="text--seperation-bullet"></div>
          <span>White Papers</span>
        </div>
        <Buttons
          buttonData={[
            {
              text: "See What I can Do",
              location: "portfolio",
              classList: ["button button--primary"]
            },
            {
              text: "Hire Me",
              location: "contact",
              classList: ["button button--secondary"]
            }
          ]}
        ></Buttons>
      </Banner>
      <PhotoAndText
        src={"/images/head-1.jpg"}
        alt={"Mark Williams Head Shot"}
        data={{
          src: "/images/head-1.jpg",
          alt: "Mark Williams Head Shot"
        }}
      >
        <h2>this is the h2</h2>
        <p>here is a p</p>
        <p>here is another p</p>
      </PhotoAndText>
    </>
  );
}
