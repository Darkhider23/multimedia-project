import React from "react";

export default function Button({ children, onClick, className, variant }) {
  const baseClass = "px-4 py-2 rounded border ";
  const variantClass = variant === "outline" ? "border-gray-500 text-black-700" : "bg-blue-500 text-white border-blue-500";

  return (
    <button onClick={onClick} className={`${baseClass} ${variantClass} ${className}`}>
      {children}
    </button>
  );
}
