import { useEffect, useRef } from "react";
import "./App.css";
import rough from "roughjs";
import { TopBar } from "./components/TopBar";

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
      <TopBar />
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      ></canvas>
    </>
  );
}

export default App;
