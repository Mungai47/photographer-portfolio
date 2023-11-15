"use client"

import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaPinterestP } from 'react-icons/fa';
import { SiBehance, SiInstagram } from 'react-icons/si';

import ContactForm from './ContactForm.jsx';
import ContactInfo from './ContactInfo.jsx';
import SocialMedia from './SocialMedia.jsx';

const contactInfo = [
    { icon: <BsFillTelephoneFill />, text: '555-666-2655' },
    { icon: <MdEmail />, text: 'contact@info.com' },
    { icon: <MdLocationOn />, text: '13 Fifth Avenue New York, NY 101660' },
];

const socialMedia = [
    { icon: <SiBehance />, text: 'Behance' },
    { icon: <SiInstagram />, text: 'Instagram' },
    { icon: <FaPinterestP />, text: 'Pinterest' },
];

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className=" w-4/5 mx-auto text-text inset-x-0 bottom-0">
            <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium">
                <h2>Get in touch.<br />Let&apos;s talk about your project!</h2>
            </div>
            <div className="grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 pt-8 pb-4">
                <ContactInfo info={contactInfo} />
                <ContactForm />
            </div>
            <div className=" flex flex-col items-center py-6 border-t ">
                <div className='py-2 cursor-pointer'>
                    <SocialMedia media={socialMedia} className="hover:text-link-active"/>
                </div>
                <div>
                    <p className="text-center py-4">Copyright © {currentYear} Photographer Portfolio | Powered by Photographer Portfolio</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
