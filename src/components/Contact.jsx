import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';

const Contact = () => {

  const form = useRef();

  const [error, setError] = useState(null);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSuccess(false);
    setIsErrorVisible(false);
  
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;
  
    if (name && email && message) {
      emailjs.sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
        .then((result) => {
          console.log(result.text);
          setSuccess(true);
          
          
        }, (error) => {
          console.log(error.text);
        });
    } else {
      console.log("Veuillez remplir tous les champs.");
      setError('Veuillez remplir tous les champs.');
      setIsErrorVisible(true);
    }
  };

  
  

  return (
    <section className="p-10 mt-10 w-full">
      <motion.div variants={textVariant()}>
        <span className='text-xl text-slate-500'>BESOIN DE PLUS ?</span>
        <h1 className='text-6xl mt-5 mb-20'>Contactez-moi.</h1>
      </motion.div>
      <div className='flex flex-col'>
        <div className='w-full h-auto flex justify-center'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col bg-slate-900 h-[800px] w-1/2 xs:w-full rounded-xl p-10 items-between'>
            <label className='mb-1'>Nom</label>
            <input type="text" name="user_name" className='mb-5 h-[70px] rounded-lg p-2 bg-slate-950' />
            <label className='mb-1'>Email</label>
            <input type="email" name="user_email" className='mb-5 h-[70px] rounded-lg p-2 bg-slate-950'/>
            <label className='mb-1'>Message</label>
            <textarea name="message" className='h-full rounded-lg p-2 bg-slate-950'/>
            <div className='flex justify-center'>
              <button type="submit" value="Send" className='border-4 rounded-xl px-10 py-2 font-bold hover:text-teal-300 hover:border-teal-300 mt-10'>Envoyer</button>
            </div>
          </form>
        </div>
            <Stack sx={{ width: '100%' }} spacing={1} className='mt-5'>
            {isErrorVisible &&
            <motion.div
            className='flex justify-center'
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, translateY: -20 },
              visible: { opacity: 1, translateY: 0 },
            }}
            transition={{
              duration: 0.3,
            }}
            >
              <Alert severity="warning" className='w-1/2'>
                <AlertTitle>Attention</AlertTitle>
                Veuillez remplir tous les champs.
              </Alert>
              </motion.div>}
              {success &&
            <motion.div
            className='flex justify-center'
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, translateY: -20 },
              visible: { opacity: 1, translateY: 0 },
            }}
            transition={{
              duration: 0.3,
            }}
            >
              <Alert severity="success" className='w-1/2'>
                <AlertTitle>Succès</AlertTitle>
                Message envoyé avec succès.
              </Alert>
              </motion.div>}
            </Stack>
      </div>
    </section>
  )
}

export default SectionWrapper(Contact, "contact")