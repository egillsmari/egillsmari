'use client';

import Image from 'next/image';
import LanguageSwitcher from './components/LanguageSwitch';
import { LanguageProvider, useLanguage } from './l18n';

// Make the Home component client-side only
export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}

// Separate component that uses the language context
function HomeContent() {
  const bornDate = new Date('1998-06-09');
  const today = new Date();
  const ageInMs = today.getTime() - bornDate.getTime();
  const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
  
  // Get language context within the component that's wrapped by LanguageProvider
  const { t } = useLanguage();

  const statedWorking = new Date('2022-03-28');
  const statedWorkingInMs = today.getTime() - statedWorking.getTime();
  const statedWorkingInYears = statedWorkingInMs / (1000 * 60 * 60 * 24 * 365.25);

  return <main className="flex min-h-screen flex-col items-center justify-between p-8 font-mono text-base md:text-sm text-white">
      <div className="z-10 w-full max-w-5xl font-mono">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl font-bold">Egill Smári Snorrason</h1>
          </div>
          <div className="flex-1 flex justify-end space-x-4 mt-4 lg:mt-0">
            <a
              className="cursor-pointer"
              target="blank"
              href="https://www.linkedin.com/in/egill-sm%C3%A1ri-snorrason-260784216/"
            >
              <Image src="/linkedin.png" width={25} height={25} alt="logo" />
            </a>
            <a
              className="cursor-pointer"
              target="blank"
              href="https://github.com/egillsmari"
            >
              <Image src="/github.png" width={25} height={25} alt="logo" />
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-4">
        <Image
          src="/egill.png"
          width={200}
          height={200}
          alt="centered image of me"
          className=""
        />
      </div>
      <div className="space-y-12 mt-8 max-w-[820px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold">{t('about.title')}</h2>
          <p className="mt-2 text-left text-base md:text-sm font-medium">
            {t('about.description').replace('{AGE}', ageInYears.toPrecision(3)).replace('{WORKING}', statedWorkingInYears.toPrecision(2))}
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-10">{t('career.title')}</h2>

          <ol className="relative border-s border-gray-200 text-left">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-600">
                June 2022
              </time>
              <h3 className="text-lg font-semibold text-white">
                {t('job.landsbankinn.title')}
              </h3>
              <p className="text-base font-medium text-gray-300">
                {t('job.landsbankinn.description')}
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-600">
                May 2024
              </time>
              <h3 className="text-lg font-semibold text-white">
                {t('job.hus.title')}
              </h3>
              <p className="text-base font-medium text-gray-300">
                {t('job.hus.description')}
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-600">
                March 2022
              </time>
              <h3 className="text-lg font-semibold text-white">
                {t('job.klappir.title')}
              </h3>
              <p className="text-base font-medium text-gray-300">
                {t('job.klappir.description')}
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-600">
                January 2022
              </time>
              <h3 className="text-lg font-semibold text-white">
                {t('job.arion.title')}
              </h3>
              <p className="text-base font-medium text-gray-300">
                {t('job.arion.description')}
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-600">
                May 2021
              </time>
              <h3 className="text-lg font-semibold text-white">
                {t('job.treqs.title')}
              </h3>
              <p className="text-base font-medium text-gray-300">
                {t('job.treqs.description')}
              </p>
            </li>
            <li className="ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-600">
                April 2018
              </time>
              <h3 className="text-lg font-semibold text-white">
                {t('job.security.title')}
              </h3>
              <p className="text-base font-medium text-gray-300">
                {t('job.security.description')}
              </p>
            </li>
          </ol>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">{t('education.title')}</h2>
          <p className="mt-2 text-left text-base md:text-sm font-medium">
            {t('education.description')}
          </p>
        </div>
        <div className="">
          <h2 className="text-3xl font-bold text-center">
            {t('skills.title')}
          </h2>
          <ul className="flex list-disc flex-wrap ml-6 mt-8 items-center justify-between">
            <li>
              <p className="me-4 md:me-6 ">React</p>
            </li>
            <li>
              <p className="me-4 md:me-6">NextJS</p>
            </li>
            <li>
              <p className="me-4 md:me-6 ">Tailwind</p>
            </li>
            <li>
              <p className="me-4 md:me-6">Typescript</p>
            </li>
          </ul>
          <ul className="flex list-disc flex-wrap ml-6 mt-8 items-center justify-between">
            <li>
              <p className="me-4 md:me-6 ">Sentry</p>
            </li>
            <li>
              <p className="me-4 md:me-6">Google analytics</p>
            </li>
            <li>
              <p className="me-4 md:me-6 ">GraphQL</p>
            </li>
            <li>
              <p className="me-4 md:me-6">Monorepo (Yarn workspaces)</p>
            </li>
          </ul>
          <ul className="flex list-disc flex-wrap ml-6 mt-8 items-center justify-between">
            <li>
              <p className="me-4 md:me-6 ">Css</p>
            </li>
            <li>
              <p className="me-4 md:me-6">Figma</p>
            </li>
            <li>
              <p className="me-4 md:me-6 ">CMS (Hygraph & Prismic)</p>
            </li>
            <li>
              <p className="me-4 md:me-6">Storybook</p>
            </li>
          </ul>
          <ul className="flex list-disc flex-wrap ml-6 mt-8 items-center justify-between">
            <li>
              <p className="me-4 md:me-6 ">Git</p>
            </li>
            <li>
              <p className="me-4 md:me-6">Python</p>
            </li>
            <li>
              <p className="me-4 md:me-6 ">C#</p>
            </li>
            <li>
              <p className="me-4 md:me-6">Unity</p>
            </li>
          </ul>
          <ul className="flex list-disc flex-wrap ml-6 mt-8 items-center justify-between">
            <li>
              <p className="me-4 md:me-6 ">Apple & Google developer console</p>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">{t('contact.title')}</h2>
          <p className="mt-2 text-left text-base md:text-sm font-medium">
            {t('contact.email')}
          </p>
          <p className="mt-2 text-left text-base md:text-sm font-medium">
            {t('contact.phone')} &nbsp;
            <a href="tel:+354 849 8824">+354 849 8824</a>
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-center">{t('other.title')}</h2>
          <p className="mt-2 text-left text-base md:text-sm font-medium">
            {t('other.dean')}&nbsp;
            <a
              className="underline underline-offset-2 text-white"
              href="https://skemman.is/bitstream/1946/41884/4/final-report.pdf"
              target="blank"
            >
              {t('other.here')}
            </a>
            &nbsp;{t('other.if')}
          </p>
          <p className="mt-2 text-left text-base md:text-sm font-medium">
            {t('other.passionate')}
          </p>
          <p className="mt-8 mb-2 text-left text-base md:text-sm font-medium">
            {t('other.projects')}
          </p>
          <ul className="list-disc ml-4">
            <li className="pb-2">
              <a
                className="underline underline-offset-2 text-white font-bold"
                href="https://sidetrack.ink/"
                target='blank'
              >
                SideTrack
              </a>
              &nbsp;{t('projects.sidetrack')}
            </li>
            <li className="pb-2">
              <a
                className="underline underline-offset-2 text-white font-bold"
                href="https://www.eli-studios.com/"
                target='blank'
              >
                Eli-studios
              </a>
              &nbsp;{t('projects.eli-studio')}
            </li>
            <li className="pb-2">
              <a
                className="underline underline-offset-2 text-white font-bold"
                href="https://www.rannveigola.com/"
                target='blank'
              >
                Rannveig Óla
              </a>
              &nbsp;  &nbsp;{t('projects.rannveig')}
            </li>
            <li className="pb-2">
              <a
              target='blank'
                className="underline underline-offset-2 text-white font-bold"
                href="https://www.gjaldmidlar.is/"
              >
                Gjaldmiðlar
              </a>
              &nbsp; {t('projects.gjaldmidlar')}
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left"></div>
    </main>
}
