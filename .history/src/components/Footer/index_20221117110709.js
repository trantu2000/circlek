import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";

const Footer = () => {
  return (
    <Box
      sx={{
        height: 90,
        backgroundColor: "red",
        mb: 20,
        display: { md: "flex" },
      }}
   
    >
      <Container>
        <Grid container>
          <Grid item md={4}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box sx={{ mr: 3 }}>
                <MarkAsUnreadIcon
                  sx={{
                    color: "#fff",
                    fontSize: 40,
                    border: "3px solid white",
                    p: 1,
                    borderRadius: "100vh",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#fff",
                  }}
                >
                  ĐĂNG KÝ NHẬN THÔNG TIN
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: 15,
                    display: { md: "flex" },
                  }}
                >
                  Hãy là người đầu tiên nhận thông tin về ưu đãi, sản phẩm &
                  dịch vụ mới
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4}>
            Hãy là người đầu tiên nhận thông tin về ưu đãi, sản phẩm & dịch vụ
            mới
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
