import {
  FaRegHandPaper,
  FaMousePointer,
  FaRegCircle,
  FaRegSquare,
  FaLongArrowAltRight,
  FaEraser,
  FaPencilAlt,
  FaImages,
} from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";

export interface ButtonConfig {
  icon: JSX.Element;
  id: string;
  isSelect: boolean;
  createEl?: string;
}

export const baseButtonConfigs: ButtonConfig[] = [
  {
    icon: <FaRegHandPaper />,
    id: "handPaper",
    isSelect: false,
  },
  {
    icon: <FaMousePointer />,
    id: "mousePointer",
    isSelect: false,
  },
  {
    icon: <FaRegCircle />,
    id: "circle",
    createEl: "circle",
    isSelect: false,
  },
  {
    icon: <FaRegSquare />,
    id: "rectangle",
    createEl: "rectangle",
    isSelect: false,
  },
  {
    icon: <FaLongArrowAltRight />,
    id: "arrowRight",
    createEl: "createEl",
    isSelect: false,
  },
  {
    icon: <AiOutlineMinus />,
    id: "line",
    createEl: "line",
    isSelect: false,
  },
  {
    icon: <FaPencilAlt />,
    id: "pencil",
    isSelect: false,
  },
  {
    icon: <FaEraser />,
    id: "eraser",
    isSelect: false,
  },
  {
    icon: <FaImages />,
    id: "images",
    isSelect: false,
  },
];
