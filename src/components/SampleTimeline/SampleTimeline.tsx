import { IconBase } from "react-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

export const SampleTimeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2024 - Present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<IconBase />}
      >
        <h3 className="vertical-timeline-element-title">Job Title</h3>
        <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
        <p>Job Description or Responsibilities</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2020 - 2024"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<IconBase />}
      >
        <h3 className="vertical-timeline-element-title">Degree Title</h3>
        <h4 className="vertical-timeline-element-subtitle">University Name</h4>
        <p>Course Description or Major</p>
      </VerticalTimelineElement>
      {/* Add more VerticalTimelineElement components as needed */}
    </VerticalTimeline>
  );
};
