import React, {useState} from 'react'
import Image from "next/image";

const Studies = () => {
    const [displayFirstSchool, setDisplayFirstSchool] = useState<boolean>(true);
    const [displaySecondSchool, setDisplaySecondSchool] = useState<boolean>(true);
    const [displayThirdSchool, setDisplayThirdSchool] = useState<boolean>(true);

    return (
        <section id="window-content">
            <div className="content">
                <div className="exp-container">
                    <div className="exp-header flex justify-between items-center">
                        <Image className="orga-logo" src="/images/orga/iut.png" alt="iut-logo" width="32" height="32" />

                        <div>
                            <h1 className="exp-title text-3xl text-center">Bachelor in Computer Science</h1>
                            <h4 className="exp-sub-title text-xl text-center mb-5">IUT of Le Puy-en-Velay - 2021-2024</h4>
                        </div>
                        <Image onClick={() => {setDisplayFirstSchool(!displayFirstSchool)}} className="exp-header-arrow cursor-pointer" src="/icons/arrow-down.svg" alt="arrow-down-icon" width="32" height="32" />
                    </div>
                    <div className={`exp-content ${displayFirstSchool ? 'visible' : 'invisible'}`}>
                        <h5 className="text-xl underline">Description</h5>
                        <p className="exp-description mb-5">After completing my final year of high school and obtaining my Technological Baccalaureate with “Very Good” honors, I decided to pursue my dream of becoming a developer by enrolling in a Computer Science program at university. Over the next three years, I learned the fundamentals of computer science, along with communication and professional skills. During my second year, I spent four months in Canada, where I studied (more details below). In the final year of my degree, I had the opportunity to complete an internship, which gave me my first real experience of what working life is like.</p>
                        <div className="skills-container mb-5">
                            <h5 className="text-xl underline">Learned skills</h5>
                            <ul className="skills-list flex flex-wrap gap-2">
                                <li>Full-Stack</li>
                                <li>VueJS - ReactJS - ExpressJS - PHP</li>
                                <li>Database - Multiple Language</li>
                                <li>C# & Unity & Unreal</li>
                                <li>C++ & OpenGL</li>
                                <li>GitLab</li>
                                <li>Docker - Linux</li>
                                <li>Figma</li>
                                <li>3D - 3Ds Max - Blender</li>
                                <li>Math - MatLab</li>
                                <li className="non-technical">Communication</li>
                                <li className="non-technical">Ent-to-end projects</li>
                            </ul>
                        </div>
                        <h5 className="text-xl underline">Personal Feedback</h5>
                        <p>This was a very rewarding degree. My first years taught me a lot, and the last two provided excellent opportunities and valuable work-life lessons.</p>
                    </div>

                </div>
                <div className="exp-spacer mx-auto my-8"></div>
                <div className="exp-container">
                    <div className="exp-header flex justify-between items-center">
                        <Image className="orga-logo" src="/images/orga/cegep.svg" alt="cegep-logo" width="32" height="32" />
                        <div>
                            <h1 className="exp-title text-3xl text-center">Pre-university College</h1>
                            <h4 className="exp-sub-title text-xl text-center mb-5">CEGEP of Chicoutimi - 2023</h4>
                        </div>
                        <Image onClick={() => {setDisplaySecondSchool(!displaySecondSchool)}} className="exp-header-arrow cursor-pointer" src="/icons/arrow-down.svg" alt="arrow-down-icon" width="32" height="32" />
                    </div>
                    <div className={`exp-content ${displaySecondSchool ? 'visible' : 'invisible'}`}>
                        <h5 className="text-xl underline">Description</h5>
                        <p className="exp-description mb-5">From January to April 2023, I participated in an exchange program in Canada, studying at the CEGEP of Chicoutimi. In terms of pure skill level, the courses were slightly below what I was used to at my current school, as many concepts were familiar to me. However, the approach was completely different, and in some areas the material was explored in much greater depth. The experience was amazing, with many end-to-end projects, a lot of autonomous work, and approachable teachers who genuinely enjoyed teaching.</p>
                        <div className="skills-container mb-5">
                            <h5 className="text-xl underline">Learned-Used skills</h5>
                            <ul className="skills-list flex flex-wrap gap-2">
                                <li>Full-Stack</li>
                                <li>Database - Multiple Language</li>
                                <li>C# & ASP.NET Core MVC</li>
                                <li>jQuery - PHP</li>
                                <li>GitLab</li>
                                <li className="non-technical">Daily use of English</li>
                            </ul>
                        </div>
                        <h5 className="text-xl underline">Personal Feedback</h5>
                        <p>I would love to go to a different country again, to work there for a few months—or maybe longer, who knows.</p>
                    </div>

                </div>
                <div className="exp-spacer mx-auto my-8"></div>
                <div className="exp-container">
                    <div className="exp-header flex justify-between items-center">
                        <Image className="orga-logo" src="/images/orga/isima.png" alt="isima-logo" width="32" height="32" />
                        <div>
                            <h1 className="exp-title text-3xl text-center">Engineering School</h1>
                            <h4 className="exp-sub-title text-xl text-center mb-5">ISIMA - 2024-2025</h4>
                        </div>
                        <Image onClick={() => {setDisplayThirdSchool(!displayThirdSchool)}} className="exp-header-arrow cursor-pointer" src="/icons/arrow-down.svg" alt="arrow-down-icon" width="32" height="32" />
                    </div>
                    <div className={`exp-content ${displayThirdSchool ? 'visible' : 'invisible'}`}>
                        <h5 className="text-xl underline">Description</h5>
                        <p className="exp-description mb-5">I wasn’t sure if this was truly what I wanted, but I still took a chance and joined an engineering school through their internship program. The school and teachers were great, but I often felt like I wasn’t learning new technical skills. Most of what I learned was either outdated (or not really useful), though interesting for general knowledge, or focused on management and communication aspects of being an engineer. Unfortunately, that wasn’t the path for me, so I decided to leave after one year.</p>
                        <div className="skills-container mb-5">
                            <h5 className="text-xl underline">Learned-Relearned skills</h5>
                            <ul className="skills-list flex flex-wrap gap-2">
                                <li>Advanced Math - For IT</li>
                                <li>Full-Stack</li>
                                <li>Database - Multiple Language</li>
                                <li>C# & Unity</li>
                                <li>C++ & OpenGL</li>
                                <li>Angular JS & ASP.NET Core</li>
                                <li>GitLab</li>
                                <li className="non-technical">Communication</li>
                                <li className="non-technical">Management</li>
                            </ul>
                        </div>
                        <h5 className="text-xl underline">Personal Feedback</h5>
                        <p>This was a good experience, it was easier than expected but less interesting too.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Studies
