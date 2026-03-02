import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
  Heading,
} from '@react-email/components';
import tailwindConfig from '../tailwind.config';

interface ContactEmailProps {
  name: string;
  email: string;
  assunto: string;
  mensagem: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const ContactEmail = ({
  name,
  email,
  assunto,
  mensagem,
}: ContactEmailProps) => (
  <Html>
    <Head />
    <Tailwind config={tailwindConfig}>
      <Body className="bg-white font-sans">
        <Preview>Nova mensagem de contato: {assunto}</Preview>
        <Container className="mx-auto py-10 pb-12 px-2">
          { }
          <Img
            src={"/public/logo/Logoitblue.png"}
            width="70"
            height="70"
            alt="Logo"
            className="mx-auto"
          />

          <Heading className="text-2xl font-bold text-center mt-4">
            Novo Contato Recebido!
          </Heading>

          <Section className="mt-8">
            <Text className="text-[16px] leading-[26px]">
              <strong>Nome:</strong> {name}
            </Text>
            <Text className="text-[16px] leading-[26px]">
              <strong>E-mail:</strong> {email}
            </Text>
            <Text className="text-[16px] leading-[26px]">
              <strong>Assunto:</strong> {assunto}
            </Text>

            <Hr className="border-[#cccccc] my-5" />

            <Text className="text-[16px] leading-[26px] bg-gray-50 p-4 rounded">
              <strong>Mensagem:</strong>
              <br />
              {mensagem}
            </Text>
          </Section>

          <Text className="text-[14px] text-gray-500 mt-8 text-center">
            Este e-mail foi enviado através do formulário de contato do seu site.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);