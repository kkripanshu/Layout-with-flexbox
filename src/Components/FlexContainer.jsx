import React from "react";

const FlexContainer = ({ layout }) => {
  const boxColors = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500"];

  return (
    <div
      className="flex gap-4 border-4 border-black p-4 rounded-lg transition-all duration-300"
      style={{
        flexDirection: layout,
        height: "100%", // This makes the container adjust its height based on its parent
      }}
    >
      {boxColors.map((color, index) => (
        <div
          key={index}
          className={`w-20 h-20 ${color} rounded-lg flex items-center justify-center text-white font-bold`}
        >
          Box {index + 1}
        </div>
      ))}
    </div>
  );
};

export default FlexContainer;
