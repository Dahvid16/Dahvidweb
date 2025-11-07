import React from 'react'
import { FaEnvelope, FaGithub, FaGlobe, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import Profile from '../assets/Images/Profile_Pic.png'
import { toast } from 'react-toastify';
import { BsPersonVcard } from 'react-icons/bs';
import Contra from '../assets/Images/contra.png';
import Upwork from '../assets/Images/upwork.png';
import Fiverr from '../assets/Images/fiverr.png';

const Links = () => {

    const handleDownload = () => {
        const fileUrl = "https://drive.google.com/uc?export=download&id=1IjGElsKkCpi-IKgA6yJ-s9CuHNMiV65U";
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "David Akpom CV.pdf";
        link.click();
    
        // Show success toast
        toast.success("Your CV download has started! 📄");
      };

    const majorLinks = [
        { icon: BsPersonVcard, label: "Download Resume", href: '', onClick: handleDownload },
        { icon: FaGlobe, label: "Portfolio Website", href: '/' },
        { icon: FaLinkedin, label: "LinkedIn", href: 'https://www.linkedin.com/in/davidakpom' },
        { image: Contra, label: "Hire me on Contra", href: 'https://contra.com/dahvidweb?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=dahvidweb' },
        { image: Upwork, label: "Hire me on UpWork", href: 'https://www.upwork.com/freelancers/~01802724b614ba1773' },
        { image: Fiverr, label: "Hire me on Fiverr", href: 'https://www.fiverr.com/s/qDp34mg' },
        { icon: FaXTwitter, label: "X (Formerly Twitter)", href: 'https://x.com/dahv_id16' },
        { icon: FaGithub, label: "GitHub", href: 'https://github.com/Dahvid16' },
        { icon: FaEnvelope, label: "Email", href: 'mailto:dahvidweb@gmail.com' }
    ]

  return (
    <section className='container px-4 sm:px-6 lg:px-8 py-6'>
        <div className='min-h-[70svh] flex flex-col items-center space-y-10'>
            <div className="flex flex-col items-center text-center gap-5">
                    <picture className=''>
                        <img src={Profile} alt="Dahvidweb Logo" className='bg-gray-300/60 h-48 w-48 rounded-3xl flex items-center justify-center mx-auto shadow-md border-4 border-emerald-200' />
                    </picture>
                <div className='space-y-3'>
                    <h1 className='md:text-5xl text-4xl font-bold'>AKPOM David</h1>
                    <p className='text-lg md:text-xl font-semibold'>Top rated Africa Frontend developer</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full space-y-4">
                {majorLinks.map((major) => {
                    const Icon = major.icon;
                    return (
                        <a href={major.href} key={major.name} className='flex gap-3 w-[90%] md:w-[80%] lg:w-[60%] items-center px-8 py-4 rounded-4xl glassy space-x-10 md:space-x-4 lg:space-x-24' onClick={major.onClick} >
                            {major.icon ? (
                                <major.icon size={35} />
                            ) : (
                                <img src={major.image} alt={major.name} style={{ width: 45, height: 45 }} />
                            )}
                            <p className='text-lg font-semibold text-gray-800/80'>{major.label}</p>
                        </a>
                    )
                }) }
            </div>
        </div>

        <footer className='border-t border-grey/20 mt-12 pt-6 text-center space-y-2'>
          <p className="text-grey/70">
            © 2025 Dahvidweb. All rights reserved. Privacy Policy | Terms of Service
          </p>
        </footer>
    </section>
  )
}

export default Links