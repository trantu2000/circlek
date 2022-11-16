import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import React from "react";

const ImageProductItem = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  height: "20rem",
  // background: Colors.light_gray,
}));

const ProductItem = ({image}) => {
  return (
    <Grid md={3}>
      <Box>
        <ImageProductItem src={image}/>
      </Box>
    </Grid>
  );
};

export default ProductItem;
