import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

function TimelineTemplate({
  time,
  title,
  description,
  Icon,
  dotColor = "primary",
  outlined = false,
  showTime = true
}) {
  return (
    <TimelineItem>
      {showTime && (
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          {time}
        </TimelineOppositeContent>
      )}

      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot
          color={dotColor}
          variant={outlined ? "outlined" : "filled"}
        >
          <Icon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>

      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography variant="h6" component="span">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
}


export default function CustomizedTimeline() {
  return (
      <Timeline position="alternate">
        <TimelineTemplate
          time="9:30 am"
          title="Eat"
          description="Because you need strengjgfkashfaskdh,f asdkg asdkghsdah,as lh gbaksd oguasaf sad gsadlsd lsagdsdagflsdfb skth"
          Icon={FastfoodIcon}
        />

        <TimelineTemplate
          time="10:00 am"
          title="Code"
          description="Because it's awesome!"
          Icon={LaptopMacIcon}
        />

        <TimelineTemplate
          title="Sleep"
          description="Because you need rest"
          Icon={HotelIcon}
          outlined
          showTime={false}
        />

        <TimelineTemplate
          title="Repeat"
          description="Because this is the life you love!"
          Icon={RepeatIcon}
          dotColor="secondary"
          showTime={false}
        />
      </Timeline>
  );
}