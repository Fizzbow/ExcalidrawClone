import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import rough from "roughjs";
import useWindowListener from "../hooks/useWindowListenter";
import { Drawable } from "roughjs/bin/core";

// TODO:自适应
const generator = rough.generator();
interface Element {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  roughEl: Drawable;
}

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [elements, setElements] = useState<Element[]>([]);
  const [drawing, setDrawing] = useState(false);

  const createRoughEl = (x1: number, y1: number, x2: number, y2: number) => {
    const roughEl = generator.line(x1, y1, x2, y2);
    return { x1, y1, x2, y2, roughEl };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    const roughCanvas = rough.canvas(canvas);

    elements.forEach(({ roughEl }) => {
      roughCanvas.draw(roughEl);
    });
  }, [elements]);

  function handleMouseDown(e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
    setDrawing(true);
    const { clientX, clientY } = e;
    const element = createRoughEl(clientX, clientY, clientX, clientY);
    setElements((prev) => [...prev, element]);
  }

  function handleMouseMove(e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
    if (!drawing) return;
    const { clientX, clientY } = e;

    // 实时更新最后一个点坐标
    const updatedEls = elements.map((el, index, elements) => {
      const last = elements.length - 1;
      if (index === last) {
        const { x1, y1 } = elements[last];
        const el = createRoughEl(x1, y1, clientX, clientY);
        return el;
      } else {
        return el;
      }
    });

    setElements(updatedEls);
  }

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={() => setDrawing(false)}
    ></canvas>
  );
};

export default Canvas;
