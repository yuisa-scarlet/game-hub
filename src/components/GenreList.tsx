import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

export default function GenreList() {
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
