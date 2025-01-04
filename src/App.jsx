import "./App.css";
import React, { useState } from "react";
import FlexContainer from "./Components/FlexContainer";
import LayoutSelector from "./Components/LayoutSelector";
import TypingHeading from "./Components/TypingHeading";

function App() {
  const [layout, setLayout] = useState('row');

  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-gray-100 p-4">
      <TypingHeading />
      <LayoutSelector layout={layout} setLayout={setLayout} />

      {/* Fixed height for the layout container */}
      <div className="w-full h-80 overflow-hidden mt-4"> {/* Fixed height for Flexbox container */}
        <FlexContainer layout={layout} />
      </div>
    </div>
  );
}

export default App;
