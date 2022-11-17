import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import ProductItem from "../ProductItem";
import { Foods } from "../../Data";
import { TabPanel } from "../TabPanel";

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabFoods() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box
        sx={{
          maxWidth: { xs: 400, sm: 480, md: "100%" },
          bgcolor: "background.paper",
        }}
      >
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          display="flex"
          justifyContent="center"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            <Tab label="Tất cả thức ăn" {...a11yProps(0)} />
            <Tab label="Thức ăn đóng hộp" {...a11yProps(1)} />
            <Tab label="Mì" {...a11yProps(2)} />
            <Tab label="Bánh Mì" {...a11yProps(3)} />
            <Tab label="Xúc Xích Nướng" {...a11yProps(4)} />
            <Tab label="Bánh Bao/Bánh Giò" {...a11yProps(5)} />
            <Tab label="Cơm Nắm" {...a11yProps(6)} />
            <Tab label="Tráng Miệng" {...a11yProps(7)} />
            <Tab label="Bánh Tươi" {...a11yProps(8)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container>
            {Foods.map((item) => (
              <ProductItem key={item.id} name={item.name} image={item.image} />
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={7}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={8}>
          Item Three
        </TabPanel>
      </Box>
    </Container>
  );
}
