import React from "react";
import { FcIdea } from "react-icons/fc";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { FaAsterisk } from "react-icons/fa";
import { FcInvite } from "react-icons/fc";

import { HeadH2 } from "../components/style/Common";
import { useMail } from "../hooks/useMail";

interface IFormInput {
  firstName: string;
  lastName: string;
  body: string;
}

const Contact = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const { setFirstName, setLastName, setMessage, send } = useMail();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setMessage(data.body);
    send();
  };

  return (
    <>
      <HeadH2 display="flex" alignItems="center" gap={2}>
        <FcInvite />
        contact
      </HeadH2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={10}>
          <Flex justify="center" gap={5}>
            <Box flexBasis="50%">
              <FormLabel htmlFor="lastName" display="flex">
                姓
                <Box fontSize="8px" color="red.300">
                  <FaAsterisk />
                </Box>
              </FormLabel>
              <Controller
                name="lastName"
                rules={{ required: true }}
                control={control}
                defaultValue=""
                render={({ field }) => <Input {...field} id="lastName" />}
              />
              {errors.lastName && (
                <Text color="red.400" mt={2}>
                  姓を入力して下さい。
                </Text>
              )}
            </Box>
            <Box flexBasis="50%">
              <FormLabel htmlFor="firstName" display="flex">
                名
                <Box fontSize="8px" color="red.300">
                  <FaAsterisk />
                </Box>
              </FormLabel>
              <Controller
                name="firstName"
                rules={{ required: true }}
                control={control}
                defaultValue=""
                render={({ field }) => <Input {...field} id="firstName" />}
              />
              {errors.firstName && (
                <Text color="red.400" mt={2}>
                  名を入力して下さい。
                </Text>
              )}
            </Box>
          </Flex>
          <Box>
            <FormLabel htmlFor="body" display="flex">
              お問い合わせ内容
              <Box fontSize="8px" color="red.300">
                <FaAsterisk />
              </Box>
            </FormLabel>
            <Controller
              name="body"
              rules={{ required: true }}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Textarea id="body" h="300px" {...field}></Textarea>
              )}
            />
            {errors.body && (
              <Text color="red.400" mt={2}>
                お問い合わせ内容をご入力下さい。
              </Text>
            )}
          </Box>
          <Flex justify="center">
            <Button
              flexBasis="100%"
              h="60px"
              type="submit"
              colorScheme="teal"
              _focus={{ boxShadow: "none" }}
            >
              送信する
            </Button>
          </Flex>
        </Stack>
      </form>
    </>
  );
};
export default Contact;
