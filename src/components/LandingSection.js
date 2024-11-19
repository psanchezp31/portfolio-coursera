import React from "react";
import { Avatar, Heading, VStack, Text, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Paula!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={{ base: 2, lg: 6 }} align="center">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap="4"
        mb="8"
      >
        <Avatar
          name="Paula Sanchez"
          src="https://raw.githubusercontent.com/psanchezp31/hosted-assets/refs/heads/main/PXL_20240926_205345829.jpg"
          size="xl"
        />
        <Heading as="h1" size="md">
          {greeting}
        </Heading>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text fontSize="28px" fontWeight="semibold">
          {bio1}
        </Text>
        <Text fontSize="28px" fontWeight="semibold">
          {bio2}
        </Text>
      </Box>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
