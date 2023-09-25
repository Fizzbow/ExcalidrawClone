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
import { Button } from "../components/button/Button";
import { useState } from "react";

const initButtonConfigs = [
  {
    icon: <FaRegHandPaper />,
    id: "handPaper",
    isSelect: false,
    onClick: () => {
      console.log("RegHandPaper button clicked");
    },
  },
  {
    icon: <FaMousePointer />,
    id: "mousePointer",
    isSelect: false,
    onClick: () => {
      console.log("Mouse Pointer button clicked");
    },
  },
  {
    icon: <FaRegCircle />,
    id: "circle",
    isSelect: false,
    onClick: () => {
      console.log("Circle button clicked");
    },
  },
  {
    icon: <FaRegSquare />,
    id: "square",
    isSelect: false,
    onClick: () => {
      console.log("Square button clicked");
    },
  },
  {
    icon: <FaLongArrowAltRight />,
    id: "arrowRight",
    isSelect: false,
    onClick: () => {
      console.log("arrowRight button clicked");
    },
  },
  {
    icon: <AiOutlineMinus />,
    id: "windowMinimize",
    isSelect: false,
    onClick: () => {
      console.log("arrowRight button clicked");
    },
  },
  {
    icon: <FaPencilAlt />,
    id: "pencil",
    isSelect: false,
    onClick: () => {
      console.log("image pencil clicked");
    },
  },
  {
    icon: <FaEraser />,
    id: "eraser",
    isSelect: false,
    onClick: () => {
      console.log("eraser button clicked");
    },
  },
  {
    icon: <FaImages />,
    id: "images",
    isSelect: false,
    onClick: () => {
      console.log("eraser button clicked");
    },
  },
];

const TopBar = () => {
  const [buttonConfigs, setButtonConfigs] = useState(initButtonConfigs);
  const toggleSelect = (id: string) => {
    const updatedSelect = buttonConfigs.map((config) => {
      if (config.id === id) {
        config.isSelect = true;
        return config;
      } else {
        config.isSelect = false;
        return config;
      }
    });
    setButtonConfigs(updatedSelect);
  };
  return (
    <header className="w-full  flex justify-center">
      <div
        className="
        p-2
        shadow-lg
        bg-white
        flex 
        flex-row 
        justify-center 
        items-center
        z-900
        rounded-lg
        pointer-events-auto
        "
      >
        <div>
          {buttonConfigs.map((config) => (
            <Button
              className={`mx-1  ${
                config.isSelect
                  ? "bg-primary/20 text-primary/90"
                  : "text-greyness"
              }`}
              key={config.id}
              onClick={() => (config.onClick, toggleSelect(config.id))}
            >
              {config.icon}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};
export default TopBar;
