import ThumbUp from "../assets/thumbs-up.webp";
import Meh from "../assets/meh.webp";
import BullsEye from "../assets/bulls-eye.webp";
import { Image, ImageProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  rating: number;
}

export default function Emoji({ rating }: Props) {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps | IconType } = {
    3: { src: Meh, alt: "meh", boxSize: "1.5rem" },
    4: { src: ThumbUp, alt: "recomended", boxSize: "1.5rem" },
    5: { src: BullsEye, alt: "exceptional", boxSize: "1.5rem" },
  };

  return <Image marginTop={2} {...emojiMap[rating]} />;
}
