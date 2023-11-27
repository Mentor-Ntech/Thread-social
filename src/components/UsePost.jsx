import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { Image } from "@chakra-ui/image";
import { BsThreeDots } from "react-icons/bs";


const UsePost = () => {
  return (
    <Link to={"/aliumusa@99/post/1"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar size="md" name="Aliu Musa" src="/directorPro.jpeg" />

          <Box w="1px" h={"full"} bg="gray.light" my={2}></Box>
          <Box position={"relative"} w={"full"}>
            <Avatar
              size="xs"
              name="Rocco"
              src="https://bit.ly/prosper-baba"
              position={"absolute"}
              top={"0px"}
              left="15px"
              padding={"2px"}
            />
            <Avatar
              size="xs"
              name="Rocco"
              src="https://bit.ly/kent-c-dodds"
              position={"absolute"}
              bottom={"0px"}
              right="-5px"
              padding={"2px"}
            />
            <Avatar
              size="xs"
              name="Rocco"
              src="https://bit.ly/dan-abramov"
              position={"absolute"}
              bottom={"0px"}
              left="4px"
              padding={"2px"}
            />
          </Box>
        </Flex>

        <Flex flex={1} flexDirection={"column"} gap={2}>
          <Flex justifyContent={"space-between"} w={"full"}>
            <Flex w={"full"} alignItems={"center"}>
              <Text fontSize={"sm"} fontWeight={"bold"}>
                AliuMusa
              </Text>
              <Image src="/verified.png" w={4} h={4} ml={1} />
            </Flex>
            <Flex gap={4} alignItems={"center"}>
              <Text fontSize={"sm"} color={"gray.light"}>
                1d
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>

          <Text fontSize={"sm"}>This is my first post</Text>

          <Box
            borderRadius={6}
            overflow={"hidden"}
            border={"1px solid"}
            borderColor={"gray.light"}
          >
            <Image src="/aliumusa.jpeg" w={"full"} />
          </Box>
        </Flex>
      </Flex>
    </Link>
  );
};

export default UsePost;
