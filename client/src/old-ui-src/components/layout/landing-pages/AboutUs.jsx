import React from "react";
import StyledTab from "../../utils/StyledTabButton";

import {
  Box,
  Grid,
  Tabs,
  Typography,
  useMediaQuery,
  makeStyles,
} from "@material-ui/core";
import Divider from "../../utils/Divider";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          color="secondary.main"
          fontSize={"1.2rem"}
          padding={4}
          lineHeight={1.5}
        >
          {children}
        </Box>
      )}
    </Typography>
  );
};

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
};

const AboutUs = (props) => {
  const isMobile = useMediaQuery("(max-width:600px)"); // should be refactored

  const useStyles = makeStyles((theme) => ({
    root: { flexGrow: 1 },
    container: {
      minHeight: "60vh",
      maxWidth: isMobile ? "90vw" : "70vw",
      margin: "2rem auto",
    }, // Elevation
    borderedCard: {
      borderRadius: "25px",
      padding: 20,
      minWidth: "300px",
      width: "60vw",
      maxWidth: "95vw",
      minHeight: "65vh",
      boxShadow: "0px 12px 20px 0px rgba(0,0,0,0.2)",
    },
  }));

  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.container}>
      <Grid container justify="center" direction="row">
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          md={3}
          xs={12}
        >
          <Grid item style={{ marginRight: 20 }}>
            <Box
              fontSize="h3.fontSize"
              fontWeight="bold"
              color="primary.main"
              textAlign="center"
            >
              ABOUT US
            </Box>
          </Grid>
          <Grid item style={{ maxWidth: "90vw" }}>
            <Divider invert={true} />

            <Tabs
              value={value}
              orientation={isMobile ? "horizontal" : "vertical"}
              variant="scrollable"
              onChange={handleChange}
              aria-label="wrapped label tabs about us"
            >
              {/**TODO: Can be refactored with loop */}
              <StyledTab value={0} label="Company" {...a11yProps("one")} />
              <StyledTab value={1} label="Road-map" {...a11yProps("two")} />
              <StyledTab value={2} label="Developers" {...a11yProps("three")} />
              <StyledTab
                value={3}
                label="Marketing &amp; Sales"
                {...a11yProps("four")}
              />
            </Tabs>
          </Grid>
        </Grid>

        {/**TODO: Can be refactored with loop */}
        <Grid item className={classes.borderedCard} md={9} xs={12}>
          <TabPanel value={value} index={0}>
            Company Description
          </TabPanel>
          <TabPanel value={value} index={1}>
            Road Map
          </TabPanel>
          <TabPanel value={value} index={2}>
            This is a semi open-source project. We are looking for developers!
          </TabPanel>
          <TabPanel value={value} index={3}>
            Join Marketing and Sales teams!
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUs;
