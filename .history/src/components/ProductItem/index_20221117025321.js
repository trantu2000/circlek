import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const ImageProductItem = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  height: "100%",
  // background: Colors.light_gray,
}));

const ProductItem = ({ image, name }) => {
  return (
    <Grid md={3} sx={{p:5}}>
      <Box
        textAlign="center"
        sx={{
          width: 200,
          height: 200,
          p: 5,
          backgroundColor:"#8a8a5c",
          "&:hover": {
            mb:3
          },
        }}
      >
        <ImageProductItem src={image} />
        <Typography
          variant="subtitle1"
          sx={{ color: "#ff9900", fontWeight: 700 }}
        >
          {name}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ProductItem;
