import { prependOnceListener } from "process";
import "./CourseComponent.css";

type CoursePropsType = {
  name: string;
  description: string;
  creditNumber: number;
};

function CourseComponent(props: CoursePropsType) {
  return (
    <div className="course-component-container">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <h4>Number of credits: {props.creditNumber}</h4>
    </div>
  );
}

export default CourseComponent;
