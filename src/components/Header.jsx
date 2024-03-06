import { Heading, Center } from "@chakra-ui/react";

export const Header = (props) => {
  const navigateToHomepage = () => {
    window.location.href = "/";
  };
  return (
    <>
      <Center bg="green.900">
        <Heading
          p="1rem"
          color="white"
          fontSize="2xl"
          onClick={navigateToHomepage}
          cursor="pointer"
          _hover={{ color: "green.600" }}
        >
          Winc Recipe Finder
        </Heading>
      </Center>
      {props.children}
    </>
  );
};
