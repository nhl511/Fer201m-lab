import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { newsData } from "../shared/ListOfNews";
import { hNewsData } from "../shared/ListOfNews";
import { fNewsData } from "../shared/ListOfNews";



function TabPanel(props) {
  const { theme, toggle, dark } = useContext(ThemeContext);

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function News() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%" }}
      style={{ backgroundColor: theme.backgroundColor, color: "white" }}
    >
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        pt={10}
        pl={{ sm: 79 }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            style={{ color: "white" }}
            {...a11yProps(0)}
            icon={<RecentActorsIcon />}
          />
          <Tab
            style={{ color: "white" }}
            {...a11yProps(1)}
            icon={<WhatshotIcon />}
          />
          <Tab
            style={{ color: "white" }}
            {...a11yProps(2)}
            icon={<FavoriteIcon />}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} align="center">
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" style={{fontWeight:"bolder"}} pb={5} pt={4}>
              RECENT NEWS
            </Typography>
          </Grid>
        </Grid>
      <Stack width={700} spacing={2}>
        {newsData.map((news) => (
        <Item>
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={news.img}
                alt="Live from space album cover"
              />
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography style={{fontWeight:"bolder"}} component="div" variant="h7" align="left">
                  {news.title}
                </Typography>
                <Typography
                  variant="subtitle1 h7"
                  color="text.secondary"
                  component="div"
                  align="left"
                >
                  {news.date}
                </Typography>

                <Typography  align="left" width={500} pt={2}>
                  {news.content}
                </Typography>

              </CardContent>
            </Box>
          </Card>
        </Item>
              ))}
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={1} align="center">
      <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" style={{fontWeight:"bolder"}} pb={5} pt={4}>
              HOT NEWS
            </Typography>
          </Grid>
        </Grid>
        <Stack width={700} spacing={2}>
        {hNewsData.map((hnews) => (
        <Item>
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={hnews.img}
                alt="Live from space album cover"
              />
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography style={{fontWeight:"bolder"}} component="div" variant="h7" align="left">
                  {hnews.title}
                </Typography>
                <Typography
                  variant="subtitle1 h7"
                  color="text.secondary"
                  component="div"
                  align="left"
                >
                  {hnews.date}
                </Typography>

                <Typography  align="left" width={500} pt={2}>
                  {hnews.content}
                </Typography>

              </CardContent>
            </Box>
          </Card>
        </Item>
              ))}
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={2} align="center">
      <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" style={{fontWeight:"bolder"}} pb={5} pt={4}>
              FAVORITE NEWS
            </Typography>
          </Grid>
        </Grid>
        <Stack width={700} spacing={2}>
        {fNewsData.map((fnews) => (
        <Item>
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={fnews.img}
                alt="Live from space album cover"
              />
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography style={{fontWeight:"bolder"}} component="div" variant="h7" align="left">
                  {fnews.title}
                </Typography>
                <Typography
                  variant="subtitle1 h7"
                  color="text.secondary"
                  component="div"
                  align="left"
                >
                  {fnews.date}
                </Typography>

                <Typography  align="left" width={500} pt={2}>
                  {fnews.content}
                </Typography>

              </CardContent>
            </Box>
          </Card>
        </Item>
              ))}
        </Stack>
      </TabPanel>
    </Box>
  );
}
