import { ContactEmail } from '@/components/email-template';
import { Resend } from 'resend';
import { FormValue } from '@/src/schema/form';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(resquest: Request): Promise<Response> {
  try {
    const body: FormValue = await resquest.json();
    const { name, email, assunto, mensagem } = body;
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'It Blue - Nova mensagem de contato',
      react: ContactEmail({ name, email, assunto, mensagem }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}