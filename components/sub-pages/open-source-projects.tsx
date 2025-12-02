'use client';
import React from 'react'
import Image from "next/image";

const OpenSourceProjects = () => {
    return (
        <section id="window-content">
            <div className="content">
                <section className="projects-container flex flex-wrap gap-10 justify-center items-center">
                    <div className="project" onClick={() => {window.open("https://github.com/DorianDevelop/next-portfolio", '_blank')?.focus();}}>
                        <Image src="/images/portfolio-screen.png" alt="project-image" width={256} height={256} className="project-image"/>
                        <h1 className="text-center text-xl">Portfolio</h1>
                        <div className="skills-used-list">
                            <ul>
                                <li>Full-Stack</li>
                                <li>Next JS</li>
                                <li>Docker & Caddy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="project" onClick={() => {window.open("https://github.com/DorianDevelop/dev-events-nextjs16-crash-course", '_blank')?.focus();}}>
                        <Image src="/images/crash-course.png" alt="project-image" width={256} height={256} className="project-image"/>
                        <h1 className="text-center text-xl">Projet d'apprentissage</h1>
                        <div className="skills-used-list">
                            <ul>
                                <li>Full-Stack</li>
                                <li>Next JS</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                    </div>
                    <div className="project" onClick={() => {window.open("https://github.com/DorianDevelop/Stamp4", '_blank')?.focus();}}>
                        <Image src="/images/stamp4.png" alt="project-image" width={256} height={256} className="project-image"/>
                        <h1 className="text-center text-xl">Stamp 4</h1>
                        <div className="skills-used-list">
                            <ul>
                                <li>Full-Stack</li>
                                <li>Vue JS</li>
                                <li>Express JS</li>
                                <li>Docker</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}
export default OpenSourceProjects
