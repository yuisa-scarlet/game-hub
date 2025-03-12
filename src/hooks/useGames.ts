import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
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
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}

const useGames = () => useData<Game>("/games");

export default useGames;
