import { MouseEvent } from "react";
import { Player } from "../types";

type PlayerSectionProps = {
  isVictorious: (event: string) => void;
  player: Player,
  challenger?: Boolean
};

export default function PlayerSection({ isVictorious, player, challenger }: PlayerSectionProps) {
  return (
    <div 
      onClick={() => isVictorious(player.name)}
      className={
        `flex ${challenger ? "flex-row-reverse" : "flex-row"} 
        flex-grow w-auto justify-between cursor-pointer`
      }>
      <span>{player.name}</span>
      <span>{player.score}</span>
    </div>
  )
}