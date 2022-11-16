import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
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
      <Box sx={{
        position:'absolute',
        top:118,
        left:"23rem"
      }}>
        <Typography variant="h4" style={{ fontWeight: 900,  }}>
          THỨC UỐNG
        </Typography>
        <Box sx={{width:"20rem"}}>
          <Typography
            variant="subtitle1"
            style={{ fontWeight: 900, }}
          >
            Circle K luôn "thỏa cơn khát" của bạn 24/7 với đa dạng các loại thức
            uống từ nóng đến lạnh. Đặc biệt, bạn có thể cùng bạn bè thỏa sức
            sáng tạo thức uống của mình bằng cách tự pha trộn và kết hợp các
            hương vị có sẵn. Circle K luôn có thức uống mới để bạn thưởng thức
            và trải nghiệm.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Drinks;
