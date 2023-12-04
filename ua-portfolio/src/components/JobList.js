import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `0px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    Cisco: {
      jobTitle: "Software Engineer @",
      duration: "May 2022 - PRESENT",
      desc: [
        "Developed and optimized network control plane components within Cisco’s IOS-XR router operating system, including the Routing Information Base (RIB) and Label Switching Database (MPLS-LSD), using C.",
        "Developed automation unit tests for code committed to the IOS-XR codebase achieving >80% code coverage.",
        "Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.",
        "Occupied a triage prime role where I led meetings, assigned bugs and brainstormed on solutions for technical issues."
      ]
    },
    Kenna: {
      jobTitle: "Full Stack Developer @",
      duration: "Jan 2021 - Aug 2021",
      desc: [
        "Developed and maintained a live web application used by account managers for data collection and integration using React, Redux, Node.js, and SQL Server Management Studio.",
        "Optimized and created server-side API's, SQL queries, and stored procedures to efficiently retrieve and display large data-sets on to the client-side.",
        "Led a successful team initiative to integrate pagination on front-end data grids, resulting in a significant (>90%) decrease in page render times and reduction in SQL query times.",
        "Iterated and reorganized quickly on users and senior developer feedback through weekly technical demos."
      ]
    },
    "University of Guelph": {
      jobTitle: "IT Consultant @",
      duration: "May 2019 - Dec 2019",
      desc: [
        "Provided technical support and resolved a wide range software, networking, account, and security related issues for university staff, faculty, and students through effective communication and collaboration with clients and IT analysts.",
        "Initiated and developed a comprehensive departmental web page, complete with important links, contacts, and knowledge bases, which was used to assist student IT consultants in troubleshooting issues."
      ]
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
