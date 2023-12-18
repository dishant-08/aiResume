import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { selectedTemplate, setSelectedTemplate } = useContext(UserContext);

  const handleTemplateSelection = (template) => {
    setSelectedTemplate(template);
    console.log(template);
  };

  return (
    <div className=" bg-sky-600 p-5  ">
      <h2 className="text-2xl font-bold mb-4 text-black text-center">
        Select a Template
      </h2>

      <div className="flex justify-around gap-4">
        {["professional", "creative", "academic"].map((template) => (
          <label key={template}>
            <input
              type="radio"
              name="template"
              value={template}
              className="hidden"
              onChange={() => handleTemplateSelection(template)}
            />
            <p
              className={`cursor-pointer p-2 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 ${
                selectedTemplate === template
                  ? "bg-blue-700 font-bold text-white"
                  : "bg-blue-100"
              }`}
            >
              {template.charAt(0).toUpperCase() + template.slice(1)}
            </p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Header;
