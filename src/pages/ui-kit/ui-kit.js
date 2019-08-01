import React from "react";
import { Container } from "../../components/layout/layout";
import { Header, Text } from "../../components/typography/typorgraphy";
import { Input, InputField } from "../../components/form/";

export function UiKit() {
  return (
    <Container>
      <Header>UiKit </Header>
      <Text type="lead">
        You might have previously known these as “stateless components”. We’re
        now introducing the ability to use React state from these, so we prefer
        the name “function components”. Hooks don’t work inside classes. But you
        can use them instead of writing classes.
      </Text>
      <Header size="4">Inputs</Header>
      {/* <Text>This is my input</Text> */}
      <InputField title="Url input">
        <Input
          placeholder="example"
          type="url"
          prefix="http://"
          sufix=".conpage.me"
          size="l"
        />
      </InputField>
    </Container>
  );
}
