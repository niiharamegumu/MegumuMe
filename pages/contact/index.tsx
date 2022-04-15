import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FcFeedback } from "react-icons/fc";

import Seo from "../../components/Seo";
import { HeadH2 } from "../../components/style/Common";
import ContactType from "../../types/contact";

const Contact = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactType>();
  const toast = useToast();

  let sendContact = async (contactData: ContactType): Promise<boolean> => {
    const res = await fetch(BASE_URL + "/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(contactData),
    });
    const isSuccess = res.ok;
    return isSuccess;
  };

  const onSubmit: SubmitHandler<ContactType> = async (data) => {
    const isSuccess = await sendContact(data);
    toast({
      status: isSuccess ? "success" : "error",
      title: isSuccess
        ? "お問い合わせありがとうございます!"
        : "お問い合わせでエラーが発生しました...",
      description: isSuccess
        ? "ご確認の上、ご記載いただいたメールアドレス宛にご連絡致します。"
        : "ページの読み込み等を行って再度お問い合わせください。",
      position: "top",
      isClosable: true,
      duration: 5000,
    });
    isSuccess && reset({ name: "", mail: "", body: "" });
  };

  return (
    <>
      <Seo
        pageTitle="Contact"
        pageDescription="お問合さえはこちら"
        pageImg="https://megumu-me.vercel.app/icon.png"
        pageImgWidth={1280}
        pageImgHeight={640}
      />
      <HeadH2 display="flex" alignItems="center" gap={2}>
        <FcFeedback />
        contact
      </HeadH2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.name}>
          <FormLabel htmlFor="name">名前</FormLabel>
          <Input
            id="name"
            placeholder="お名前をご記入ください。"
            {...register("name", {
              required: "お名前をご記入ください。",
            })}
            color="gray.900"
            bg="gray.200"
            _placeholder={{ color: "gray.500" }}
          />
          {errors.name && (
            <FormErrorMessage>{errors.name.message}</FormErrorMessage>
          )}
          <FormControl isInvalid={!!errors.mail}>
            <FormLabel htmlFor="mail" mt={4}>
              メールアドレス
            </FormLabel>
            <Input
              id="mail"
              placeholder="xxxx@xxxx.com"
              {...register("mail", {
                required: "メールアドレスをご記入ください。",
                pattern: {
                  value:
                    /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                  message: "メールアドレスの形式が違います",
                },
              })}
              color="gray.900"
              bg="gray.200"
              _placeholder={{ color: "gray.500" }}
            />
            {errors.mail && (
              <FormErrorMessage>{errors.mail.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors.body}>
            <FormLabel htmlFor="body" mt={4}>
              お問い合わせ内容
            </FormLabel>
            <Textarea
              id="body"
              placeholder="お問い合わせ内容をご記入ください。"
              {...register("body", {
                required: "お問い合わせ内容をご記入ください。",
              })}
              h="30vh"
              color="gray.900"
              bg="gray.200"
              _placeholder={{ color: "gray.500" }}
            />
            {errors.body && (
              <FormErrorMessage>{errors.body.message}</FormErrorMessage>
            )}
          </FormControl>
        </FormControl>
        <Button
          mt={{ base: 6, md: 4 }}
          w={{ base: "100%", md: "auto" }}
          bg="gray.300"
          color="gray.900"
          fontWeight="bold"
          _hover={{
            bg: "blue.600",
            color: "gray.100",
          }}
          isLoading={isSubmitting}
          type="submit"
        >
          送信する
        </Button>
      </form>
    </>
  );
};

export default Contact;