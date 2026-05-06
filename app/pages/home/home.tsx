import Header from './components/Header.js';
import { useTranslation } from 'react-i18next';
import ServiceCard from './components/ServiceCard.js';
import { IoCodeSlash, IoSettingsOutline } from 'react-icons/io5';
import { TbWorld } from 'react-icons/tb';
import { MdColorLens } from 'react-icons/md';
import { HiOutlineMegaphone } from 'react-icons/hi2';
import { FiTool } from 'react-icons/fi';
import { FaMobileAlt, FaRegFileAlt } from 'react-icons/fa';
import Footer from './components/Footer.js';
import StepCard from './components/StepCard.js';
import HowItWorksCard from './components/HowItWorksCard.js';
import PortfolioLink from './components/PortfolioLink.js';
import MemberCard from './components/MemberCard.js';
import ContactForm from './components/form/Form.js';
import { motion } from 'motion/react';
import Danilo from '~/assets/images/danilo.jpeg';
import Oliveira from '~/assets/images/oliveira.png';
import Eduardo from '~/assets/images/eduardo.png';
import Duduka from '~/assets/images/duduka_capa.png';
import Logo from '~/components/Logo.js';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col gap-12 lg:gap-24">
      <Header />
      <section className="flex flex-col gap-4 px-4 lg:flex-row lg:items-center lg:justify-between lg:px-36 xl:px-24">
        <div className="flex flex-col gap-4 lg:flex-2">
          <motion.h1
            initial={{ opacity: 0, y: 20, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ ease: 'easeInOut' }}
            className="text-4xl font-bold text-white lg:text-6xl"
          >
            {t('home.welcome')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeInOut', delay: 0.1 }}
            className="text-sm font-semibold text-neutral-400 lg:text-base"
          >
            {t('home.description')}
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeInOut', delay: 0.2 }}
            href="#contact-us"
            className="bg-main self-start rounded-lg px-5 py-3 text-sm font-semibold text-white transition-all ease-in-out hover:bg-blue-600 active:scale-95"
          >
            {t('home.contact_us')}
          </motion.a>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeInOut', delay: 0.15 }}
          className="flex flex-col items-center lg:flex-1"
        >
          <img
            src={Duduka}
            className="h-[500px] w-full max-w-sm rounded-xl object-cover object-top"
          />
          <p className="mt-4 text-lg font-bold text-white">Duduka</p>
          <p className="text-sm text-neutral-400">{t('home.founder_ceo')}</p>
          <p className="text-xs text-neutral-500">{t('home.degree')}</p>
        </motion.div>
      </section>
      <section
        className="flex w-full flex-col items-center gap-12 px-4 md:px-12"
        id="services"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ease: 'easeInOut' }}
        >
          <SectionTitle>{t('home.our_services')}</SectionTitle>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <IoCodeSlash />, key: 'service_1' },
            { icon: <TbWorld />, key: 'service_2' },
            { icon: <MdColorLens />, key: 'service_3' },
            { icon: <HiOutlineMegaphone />, key: 'service_4' },
            { icon: <FiTool />, key: 'service_5' },
            { icon: <FaRegFileAlt />, key: 'service_6' },
            { icon: <FaMobileAlt />, key: 'service_7' },
            { icon: <IoSettingsOutline />, key: 'service_8' },
          ].map(({ icon, key }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ ease: 'easeInOut', delay: i * 0.08 }}
            >
              <ServiceCard
                icon={icon}
                title={t(`home.${key}_title`)}
                description={t(`home.${key}_description`)}
              />
            </motion.div>
          ))}
        </div>
      </section>
      <section className="bg-secondary-background flex flex-col items-center gap-8 px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ease: 'easeInOut' }}
        >
          <SectionTitle>{t('home.why_choose_us')}</SectionTitle>
        </motion.div>
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="flex w-full justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ ease: 'easeInOut', delay: i * 0.1 }}
          >
            <StepCard
              index={i}
              title={t(`home.why_choose_us_${i}_title`)}
              description={t(`home.why_choose_us_${i}_description`)}
            />
          </motion.div>
        ))}
      </section>
      <section className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ease: 'easeInOut' }}
        >
          <SectionTitle>{t('home.how_it_works')}</SectionTitle>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ ease: 'easeInOut', delay: i * 0.1 }}
            >
              <HowItWorksCard
                index={i}
                title={t(`home.how_it_works_${i}_title`)}
                description={t(`home.how_it_works_${i}_description`)}
              />
            </motion.div>
          ))}
        </div>
      </section>
      <section
        className="bg-secondary-background flex w-full flex-col gap-8 px-4 py-8"
        id="portfolio"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ease: 'easeInOut' }}
        >
          <SectionTitle>{t('home.portfolio')}</SectionTitle>
        </motion.div>
        <div className="flex w-full flex-wrap justify-center gap-8">
          {[
            // {
            //   titleKey: 'home.e-commerce_platform',
            //   descKey: 'home.e-commerce_platform_description',
            //   link: import.meta.env.VITE_E_COMMERCE_APP_PORTFOLIO_URL,
            // },
            // {
            //   titleKey: 'home.managament_application',
            //   descKey: 'home.managament_application_description',
            //   link: import.meta.env.VITE_MANAGEMENT_APP_PORTFOLIO_URL,
            // },
            {
              titleKey: 'home.team_duduka_landing_page',
              descKey: 'home.team_duduka_landing_page_description',
              link: import.meta.env.VITE_TEAM_DUDUKA_LANDING_PAGE_GITHUB_URL,
              image: <Logo />,
              svg: true,
            },
          ].map(({ titleKey, descKey, link, image, svg }, i) => (
            <motion.div
              key={titleKey}
              className="w-full max-w-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ ease: 'easeInOut', delay: i * 0.1 }}
            >
              <PortfolioLink
                title={t(titleKey)}
                description={t(descKey)}
                link={link}
                image={image}
                svg={svg}
              />
            </motion.div>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center gap-8 px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ease: 'easeInOut' }}
        >
          <SectionTitle>{t('home.our_team')}</SectionTitle>
        </motion.div>
        <div className="flex flex-col items-center gap-8 md:flex-row">
          {[
            {
              nameKey: 'home.team_member_2',
              roleKey: 'home.team_member_2_role',
              formationKey: 'home.team_member_2_formation',
              image: Danilo,
            },
            {
              nameKey: 'home.team_member_1',
              roleKey: 'home.team_member_1_role',
              formationKey: 'home.team_member_1_formation',
              image: Eduardo,
            },
            {
              nameKey: 'home.team_member_3',
              roleKey: 'home.team_member_3_role',
              formationKey: 'home.team_member_3_formation',
              image: Oliveira,
            },
          ].map(({ nameKey, roleKey, formationKey, image }, i) => (
            <motion.div
              key={nameKey}
              className="w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ ease: 'easeInOut', delay: i * 0.1 }}
            >
              <MemberCard
                name={t(nameKey)}
                role={t(roleKey)}
                formation={t(formationKey)}
                image={image}
              />
            </motion.div>
          ))}
        </div>
        <motion.p
          className="text-neutral-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: 'easeInOut', delay: 0.3 }}
        >
          {t('home.other_team_members')}
        </motion.p>
      </section>
      <section
        className="flex flex-col items-center gap-8 px-4"
        id="contact-us"
      >
        <SectionTitle>{t('home.contact_us')}</SectionTitle>
        <ContactForm
          translations={{
            name: t('home.input.full_name'),
            email: t('home.input.email'),
            whatsapp: t('home.input.whatsapp'),
            service_type: t('home.input.service_type'),
            select_service: t('home.input.select_service'),
            message: t('home.input.message'),
            submit: t('home.button.send_message'),
            service_options: [
              t('home.service_option_1'),
              t('home.service_option_2'),
              t('home.service_option_3'),
              t('home.service_option_4'),
              t('home.service_option_5'),
              t('home.service_option_6'),
              t('home.service_option_7'),
              t('home.service_option_8'),
              t('home.service_option_9'),
            ],
          }}
        />
      </section>
      <Footer
        translations={{
          marketing: t('home.footer_marketing'),
          socials: t('home.footer_socials'),
          copyright: t('home.footer_copyright', {
            year: new Date().getFullYear(),
          }),
        }}
      />
    </main>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-3xl font-bold text-white">{children}</h2>
  );
}
