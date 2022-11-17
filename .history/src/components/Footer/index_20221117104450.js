import { Box, Container } from "@mui/material";
import React from "react";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";

const Footer = () => {
  return (
    <Box sx={{ height: 100, backgroundColor: "red", mb: 20 }}>
      <Container>
        <Box>
          <MarkAsUnreadIcon />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
