import React from "react";
import "./App.css";
import { ThemeProvider, Typography } from "aetherui-react";
function App() {
  return (
    <ThemeProvider>
      <Typography>Hello</Typography>
    </ThemeProvider>
  );
}

export default App;
