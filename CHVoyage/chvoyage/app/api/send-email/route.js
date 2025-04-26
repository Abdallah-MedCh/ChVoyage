import { EmailTemplate } from '../../_commponents/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['med97chaabani@gmail.com'],
      subject: 'Order ChVoyage',
      react: <EmailTemplate data={body} />,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}