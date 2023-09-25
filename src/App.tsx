import { useEffect, useRef } from "react";
import "./App.css";
import rough from "roughjs";
import EditPanel from "./pages/EditPanel";

const generator = rough.generator();
function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const roughCanvas = rough.canvas(canvas);
    const rect = generator.rectangle(10, 10, 100, 100);

    roughCanvas.draw(rect);
  });
  return (
    <>
      <EditPanel />
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      ></canvas>
    </>
  );
}

export default App;
