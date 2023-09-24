import React, { ReactNode } from "react";
interface Props {
  children?: ReactNode;
  onclick: () => void;
}

export const Button = ({ children, onclick }: Props) => {
  return (
    <button
      onClick={onclick}
      className="
      p-2
      cursor-pointer 
      rounded-md
      hover:bg-gray-500/10
      "
    >
      {children}
    </button>
  );
};
