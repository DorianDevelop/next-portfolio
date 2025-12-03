import React from 'react'
import Image from "next/image";

const Resume = () => {
    return (
        <section id="window-content">
            <div className="content">
                <h1 className="text-4xl text-center font-bold mt-10">Intéressé par mon profil ?</h1>
                <div className="flex gap-2 align-center justify-center mt-10 relative">
                    <h4 className="text-xl pt-1.5">Vous pouvez télécharger mon CV</h4>
                    <a href="/resume.pdf" download="Dorian_Faure_CV" className="double-border-button">ICI</a>
                    <Image className="clicking-icon" src="/icons/clicking.svg" alt="clicking-icon" width={32} height={32}/>
                </div>
            </div>
        </section>
    )
}
export default Resume
