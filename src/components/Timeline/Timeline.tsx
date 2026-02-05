import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";

const MyTimeline = () => {
  return (
    <ThemeProvider theme={theme}>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent>April 2018</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>First HTML & CSS</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            Attended coding workshop
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>June 2018</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>October 2018</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Started JavaScript bootcamp</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            Graduated with Employer’s Choice Award
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>December 2018</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>February 2019</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            First Software Development Job at a Startup
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            Second Software Development Job at a Consultancy
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>August 2021</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>December 2021</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Started Mentoring a Friend in Software
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            Launched my tech blog, The Precise Dev
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>March 2022</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>August 2022</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Promoted to Developer II</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            Mentee Graduates Bootcamp
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>December 2022</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>February 2023</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Business slows leading to layoff</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            Connected Mentee to their first job
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>March 2023</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>May 2023</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Consults on Agile methodology, design system, & advocates for
            accessibility & validation with a startup. Works on a web admin
            portal.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            Joins Think Company as a UX Engineer Contractor.
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>October 2023</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>February 2024</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Offered Full-Time Position</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            Promoted to Senior UX Engineer
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>February 2026</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>Future</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>This is where you come in!</TimelineContent>
        </TimelineItem>
      </Timeline>
    </ThemeProvider>
  );
};

export default MyTimeline;
