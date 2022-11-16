import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const ImageProductItem = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  height: "100%",
  // background: Colors.light_gray,
}));

const ProductItem = ({image,name}) => {
  return (
    <Grid md={3}>
      <Box textAlign="center" sx={{
        width:200,
        height:200,
        p:5
      }}>
        <ImageProductItem src={image}/>
        <Typography variant="subtitle1">{name}</Typography>
      </Box>
     
    </Grid>
  );
};

export default ProductItem;
