import React, { useState, useEffect } from "react";
import { constants } from "./constants";

import "./FunctionCard.scss";
import { FunctionCardProps } from "./types";

// Validation function to check if the equation contains only valid characters
const isValidEquation = (equation: string) => {
  const validPattern = /^[\d+\-*/^x().\s]+$/;
  return validPattern.test(equation);
};

const FunctionCard: React.FC<FunctionCardProps> = ({
  id,
  input,
  onResultChange,
  equation,
  setEquation,
}) => {
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    if (isValidEquation(equation)) {
      setIsValid(true);
      const equationWithExponents = equation.replace(/\^/g, "**");

      try {
        const newResult = eval(
          equationWithExponents.replace(/x/g, input.toString())
        );
        onResultChange(newResult);
      } catch (error) {
        console.error("Invalid equation:", error);
      }
    } else {
      setIsValid(false);
    }
  }, [input, equation]);

  const nextIdMap: { [key: number]: number } = {
    1: 2,
    2: 4,
    4: 5,
    5: 3,
  };

  const getNextId = (currentId: number): number => {
    return nextIdMap[currentId] || 3;
  };

  const handleInputChange = (index: number, value: string) => {
    setEquation((prevEquations: string[]) => {
      const newEquations = [...prevEquations];
      newEquations[index] = value;
      return newEquations;
    });
  };

  return (
    <div className="function__contaner">
      <div className="function__dots-and-heading">
        <div className="function__dots-container">
          <span>...</span>
          <span>...</span>
        </div>
        <span className="function__heading">{constants.FUNC_WITH_ID(id)}</span>
      </div>

      {/* Equations and selector */}
      <div className="function__equation-and-selector">
        {/* Equation */}
        <div className="function__equation">
          <span>{constants.EQUATION}</span>
          <input
            type="text"
            value={equation}
            onChange={(e) => handleInputChange(id - 1, e.target.value)}
            placeholder="Enter equation..."
            className="function__input"
          />
        </div>

        {/* Errors */}
        {!isValid && equation && (
          <span className="function__error-text">{constants.ERROR}</span>
        )}

        {/* Selector */}
        <div className="function__select-container">
          <span>{constants.NEXT_FUNC}</span>
          <select disabled className="function__selector">
            <option>
              {id === 3 ? "-" : constants.FUNC_WITH_ID(getNextId(id))}
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FunctionCard;
