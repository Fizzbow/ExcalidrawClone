import { useEffect, useRef, useState } from "react";
import "./App.css";

import EditPanel from "./pages/EditPanel";
import Canvas from "./pages/Canvas";

export interface ObjectConfig {
  shape: string;
  strokeColor?: string;
  backGroundColor?: string;
}

function App() {
  const [config, setConfig] = useState<ObjectConfig>({ shape: "line" });

  return (
    <>
      <EditPanel config={config} setConfig={setConfig} />
      <Canvas config={config} />
    </>
  );
}

export default App;
