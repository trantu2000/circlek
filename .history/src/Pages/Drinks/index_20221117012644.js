import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";

const ImageSlideDrinkPage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  height: "20rem",
  // background: Colors.light_gray,
}));

const Drinks = () => {
  return (
    <Box sx={{ width: "100%", height: "20rem" }}>
      <ImageSlideDrinkPage src="https://res.cloudinary.com/da5zt66t6/image/upload/v1668622925/ciclek/drink_slide_pqdrfx.png" />
    </Box>
  );
};

export default Drinks;
