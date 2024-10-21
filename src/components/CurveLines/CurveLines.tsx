import React from "react";

interface CurveLinesProps {
  className?: string;
  pathD: string;
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: string;
}

const CurveLines: React.FC<CurveLinesProps> = ({
  className,
  pathD,
  width = 300,
  height = 300,
  stroke = "#0066ff4d",
  strokeWidth = "6",
}) => {
  return (
    <svg
      className={`curve ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path
        d={pathD}
        stroke={stroke}
        fill="transparent"
        stroke-width={strokeWidth}
      />
    </svg>
  );
};

export default CurveLines;
