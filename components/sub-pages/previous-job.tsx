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
                            <h1 className="exp-title text-3xl text-center">Ingénieur IT</h1>
                            <h4 className="exp-sub-title text-xl text-center mb-5">Ratier Figeac - 2024-2025</h4>
                        </div>
                        <Image onClick={() => {setDisplayFirstJob(!displayFirstJob)}} className="exp-header-arrow cursor-pointer" src="/icons/arrow-down.svg" alt="arrow-down-icon" width="32" height="32" />
                    </div>
                    <div className={`exp-content ${displayFirstJob ? 'visible' : 'invisible'}`}>
                        <h5 className="text-xl underline">Description</h5>
                        <p className="exp-description mb-5">J’ai eu l’opportunité de réaliser un stage d’un an chez Ratier Figeac, une entreprise centenaire. En tant qu’ingénieur IT Full-Stack, j’étais responsable de développer seul une application web : un système de gestion de dossiers numériques permettant aux employés d’enregistrer, valider, mettre à jour, archiver et suivre des documents numériques, tout en offrant une expérience simple et une interface propre et attrayante. J’étais également en charge de mettre à jour les documents sur notre système SAP local ainsi qu’une autre grande application interne.</p>
                        <div className="skills-container mb-5">
                            <h5 className="text-xl underline">Compétences utilisées</h5>
                            <ul className="skills-list flex flex-wrap gap-2">
                                <li>Full-Stack</li>
                                <li>Angular JS</li>
                                <li>ASP.NET Core</li>
                                <li>MySQL</li>
                                <li>GitLab</li>
                                <li className="non-technical">Autonomie</li>
                                <li className="non-technical">Communication client</li>
                            </ul>
                        </div>
                        <h5 className="text-xl underline">Retour personnel</h5>
                        <p>Ce fut une excellente expérience où j’ai beaucoup appris auprès de développeurs plus expérimentés, dans un environnement très positif.</p>
                    </div>

                </div>
                <div className="exp-spacer mx-auto my-8"></div>
                <div className="exp-container">
                    <div className="exp-header flex justify-between items-center">
                        <Image className="orga-logo" src="/images/orga/schneider.png" alt="schneider-logo" width="32" height="32" />
                        <div>
                            <h1 className="exp-title text-3xl text-center">Technicien IT</h1>
                            <h4 className="exp-sub-title text-xl text-center mb-5">Schneider Electric - 2023-2024</h4>
                        </div>
                        <Image onClick={() => {setDisplaySecondJob(!displaySecondJob)}} className="exp-header-arrow cursor-pointer" src="/icons/arrow-down.svg" alt="arrow-down-icon" width="32" height="32" />
                    </div>
                    <div className={`exp-content ${displaySecondJob ? 'visible' : 'invisible'}`}>
                        <h5 className="text-xl underline">Description</h5>
                        <p className="exp-description mb-5">
                            J’ai également travaillé 15 mois en tant que stagiaire chez Schneider Electric, l’une des plus grandes entreprises mondiales dans la gestion de l’énergie. En tant que technicien IT, j’étais responsable de la gestion des nombreux ordinateurs de l’usine. J’assistais aussi le responsable cybersécurité en installant des mises à jour et en veillant au respect des bonnes pratiques sur le site.
                            <br/>
                            De plus, j’ai eu l’occasion de faire un peu de développement : automatisation de fichiers Excel, création de scripts batch, et développement d’applications web full-stack. J’ai mis à jour et réparé une ancienne application interne appelée Stamp 3, puis plus tard dans l’année, j’ai créé Stamp 4, une application web utilisée par les techniciens pour générer des programmes pour les machines de qualification.

                        </p>
                        <div className="skills-container mb-5">
                            <h5 className="text-xl underline">Compétences utilisées</h5>
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
                                <li className="non-technical">Cybersécurité niveau débutant</li>
                            </ul>
                        </div>
                        <h5 className="text-xl underline">Retour personnel</h5>
                        <p>C’était un très bon environnement, mais ma passion pour le développement web et applicatif n’était pas sollicitée tous les jours. Parfois, je devais me concentrer sur des tâches techniques plus bas niveau. Bien que ces tâches m’aient beaucoup appris, ce n’était pas ce qui me passionnait vraiment.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default PreviousJob
