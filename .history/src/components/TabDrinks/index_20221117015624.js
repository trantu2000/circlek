import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

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

const Drinks =[

    {
        id:1,
        name:"Trà đào",
        image:"https://res.cloudinary.com/da5zt66t6/image/upload/v1668624602/ciclek/Tra-dao_hzuf7m.png"
    },
    {
        id:2,
        name:"Milo",
        image:"https://res.cloudinary.com/da5zt66t6/image/upload/v1668624602/ciclek/Milo-1_lyjh5t.png"
    },
    {
        id:3,
        name:"Trà chanh",
        image:"https://res.cloudinary.com/da5zt66t6/image/upload/v1668624602/ciclek/Tra-chanh_ukmcve.png"
    },
    {
        id:4,
        name:"Milk-coffee",
        image:"https://res.cloudinary.com/da5zt66t6/image/upload/v1668624602/ciclek/Milk-coffee_vqispr.png"
    },
    {
        id:5,
        name:"Milk-caphe",
        image:"https://res.cloudinary.com/da5zt66t6/image/upload/v1668624602/ciclek/Milk-caphe_g1jjdz.png"
    },
    {
        id:6,
        name:"",
        image:""
    },
    {
        id:7,
        name:"",
        image:""
    },
    {
        id:8,
        name:"",
        image:""
    },
    {
        id:9,
        name:"",
        image:""
    },
    {
        id:10,
        name:"",
        image:""
    },
    {
        id:11,
        name:"",
        image:""
    },
]

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
          Item One
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
