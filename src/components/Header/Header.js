import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, List, ListItem, Button } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "paula.sanchez1031@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/psanchezp31",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/paula-sanchez-10/",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack
            spacing={[4, 6, 8]}
            display="flex"
            justifyContent="space-between"
            width="100%"
          >
            <Box
              display="flex"
              justifyContent={{base:"flex-end", lg:"space-between"}}
              w="100%"
            >
              <List
                display={{ base: "none", lg: "flex" }}
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
              <List display="flex" gap="4" styleType="none" m="0" p="0">
                <ListItem>
                  <Button variant="plain" onClick={handleClick("projects")}>
                    Projects
                  </Button>
                </ListItem>
                <ListItem>
                  <Button variant="plain" onClick={handleClick("contactme")}>
                    Contact me
                  </Button>
                </ListItem>
              </List>
            </Box>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
