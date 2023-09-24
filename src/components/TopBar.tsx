import React from "react";
import { FaRegHandPaper } from "react-icons/fa";
import { Button } from "../components/button/Button";

export const TopBar = () => {
  return (
    <div
      className="
      shadow-lg
      bg-white
      flex 
      flex-row 
      justify-center 
      items-center
      z-900
      flex-1
      absolute
      h-10 left-6 top-6 right-6 bottom-6
      rounded-lg
      "
    >
      <div>
        <Button>
          <FaRegHandPaper />
        </Button>
      </div>
    </div>
  );
};
