import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

import { useTranslation } from "react-i18next";
import i18next from 'i18next';

import logo from '../assets/logo.svg'
import { github, linkedinwhite } from "../assets"


const Navbar = () => {

  const { t } = useTranslation();

  const navLinks = [
    {
      id: "about",
      title: t('about'),
    },
    {
      id: "experience",
      title: t('work'),
    },
    {
      id: "contact",
      title: t('contact'),
    },
  ];

  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };


  return (
    <nav className={`'z-10 bg-black flex justify-between p-10 fixed w-full z-10 ${
      scrolled ? "bg-black shadow-2xl" : "bg-transparent"
    }`}>
      <div className='flex items-center space-x-2'>
        <Link
          to="/"
          className="flex items-center space-x-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className='h-6 w-6' />
          <h1>Amine <span className="xxs:hidden">| {t('titlenav')}</span></h1>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="xs:mr-0 mr-20 buttonlanguage">
          <button className={`text-xl text-secondary ${activeNav === '' ? "active" : ""}`} onClick={() => {i18next.changeLanguage('fr'); setActiveNav('')}}>FR</button>
          <span className="text-xl"> | </span>
          <button className={`text-xl text-secondary ${activeNav === 'en' ? "active" : ""}`} onClick={() => {i18next.changeLanguage('en'); setActiveNav('en')}}>EN</button>
        </div>
        <ul className='flex space-x-5 cursor-pointer xs:hidden min-w-[400px]'>
          {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
          ))}
        </ul>
      </div>
      <ul className="flex space-x-10 xm:hidden">
        <li>
          <Link role="link" onClick={() => openInNewTab('https://www.github.com/mermoz59/')}>
            <img src={github} alt="Logo de Github" className="h-8 w-8 xxs:h-7 xxs:w-7"/>
          </Link>
        </li>
        <li>
        <Link role="link" onClick={() => openInNewTab('https://www.linkedin.com/in/mohamed-amine-touba-0b8a3627b/')}>
            <img src={linkedinwhite} alt="Logo de Github" className="h-8 w-8 xxs:h-7 xxs:w-7"/>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar