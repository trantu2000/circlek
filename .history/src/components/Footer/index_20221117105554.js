import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";

const Footer = () => {
  return (
    <Box sx={{ height: 100, backgroundColor: "red", mb: 20 }}>
      <Container>
        <Grid container>
          <Grid item md={4}>
            <Box display="flex" justifyContent="center" alignItems="center">
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
            </Box>
          </Grid>
          <Grid item md={4}></Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
