import React from "react";
import { styled } from "@mui/styles";
import sky from "../../assets/sky.mp4";
const VideoBanner = () => {
  const VideoContainer = styled("div")({
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  });

  const VideoElement = styled("video")({
    objectFit: "cover",
    width: "100%",
    height: "100%",
  });
  return (
    <>
      <VideoContainer>
        <VideoElement autoPlay muted={true} loop>
          <source src={sky} type="video/mp4" />
        </VideoElement>

        <div className="absolute top-[30%]">
          <h1 className="font-bold mx-[10%] max-w-[45%] text-[#fff] text-[60px]">
            {" "}
            We Are on a Mission to Educate the World
          </h1>
        </div>
      </VideoContainer>
    </>
  );
};

export default VideoBanner;
