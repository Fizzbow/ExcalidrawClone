import React, { ReactNode } from "react";
interface Props {
  children?: ReactNode;
  className?: string;
  onClick: () => void;
}

export const Button = ({ children, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`
      p-2
      cursor-pointer 
      rounded-md
      hover:bg-gray-500/10 
      active:outline
      active:outline-1
      active:outline-primary/100
      ${className}
      `}
    >
      {children}
    </button>
  );
};
