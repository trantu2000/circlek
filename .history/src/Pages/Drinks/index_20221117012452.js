import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";

const ImageSlideDrinkPage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "6rem",
  height: "2.5rem",
  // background: Colors.light_gray,
}));

const Drinks = () => {
  return (
    <Box>
      <ImageSlideDrinkPage />
    </Box>
  );
};

export default Drinks;
