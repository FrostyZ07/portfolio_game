import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import FadeInSection from "./FadeInSection";

function TabPanel(props) {
  const { children, value, index, isMobile, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={isMobile ? `full-width-tabpanel-${index}` : `vertical-tabpanel-${index}`}
      aria-labelledby={isMobile ? `full-width-tab-${index}` : `vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  isMobile: PropTypes.bool
};

function a11yProps(index, isMobile) {
  if (isMobile) {
    return {
      id: "full-width-tab-" + index,
      "aria-controls": "full-width-tabpanel-" + index,
    };
  } else {
    return {
      id: "vertical-tab-" + index,
      "aria-controls": "vertical-tabpanel-" + index,
    };
  }
}

const JobList = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const experienceItems = {
    "IEEE — BMSITM CIS Chapter": {
      jobTitle: "Treasurer @",
      duration: "AUG 2024 - JAN 2026",
      desc: [
        "Lead an IEEE student chapter across technical events, workshops, and guest lectures.",
        "Organised hands-on ML and embedded systems workshops for students.",
        "Represented the chapter at inter-collegiate IEEE events.",
      ],
    },
    "RNSIT Hackathon 2025": {
      jobTitle: "1st at a National Level Hackathon",
      duration: "OCT 2025",
      desc: [
        "Built a multilingual RAG pipeline that actually speaks to farmers — supporting 3 languages, 300+ knowledge chunks, and a 90% JSON parse success rate.",
        "Wired up LangChain and FastAPI to deliver crop disease detection and fertiliser recommendations conversationally, in under 2 seconds.",
        "Took it from zero to a working React frontend in 24 hours — data chunking, embeddings, backend, and UI, all in one shot.",
        "Walked away with 1st place at RNSIT Hackathon 2025, which honestly made the all-nighter worth it.",
      ],
    },
    "KSEEM Hackathon 2025": {
      jobTitle: "3rd place at a National Level Hackathon",
      duration: "DEC 2025",
      desc: [
        "Tackled one of the messiest data formats in oceanographic research — 5 GB of raw NETCDF files — and made it actually queryable through a conversational RAG interface.",
        "Pushed query accuracy from 70% → 90% using hybrid retrieval (BM25 + dense embeddings) over ~20K semantic chunks.",
        "Impressed the KSEEM judges enough with the solution that they personally sponsored our 3rd place prize.",
      ],
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      flexGrow: 1,
      bgcolor: "transparent",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      height: "auto",
      minHeight: 300
    }}>
      <Tabs
        orientation={!isMobile ? "vertical" : "horizontal"}
        variant="scrollable"
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        sx={{
          borderRight: isMobile ? 0 : 1,
          borderBottom: isMobile ? 1 : 0,
          borderColor: "var(--lightest-navy)",
          "& .MuiTabs-indicator": {
            backgroundColor: "var(--green-bright)"
          },
          "& .MuiTabs-flexContainer": {
            borderBottom: isMobile ? "1px solid var(--lightest-navy)" : "none"
          }
        }}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab
            key={i}
            label={key}
            {...a11yProps(i, isMobile)}
            sx={{
              color: "var(--slate)",
              fontFamily: "NTR",
              fontSize: "14px",
              textAlign: isMobile ? "center" : "left",
              alignItems: isMobile ? "center" : "flex-start",
              textTransform: "none",
              padding: "10px 20px",
              minHeight: "48px",
              minWidth: isMobile ? "120px" : "auto",
              "&.Mui-selected": {
                color: "var(--green-bright)"
              },
              "&:hover": {
                color: "var(--green-bright)",
                backgroundColor: "var(--green-tint)"
              }
            }}
          />
        ))}
      </Tabs>
      <Box sx={{ flexGrow: 1 }}>
        {Object.keys(experienceItems).map((key, i) => (
          <TabPanel key={i} value={value} index={i} isMobile={isMobile}>
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
                  <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                    <li>{descItem}</li>
                  </FadeInSection>
                );
              })}
            </ul>
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
};

export default JobList;
