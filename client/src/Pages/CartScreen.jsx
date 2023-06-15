import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  HStack,
  Heading,
  Link,
  Spinner,
  Stack,
  Wrap,
  
  useColorMode as mode,
} from "@chakra-ui/react";

import { Link as ReactLink } from "react-router-dom";

import React from "react";
// import ProductCard from "../components/ProductCard"
import { setError, setLoading } from "../redux/slices/productSlice";
import cartSlice from "../redux/slices/cartSlice";
import { useSelector } from "react-redux";

const CartScreen = () => {
  const cartInfo = useSelector((state) => state.cart);
  const { loading, error, cart } = cartInfo;
  return (
    <Wrap spacing="50px" justify="center" minHeight="100vh">
      {setLoading ? (
        <Stack direction="row" spacing={4}>
          <Spinner
            mt={20}
            thickness="2px"
            speed="0.75"
            emptyColor="gray.200"
            color="orange.500"
            size="2xl"
          />
        </Stack>
      ) : setError ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>OOps!!!!!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : cartSlice.length <= 0 ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Your Cart is Empty.</AlertTitle>
          <AlertDescription>
            <Link as={ReactLink} to="/products">
              {" "}
              Click here to see products.
            </Link>
          </AlertDescription>
        </Alert>
      ) : (
        <Box
          maxW={{ base: "3xl", lg: "7xl" }}
          mx="auto"
          px={{ base: "4", md: "8", lg: "12" }}
          py={{ base: "4", md: "8", lg: "12" }}
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            align={{ lg: "flex-start" }}
            spacing={{ base: "8", md: "16" }}
          >
            <Stack spacing={{ base: "8", md: "10" }} flex="2">
              <Heading fontSize="2xl" fontWeight="extrabold">
                Shopping Cart
              </Heading>
              <Stack spacing="6">{/* CartItem */}</Stack>
            </Stack>
            <Flex direction="6">
              {/* CartOrderSummary */}
              <HStack mt="6" fontWeight="semibold">
                <p>or</p>
                <Link
                  as={ReactLink}
                  to="/products"
                  color={mode("orange.500", "orange.200")}
                >
                  Continue Shopping
                </Link>
              </HStack>
            </Flex>
          </Stack>
        </Box>
      )}
    </Wrap>
  );
};

export default CartScreen;
