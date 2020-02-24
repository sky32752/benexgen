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
    backgroundColor: theme.palette.background.paper
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
                title: "HungryCare"
              },
              {
                index: 1,
                title: "Edurial"
              },
              {
                index: 2,
                title: "Contributions"
              },
              { index: 3, title: "Web Development" },
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
        <HungryCare />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
        Item Three
      </TabPanel>
    </div>
  );
}
