import React from 'react'
import Image from "next/image";

const ContactMe = () => {
    return (
        <section id="window-content">
            <div className="content">
                <h1 className="text-4xl text-center font-bold mt-6">Interested in my profile?</h1>
                <div className="flex gap-6 justify-center mt-8">
                    <a href="https://github.com/DorianDevelop" className="contact-item flex flex-col items-center gap-1 mt-5">
                        <Image className="contact-icon" src="/icons/github.svg" alt="github-icon" width="48" height="48" />
                        <p className="text-xs">DorianDevelop</p>
                    </a>
                    <a href="https://www.linkedin.com/in/faure-dorian/" className="contact-item flex flex-col items-center gap-1 mt-5">
                        <Image className="contact-icon" src="/icons/linkedin.svg" alt="linkedin-icon" width="48" height="48" />
                        <p className="text-xs">Dorian Faure</p>
                    </a>
                    <a href="https://www.instagram.com/dorian_f07/" className="contact-item flex flex-col items-center gap-1 mt-5">
                        <Image className="contact-icon" src="/icons/instagram.svg" alt="instagram-icon" width="48" height="48" />
                        <p className="text-xs">Dorian_f07</p>
                    </a>
                </div>
                <a href="mailto:dorianf.develop@gmail.com" className="contact-item contact-item-main flex flex-col items-center gap-1 mt-5">
                    <Image className="contact-icon" src="/icons/email.svg" alt="email-icon" width="48" height="48" />
                    <p className="text-xs">dorianf.develop@gmail.com</p>
                </a>
                <p className="text-m text-center mt-12">I’ll try my best to answer you in less than two days. Thank you.</p>
            </div>
        </section>
    )
}
export default ContactMe
