import React, { useState } from "react";
import styled from "@emotion/styled";

import {
  blue,
  neutral,
  typeScale,
  secondaryFont,
  primaryFont,
  fontWeight,
} from "../utils";

import Input from "./Input";
import TextArea from "./TextArea";

const Form = styled.form`
  padding: 15px;
  color: ${neutral[100]};

  padding-top: 35px;
  padding-bottom: 35px;

  max-width: 500px;
  margin: 0 auto;
`;

const Title = styled.p`
  margin: 0px;
  font-size: ${typeScale.header5};
  font-family: ${secondaryFont};
  margin-bottom: 20px;
`;

const Submit = styled.input`
  background-color: ${blue[100]};
  padding: 16px;
  width: 100%;
  border: none;
  color: ${neutral[100]};
  font-family: ${primaryFont};
  font-weight: ${fontWeight.medium};
  font-size: ${typeScale.paragraph};
`;

const Wrapper = styled.div`
  background-color: ${blue[400]};
`;

const ContactForm = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const handleNameChange = (e) => setNameValue(e.target.value);
  const handleEmailChange = (e) => setEmailValue(e.target.value);
  const handleMessageChange = (e) => setMessageValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje Enviado");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Contact</Title>
        <Input label="name" value={nameValue} onChange={handleNameChange} />
        <Input label="email" value={emailValue} onChange={handleEmailChange} />
        <TextArea
          label="message"
          value={messageValue}
          onChange={handleMessageChange}
        />
        <Submit type="submit" value="send message" />
      </Form>
    </Wrapper>
  );
};

export default ContactForm;
