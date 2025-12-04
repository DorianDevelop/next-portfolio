import React from 'react';
import Image from "next/image";

const Skills = () => {

    return (
        <section id="window-content">
            <div className="content">
                <div className="skills-page-container py-2">
                    <h2 className="text-xl text-center">Voici mes différentes compétences</h2>
                    <p className="text-xs text-center italic mb-2">Je ne prétends pas toutes les maîtriser, loin de là.</p>
                    <div className="skill-mastery">
                        <p className="text-center">Échelle de maîtrise :</p>
                        <p className="text-xs">
                            Fleur rouge : <span className="red-flower-color font-bold">Avancé</span> <br/>
                            Fleur bleue : <span className="blue-flower-color font-bold">Intermédiaire</span> <br/>
                            Fleur jaune : <span className="yellow-flower-color font-bold">Débutant</span> <br/>
                            Fleur violette : <span className="purple-flower-color font-bold">Soft skill</span>
                        </p>
                    </div>
                    <div className="skills-page-content flex flex-col gap-3">
                        <div className="skills-page-content-item">
                            <h1 className="text-l underline mb-1">Front-End</h1>
                            <ul className="flex flex-wrap gap-2">
                                <li className="special ">Next JS
                                    <Image src="/icons/blue-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="web">React JS
                                    <Image src="/icons/yellow-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="web">Angular JS
                                    <Image src="/icons/blue-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="web">Vue JS
                                    <Image src="/icons/blue-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="web">JavaScript
                                    <Image src="/icons/blue-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="web">TypeScript
                                    <Image src="/icons/blue-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="web">HTML & CSS
                                    <Image src="/icons/red-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="web">PHP
                                    <Image src="/icons/yellow-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="web">ASP.NET Core MVC
                                    <Image src="/icons/yellow-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                            </ul>
                        </div>
                        <div className="skills-page-content-item">
                            <h1 className="text-l underline mb-1">Back-End</h1>
                            <ul className="flex flex-wrap gap-2">
                                <li className="special">Next JS
                                    <Image src="/icons/blue-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="web">ASP.NET Core WebAPI
                                    <Image src="/icons/blue-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="web">ASP.NET Core MVC
                                    <Image src="/icons/yellow-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="web">Express JS
                                    <Image src="/icons/blue-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="web">PHP
                                    <Image src="/icons/yellow-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                            </ul>
                        </div>
                        <div className="skills-page-content-item">
                            <h1 className="text-l underline mb-1">Programmation</h1>
                            <ul className="flex flex-wrap gap-2">
                                <li className="prog">C
                                    <Image src="/icons/yellow-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="prog">C++
                                    <Image src="/icons/blue-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="prog">C#
                                    <Image src="/icons/blue-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="prog">Python
                                    <Image src="/icons/blue-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="prog">Rust
                                    <Image src="/icons/yellow-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="prog">Bash
                                    <Image src="/icons/blue-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="prog">VBA
                                    <Image src="/icons/blue-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                            </ul>
                        </div>
                        <div className="skills-page-content-item">
                            <h1 className="text-l underline mb-1">Autres</h1>
                            <ul className="flex flex-wrap gap-2">
                                <li className="server">Docker
                                    <Image src="/icons/blue-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="server">GitHub & GitLab
                                    <Image src="/icons/blue-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="server">Caddy
                                    <Image src="/icons/blue-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="server">Linux & Windows
                                    <Image src="/icons/blue-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                            </ul>
                        </div>
                        <div className="skills-page-content-item">
                            <h1 className="text-l underline mb-1">Social</h1>
                            <ul className="flex flex-wrap gap-2">
                                <li className="others">Autonomous
                                    <Image src="/icons/purple-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="others">Rigorous
                                    <Image src="/icons/purple-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="others">Respectful
                                    <Image src="/icons/purple-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="others">Patient
                                    <Image src="/icons/purple-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="others">Proactive
                                    <Image src="/icons/purple-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="others">Communication
                                    <Image src="/icons/purple-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="others">Innovative
                                    <Image src="/icons/purple-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="others">Problem Solving
                                    <Image src="/icons/purple-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="others">Intellectual Curiosity
                                    <Image src="/icons/purple-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                            </ul>
                        </div>
                        <div className="skills-page-content-item">
                            <h1 className="text-l underline mb-1">Langues</h1>
                            <ul className="flex flex-wrap gap-2">
                                <li className="special">French
                                    <Image src="/icons/red-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="lang">English
                                    <Image src="/icons/blue-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                                <li className="lang">Spanish
                                    <Image src="/icons/yellow-flower.svg" alt="flower-icon" width={24} height={24} className="flower-level"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills
