import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
} from "@react-email/components";

export const BasicEmail = ({ children }: React.PropsWithChildren) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body>
          <Container className="my-[20px] mx-auto p-[20px] max-w-4xl">
            <Heading>Welcome!</Heading>
            {children}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
