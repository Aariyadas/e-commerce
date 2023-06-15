import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,Center,Flex,Headbng, Spinner, Stack, Wrap, WrapItem
} from "@chakra-ui/react"

import {Link as ReactLink} from 'react-router-dom'

import React from 'react'
import ProductCard from "../components/ProductCard"
import { setLoading } from "../redux/slices/productSlice"

const ChatScreen = () => {
  return (
    <Wrap spacing="50px" justify="center" minHeight="100vh">
      {setLoading ? (
        <Stack direction ='row'spacing={4}>
          <Spinner mt={20} thickness='2px' speed='0.75' emptyColor='gray.200' color='orange.500' size='2xl'/>

        </Stack>      
        ) : error ? (
        <Alert status='error'>
          <AlertIcon/>
          <AlertTitle>OOps!!!!!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : cart.length <=0 ? (
        <Alert status='error'>
          <AlertIcon/>
          <AlertTitle>Your Cart is Empty.</AlertTitle>
          <AlertDescription>
            <Link as ={ReactLink} to="/products"> Click here to see products.
            </Link>
          </AlertDescription>
        </Alert>
      ) :(
    <Box maxW={{base}} >

    </Box>

      )}
      </Wrap>
  )
}

export default ChatScreen
