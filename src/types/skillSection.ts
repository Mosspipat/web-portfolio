import { ReactNode } from "react";

export type SkillItemProps = {
  name: string;
  level: string;
  iconElement?: ReactNode;
  className?: string;
};

export type ToolItemProps = {
  name: string;
  level: string;
  iconElement?: ReactNode;
  className?: string;
};