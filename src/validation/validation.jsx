import { object, string, number } from "yup";

const validationSchema = object({
  name: string("Invalid Entry").required("Please Enter Your Name"),
  jobTitle: string("Invalid Entry").required("Please Enter the Job Title"),
  companyName: string("Invalid Entry").required(
    "Please Enter the Company Name"
  ),
  graduationYear: number("Invalid Entry").required(
    "Please Enter the Graduation Year"
  ),
  institutionName: string("Invalid Entry").required(
    "Please Enter the Institution Name"
  ),
  projects: string("Invalid Entry").required("Please Enter the projects"),
  relevantCourses: string("Invalid Entry").required(
    "Please Enter Relevant Courses"
  ),
  skills: string("Invalid Entry").required("Please Enter Skills"),
  githubURL: string("Invalid Entry")
    .url("Invalid GitHub URL")
    .required("Please Enter GitHub URL"),
  linkedinURL: string("Invalid Entry")
    .url("Invalid LinkedIn URL")
    .required("Please Enter LinkedIn URL"),
  twitterURL: string("Invalid Entry")
    .url("Invalid Twitter URL")
    .required("Please Enter Twitter URL"),
});

export default validationSchema;
