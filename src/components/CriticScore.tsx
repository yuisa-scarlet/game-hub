import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

export default function CriticScore({ score }: Props) {
  let color = score >= 75 ? "green" : score >= 50 ? "yellow" : "red";

  return (
    <Badge fontSize="14px" paddingX={2} borderRadius={4} colorScheme={color}>
      {score}
    </Badge>
  );
}
