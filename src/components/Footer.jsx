import { Link } from "react-router-dom"

import { github, linkedinwhite } from "../assets"


const Footer = () => {
  return (
    <footer className='flex flex-col items-center mt-20 bg-gradient-to-t from-slate-900 p-10 '>
      <span className='text-5xl mb-5 pt-10'>FOL<span className="border-t-4 pt-10">LOW</span> ME</span>
      <div className="flex space-x-5 mb-20 border-b-4 pb-14">
        <Link to="https://github.com/mermoz59"><img src={github} alt="Logo de github" className="w-10 h-10 cursor-pointer"/></Link>
        <Link to="https://www.linkedin.com/in/amine-touba-0b8a3627b/"><img src={linkedinwhite} alt="Logo de github" className="w-10 h-10 cursor-pointer"/></Link>
      </div>
      <div>
        <span>Made by <span className="font-bold">M-A. TOUBA (2023)</span></span>
        
      </div>
    </footer>
  )
}

export default Footer