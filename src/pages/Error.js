import React from "react";
import { Link } from "react-router-dom";

import Banner from "../components/Banner.js";
import Hero from "../components/Hero.js";

export default function Error() {
  return (
    <>
      <Hero>
        <Banner title="404" subtitle="page not found">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
    </>
  );
}
