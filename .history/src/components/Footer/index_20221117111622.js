import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";

const Footer = () => {
  return (
    <Box
      sx={{
        height: 90,
        backgroundColor: "red",
        mb: 20,
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container>
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
          <Box>
            <Typography
              sx={{
                color: "#fff",
                fontSize: 15,
              }}
            >
              Hãy là người đầu tiên nhận thông tin về ưu đãi, sản phẩm & dịch vụ
              mới
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Box>
            <Box>
              <Button>Gửi</Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
