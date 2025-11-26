import React from 'react'
import Image from 'next/image'

const AppItem = ({icon, alt, title, order} : {icon:string, alt:string, title:string, order:number}) => {
    return (
        <div className={`app-item order-item order-${order}`}>
            <Image className="app-icon" src={icon} alt={alt} width="50" height="50" />
            <h4 className="app-title">{title}</h4>
        </div>
    )
}

const HomePage = () => {
    return (
        <section id="app-body">
            <div className="app-grid">
                <div className="app-small-container left-items">
                    <AppItem icon="/images/app/about.svg" alt="about-me-logo" title="About me" order={1}/>
                    <AppItem icon="/images/app/jobs.svg" alt="previous-job-logo" title="Previous Jobs" order={2}/>
                    <AppItem icon="/images/app/studies.svg" alt="studies-logo" title="Studies" order={3}/>
                    <AppItem icon="/images/app/skills.svg" alt="skills-logo" title="Skills" order={4}/>
                    <AppItem icon="/images/app/open-source.svg" alt="open-source-projects-logo" title="Open Source Projects" order={5}/>
                </div>
                <div className="app-small-container right-items">
                    <AppItem icon="/images/app/contact.svg" alt="contact-me-logo" title="Contact me" order={1}/>
                    <AppItem icon="/images/app/resume.svg" alt="resume-logo" title="Resume" order={2}/>
                    <AppItem icon="/images/app/passions.svg" alt="passions-logo" title="Passions" order={3}/>
                    <AppItem icon="/images/app/ask.svg" alt="ask-logo" title="Ask me Something" order={4}/>
                </div>
            </div>
        </section>
    )
}
export default HomePage
