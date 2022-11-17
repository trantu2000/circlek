import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import MetaData from "../../components/MetaData";
import TabDrinks from "../../components/TabDrinks";

const ImageSlideDrinkPage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  height: "100%",

  // background: Colors.light_gray,
}));

const Foods = () => {
  return (
    <>
      <MetaData title="Thức ăn" />
      <Box sx={{ width: "100%", height: "100%", mt: 1 }}>
        <ImageSlideDrinkPage src="https://res.cloudinary.com/da5zt66t6/image/upload/v1668622925/ciclek/drink_slide_pqdrfx.png" />
        <Box
          sx={{
            position: "absolute",
            top: 130,
            left: "22.5rem",
          }}
        >
          <Typography variant="h5" style={{ fontWeight: 900, color: "#fff" }}>
            Đồ ăn
          </Typography>
          <Box sx={{ width: "20rem" }}>
            <Typography
              variant="subtitle1"
              style={{ color: "#fff", fontSize: 14 }}
            >
              Với cam kết "Tươi và Ngon" cùng các lựa chọn phong phú từ món ăn
              quốc tế quen thuộc đến món ăn địa phương và thức ăn đường phố phổ
              biến, Circle K luôn mang đến cho bạn sự hài lòng như mong muốn.
            </Typography>
          </Box>
        </Box>
        <Box>
          <TabDrinks />
        </Box>
      </Box>
    </>
  );
};

export default Foods;
