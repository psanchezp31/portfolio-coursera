import React from "react";
import { Box, Flex, Text, List, ListItem, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../utils/socials";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
          flexDirection="column"
        >
          <Text align="center" fontSize="xs">
            Made with 💗 by Paula Sánchez • © 2024
          </Text>
          <List
            display={{ base: "flex", lg: "none" }}
            gap="4"
            styleType="none"
            m="0"
            p="0"
            alignItems="center"
          >
            {socials.map((social) => {
              return (
                <ListItem key={social.url}>
                  <Link href={social.url} isExternal>
                    <FontAwesomeIcon icon={social.icon} />
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
