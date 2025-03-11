import useGames from "@/hooks/useGames";
import { Text } from "@chakra-ui/react";

export default function GameGrid() {
  
  const { games, error } = useGames();

  return (
    <div>
      {error && <Text>Error: {error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
}
