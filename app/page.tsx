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
interface WindowItem {
    title: string,
    isOpened: boolean,
}

const HomePage = () => {
    //const [openedApp, setOpenedApp] = useState<string | null>(null);
    const [windows, setWindows] = useState<WindowItem[]>([]);

    const addWindow = (title: string) => {
        const window = {title, isOpened: true};
        setWindows([...windows, window]);
    }

    const removeWindow = (title: string) => {
        setWindows(windows.filter(window => window.title !== title));
    }

    const openedApp = windows.filter(window => window.isOpened);

    return (
        <section id="app-body">
            <div className="app-grid">
                <div className="app-small-container left-items">
                    <AppItem icon="/images/app/about.svg" alt="about-me-logo" title="Présentation" order={1} onClick={() => addWindow('about')}/>
                    <AppItem icon="/images/app/jobs.svg" alt="previous-job-logo" title="Expériences précédentes" order={2} onClick={() => addWindow('jobs')}/>
                    <AppItem icon="/images/app/studies.svg" alt="studies-logo" title="Études" order={3} onClick={() => addWindow('studies')}/>
                    <AppItem icon="/images/app/skills.svg" alt="skills-logo" title="Compétences" order={4} onClick={() => addWindow('skills')}/>
                    <AppItem icon="/images/app/open-source.svg" alt="open-source-projects-logo" title="Projets open-source" order={5} onClick={() => addWindow('opensource')}/>
                </div>
                <div className="app-small-container right-items">
                    <AppItem icon="/images/app/contact.svg" alt="contact-me-logo" title="Me contacter" order={1} onClick={() => addWindow('contact')}/>
                    <AppItem icon="/images/app/resume.svg" alt="resume-logo" title="CV" order={3} onClick={() => addWindow('resume')}/>
                    <AppItem icon="/images/app/ask.svg" alt="ask-logo" title="Demandez-moi" order={2} onClick={() => addWindow('ask')}/>
                    <AppItem icon="/images/app/passions.svg" alt="passions-logo" title="Passions" order={4} onClick={() => addWindow('passions')}/>
                </div>
            </div>
            {openedApp.find(window => window.title === "about") && (
                <Window title="Présentation" height={70} width={50} onClose={() => removeWindow('about')}>
                    <AboutMe/>
                </Window>
            )}
            {openedApp.find(window => window.title === "jobs") && (
                <Window title="Expériences précédentes" height={80} width={60} onClose={() => removeWindow('jobs')}>
                    <PreviousJob/>
                </Window>
            )}
            {openedApp.find(window => window.title === "studies") && (
                <Window title="Études" height={80} width={60} onClose={() => removeWindow('studies')}>
                    <Studies/>
                </Window>
            )}
            {openedApp.find(window => window.title === "skills") && (
                <Window title="Compétences" height={80} width={60} onClose={() => removeWindow('skills')}>
                    <Skills/>
                </Window>
            )}
            {openedApp.find(window => window.title === "opensource") && (
                <Window title="Projets open-source" height={80} width={60} onClose={() => removeWindow('opensource')}>
                    <OpenSourceProjects/>
                </Window>
            )}
            {openedApp.find(window => window.title === "contact") && (
                <Window title="Me contacter" height={60} width={40} onClose={() => removeWindow('contact')}>
                    <ContactMe/>
                </Window>
            )}
            {openedApp.find(window => window.title === "resume") && (
                <Window title="CV" height={40} width={40} onClose={() => removeWindow('resume')}>
                    <Resume/>
                </Window>
            )}
            {openedApp.find(window => window.title === "passions") && (
                <Window title="Passions" height={80} width={60} onClose={() => removeWindow('passions')}>
                    <Passions/>
                </Window>
            )}
            {openedApp.find(window => window.title === "ask") && (
                <Window title="Demandez-moi" height={50} width={40} onClose={() => removeWindow('ask')}>
                    <AskMe/>
                </Window>
            )}
        </section>
    )
}
export default HomePage
