import { motion, m, LazyMotion, domAnimation } from "framer-motion";
import { skills } from "../constants";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import MarqueeCards from "./MarqueeCards";

import { useTranslation } from "react-i18next";

const Tech = () => {

  const { t } = useTranslation();

  return (
    <section className="p-10 mt-10 w-full">
      <motion.div variants={textVariant()}>
        <span className='text-xl text-slate-500'>{t('subtitletech')}</span>
        <h1 className='text-6xl mt-5 mb-20 xxs:text-5xl xxs:flex xxs:justify-center'>{t('titletech')}</h1>
      </motion.div>
      <div className="xl:border-l-2 xl:border-r-2 h-full">
          <div className="relative">
            <div className="absolute top-[45px] w-full h-[1px]"></div>
            <MarqueeCards direction="left">
              <div className="flex">
                <LazyMotion features={domAnimation} strict>

                  {skills.map((skill, index) => (
                    <m.div
                      initial={{ scale: 0.8 }}
                      animate={{
                        rotate: [0, 10, 0],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                      }}
                      style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
                      key={index}
                      className="card w-[200px] h-[200px] flex flex-col items-center bg-slate-900 rounded-full border-4 cursor-pointer"
                    >
                      <div className="w-full h-auto flex items-center gap-2 p-10 flex-col">
                        <img
                          className="h-[70px] flex justify-center items-center w-[70px]  bg-primary-600 rounded-[50%] p-1 object-contain"
                          src={skill.icon}
                          alt={skill.title}
                        />
                        <span
                          className="text-xl"
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "bold",
                          }}
                        >
                          {skill.title}
                        </span>
                      </div>
                    </m.div>
                  ))}
                </LazyMotion>
              </div>
            </MarqueeCards>
          </div>
          <div className="relative">
            <div className="absolute top-[45px] w-full h-[1px] bg-primary-400"></div>
            <MarqueeCards direction="right">
              <div className="flex">
                <LazyMotion features={domAnimation} strict>

                  {skills.map((skill, index) => (
                    <m.div
                      initial={{ scale: 0.8 }}
                      animate={{
                        rotate: [0, 10, 0],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                      }}
                      style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
                      key={index}
                      className="card w-[200px] h-[200px] flex flex-col items-center bg-black rounded-full border-4 cursor-pointer"
                    >
                      <div className="w-full h-auto flex items-center gap-2 p-10 flex-col">
                        <img
                          className="h-[70px] flex justify-center items-center w-[70px]  bg-primary-600 rounded-[50%] p-1 object-contain"
                          src={skill.icon}
                          alt={skill.title}
                        />
                        <span
                          className="text-xl"
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "bold",
                          }}
                        >
                          {skill.title}
                        </span>
                      </div>
                    </m.div>
                  ))}
                </LazyMotion>
              </div>
            </MarqueeCards>
          </div>
        </div>
    </section>
  )
}

export default SectionWrapper(Tech, "tech")