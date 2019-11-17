import React from "react";
import Highlight from "./components/common/buttons/button";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="theoretical">
        <h1>
          Reusable & Generic Links{" "}
          <span role="img" aria-label="lightning">
            ⚡
          </span>
        </h1>

        <ul>
          {/* Default prop button */}
          <li>
            <span>
              <Highlight text="defult props" />
            </span>
          </li>

          {/* Custom prop button (underline green) */}
          <li>
            <span>
              <Highlight styleLink="link green" text="custom props (group 1)" />
            </span>
            <div>
              <small>Font weight: 300</small> <br />
              <small>Underline color: green</small>
            </div>
          </li>

          {/* Custom prop button (underline blue) */}
          <li>
            <span>
              <Highlight styleLink="link blue" text="custom props (group 2)" />
            </span>
            <div>
              <small>Font weight: 900</small> <br />
              <small>Underline color: blue</small>
            </div>
          </li>
        </ul>
      </div>

      <div className="practical">
        <h3>Practical Paragraph</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
          <span>
            <Highlight text="learn more" />
          </span>{" "}
          , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam{" "}
          <span>
            <Highlight styleLink="link green" text="colors" />
          </span>
          , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit{" "}
          <span>
            <Highlight text="learn more" />
          </span>{" "}
          , sed do eiusmod tempor incididunt.
        </p>

        <p>
          <span>
            <Highlight styleLink="link blue" text="Thanks.." />
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
