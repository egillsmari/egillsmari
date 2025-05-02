'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

export type Language = 'en' | 'is';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'about.title': 'About me',
    'about.description': 'I\'m a 26-year-old software developer originally from Selfoss, now based in Reykjavík since 2019. My main focus is front-end development and I spend much of my free time learning and improving in that field. I am especially interested in working in fast-paced and ambitious environments where I can be involved in the development process from multiple angles. Currently, I am working to expand my skills to cover more full-stack technologies.',
    'career.title': 'Career',
    'education.title': 'Education',
    'education.description': 'BSc in Computer Science with a focus on Artificial Intelligence from Reykjavík University. Graduated with an average grade of 9.2.',
    'skills.title': 'Technical skills and tools',
    'contact.title': 'Contact',
    'contact.email': 'Send me a email at egill98@hotmail.com',
    'contact.phone': 'Or you can give me a call at',
    'other.title': 'Other',
    'other.dean': 'One of my proudest moments was making the dean list (forsetalistinn) at RU during my last semester. I\'ve always had a lot of interest in AI and machine learning and even made a demand forecasting model for Hopp\'s bike fleet as my final project you can read about it',
    'other.here': 'here',
    'other.if': 'if your are interested',
    'other.passionate': 'I am passionate about staying up-to-date with the latest tech trends. Recently, I attended the React Summit and JSNation in Amsterdam. I often engage in side projects to sharpen my skills and explore new technologies.',
    'other.projects': 'Here are some of my notable Projects\'s',
    'job.landsbankinn.title': 'Frontend developer | Landsbankinn',
    'job.landsbankinn.description': 'Working on the front end of all Landsbankinn websites and the Landsbankinn app. Tech stack includes Next.js and React, Prismic, a GraphQL layer written in TypeScript, and maintaining legacy solutions in ASPX, C#, and .NET. In addition to my software development responsibilities, I have led the party planning committee and have been responsible for multiple events, and contributing to a positive and fun work environment.',
    'job.hus.title': 'Consultant | Hús fasteignasala',
    'job.hus.description': 'Managing social media and ads for Hús real estate, along with providing technical consulting.',
    'job.klappir.title': 'Frontend developer | Klappir',
    'job.klappir.description': 'Worked part-time at Klappir developing and maintaining their marketing website with a focus on good SEO.',
    'job.arion.title': 'Intern | Arionbanki automation department',
    'job.arion.description': 'As part of my education at RU, I interned at ArionBanki. I developed a data discovery tool with a front end built in Next.js, React, and MUI, and a Python back end connected to various databases within the bank.',
    'job.treqs.title': 'Developer and QA | TReqs',
    'job.treqs.description': 'Received a Rannís grant with a group of classmates to develop and maintain the TReqs requirements tool, under the guidance of Grischa Liebel, Ph.D. The tool is used by software teams at Ericsson in Sweden.',
    'job.security.title': 'Security guard | Öryggismiðstöðin',
    'job.security.description': 'Worked part-time as a security guard while studying. Gained valuable experience staying calm and focused under pressure in various situations.',
    'skills.programming': 'Programming',
    'skills.programming.list': 'Typescript • HTML/CSS • Python • C# • Groovy',
    'skills.frameworks': 'Frameworks and libraries',
    'skills.frameworks.list': 'React • NextJS • Tailwind • Storybook • Emotion CSS • GraphQL • Unity • Sentry • Docker • Framer motion',
    'skills.tools': 'Tools and others',
    'skills.tools.list': 'Figma • Prismic • Hygraph • Apple dev console • Google console • Google analytics',
    'references.title': 'References',
    'references.arion': 'Arionbanki - Styrmir Óskarsson, 8256139, styrmir.oskarsson@arionbanki.is',
    'references.klappir': 'Klappir - Sólrún Sæmundssen, 6602063',
    'references.treqs': 'Treqs (Reykjavík University) - Grischa Liebel, 8256456, grischal@ru.is',
    'awards.title': 'Awards',
    'awards.dean': 'Dean\'s list (Forsetalistinn), Reykjavík University - Awarded to the top 6 students in their final year of my bachelor\'s degree.',
    'projects.title': 'Side Projects',
    'projects.personal': 'My personal website built with Next.js and Tailwind',
    'projects.gjaldmidlar': 'A currency converter project created to learn new technologies like Server Components, App Router, Data Fetching, and Caching',
    'projects.sidetrack': ' Website for the game Sidetrack, which I also developed',
    'projects.rannveig': 'Portfolio site built with Next.js and Hygraph CMS',
    'projects.eli-studio': 'Website for Eli Studio, a design studio based in Iceland.',
  },
  is: {
    'about.title': 'Um mig',
    'about.description': `Ég er {AGE} ára gamall tölvunarfræðingur upprunalega frá Selfossi, en hef búið í Reykjavík frá árinu 2019. Ég hef {WORKING} ár af reynslu og mitt sérsvið liggur í framendaforritun og eyði stórum hluta frítíma míns í að bæta mig og fræðast um sviðið. Ég hef mikinn áhuga á að vinna á stað þar sem hlutirnir gerast hratt og
ég get tekið þátt virkan þátt í þróuninni frá mörgum hliðum. Stefnan mín
er að færa mig meira yfir í fullstack í framtíðinni.`,
    'career.title': 'Ferill',
    'education.title': 'Menntun',
    'education.description': 'BSc í tölvunarfræði með áherslu á gervigreind frá Háskólanum í Reykjavík. Útskrifaðist með meðaleinkunnina 9.2',
    'skills.title': 'Tæknileg færni og verkfæri',
    'contact.title': 'Hafa samband',
    'contact.email': 'Sendu mér tölvupóst á egill98@hotmail.com',
    'contact.phone': 'Eða hringdu í mig í',
    'other.title': 'Annað',
    'other.dean': 'Eitt af því sem ég er stoltastur af er að hafa komist á forsetalistann í HR á síðustu önn minni og útskrifast með einkunnina 9,2! Ég hef alltaf haft mikinn áhuga á gervigreind og vélnámi og gerði jafnvel spálíkan fyrir hjólaflota Hopp sem lokaverkefni mitt sem þú getur lesið um',
    'other.here': 'hér',
    'other.if': 'ef þú hefur áhuga',
    'other.passionate': 'Ég hef mikla ástríðu fyrir því að fylgjast með nýjustu tæknitrendunum. Nýlega sótti ég React Summit og JSNation í Amsterdam. Ég tek oft þátt í hliðarverkefnum til að skerpa færni mína og kanna nýja tækni.',
    'other.projects': 'Hér eru nokkur af persónulegum verkefnum mínum',
    'job.landsbankinn.title': 'Hugbúnaðar sérfræðingur | Landsbankinn',
    'job.landsbankinn.description': 'Starfa í framenda hjá Landsbankanum við þróun á öllum vefsvæðum bankans og Landsbanka appinu. Notast við Next.js og React, Prismic, GraphQL-millilag í TypeScript og viðhald á eldri lausnum í ASPX, C# og .NET. Einnig verið í skemmtinefnd upplýsingatæknisviðs frá upphafi og skipulagt fjölda viðburða og lagt mitt af mörkum til að halda uppi góðri vinnustaðastemmningu.',
    'job.hus.title': 'Ráðgjafi | Hús fasteignasala',
    'job.hus.description': 'Sinni samfélagsmiðlum og auglýsingum fyrir Hús fasteignasölu, auk þess að veita tæknilega ráðgjöf.',
    'job.klappir.title': 'Framenda forritari | Klappir',
    'job.klappir.description': 'Unnið við bætingar á Klappir.is með áherslu á SEO og performance. Var hlutastarf á meðan ég lauk náminu.',
    'job.arion.title': 'Starfsnemi | Arionbanki Upplýsingatæknisvið',
    'job.arion.description': 'Sem hluti af náminu fór ég í starfsnám hjá Arionbanka. Þróaði þar data discovery-tól með framenda í Next.js, React og MUI og bakenda í Python sem tengdist fjölmörgum vöruhúsum bankans.',
    'job.treqs.title': 'Forritari og QA | TReqs',
    'job.treqs.description': 'Fékk Rannís-styrk ásamt hópi skólafélaga til að þróa og viðhalda Requirements-tólinu TReqs undir handleiðslu Grischa Liebel, Ph.D. Tólið er notað af hugbúnaðarteymi hjá Ericsson í Svíþjóð.',
    'job.security.title': 'Öryggisvörður | Öryggismiðstöðin',
    'job.security.description': 'Með skóla starfaði ég sem öryggisvörður og lærði að vinna undir pressu í ýmsum aðstæðum.',
    'skills.programming': 'Forritun',
    'skills.programming.list': 'Typescript • HTML/CSS • Python • C# • Groovy',
    'skills.frameworks': 'Frameworks, libraries og annað',
    'skills.frameworks.list': 'React • NextJS • Tailwind • Storybook • Emotion CSS • GraphQL • Unity • Sentry • Docker • Framer motion',
    'skills.tools': 'Tól og meria',
    'skills.tools.list': 'Figma • Prismic • Hygraph • Apple dev console • Google console • Google analytics • Vercel',
    'references.title': 'Meðmæli',
    'references.arion': 'Arionbanki - Styrmir Óskarsson, 8256139, styrmir.oskarsson@arionbanki.is',
    'references.klappir': 'Klappir - Sólrún Sæmundssen, 6602063',
    'references.treqs': 'Treqs (Háskólinn í Reykjavík) - Grischa Liebel, 8256456, grischal@ru.is',
    'awards.title': 'Viðurkenningar',
    'awards.dean': 'Forsetalistinn, Háskólinn í Reykjavík - Á síðustu önn minni fór ég á forsetalistann, sem aðeins 6 nemendur komust á með hæstu meðaleinkunnina.',
    'projects.title': 'Aukaverkefni',
    'projects.gjaldmidlar': 'Gengisbreytir gerð í þeim tilgangi að læra á betur á tækni eins og Server components, App router, Data Fetching og Caching',
    'projects.sidetrack': 'Vefsíða fyrir leikinn Sidetrack (Sem ég gerði líka)',
    'projects.rannveig': 'Portfolio vefsíða gerð með NextJS og Hygraph CMS',
    'projects.eli-studio': 'Vefsíða fyrir Eli Studio',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('is');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}