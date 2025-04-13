'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'is';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'about.title': 'About me',
    'about.description': 'My name is Egill and I\'m a {age} year old software developer from Iceland. I have {experience} years of experience in the field of software development and my expertise lies in frontend development. I thirve in fast-paced environments and I am always looking for new challenges to improve my skills as a developer.',
    'career.title': 'Career',
    'education.title': 'Education',
    'education.description': 'BSc in computer science with an emphasis on Artificial intelligence from Reykjavík University.',
    'skills.title': 'Technical skills and tools',
    'contact.title': 'Contact',
    'contact.email': 'Send me a email at egill98@hotmail.com',
    'contact.phone': 'Or you can give me a call at',
    'other.title': 'Other',
    'other.dean': 'One of my proudest moments was making the dean list (forsetalistinn) at RU during my last semester and graduating with a grade of 9.2! I\'ve always had a lot of interest in AI and machine learning and even made a demand forecasting model for Hopp\'s bike fleet as my final project you can read about it',
    'other.here': 'here',
    'other.if': 'if your are interested',
    'other.passionate': 'I am passionate about staying up-to-date with the latest tech trends. Recently, I attended the React Summit and JSNation in Amsterdam. I often engage in side projects to sharpen my skills and explore new technologies.',
    'other.projects': 'Here are some of my notable Projects\'s',
    'job.landsbankinn.title': 'Frontend developer | Landsbankinn',
    'job.landsbankinn.description': 'I currently work at Landsbankinn on the Landsbankinn mobile app, online bank, and multiple other websites. In addition to my software development responsibilities, I have also led the party planning committee and overseen the planning of multiple events.',
    'job.klappir.title': 'Frontend developer | Klappir',
    'job.klappir.description': 'Worked part-time at Klappir developing and maintaining their marketing website with a focus on SEO.',
    'job.arion.title': 'Intern | Arionbanki automation department',
    'job.arion.description': 'As part of my education at RU, I was an intern at Arionbanki for one semester where I worked on a data discovery tool for the customer experience department.',
    'job.treqs.title': 'Developer and QA | TReqs',
    'job.treqs.description': 'Developed and tested the technical requirements tool, TReqs, under the supervision of Grischa Liebel, Ph.D., at RU. The tool is used by over a hundred developers at Ericsson in Sweden.',
    'job.security.title': 'Security guard | Öryggismiðstöðin',
    'job.security.description': 'With school, I worked as a security guard for Öryggismiðstöðin. There I learned how to work under pressure and respond fast to situations.',
  },
  is: {
    'about.title': 'Um mig',
    'about.description': 'Ég heiti Egill og ég er {age} ára gamall hugbúnaðarþróunarfræðingur frá Íslandi. Ég hef {experience} ára reynslu á sviði hugbúnaðarþróunar og mín sérfræðiþekking liggur í framendaþróun. Ég þrífst í hröðu umhverfi og er alltaf að leita að nýjum áskorunum til að bæta færni mína sem þróunarfræðingur.',
    'career.title': 'Ferill',
    'education.title': 'Menntun',
    'education.description': 'BSc í tölvunarfræði með áherslu á gervigreind frá Háskólanum í Reykjavík.',
    'skills.title': 'Tæknileg færni og verkfæri',
    'contact.title': 'Hafa samband',
    'contact.email': 'Sendu mér tölvupóst á egill98@hotmail.com',
    'contact.phone': 'Eða hringdu í mig í',
    'other.title': 'Annað',
    'other.dean': 'Eitt af því sem ég er stoltastur af er að hafa komist á forsetalistann í HR á síðustu önn minni og útskrifast með einkunnina 9,2! Ég hef alltaf haft mikinn áhuga á gervigreind og vélnámi og gerði jafnvel spálíkan fyrir hjólaflota Hopp sem lokaverkefni mitt sem þú getur lesið um',
    'other.here': 'hér',
    'other.if': 'ef þú hefur áhuga',
    'other.passionate': 'Ég hef mikla ástríðu fyrir því að fylgjast með nýjustu tæknitrendunum. Nýlega sótti ég React Summit og JSNation í Amsterdam. Ég tek oft þátt í hliðarverkefnum til að skerpa færni mína og kanna nýja tækni.',
    'other.projects': 'Hér eru nokkur af áberandi verkefnum mínum',
    'job.landsbankinn.title': 'Framendaþróunarfræðingur | Landsbankinn',
    'job.landsbankinn.description': 'Ég vinn núna hjá Landsbankanum við Landsbankinn smáforritið, netbankann og ýmsar aðrar vefsíður. Til viðbótar við ábyrgð mína á hugbúnaðarþróun hef ég einnig leitt skemmtinefndina og séð um skipulagningu margra viðburða.',
    'job.klappir.title': 'Framendaþróunarfræðingur | Klappir',
    'job.klappir.description': 'Vann í hlutastarfi hjá Klappir við þróun og viðhald á markaðsvefsíðu þeirra með áherslu á SEO.',
    'job.arion.title': 'Starfsnemi | Sjálfvirknideild Arion banka',
    'job.arion.description': 'Sem hluti af námi mínu í HR var ég starfsnemi hjá Arion banka í eina önn þar sem ég vann að gagnauppgötvunartóli fyrir upplifunardeild viðskiptavina.',
    'job.treqs.title': 'Þróunarfræðingur og gæðastjóri | TReqs',
    'job.treqs.description': 'Þróaði og prófaði tæknilegar kröfur tólsins, TReqs, undir handleiðslu Grischa Liebel, Ph.D., hjá HR. Tólið er notað af yfir hundrað þróunarfræðingum hjá Ericsson í Svíþjóð.',
    'job.security.title': 'Öryggisvörður | Öryggismiðstöðin',
    'job.security.description': 'Með skóla vann ég sem öryggisvörður fyrir Öryggismiðstöðina. Þar lærði ég að vinna undir álagi og bregðast fljótt við aðstæðum.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

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