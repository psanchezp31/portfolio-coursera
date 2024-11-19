import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Box,
  Link,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="white" color="black" rounded="md">
      <Link href="#">
        <Image rounded="md" src={imageSrc} alt={`image - ${title}`}></Image>
        <Box p="4" display="flex" gap="2" flexDirection="column">
          <Heading size="s">{title}</Heading>
          <Text color="#4d5966">{description}</Text>
          <Box>
            See more <FontAwesomeIcon icon={faArrowRight} />
          </Box>
        </Box>
      </Link>
    </VStack>
  );
};

export default Card;
