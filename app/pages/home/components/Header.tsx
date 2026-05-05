import { useTranslation } from 'react-i18next';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import { useState } from 'react';
import i18n from 'i18next';
import Logo from '~/components/Logo.js';

export default function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: t('services'), href: '#services' },
    { label: t('portfolio'), href: '#portfolio' },
    { label: t('contact'), href: '#contact-us' },
  ];

  return (
    <div className="bg-background flex flex-col sticky top-0">
      <header className="flex h-16 items-center justify-between border-b border-b-white/5 p-2 sm:px-8">
        <Logo />
        <nav className="hidden gap-4 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              label={link.label}
            />
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden gap-2 rounded-lg border border-neutral-800 px-2 py-1 lg:flex">
            <LanguageSwitcherButton label="PT" language="pt" />
            <LanguageSwitcherButton label="EN" language="en" />
            <LanguageSwitcherButton label="ES" language="es" />
          </div>
          <a
            href="#contact-us"
            className="bg-main max-w-24 rounded-lg p-2 text-center text-xs font-semibold text-wrap text-white sm:max-w-none lg:px-4 lg:text-sm"
          >
            {t('quote')}
          </a>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-2xl font-semibold text-neutral-300 transition-all hover:text-white active:scale-95 lg:hidden"
          >
            {isOpen ? <IoIosClose /> : <IoIosMenu />}
          </button>
        </div>
      </header>
      {isOpen && (
        <nav className="flex w-screen flex-col gap-4 px-4 py-6 lg:hidden">
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              label={link.label}
            />
          ))}
          <hr className="border-neutral-800" />
          <div className="flex justify-center gap-4">
            <LanguageSwitcherButton label="PT" language="pt" />
            <LanguageSwitcherButton label="EN" language="en" />
            <LanguageSwitcherButton label="ES" language="es" />
          </div>
          <hr className="border-neutral-800" />
        </nav>
      )}
    </div>
  );
}

function LanguageSwitcherButton({
  label,
  language,
}: {
  label: string;
  language: string;
}) {
  return (
    <button
      className={`${language === i18n.language && 'border-[#00000000] bg-[oklch(0.546_0.245_265.881)] text-white'} rounded-sm border border-neutral-700 px-4 py-2 text-xs font-semibold text-neutral-500 transition-all duration-300 hover:border-neutral-500 hover:text-white active:scale-95 lg:border-none lg:px-2 lg:py-1 lg:text-[10px]`}
      onClick={() => i18n.changeLanguage(language)}
    >
      {label.toUpperCase()}
    </button>
  );
}

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <a
      onClick={onClick}
      href={href}
      draggable={false}
      className="text-sm font-semibold text-neutral-400 transition-all hover:text-white active:scale-95"
    >
      {label}
    </a>
  );
}
