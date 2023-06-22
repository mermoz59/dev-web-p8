import { useState, useEffect, useRef } from "react";

import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { MdWorkOutline } from 'react-icons/md'
import { AiOutlineMessage } from 'react-icons/ai'



const NavBarMobile = () => {

    const [activeNav, setActiveNav] = useState('#')
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(false)
    const sectionRefs = useRef([]);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

      setIsScrolledToBottom(scrollTop + windowHeight >= documentHeight);

      sectionRefs.current.forEach((sectionRef, index) => {
        const { top, bottom } = sectionRef.current.getBoundingClientRect();
        const sectionId = `#${sectionRef.current.id}`;

        if (top <= windowHeight / 2 && bottom >= windowHeight / 2 && activeNav !== sectionId) {
          setActiveNav(sectionId);
        }
      });
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeNav]);
    
    return (
      <section className={`fixed bottom-5 flex justify-center w-full z-10 duration-75 xm:hidden ${isScrolledToBottom ? 'hidden' : ''}`}>
        <ul className="mnavbar text-2xl w-1/3 justify-between rounded-full px-4 py-2 flex items-center bg-slate-900 shadow-2xl min-w-[250px]">
          <a href="#" onClick={() => setActiveNav('#')} className={`${activeNav === '#' ? "active" : ""} rounded-full p-3`}><li><AiOutlineHome /></li></a>
          <a href="#about" onClick={() => setActiveNav('#about')} className={`${activeNav === '#about' ? "active" : ""} rounded-full p-3`}><li><AiOutlineUser /></li></a>
          <a href="#experience" onClick={() => setActiveNav('#experience')} className={`${activeNav === '#experience' ? "active" : ""} rounded-full p-3`}><li><MdWorkOutline /></li></a>
          <a href="#contact" onClick={() => setActiveNav('#contact')} className={`${activeNav === '#contact' ? "active" : ""} rounded-full p-3`}><li><AiOutlineMessage /></li></a>
        </ul>
      </section>  
    )
}
  
export default NavBarMobile