import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image";
import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

export default function GenreList({ onSelectedGenre }: Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="2rem"
              borderRadius={8}
            />
            <Button onClick={() => onSelectedGenre(genre)} fontSize="lg" variant="link">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
