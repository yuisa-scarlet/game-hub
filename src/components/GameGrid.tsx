import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import axios from "../services/axios";

interface Game {
  id: number;
  slug: string;
  name: string;
  release: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings_count: number;
  reviews_text_count: number;
}

interface GameResponse {
  count: number;
  results: Game[];
}

export default function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<GameResponse>("/games")
      .then((response) => setGames(response.data.results))
      .catch((err) => setError(err.message));
  });

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
