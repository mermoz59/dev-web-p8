import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'


import logo from '../assets/logo.svg'
import { github, linkedinwhite } from "../assets"


const Navbar = () => {

  const navLinks = [
    {
      id: "about",
      title: "À propos",
    },
    {
      id: "experience",
      title: "Expériences",
    },
    {
      id: "contact",
      title: "Contactez-moi",
    },
  ];

  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

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
          <h1>Amine <span className="xxs:hidden">| Développeur Web</span></h1>
        </Link>
      </div>
      <ul className='flex space-x-5 cursor-pointer xs:hidden'>
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