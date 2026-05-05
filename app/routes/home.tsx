import type { Route } from './+types/home';
import HomePage from '../pages/home/home';
import { redirect } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'TEAM DUDUKA — You think. We build.' },
    {
      name: 'description',
      content:
        'We develop apps, systems, websites and automations for businesses ready to grow. Design, marketing, tech support and much more.',
    },
  ];
}

export default function Home() {
  return <HomePage />;
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const whatsapp = formData.get('whatsapp') as string;
  const serviceType = formData.get('service_type') as string;
  const message = formData.get('message') as string;
  const errors: Record<string, string> = {};

  if (!name?.trim()) errors.name = 'validation.required';
  if (!email?.trim()) errors.email = 'validation.required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = 'validation.invalid_email';
  if (!whatsapp?.trim()) errors.whatsapp = 'validation.required';
  else if (whatsapp.replace(/\D/g, '').length < 8)
    errors.whatsapp = 'validation.invalid_phone';
  if (!serviceType) errors.service_type = 'validation.required';
  if (!message?.trim()) errors.message = 'validation.required';

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const text = `Fala ai! Sou ${name} vim pelo site da Team Duduka, tenho interesse no serviço de ${serviceType} e gostaria de saber mais informações sobre como contratar. Segue minha mensagem:\nMensagem: ${message}`;
  const encoded = encodeURIComponent(text);

  // TODO: Save e-mail and whatsapp in a database to contact the user later

  return redirect(`https://wa.me/5511966198366?text=${encoded}`);
}
