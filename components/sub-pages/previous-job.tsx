'use client';
import React, {useState} from 'react'
import Image from "next/image";

const PreviousJob = () => {
    const [displayFirstJob, setDisplayFirstJob] = useState<boolean>(true);
    const [displaySecondJob, setDisplaySecondJob] = useState<boolean>(true);

    return (
        <section id="window-content">
            <div className="content">
                <div className="exp-container">
                    <div className="exp-header flex justify-between items-center">
                        <Image className="orga-logo" src="/images/orga/ratier.png" alt="ratier-logo" width="32" height="32" />
                        <div>
                            <h1 className="exp-title text-3xl text-center">IT Engineer</h1>
                            <h4 className="exp-sub-title text-xl text-center mb-5">Ratier Figeac - 2024-2025</h4>
                        </div>
                        <Image onClick={() => {setDisplayFirstJob(!displayFirstJob)}} className="exp-header-arrow cursor-pointer" src="/icons/arrow-down.svg" alt="arrow-down-icon" width="32" height="32" />
                    </div>
                    <div className={`exp-content ${displayFirstJob ? 'visible' : 'invisible'}`}>
                        <h5 className="text-xl underline">Description</h5>
                        <p className="exp-description mb-5">I had the opportunity to complete a one-year internship at Ratier Figeac, a century-old company. As an IT Full-Stack Engineer, I was responsible for developing by myself, a web application: a digital file management system that allows employees to save, validate, update, archive, and track digital documents, all while ensuring a simple user experience and a clean, visually appealing interface. I was also in charge of updating our local SAP system as well as another large internal application.</p>
                        <div className="skills-container mb-5">
                            <h5 className="text-xl underline">Used skills</h5>
                            <ul className="skills-list flex flex-wrap gap-2">
                                <li>Full-Stack</li>
                                <li>Angular JS</li>
                                <li>ASP.NET Core</li>
                                <li>MySQL</li>
                                <li>GitLab</li>
                                <li className="non-technical">Autonomy</li>
                                <li className="non-technical">Customer-focused communication</li>
                            </ul>
                        </div>
                        <h5 className="text-xl underline">Personal Feedback</h5>
                        <p>It was a great experience where I learned a lot from more experienced developers while working in a very positive environment.</p>
                    </div>

                </div>
                <div className="exp-spacer mx-auto my-8"></div>
                <div className="exp-container">
                    <div className="exp-header flex justify-between items-center">
                        <Image className="orga-logo" src="/images/orga/schneider.png" alt="schneider-logo" width="32" height="32" />
                        <div>
                            <h1 className="exp-title text-3xl text-center">IT Technician</h1>
                            <h4 className="exp-sub-title text-xl text-center mb-5">Schneider Electric - 2023-2024</h4>
                        </div>
                        <Image onClick={() => {setDisplaySecondJob(!displaySecondJob)}} className="exp-header-arrow cursor-pointer" src="/icons/arrow-down.svg" alt="arrow-down-icon" width="32" height="32" />
                    </div>
                    <div className={`exp-content ${displaySecondJob ? 'visible' : 'invisible'}`}>
                        <h5 className="text-xl underline">Description</h5>
                        <p className="exp-description mb-5">
                            I also spent 15 months working as an intern at Schneider Electric, one of the world’s largest companies in energy management. As an IT Technician, I was responsible for managing the plant’s numerous computers. I also assisted the cybersecurity manager by installing updates and ensuring proper cybersecurity practices across the site.
                            <br /><br />
                            In addition, I had the opportunity to do some development work: from automating Excel files and creating batch executables to building full-stack web applications. I updated and repaired an old internal application called Stamp 3, and later in the year I created Stamp 4, a web application used by technicians to generate programs for qualification machines.</p>
                        <div className="skills-container mb-5">
                            <h5 className="text-xl underline">Used skills</h5>
                            <ul className="skills-list flex flex-wrap gap-2">
                                <li>Full-Stack</li>
                                <li>Vue JS</li>
                                <li>Node JS - Express JS</li>
                                <li>SQL Server</li>
                                <li>GitHub</li>
                                <li>Docker</li>
                                <li>Linux</li>
                                <li>PHP</li>
                                <li>Bash</li>
                                <li>Excel</li>
                                <li className="non-technical">Autonomy</li>
                                <li className="non-technical">Entry-level cybersecurity</li>
                            </ul>
                        </div>
                        <h5 className="text-xl underline">Personal Feedback</h5>
                        <p>It was a great environment, but my passion for web and app development wasn’t used every day. Sometimes I had to focus on more low-level technical tasks. While those tasks taught me a lot, they weren’t what I was truly passionate about.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default PreviousJob
