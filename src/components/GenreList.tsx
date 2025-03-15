import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}

export default function GenreList({ onSelectedGenre, selectedGenre }: Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading marginBottom={2} fontSize="2xl">Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="2rem"
                objectFit="cover"
                borderRadius={8}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelectedGenre(genre)}
                fontSize="lg"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
