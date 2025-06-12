import React, { forwardRef, useId } from "react";
//forwardRef: It allows you to pass a ref through a component to one of its children.
// This is useful when you want to access a DOM element or a class component instance directly from a parent component.

const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId(); // useId: It generates a unique ID that can be used for accessibility purposes, such as associating a label with an input element.
  return (
    <div>
      {label && (
        <label className="inline-block mb-1 pl-1 " htmlFor="">
          {label}
        </label>
      )}
      <input
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        type={type}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});
export default Input;
