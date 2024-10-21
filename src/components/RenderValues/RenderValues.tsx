import React from "react";

import "./RenderValues.scss";

interface RenderValueProps {
  valueInBox: number;
  setValueInBox?: React.Dispatch<React.SetStateAction<number>>;
  type: "input" | "output";
  heading: string | React.ReactNode;
}

const RenderValues: React.FC<RenderValueProps> = ({
  valueInBox,
  setValueInBox,
  type,
  heading,
}) => {
  const isReadOnly = type === "output";

  /**
   * Sets some of the styles corresponding to the type given
   */
  const stylesAccordingToType = {
    input: {
      bgColor: "#e29a2d",
      borderColor: "#ffc267",
      textAlign: "left",
    },
    output: {
      bgColor: "#4caf79",
      borderColor: "#2DD179",
      textAlign: "right",
    },
  }[type];

  return (
    <div className="card-input__container">
      <span
        className="card-input__heading"
        style={{ background: stylesAccordingToType.bgColor }}
      >
        {heading}
      </span>
      <input
        value={valueInBox}
        onChange={
          setValueInBox ? (e) => setValueInBox(+e.target.value) : () => {}
        }
        className="card-input__input"
        readOnly={isReadOnly}
        style={{
          border: `2px solid ${stylesAccordingToType.borderColor}`,
          borderColor: stylesAccordingToType.borderColor,
          cursor: isReadOnly ? "not-allowed" : "pointer",
          textAlign:
            stylesAccordingToType.textAlign as React.CSSProperties["textAlign"],
        }}
      />
    </div>
  );
};

export default RenderValues;
