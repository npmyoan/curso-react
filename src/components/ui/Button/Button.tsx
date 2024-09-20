import { ComponentProps } from "react";
import style from "./Button.module.css";

type ButtonProps = ComponentProps<"button">;

export const Button = ({
  children,
  onClick,
  className,
  ...attr
}: ButtonProps) => {
  return (
    <button onClick={onClick} {...attr} className={`${style.btn} ${className}`}>
      {children}
    </button>
  );
};
