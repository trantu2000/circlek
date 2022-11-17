import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import MetaData from "../../components/MetaData";
import TabFoods from "../../components/TabFoods";

const ImageSlideDrinkPage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  height: "100%",

  // background: Colors.light_gray,
}));

// Tất cả thức ăn
// Thức ăn đóng hộp
// Mì
// Bánh Mì
// Xúc Xích Nướng
// Bánh Bao/ Bánh Giò
// Cơm Nắm
// Tráng Miệng
// Bánh Tươi

const Foods = () => {
  return (
    <>
      <MetaData title="Thức ăn" />
      <Box sx={{ width: "100%", height: "100%", mt: 1 }}>
        <ImageSlideDrinkPage src="https://res.cloudinary.com/da5zt66t6/image/upload/v1668659933/ciclek/1920wx350h-3_cgbnmo.jpg" />
        <Box
          sx={{
            position: "absolute",
            top: 140,
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
          <TabFoods />
        </Box>
      </Box>
    </>
  );
};

export default Foods;
