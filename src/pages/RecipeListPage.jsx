import {
  Center,
  Image,
  Input,
  SimpleGrid,
  VStack,
  Box,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import Cards from "../components/Cards";

export const RecipeListPage = ({ recipes, clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const text = Object.values(recipe).flat().join(" ").replace(/-/g, " ");

    return text.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleSearchChanges = (event) => {
    setSearchField(event.target.value);
  };

  const renderRecipes = () => {
    if (filteredRecipes.length === 0) {
      return (
        <VStack>
          <Heading size="md">No recipes found for {searchField}</Heading>
          <Image
            src="https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?cs=srgb&dl=pexels-adonyi-g%C3%A1bor-1400172.jpg&fm=jpg&_gl=1*1emt2bq*_ga*MTUyMzU1MTU5Mi4xNzA5NTU2OTY4*_ga_8JE65Q40S6*MTcwOTU1Njk2OC4xLjEuMTcwOTU1NzAxMy4wLjAuMA.."
            alt="pizza"
            objectFit="cover"
            w="100%"
            h="30rem"
            mt="3rem"
            mb="3rem"
          />
        </VStack>
      );
    }

    return filteredRecipes.map((recipe) => (
      <Cards
        clickFn={clickFn}
        key={recipe.label}
        recipe={recipe}
        minHeight="250px"
      />
    ));
  };

  return (
    <Center mb="3rem" w="100%">
      <VStack>
        <Box w="100%" position="relative">
          <Box>
            <Image
              src="https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?cs=srgb&dl=pexels-adonyi-g%C3%A1bor-1400172.jpg&fm=jpg&_gl=1*1emt2bq*_ga*MTUyMzU1MTU5Mi4xNzA5NTU2OTY4*_ga_8JE65Q40S6*MTcwOTU1Njk2OC4xLjEuMTcwOTU1NzAxMy4wLjAuMA.."
              alt="pizza"
              objectFit="cover"
              w="100%"
              h="30rem"
              mb="3rem"
            />
          </Box>
        </Box>
        <Box position="absolute" top="12rem" left="20%" w="60%">
          <Center>
            <Heading size="lg" mb="1rem" color={"green.900"}>
              Find a Recipe
            </Heading>
          </Center>
          <Input
            bg="white"
            m="auto"
            placeholder="Search Recipes"
            onChange={handleSearchChanges}
            h="3rem"
          />
        </Box>
        <SimpleGrid
          columns={[1, 2, 3, 4]}
          gap={5}
          transition="all 0.3s ease"
          spacingX={5}
          w="80%"
        >
          {renderRecipes()}
        </SimpleGrid>
      </VStack>
    </Center>
  );
};
