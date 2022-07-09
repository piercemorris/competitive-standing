import PlayerSection from "ui/HeadToHead/PlayerSection";

export default function Index() {

  const data = [
    {
      player: {
        name: "Pierce",
        score: 0
      },
      opponent: {
        name: "Josh",
        score: 0
      }
    }
  ]

  const gameEnd = (name: string) => {
    console.log(`${name} wins!`)
  }

  return (
    <div className="flex h-screen flex-col items-center mt-20">
      <h1 className="text-3xl font-bold underline">Competitive standing</h1>
      <div className="m-10">
        <div className="flex flex-row w-96 justify-between bg-slate-100">
          <PlayerSection isVictorious={gameEnd} player={data[0].player} />
          <span>-</span>
          <PlayerSection isVictorious={gameEnd} player={data[0].opponent} challenger />
        </div>
      </div>
    </div>
  );
}
