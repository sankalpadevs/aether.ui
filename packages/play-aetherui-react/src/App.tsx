import React from "react";
import "./App.css";
import SampleButton from "./SampleButton";
import { ThemeProvider } from "aetherui-react";
function App() {
  return (
    <ThemeProvider>
      <SampleButton />
    </ThemeProvider>
  );
}

export default App;
