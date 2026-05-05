import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '~/components/Logo.js';

export default function Footer({
  translations,
}: {
  translations: Record<string, string>;
}) {
  const socials = [
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/company/team-duduka/',
    },
    {
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/teamduduka/',
    },
  ];

  return (
    <footer className="mt-24 flex flex-col flex-wrap gap-4 border-t border-t-neutral-800 bg-[#07070A] px-4 py-8 md:flex-row md:justify-around">
      <div className="flex flex-col gap-2">
        <Logo />
        <p className="text-sm font-medium text-neutral-300">
          {translations.marketing as string}
        </p>
        <p className="text-[10px] font-medium text-neutral-400">
          CNPJ: 66.355.624/0001-30
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <p className="font-medium text-neutral-300">
          {translations.socials as string}
        </p>
        <div className="flex gap-4 px-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-neutral-400 transition-colors duration-200 hover:text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <p className="w-full text-center text-[10px] font-medium text-neutral-400">
        {translations.copyright as string}
      </p>
    </footer>
  );
}
