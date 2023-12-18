import React from "react";

export default function Input({ text, errors, ...rest }) {
  return (
    <>
      <div className="py-3 font-bold flex flex-col ">
        <div className="flex justify-end  ">
          {text[0].toUpperCase() + text.slice(1)}:
          <input
            {...rest}
            className="mx-3 my-2 md:w-72 w-fit p-1 overflow-x-auto rounded-md  "
            type="text"
          ></input>
        </div>

        {errors && <div className="text-red-500 font-medium ">{errors} </div>}
      </div>
    </>
  );
}
