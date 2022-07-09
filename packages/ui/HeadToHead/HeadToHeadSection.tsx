import { ReactNode } from "react";
import { Player } from "../types";

type HeadToHeadSectionProps = {
  children: ReactNode
};

export default function HeadToHeadSection({ children }: HeadToHeadSectionProps) {
  return (
    <div className="flex flex-row w-96 justify-between bg-slate-100">
      {children}
    </div>
  )
}