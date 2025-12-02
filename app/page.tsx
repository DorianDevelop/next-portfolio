'use client';

import React, {useState} from 'react'
import Image from 'next/image'
import Window from "@/components/Window";
import AboutMe from "@/components/sub-pages/about-me";
import PreviousJob from "@/components/sub-pages/previous-job";
import Studies from "@/components/sub-pages/studies";
import Skills from "@/components/sub-pages/skills";
import OpenSourceProjects from "@/components/sub-pages/open-source-projects";
import ContactMe from "@/components/sub-pages/contact-me";
import Resume from "@/components/sub-pages/resume";
import Passions from "@/components/sub-pages/passions";
import AskMe from "@/components/sub-pages/ask-me";

const AppItem = ({icon, alt, title, order, onClick} : {icon:string, alt:string, title:string, order:number, onClick: () => void}) => {
    return (
        <div className={`app-item order-item order-${order}`} onClick={onClick}>
            <Image className="app-icon" src={icon} alt={alt} width="50" height="50" />
            <h4 className="app-title">{title}</h4>
        </div>
    )
}

const HomePage = () => {
    const [openedApp, setOpenedApp] = useState<string | null>(null);

    return (
        <section id="app-body">
            <div className="app-grid">
                <div className="app-small-container left-items">
                    <AppItem icon="/images/app/about.svg" alt="about-me-logo" title="Présentation" order={1} onClick={() => setOpenedApp('about')}/>
                    <AppItem icon="/images/app/jobs.svg" alt="previous-job-logo" title="Expériences précédentes" order={2} onClick={() => setOpenedApp('jobs')}/>
                    <AppItem icon="/images/app/studies.svg" alt="studies-logo" title="Études" order={3} onClick={() => setOpenedApp('studies')}/>
                    <AppItem icon="/images/app/skills.svg" alt="skills-logo" title="Compétences" order={4} onClick={() => setOpenedApp('skills')}/>
                    <AppItem icon="/images/app/open-source.svg" alt="open-source-projects-logo" title="Projets open-source" order={5} onClick={() => setOpenedApp('opensource')}/>
                </div>
                <div className="app-small-container right-items">
                    <AppItem icon="/images/app/contact.svg" alt="contact-me-logo" title="Me contacter" order={1} onClick={() => setOpenedApp('contact')}/>
                    <AppItem icon="/images/app/resume.svg" alt="resume-logo" title="CV" order={3} onClick={() => setOpenedApp('resume')}/>
                    <AppItem icon="/images/app/ask.svg" alt="ask-logo" title="Demandez-moi" order={2} onClick={() => setOpenedApp('ask')}/>
                    <AppItem icon="/images/app/passions.svg" alt="passions-logo" title="Passions" order={4} onClick={() => setOpenedApp('passions')}/>
                </div>
            </div>
            {openedApp == "about" && (
                <Window title="Présentation" height={70} width={50} onClose={() => setOpenedApp(null)}>
                    <AboutMe/>
                </Window>
            )}
            {openedApp == "jobs" && (
                <Window title="Expériences précédentes" height={80} width={60} onClose={() => setOpenedApp(null)}>
                    <PreviousJob/>
                </Window>
            )}
            {openedApp == "studies" && (
                <Window title="Études" height={80} width={60} onClose={() => setOpenedApp(null)}>
                    <Studies/>
                </Window>
            )}
            {openedApp == "skills" && (
                <Window title="Compétences" height={80} width={60} onClose={() => setOpenedApp(null)}>
                    <Skills/>
                </Window>
            )}
            {openedApp == "opensource" && (
                <Window title="Projets open-source" height={80} width={60} onClose={() => setOpenedApp(null)}>
                    <OpenSourceProjects/>
                </Window>
            )}
            {openedApp == "contact" && (
                <Window title="Me contacter" height={60} width={40} onClose={() => setOpenedApp(null)}>
                    <ContactMe/>
                </Window>
            )}
            {openedApp == "resume" && (
                <Window title="CV" height={40} width={40} onClose={() => setOpenedApp(null)}>
                    <Resume/>
                </Window>
            )}
            {openedApp == "passions" && (
                <Window title="Passions" height={80} width={60} onClose={() => setOpenedApp(null)}>
                    <Passions/>
                </Window>
            )}
            {openedApp == "ask" && (
                <Window title="Demandez-moi" height={50} width={40} onClose={() => setOpenedApp(null)}>
                    <AskMe/>
                </Window>
            )}
        </section>
    )
}
export default HomePage
