import React from "react";
import {
Container
  Box,
  Button,
  BreakPointValue,
  ColorModelValue,
  Checkbox,
  FormControl,
  HStack,
  Stack,
  Text,
  UseBreakpointOptions,
  Alert,
  AlertIcon,
  AlertDescription,
  useToast,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link as ReactLink, useLocation } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const LoginScreen = () => {
    const headingBreakPoint =useBreakpointValue({base:'xs',md:'sm'})
    const boxBreakPoint =useBreakpointValue({base:'transparent',md:'bg-surface'})
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email.")
          .required("An email Address is required."),
        password: Yup.string()
        .min( 1,"Password is too short-must contain atleast 1 character" ).required('Password is required')
    
      })} onSubmit ={(values)=>{
        dispatch(login(values.email,values.password))
      }}
    >
        {(formik)=>(
            <Container maxW='lg' py={{base:'12',md:'24'}} px={{base:'0',md:'8'}} minH='4xl'>
                <Stack spacing='10'>
                         <Stack spacing='8'>
                            <Stack spacing= {{base:'2' ,md:'3'}} testAlign='center'>
                                <Heading size={{headingBreakPoint}}>Login</Heading>
                                <HStack spacing='1' justify='center'>
                                    <Text color='muted'>Don't you have an account?</Text>
                                    <Button as={ReactLink} to='/registeration' variant='link' colorSchema='orange'>Sign Up</Button>
                                </HStack>
                            </Stack>
                         </Stack>
                         <Box py={{base:'0'}} px={{base:'5',md:'10'}} bg={{boxBreakPoint}} boxShadow={{base:'none',md:'xl'}}>
                            <Stack spacing='6' as='from' onSubmit={formik.handleSubmit}>
                                {error && (
                                     <Alert status='error'>
                                     <AlertIcon/>
                                     <AlertTitle>OOps!!!!!</AlertTitle>
                                     <AlertDescription>{error}</AlertDescription>
                                   </Alert>

                                )}
                            </Stack>
                         </Box>
                    </Stack>

              
            </Container>
        )}





    </Formik>
  );
};

export default LoginScreen;
