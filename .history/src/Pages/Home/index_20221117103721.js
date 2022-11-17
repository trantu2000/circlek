import { Box } from "@mui/material";
import React from "react";
import MetaData from "../../components/MetaData";
import SlideSwiper from "../../components/SlideSwiper";

const Home = () => {
  return (
    <>
      <MetaData title="Trang chủ " />
      <Box sx={{ mt: 2 }}>
        <SlideSwiper />
      </Box>
    </>
  );
};

export default Home;
