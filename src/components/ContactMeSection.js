import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen, onClose } = useAlertContext();
  const hasHandledResponse = useRef(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      proposal: "",
      comment: "",
    },
    onSubmit: async (values) => {
      await submit("/api/submit", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      proposal: Yup.string().required("Type of enquiry is required"),
      comment: Yup.string().required("Message is required"),
    }),
  });

  useEffect(() => {
    if (!response || hasHandledResponse.current) return;

    if (response.type === "success") {
      onOpen("success", response.message);
      formik.resetForm();
    } else if (response.type === "error") {
      onOpen("error", response.message);
    }

    hasHandledResponse.current = true;

    const timer = setTimeout(() => {
      onClose();
      hasHandledResponse.current = false;
    }, 5000);

    return () => clearTimeout(timer);
  }, [response, onOpen, onClose, formik]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      p={8}
      spacing={8}
    >
      <VStack alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={
                  formik.touched.firstName && !!formik.errors.firstName
                }
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.email && !!formik.errors.email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.proposal && !!formik.errors.proposal}
              >
                <FormLabel htmlFor="proposal">Type of enquiry</FormLabel>
                <Select
                  id="proposal"
                  name="proposal"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.proposal}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.proposal}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.comment && !!formik.errors.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.comment}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
