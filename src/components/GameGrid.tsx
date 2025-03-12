import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

export default function GameGrid() {
  const { games, error, isLoading } = useGames();
  const skeletons = [...Array(10).keys()];

  return (
    <>
      {error && <Text>Error: {error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={8}>
        {isLoading &&
          skeletons.map((index) => <GameCardSkeleton key={index} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}
