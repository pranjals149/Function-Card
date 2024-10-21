import React, { useState } from "react";
import "./App.scss";
import CurveLines from "./components/CurveLines/CurveLines";
import FunctionCard from "./components/FunctionCard/FunctionCard";
import RenderValues from "./components/RenderValues/RenderValues";

function App() {
  const [equation, setEquation] = useState<string[]>([
    "x^2",
    "2*x+4",
    "x^2+20",
    "x-2",
    "x/2",
  ]);

  const [result1, setResult1] = useState<number>(0);
  const [result2, setResult2] = useState<number>(0);
  const [result4, setResult4] = useState<number>(0);
  const [result5, setResult5] = useState<number>(0);
  const [result3, setResult3] = useState<number>(0);
  const [initialValue, setInitialValue] = useState<number>(2);

  return (
    <div className="App">
      <div className="parent__container">
        <div className="cards-in-row">
          <div className="card-and-input">
            <RenderValues
              valueInBox={initialValue}
              setValueInBox={setInitialValue}
              type="input"
              heading="Initial value of x"
            />
            <CurveLines className="curve-line-one" pathD="M 120 10 L 200 10" />
            {/* Function 1 */}
            <FunctionCard
              id={1}
              input={initialValue}
              onResultChange={setResult1}
              equation={equation[0]}
              setEquation={setEquation}
            />
            <CurveLines
              className="curve-line"
              pathD="M 50 10 Q 150 100 250 10"
            />
          </div>
          {/* Function 2 */}
          <FunctionCard
            id={2}
            input={result1}
            onResultChange={setResult2}
            equation={equation[1]}
            setEquation={setEquation}
          />

          <div className="card-and-input">
            {/* Function 3 */}
            <FunctionCard
              id={3}
              input={result5}
              onResultChange={setResult3}
              equation={equation[2]}
              setEquation={setEquation}
            />
            <CurveLines
              className="curve-line-three"
              pathD="M 120 10 L 200 10"
            />
            <RenderValues
              valueInBox={result3}
              type="output"
              heading="Final Output y"
            />
          </div>
        </div>

        <div className="cards-in-sec-row">
          {/* Function 4 */}
          <FunctionCard
            id={4}
            input={result2}
            onResultChange={setResult4}
            equation={equation[3]}
            setEquation={setEquation}
          />
          <CurveLines
            className="curve-line-four"
            pathD="M 50 10 Q 150 100 250 10"
          />
          {/* Function 5 */}
          <FunctionCard
            id={5}
            input={result4}
            onResultChange={setResult5}
            equation={equation[4]}
            setEquation={setEquation}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
