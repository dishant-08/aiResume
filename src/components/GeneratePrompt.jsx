import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
// import React, { useRef } from 'react';
// import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";

const GeneratePrompt = () => {
  const { formData, formCust, userData } = useContext(UserContext);
  useEffect(() => {
    console.log(formCust);
    console.log(formData);
  }, [formCust, formData]);
  const [html, setHtml] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const inputData = "DishantSahu"; // Replace with your actual data

        const response = await axios.post(
          "http://localhost:3001/generate-portfolio",
          {
            data: inputData,
          }
        );
        console.log(response);
        console.log(response.data);
        const generatedCode = response.data.completion;
        console.log(generatedCode);
        setHtml(generatedCode);
        // setGeneratedCode(generatedCode);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // fetchData();
  }, []);

  // const resumeHtml = ;
  const [data, setData] = useState();
  const prompt = "Say this is a test";

  const resumeRef = useRef();

  const downloadPdf = () => {
    const element = resumeRef.current;

    html2canvas(element, {
      scale: 2, // Adjust scale as needed
    }).then((canvas) => {
      const pdf = new jsPDF({
        unit: "mm",
        format: "a4",
      });

      pdf.addImage(canvas.toDataURL("image/jpeg", 1.0), "JPEG", 0, 0, 210, 297);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="  bg-white text-3xl font-bold text-black ">
      {/* <p>hello</p> <p> {formCust.fontFamily} </p> */}

      {/* <div>{data} </div> */}
      {/* <p>
          Generate a professional HTML resume for {formData.name}, a{" "}
          {formData.jobTitle} at {formData.companyName}. Graduated in{" "}
          {formData.graduationYear}, {formData.name} has worked on impactful
          projects, including {formData.projects}. Attended{" "}
          {formData.institutionName} and completed relevant courses in{" "}
          {formData.relevantCourses}. Proficient in {formData.skills},{" "}
          {formData.name} can be found on GitHub: {formData.githubURL},
          LinkedIn: {formData.linkedinURL}, and Twitter: {formData.twitterURL}.
          Customize the resume with a {formCust.headerPosition} header,
          {formCust.includePhoto
            ? ` including a photo with URL: ${formCust.photoURL}`
            : " excluding a photo"}
          , and style preferences like a primary color of{" "}
          {formCust.primaryColor}, font size of {formCust.fontSize}, and font
          family set to {formCust.fontFamily}.
        </p> */}
      {/* </div> */}
      <div className="flex flex-col">
        <div
          // className="w-[1080px]  "
          ref={resumeRef}
          dangerouslySetInnerHTML={{ __html: userData?.completion }}
        />

        <button
          type="button"
          className="text-white items-center m-4 rounded-md p-1 bg-fuchsia-500 mx-auto"
          onClick={downloadPdf}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default GeneratePrompt;