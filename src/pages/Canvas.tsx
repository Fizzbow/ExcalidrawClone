import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import rough from "roughjs";
import { Drawable, Options } from "roughjs/bin/core";
import { ObjectConfig } from "../App";
import { RoughGenerator } from "roughjs/bin/generator";

// TODO:自适应

interface Element {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  roughEl: Drawable;
}

interface Props {
  config: ObjectConfig;
}

const generator = rough.generator();
const Canvas = ({ config }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [elements, setElements] = useState<Element[]>([]);
  const [drawing, setDrawing] = useState(false);

  const createRoughEl = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    config?: ObjectConfig
  ) => {
    const options: Options = {
      stroke: config?.strokeColor,
      fill: config?.backGroundColor,
    };
    let roughEl: Drawable | undefined = undefined;

    if (config?.shape === "line") {
      roughEl = generator.line(x1, y1, x2, y2, options);
    } else if (config?.shape === "rectangle") {
      roughEl = generator.rectangle(x1, y1, x2 - x1, y2 - y1, options);
    } else if (config?.shape === "circle") {
      const horizontalSide = x2 - x1;
      const verticalSide = y2 - y1;

      const hypotenuse = Math.sqrt(horizontalSide ** 2 + verticalSide ** 2);

      roughEl = generator.circle((x2 + x1) / 2, (y2 + y1) / 2, hypotenuse);
    }

    if (!roughEl) return;

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
    const element = createRoughEl(clientX, clientY, clientX, clientY, config);
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
        const el = createRoughEl(x1, y1, clientX, clientY, config);
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
