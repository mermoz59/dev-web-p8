import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import Experiencec from "./ExperienceCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import {Booki, sbluel, ncarducci, kasa, logomvg, webgencia} from '../assets'

import { useTranslation } from "react-i18next";

import logooc from '../assets/occlient/logooc.webp'


const Experience = () => {

  const { t } = useTranslation();

  const experiences = [
    {
      title: t('titlecard1'),
      company_name: "Booki",
      icon: Booki,
      iconBg: "#fff",
      date: t('datecard1'),
      points: [
        t('pointscard11'),
        t('pointscard12'),
        t('pointscard13'),
        t('pointscard14'),
      ],
    },
    {
      title: t('titlecard2'),
      company_name: "Sophie Bluel",
      icon: sbluel,
      iconBg: "#E6DEDD",
      date: t('datecard2'),
      points: [
        t('pointscard21'),
        t('pointscard22'),
        t('pointscard23'),
        t('pointscard24'),
      ],
    },
    {
      title: t('titlecard3'),
      company_name: "Nina Carducci",
      icon: ncarducci,
      iconBg: "#fff",
      date: t('datecard3'),
      points: [
        t('pointscard31'),
        t('pointscard32'),
        t('pointscard33'),
      ],
    },
    {
      title: t('titlecard4'),
      company_name: "Kasa",
      icon: kasa,
      iconBg: "#fff",
      date: t('datecard4'),
      points: [
        t('pointscard41'),
        t('pointscard42'),
        t('pointscard43'),
        t('pointscard44'),
      ],
    },
    {
        title: t('titlecard5'),
        company_name: "Mon Vieux Grimoire",
        icon: logomvg,
        iconBg: "#F9F3EE",
        date: t('datecard5'),
        points: [
          t('pointscard51'),
          t('pointscard52'),
          t('pointscard53'),
          t('pointscard54'),
        ],
      },
      {
        title: t('titlecard6'),
        company_name: "Webgencia",
        icon: webgencia,
        iconBg: "#fff",
        date: t('datecard6'),
        points: [
          t('pointscard61'),
          t('pointscard62'),
          t('pointscard63'),
          t('pointscard64'),
        ],
      },
];


  return (
    <section className='p-10 mt-10 mb-10 w-full flex flex-col'>
      <motion.div>
        <span className='text-xl text-slate-500 flex justify-center'>{t('subtitlework')}</span>
        <h1 className='text-6xl mt-5 flex justify-center'>{t('titlework')}.</h1>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <motion.div className="flex justify-center h-20 space-x-1 bg-openpurple rounded-xl">
          <p className="text-3xl flex items-center xx:hidden">{t('bannerwork1')}</p>
          <img className="h-20 w-36 flex" src={logooc} alt="Logo openclassrooms" />
        </motion.div>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <Experiencec
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
        <motion.div className="flex justify-center h-20 space-x-1 bg-slate-900 rounded-xl">
          <p className="text-3xl flex items-center">{t('bannerwork2')}</p>
        </motion.div>
      </div>
    </section>
  )
}

export default SectionWrapper(Experience, "experience");