import React from "react";
import { Tooltip as TailwindTooltip } from "@material-tailwind/react";

type TooltipProps = {
  content: string;
  placement: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
};

const Tooltip = ({ children, content, placement }: TooltipProps) => {
  return (
    <div>
      <TailwindTooltip content={content} placement={placement}>
        <button onClick={() => console.log("buttonPress")}>{children}</button>
      </TailwindTooltip>
    </div>
  );
};

export default Tooltip;
