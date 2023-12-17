import React from "react";
import { styled } from "@mui/styles";
import sky from "../../assets/sky.mp4";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
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
          <h1 className="font-bold mx-[10%] max-w-[45%] text-[#fff] text-[50px]">
            We Are on a Mission to Educate the World
          </h1>
          <Button
            className="mx-[10%] border-sky-600 text-sky-600 max-w-[45%] py-3 px-7"
            variant="outlined">
            I am a student exploring studying abroad
          </Button>
          <Stack className="mx-[10%] my-4" spacing={2} direction="row">
            <Button variant="outlined">I am a recruitment partner</Button>
            <Button variant="outlined">I am a recruitment partner</Button>
          </Stack>
        </div>
      </VideoContainer>
    </>
  );
};

export default VideoBanner;
