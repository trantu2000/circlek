import { Box, Container, Typography } from "@mui/material";
import React from "react";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";

const Footer = () => {
  return (
    <Box
      sx={{ height: 100, backgroundColor: "red", mb: 20 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
    >
      <Container>
        <Box>
          <MarkAsUnreadIcon
            sx={{
              color: "#fff",
              fontSize: 50,
              border: "3px solid white",
              p: 1,
              borderRadius: "100vh",
            }}
          />
        </Box>
        <Box>
          <Typography variant="h4">ĐĂNG KÝ NHẬN THÔNG TIN</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
