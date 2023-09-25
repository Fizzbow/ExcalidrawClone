import { useEffect, useRef } from "react";
import "./App.css";

import EditPanel from "./pages/EditPanel";
import Canvas from "./pages/Canvas";
import rough from "roughjs";
import useWindowListener from "../src/hooks/useWindowListenter";

function App() {
  return (
    <>
      <EditPanel />
      <Canvas />
    </>
  );
}

export default App;
