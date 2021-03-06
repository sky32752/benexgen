import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Container,
  Box,
  Typography,
  Tab,
  Tabs,
  AppBar
} from "@material-ui/core";

import HungryCare from "./hungryCare";
import WebDevelopment from "./websiteDevelopment";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#f1f2f6",
    backgroundImage: `url(${require("../img/work.png")})`,
    backgroundRepeat: "no-repeat",
    padding: 50,
    marginBottom: 50
  }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id='features' className={classes.root}>
      <AppBar
        position='static'
        color='default'
        style={{ backgroundColor: "#ecf0f1" }}>
        <Container
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            variant='scrollable'
            scrollButtons='auto'>
            {[
              {
                index: 0,
                title: "Web Development"
              },
              {
                index: 1,
                title: "Edurial"
              },
              {
                index: 2,
                title: "Contributions"
              },
              { index: 3, title: "Hungrycare" },
              {
                index: 4,
                title: "Designs"
              }
            ].map(element => {
              return (
                <Tab label={element.title} {...a11yProps(element.index)} />
              );
            })}
          </Tabs>
        </Container>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <WebDevelopment />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}></TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <HungryCare />
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
        Item Three
      </TabPanel>
    </div>
  );
}
