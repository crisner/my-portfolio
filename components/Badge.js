import React from "react";

const Badge = ({ children }) => {
  return (
    <span className="inline-flex items-center rounded-full bg-[#fa637926] px-2 py-1 text-xs font-medium ring-1 ring-inset ring-[#fa6379]">
      {children}
    </span>
  );
};

export default Badge;
