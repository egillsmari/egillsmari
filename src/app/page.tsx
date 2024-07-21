import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 font-mono">
<div className="z-10 w-full max-w-5xl font-mono text-sm">
  <div className="flex flex-col lg:flex-row items-center justify-between">
    <div className="flex-1">
      <h1>Egill Smári Snorrason</h1>
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
    </div>
  </div>
</div>
      <div className="flex justify-center items-center my-4">
        <Image
          src="/me3.jpg"
          width={200}
          height={200}
          alt="centered image of me"
          className=""
        />
      </div>
      <div className="space-y-12 mt-8 max-w-[820px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold">About me</h2>
          <p className="mt-2 text-left">
            My name is Egill and I&apos;m a 26 year old software developer from
            Iceland. I have just over two years of experience in the field of
            software development and my expertise lies in frontend development.
            I thirve in fast-paced environments and I am always looking for new
            challenges to improve my skills as a developer.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-10">Career</h2>

          <ol className="relative border-s border-gray-200 dark:border-gray-700 text-left">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                June 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Frontend developer | Landsbankinn
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                I currently work at Landsbankinn on the Landsbankinn mobile app,
                online bank, and multiple other websites.
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                March 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Frontend developer | Klappir
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Worked part-time at Klappir developing and maintaining their
                marketing website.
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                January 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Intern | Arionbanki automation department
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                As part of my education at RU, I was an intern at Arionbanki for
                one semester where I worked on a data discovery tool for the
                customer experience department.
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                May 2021
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Developer and QA | TReqs
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Developed and tested the technical requirements tool, TReqs,
                under the supervision of Grischa Liebel, Ph.D., at RU. The tool
                is used by over a hundred developers at Ericsson in Sweden.
              </p>
            </li>
            <li className="ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                April 2018
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Security guard | Öryggismiðstöðin
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                With school, I worked as a security guard for Öryggismiðstöðin.
                There I learned how to work under pressure and respond fast to
                situations.
              </p>
            </li>
          </ol>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="mt-2 text-left">
            BSc in computer science with an emphasis on Artificial intelligence
            from Reykjavík University.
          </p>
        </div>
        <div className="">
          <h2 className="text-3xl font-bold text-center">
            Technical skills and tools
          </h2>
          <ul className="flex list-disc flex-wrap ml-6 mt-8 items-center justify-between dark:text-white">
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
          <ul className="flex list-disc flex-wrap ml-6 mt-8 items-center justify-between dark:text-white">
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
          <ul className="flex list-disc flex-wrap ml-6 mt-8 items-center justify-between dark:text-white">
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
          <ul className="flex list-disc flex-wrap ml-6 mt-8 items-center justify-between dark:text-white">
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
          <ul className="flex list-disc flex-wrap ml-6 mt-8 items-center justify-between dark:text-white">
            <li>
              <p className="me-4 md:me-6 ">Apple & Google developer console</p>
            </li>
            <li>
              <p className="me-4 md:me-6">Python</p>
            </li>
            <li>
              <p className="me-4 md:me-6 ">C#</p>
            </li>

          </ul>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <p className="mt-2 text-left">
            Send me a email at egill98@hotmail.com
          </p>
          <p className="mt-2 text-left">
            Or you can give me a call at &nbsp;
            <a href="tel:+354 849 8824">+354 849 8824</a>
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-center">Other</h2>
          <p className="mt-2 text-left">
            One of my proudest moments was making the dean list (forsetalistinn)
            at RU during my last semester and graduating with a grade of 9.2!
            I&apos;ve always had a lot of interest in AI and machine learning
            and even made a demand forecasting model for Hopp&apos;s bike fleet
            as my final project you can read about it&nbsp;
            <a
              className="underline underline-offset-2 text-white"
              href="https://skemman.is/bitstream/1946/41884/4/final-report.pdf"
              target='blank'
            >
              here
            </a>
            &nbsp;if your are interested
          </p>
          <p className="mt-2 text-left">
            I am passionate about staying up-to-date with the latest tech
            trends. Recently, I attended the React Summit and JSNation in
            Amsterdam. I often engage in side projects to sharpen my skills and
            explore new technologies.
          </p>
          <p className="mt-2 mb-2 text-left">
            Here are some of my notable Projects&apos;s
          </p>
          <ul className="list-disc ml-4">
            <li className="pb-2">
              <a
                className="underline underline-offset-2 text-white font-bold"
                href="https://egillsmari.itch.io/track-drawer"
              >
                SideTrack
              </a>
              &nbsp;is 2d platformer and the mobile app is currently in beta!
            </li>
            <li className="pb-2">
              <a
                className="underline underline-offset-2 text-white font-bold"
                href="https://www.eli-studios.com/"
              >
                Eli-studios
              </a>
              &nbsp;is a website that sells jewelry and is currently in
              development
            </li>
            <li className="pb-2">
              <a
                className="underline underline-offset-2 text-white font-bold"
                href="https://www.rannveigola.com/"
              >
                Rannveig Óla
              </a>
              &nbsp;is a portfolio website
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
