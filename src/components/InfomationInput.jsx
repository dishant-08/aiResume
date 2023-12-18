// src/components/InformationInput.js
import React, { useContext } from "react";
import Input from "./Input";
import { useFormik } from "formik";
import validationSchema from "../validation/validation";
import { UserContext } from "../context/UserContext";
import TemplateCustomization from "./TemplateCust";

const InformationInput = () => {
  const { formData, SetFormData } = useContext(UserContext);
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      jobTitle: "",
      companyName: "",
      graduationYear: "",
      projects: "",
      institutionName: "",
      relevantCourses: "",
      skills: "",
      githubURL: "",
      linkedinURL: "",
      twitterURL: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      SetFormData(values);
      //   console.log(values);
    },
  });
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center  text-white">
        Input Your Information
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center  py-4  "
      >
        {/* Add input fields here */}
        {/* <div className="flex justify-around "> */}
        <div className="md:flex  md:justify-between">
          <div className=" px-20  ">
            <Input
              name="name"
              text="Name"
              values={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={touched.name && errors.name}
            />
            {/* Company Name job Title */}
            <Input
              name="jobTitle"
              text="Job Title"
              values={values.jobTitle}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={touched.jobTitle && errors.jobTitle}
            />
            {/* </div> */}
            {/* Company Name Input */}
            <Input
              name="companyName"
              text="Company Name"
              values={values.companyName}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={touched.companyName && errors.companyName}
            />
            {/* // Institution Name Input */}
            <Input
              name="institutionName"
              text="Institution Name"
              values={values.institutionName}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={touched.institutionName && errors.institutionName}
            />

            <Input
              name="graduationYear"
              text="Graduation Year"
              values={values.graduationYear}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={touched.graduationYear && errors.graduationYear}
            />

            {/* // Projects Input (Textarea for multiline) */}

            {/* // Relevant Courses Input */}
            <Input
              name="relevantCourses"
              text="Relevant Courses"
              values={values.relevantCourses}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={touched.relevantCourses && errors.relevantCourses}
            />
          </div>
          {/* // Skills Input */}

          <div className=" px-20 ">
            <Input
              name="skills"
              text="Skills"
              values={values.skills}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={touched.skills && errors.skills}
            />

            <div className="flex flex-col">
              <div className="flex justify-end ">
                <p className="p-3 font-bold">Projects :</p>
                <textarea
                  cols={37}
                  rows={4}
                  name="projects"
                  placeholder="Projects (up to two lines) with tech stack"
                  value={values.projects}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border p-2 rounded my-2 resize-none "
                />
              </div>

              {touched.projects && errors.projects && (
                <div className="text-red-500">{errors.projects}</div>
              )}
            </div>
            {/* // GitHub URL Input */}
            <Input
              name="githubURL"
              text="GitHub URL"
              values={values.githubURL}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={touched.githubURL && errors.githubURL}
            />
            {/* // LinkedIn URL Input */}
            <Input
              name="linkedinURL"
              text="LinkedIn URL"
              values={values.linkedinURL}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={touched.linkedinURL && errors.linkedinURL}
            />
            {/* // Twitter URL Input */}
            <Input
              name="twitterURL"
              text="Twitter URL"
              values={values.twitterURL}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={touched.twitterURL && errors.twitterURL}
            />
          </div>
        </div>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4  rounded-lg"
          type="submit"
        >
          Submit
        </button>
        {/* <TemplateCustomization /> */}
      </form>
    </>
  );
};

export default InformationInput;
