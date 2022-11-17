import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import ProductItem from "../ProductItem";
import { Drinks } from "../../Data";
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



export default function TabDrinks() {
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
            <Tab label="Tất cả thức uống" {...a11yProps(0)} />
            <Tab label="Cà Phê Việt Nam" {...a11yProps(1)} />
            <Tab label="Sản Phẩm Nestlé" {...a11yProps(2)} />
            <Tab label="Trà Sữa" {...a11yProps(3)} />
            <Tab label="Thức Uống Pha Chế" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container>
            {Drinks.map((item) => (
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
        <TabPanel value={value} index={3}>
          Item Three
        </TabPanel>
      </Box>
    </Container>
  );
}
