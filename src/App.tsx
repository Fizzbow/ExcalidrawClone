import { useEffect, useRef, useState } from "react";
import "./App.css";
import { useLocalStorage } from "@uidotdev/usehooks";

import EditPanel from "./pages/EditPanel";
import Canvas from "./pages/Canvas";

export interface StyleState {
  color: string;
  bgColor: string;
  opacity: number;
}
export interface ObjectConfig {
  shape: string;
  style: StyleState;
}

function App() {
  const [config, setConfig] = useLocalStorage<ObjectConfig>("__config__", {
    shape: "line",
    style: {
      color: "red",
      bgColor: "red",
      opacity: 0,
    },
  });

  return (
    <>
      <EditPanel config={config} setConfig={setConfig} />
      <Canvas config={config} />
    </>
  );
}

export default App;
