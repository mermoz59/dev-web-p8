import { motion } from 'framer-motion'
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import ProjectCard from './ProjectCard';

import { useTranslation } from "react-i18next";

import {bookiproject, sophieproject, ninaproject, kasaproject, mvgproject} from '../assets'


const Works = () => {

  const { t } = useTranslation();

  const projects = [
    {
      name: "Booki",
      description:
        t('descproject1'),
      tags: [
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "OCRProjects",
          color: "text-openpurple",
        },
      ],
      image: bookiproject,
      source_code_link: "https://mermoz59.github.io/dev-web-p2/",
    },
    {
      name: "Sophie Bluel",
      description:
      t('descproject2'),
      tags: [
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "text-yellow-400",
        },
        {
          name: "OCRProjects",
          color: "text-openpurple",
        },
      ],
      image: sophieproject,
      source_code_link: "https://mermoz59.github.io/dev-web-p3/",
    },
    {
      name: "Nina Carducci",
      description:
      t('descproject3'),
      tags: [
        {
          name: "Optimisation",
          color: "green-text-gradient",
        },
        {
          name: "SEO",
          color: "pink-text-gradient",
        },
        {
          name: "OCRProjects",
          color: "text-openpurple",
        },
      ],
      image: ninaproject,
      source_code_link: "https://mermoz59.github.io/dev-web-p5/",
    },
    {
      name: "Kasa",
      description:
      t('descproject4'),
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
        {
          name: "OCRProjects",
          color: "text-openpurple",
        },
      ],
      image: kasaproject,
      source_code_link: "https://mermoz59.github.io/dev-web-p6",
    },
    {
      name: "Mon Vieux Grimoire",
      description:
      t('descproject5'),
      tags: [
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Back",
          color: "pink-text-gradient",
        },
        {
          name: "OCRProjects",
          color: "text-openpurple",
        },
      ],
      image: mvgproject,
      source_code_link: "https://github.com/mermoz59",
    },
  ];

  return (
    <section className='p-10 mb-10 w-full'>
      <motion.div variants={textVariant()} className='w-full mt-20 flex flex-col items-center'>
        <span className='text-xl text-slate-500'>{t('subtitleproject')}</span>
        <h1 className='text-6xl mt-5 mb-20'>{t('titleproject')}</h1>
      </motion.div>

      <div className='mt-5 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
    </section>
  )
}

export default SectionWrapper(Works, "work")