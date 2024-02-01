import React from "react";
import HomeDesc from "./HomeDesc";
import ProfileImage from "./ProfileImage";
import App from "./HomeBack";

function Home() {
  return (
    <>
      <App />
      <div
        className="bg-transparent px-4 md:px-8 flex flex-col-reverse md:flex-row"
        style={{ minHeight: "calc(100vh - 65px)" }}
      >
        <HomeDesc className="md:flex-1" />
        <ProfileImage className="md:flex-1 md:mt-1 justify-self-end" />
      </div>
    </>
  );
}

export default Home;
