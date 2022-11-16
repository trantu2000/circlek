import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import ProductItem from "../ProductItem";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

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

const Drinks = [
  {
    id: 1,
    name: "Trà đào",
    category: "thức uống pha chế",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668624602/ciclek/Tra-dao_hzuf7m.png",
  },
  {
    id: 2,
    name: "Milo",
    category: "sản phẩm netslé",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668624602/ciclek/Milo-1_lyjh5t.png",
  },
  {
    id: 3,
    name: "Trà chanh",
    category: "sản phẩm netslé",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668624602/ciclek/Tra-chanh_ukmcve.png",
  },
  {
    id: 4,
    name: "Milk coffee",
    category: "cà phê việt nam",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668624602/ciclek/Milk-coffee_vqispr.png",
  },
  {
    id: 5,
    name: "Milk caphe",
    category: "cà phê việt nam",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668624602/ciclek/Milk-caphe_g1jjdz.png",
  },
  {
    id: 6,
    name: "Espresso/ Americano/ Latte/ Cappuccino",
    category: "thức uống pha chế",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668624602/ciclek/Cafe-s%E1%BB%AFa-n%C3%B3ng_qptaye.png",
  },
  {
    id: 7,
    name: "TS thái xanh",
    category: "trà sữa",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668624601/ciclek/TS-Thai-xanh_dbayoh.png",
  },
  {
    id: 8,
    name: "Cà phê đen nóng",
    category: "cà phê việt nam",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668624601/ciclek/CF-Den-nong_new-logo_303x303_vtaxsi.png",
  },
  {
    id: 9,
    name: "Cà phê sữa nóng",
    category: "cà phê việt nam",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668624601/ciclek/CF-sua-nong_new-logo_303x303_lzt93h.png",
  },
  {
    id: 10,
    name: "Black coffee",
    category: "cà phê việt nam",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668624601/ciclek/Black-coffee_agybsb.png",
  },
  {
    id: 11,
    name: "Trà sữa thái đỏ",
    category: "trà sữa",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668624601/ciclek/TS-Thai-do_a7uziu.png",
  },
];

export default function TabDrinks() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="Tất cả thức uống" {...a11yProps(0)} />
            <Tab label="Cà Phê Việt Nam" {...a11yProps(1)} />
            <Tab label="Sản Phẩm Nestlé" {...a11yProps(2)} />
            <Tab label="Trà Sữa" {...a11yProps(3)} />
            <Tab label="Thức Uống Pha Chế" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {Drinks.map((item) => (
            <ProductItem key={item.id} name={item.name} image={item.image} />
          ))}
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
