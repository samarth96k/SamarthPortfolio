// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import Typography from '@mui/material/Typography';
// import { Box } from "@mui/material";

// import "./Experience.css";

// function TimelineTemplate({
//   time,
//   title,
//   description,
//   showTime = true,
//   duration
// }) {
//   return (
//     <TimelineItem className="timeline-item">

//       {showTime && (
//         <TimelineOppositeContent
//           className="timeline-time"
//           variant="body2"
//         >
//         </TimelineOppositeContent>
//       )}
//       <TimelineSeparator>
//         <TimelineConnector className="timeline-connector" />

//         <TimelineDot
//           variant="outlined"
//           className="timeline-dot"
//         />

//         <TimelineConnector className="timeline-connector" />
//       </TimelineSeparator>

//       <TimelineContent className="timeline-content">
//         <Box className="glass-card">
//           <Typography variant="h6" className="timeline-title">
//             <h3 className='inknut-antiqua-bold'>{title}</h3>
//           </Typography>
//           <Typography className="timeline-title">
//             <h4 className='inknut-antiqua-medium'>{duration}</h4>
//           </Typography>
//           <Typography className="timeline-description">
//             <h4 className='inknut-antiqua-regular'>{description}</h4>
//           </Typography>
//         </Box>
//       </TimelineContent>

//     </TimelineItem>
//   );
// }

// export default function CustomizedTimeline() {
//   return (
//     <Timeline position="alternate" className="timeline-root">
//       <TimelineTemplate
//         duration="Jan 2025 - Dec 2026"
//         title="Eat"
//         description="Sample description text...Sample description text...Sample description text..."
//       />

//       <TimelineTemplate
//         title="Code"
//         description="Because it's awesome!"
//       />

//       <TimelineTemplate
//         title="Sleep"
//         description="Because you need rest"
//       />

//       <TimelineTemplate
//         title="Repeat"
//         description="Because this is the life you love!"
//       />
//     </Timeline>
//   );
// }

import React, { useEffect, useRef } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import "./Experience.css";

function TimelineTemplate({ title, description, duration, showTime = true, refProp }) {
  return (
    <TimelineItem className="timeline-item" ref={refProp}>
      {showTime && (
        <TimelineOppositeContent className="timeline-time" variant="body2">
          {/* Optional: show time */}
        </TimelineOppositeContent>
      )}

      <TimelineSeparator>
        <TimelineConnector className="timeline-connector" />
        <TimelineDot variant="outlined" className="timeline-dot" />
        <TimelineConnector className="timeline-connector" />
      </TimelineSeparator>

      <TimelineContent className="timeline-content">
        <Box className="glass-card">
          <Typography variant="h6" className="timeline-title">
            <h3 className="inknut-antiqua-bold">{title}</h3>
          </Typography>
          {duration && (
            <Typography className="timeline-title">
              <h4 className="inknut-antiqua-medium">{duration}</h4>
            </Typography>
          )}
          <Typography className="timeline-description">
            <h4 className="inknut-antiqua-regular">{description}</h4>
          </Typography>
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function CustomizedTimeline() {
  const itemsRef = useRef([]);

  const timelineData = [
    {
      title: "Eat",
      description: "Sample description text...Sample description text...Sample description text...",
      duration: "Jan 2025 - Dec 2026",
    },
    { title: "Code", description: "Because it's awesome!" },
    { title: "Sleep", description: "Because you need rest" },
    { title: "Repeat", description: "Because this is the life you love!" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Timeline position="alternate" className="timeline-root">
      {timelineData.map((item, index) => (
        <TimelineTemplate
          key={index}
          refProp={(el) => (itemsRef.current[index] = el)}
          title={item.title}
          description={item.description}
          duration={item.duration}
        />
      ))}
    </Timeline>
  );
}
