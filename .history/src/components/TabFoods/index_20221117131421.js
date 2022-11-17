import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
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

const Foods = [
  {
    id: 1,
    name: "Bánh mì ốp la",
    category: "bánh mì",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668660699/ciclek/6.-BANH-MI-OPLA_iqftpp.png",
  },
  {
    id: 2,
    name: "Kinh Đô Bánh Mì Chà Bông",
    category: "bánh tươi",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668660699/ciclek/2.-KINH-DO-BM-Ch%C3%A0-B%C3%B4ng-80g_l9denr.png",
  },
  {
    id: 3,
    name: "Dimsum",
    category: "bánh bao/bánh giò",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668660699/ciclek/3.-DIMSUM_wqzljr.png",
  },
  {
    id: 4,
    name: "Đùi Gà Nướng Vị Cay",
    category: "Thức ăn đóng hộp",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668660699/ciclek/12.-%C4%90%C3%B9i-G%C3%A0-N%C6%B0%E1%BB%9Bng-V%E1%BB%8B-Cay-1_idsral.png",
  },
  {
    id: 5,
    name: "Xúc Xích (Cay/ Phô Mai/ Heo/ Xông Khói)",
    category: "xúc xích nướng",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668660699/ciclek/7.-XUC-XICH_evygwn.png",
  },
  {
    id: 6,
    name: "Kinh Đô Bánh Mì Sữa",
    category: "bánh tươi",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668660699/ciclek/1.-KINH-DO-B%C3%A1nh-M%C3%AC-S%E1%BB%AFa-100g_zhy08z.png",
  },
  {
    id: 7,
    name: "Mì Trộn",
    category: "mì",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668660699/ciclek/1.-MI-TRON-1_jxttzz.png",
  },
  {
    id: 8,
    name: "Cơm Nắm Cá Hồi Mayone",
    category: "cơm nắm",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668660698/ciclek/Salmon-Mayo-Onigiri-251546_x3f6r7.png",
  },
  {
    id: 9,
    name: "Mì Trộn Trứng Chiên",
    category: "mì",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668660698/ciclek/MI-TRON-TRUNG_fji48v.png",
  },
  {
    id: 10,
    name: "Xôi Lá Chuối",
    category: "bánh bao/bánh giò",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668660698/ciclek/XOI-GA_icon_tdoc2r.png",
  },
  {
    id: 11,
    name: "Mì Trộn Xúc Xích Trứng Chiên",
    category: "mì",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668660698/ciclek/Mixed-Noodles-With-Egg-and-Big-Sausage-254065_nmman1.png",
  },
  {
    id: 11,
    name: "Dừa ",
    category: "tráng miệng",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668660698/ciclek/15.-DUA_cupyyn.png",
  },
  {
    id: 11,
    name: "Bánh Bao Khoai Môn",
    category: "bánh bao/bánh giò",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668660698/ciclek/303x303_Steam-bun-Taro_qhtmo1.png",
  },
  {
    id: 11,
    name: "Trà sữa thái đỏ",
    category: "trà sữa",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668624601/ciclek/TS-Thai-do_a7uziu.png",
  },
  {
    id: 11,
    name: "Trà sữa thái đỏ",
    category: "trà sữa",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668624601/ciclek/TS-Thai-do_a7uziu.png",
  },
  {
    id: 11,
    name: "Trà sữa thái đỏ",
    category: "trà sữa",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668624601/ciclek/TS-Thai-do_a7uziu.png",
  },
  {
    id: 11,
    name: "Trà sữa thái đỏ",
    category: "trà sữa",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668624601/ciclek/TS-Thai-do_a7uziu.png",
  },
  {
    id: 11,
    name: "Trà sữa thái đỏ",
    category: "trà sữa",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668624601/ciclek/TS-Thai-do_a7uziu.png",
  },
  {
    id: 11,
    name: "Trà sữa thái đỏ",
    category: "trà sữa",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668624601/ciclek/TS-Thai-do_a7uziu.png",
  },
  {
    id: 11,
    name: "Trà sữa thái đỏ",
    category: "trà sữa",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668624601/ciclek/TS-Thai-do_a7uziu.png",
  },
  {
    id: 11,
    name: "Trà sữa thái đỏ",
    category: "trà sữa",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668624601/ciclek/TS-Thai-do_a7uziu.png",
  },
  {
    id: 11,
    name: "Trà sữa thái đỏ",
    category: "trà sữa",
    image:
      "https://res.cloudinary.com/da5zt66t6/image/upload/v1668624601/ciclek/TS-Thai-do_a7uziu.png",
  },
];

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
