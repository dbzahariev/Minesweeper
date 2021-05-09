import React from "react";
import "../styles/NumberDisplay.scss";

interface NumberDisplayProps {
  value: number;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({ value }) => {
  return (
    <div className="NumberDisplay">
      <span>
        {value < 0
          ? `-${Math.abs(value).toString().padStart(2, "0")}`
          : value.toString().padStart(3, "0")}
      </span>
    </div>
  );
};

export default NumberDisplay;
