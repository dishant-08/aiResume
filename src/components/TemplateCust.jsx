import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import { UserContext } from "../context/UserContext";
import GeneratePrompt from "./GeneratePrompt";
import axios from "axios";

const TemplateCustomization = () => {
  // const [datako, SetDatako] = useState();

  const { formCust, SetFormCust, userData, setUserData, selectedTemplate } =
    useContext(UserContext);
  const { formData } = useContext(UserContext);
  const [isLoading, SetLoading] = useState();

  const [throt, setThrot] = useState(true);

  const formik = useFormik({
    initialValues: {
      headerPosition: "top",
      includePhoto: false,
      photoURL: "",
      primaryColor: "#000000",
      fontSize: "16px",
      fontFamily: "sans-serif",
    },
    onSubmit: async (values) => {
      SetFormCust(values);

      if (throt === true) {
        try {
          SetLoading(true);

          const inputData = `Generate a ${selectedTemplate} HTML with TailwindCSS resume for ${
            formData.name
          }, ${formData.jobTitle} at ${formData.companyName}. Graduated ${
            formData.graduationYear
          }, with impactful projects like ${
            formData.projects
          }, please Generate one professional point of explaination from title and TechStack to each project. Attended ${
            formData.institutionName
          } and completed courses in ${
            formData.relevantCourses
          }. Proficient in ${formData.skills}. Find ${
            formData.name
          } on GitHub: ${formData.githubURL}, LinkedIn: ${
            formData.linkedinURL
          }, Twitter: ${formData.twitterURL}. Customize resume with ${
            formCust.headerPosition
          } header, ${
            formCust.includePhoto
              ? `photo URL: ${formCust.photoURL},`
              : "no photo,"
          } primary color: ${formCust.primaryColor}, font size: ${
            formCust.fontSize
          }, font family: ${formCust.fontFamily}.
          `; // Replace with your actual data
          console.log(inputData);
          const response = await axios.post(
            "http://localhost:3001/generate-portfolio",
            {
              data: inputData,
            }
          );

          // console.log(datako);
          console.log(response.data);
          setUserData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          SetLoading(false);
        }

        setThrot(false);
        // console.log("throttle false");
        setTimeout(() => {
          setThrot(true);
          console.log("Under timeout");
        }, 10000);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center "
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-white">
        Customize Your Template
      </h2>
      <div className="grid grid-cols-2 md:gap-x-[28rem] px-20 py-10  bg-blue-800 shadow-lg mt-4 rounded-lg">
        <div className="header-options mb-4  ">
          <label
            htmlFor="header-position"
            className="block text-lg font-semibold mb-2 text-white"
          >
            Header Position
          </label>
          <select
            name="headerPosition"
            id="header-position"
            className="p-2 border border-gray-300 bg-blue-100 rounded-lg focus:outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.headerPosition}
          >
            <option value="top">Top</option>
            <option value="side">Side</option>
          </select>
        </div>

        <div className="header-photo mb-4">
          <label
            htmlFor="photo-url"
            className="block text-lg font-semibold mb-2 text-white"
          >
            Include Photo in Header
          </label>
          <input
            type="url"
            name="photoURL"
            id="photo-url"
            placeholder="Enter Photo URL"
            className="p-2 border border-gray-300 bg-blue-100 rounded-lg focus:outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.photoURL}
          />
          <input
            type="checkbox"
            name="includePhoto"
            id="header-photo"
            className="mr-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.includePhoto}
          />
        </div>

        <div className="color-picker mb-4">
          <label
            htmlFor="primary-color"
            className="block text-lg font-semibold text-white"
          >
            Primary Color
          </label>
          <input
            type="color"
            name="primaryColor"
            id="primary-color"
            className="p-2 border border-gray-300 bg-blue-100 rounded-lg focus:outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.primaryColor}
          />
          {/* <div className="flex"> */}
          <span className="p-2  text-white ">{formik.values.primaryColor}</span>
          <span
            className={` bg-${formik.values.primaryColor} p-1 inline-block w-5 h-5 `}
            style={{ backgroundColor: formik.values.primaryColor }}
          ></span>
        </div>

        <div className="font-size-adjustment mb-4">
          <label
            htmlFor="font-size"
            className="block text-lg font-semibold text-white"
          >
            Font Size
          </label>
          <select
            name="fontSize"
            id="font-size"
            className="p-2 border border-gray-300 bg-blue-100 rounded-lg focus:outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fontSize}
          >
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            <option value="20px">20px</option>
          </select>
        </div>

        <div className="font-selection mb-4">
          <label
            htmlFor="font-family"
            className="block text-lg font-semibold mb-2 text-white"
          >
            Font Family
          </label>
          <select
            name="fontFamily"
            id="font-family"
            className="p-2 border border-gray-300 bg-blue-100 rounded-lg focus:outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fontFamily}
          >
            <option value="sans-serif">Sans-Serif</option>
            <option value="serif">Serif</option>
            <option value="monospace">Monospace</option>
            <option value="cursive">Cursive</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition  transform hover:scale-110 cursor-pointer"
        // onClick={formik.handleSubmit}
      >
        {isLoading ? "Generating ....." : "Generate Resume"}
      </button>

      <GeneratePrompt />
    </form>
  );
};

export default TemplateCustomization;
