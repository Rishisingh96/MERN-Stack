import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-3xl shadow-2xl p-9 border border-gray-100">
      {children}
    </div>
  );
};

export default Container;