import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "@/hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

export default function GameGrid({ selectedGenre }: Props) {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [...Array(10).keys()];

  return (
    <>
      {error && <Text>Error: {error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
        {isLoading &&
          skeletons.map((index) => (
            <GameCardContainer key={index}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}
