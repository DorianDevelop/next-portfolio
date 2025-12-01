import React from 'react'
import Image from "next/image";

const Resume = () => {
    return (
        <section id="window-content">
            <div className="content">
                <h1 className="text-4xl text-center font-bold mt-10">Interested in my profile?</h1>
                <div className="flex gap-2 align-center justify-center mt-10 relative">
                    <h4 className="text-xl ">You can download my resume</h4>
                    <a href="/resume.pdf" download="Dorian_Faure_Resume" className="resume-btn">here</a>
                    <Image className="clicking-icon" src="/icons/clicking.svg" alt="clicking-icon" width={32} height={32}/>
                </div>
            </div>
        </section>
    )
}
export default Resume
