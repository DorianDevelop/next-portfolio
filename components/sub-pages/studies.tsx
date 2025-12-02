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
                            <h1 className="exp-title text-3xl text-center">BUT Informatique Graphique</h1>
                            <h4 className="exp-sub-title text-xl text-center mb-5">IUT du Le Puy-en-Velay - 2021-2024</h4>
                        </div>
                        <Image onClick={() => {setDisplayFirstSchool(!displayFirstSchool)}} className="exp-header-arrow cursor-pointer" src="/icons/arrow-down.svg" alt="arrow-down-icon" width="32" height="32" />
                    </div>
                    <div className={`exp-content ${displayFirstSchool ? 'visible' : 'invisible'}`}>
                        <h5 className="text-xl underline">Description</h5>
                        <p className="exp-description mb-5">Après avoir terminé ma dernière année de lycée et obtenu mon Baccalauréat Technologique avec mention “Très Bien”, j’ai décidé de poursuivre mon rêve de devenir développeur en entrant à l’université en Informatique. Au cours des trois années suivantes, j’ai appris les bases de l’informatique, ainsi que des compétences en communication et en milieu professionnel. Durant ma deuxième année, j’ai passé quatre mois au Canada, où j’ai étudié (plus de détails ci-dessous). Lors de ma dernière année, j’ai eu l’occasion de faire un stage, qui m’a offert ma première vraie expérience du monde du travail.</p>
                        <div className="skills-container mb-5">
                            <h5 className="text-xl underline">Compétences apprises</h5>
                            <ul className="skills-list flex flex-wrap gap-2">
                                <li>Full-Stack</li>
                                <li>VueJS - ReactJS - ExpressJS - PHP</li>
                                <li>Database - Plusieurs langages</li>
                                <li>C# & Unity & Unreal</li>
                                <li>C++ & OpenGL</li>
                                <li>GitLab</li>
                                <li>Docker - Linux</li>
                                <li>Figma</li>
                                <li>3D - 3Ds Max - Blender</li>
                                <li>Math - MatLab</li>
                                <li className="non-technical">Communication</li>
                                <li className="non-technical">Mener un projet de bout en bout</li>
                            </ul>
                        </div>
                        <h5 className="text-xl underline">Retour personnel</h5>
                        <p>Ce diplôme a été très enrichissant. Mes premières années m’ont beaucoup appris, et les deux dernières m’ont offert d’excellentes opportunités et de précieuses leçons sur la vie professionnelle.</p>
                    </div>

                </div>
                <div className="exp-spacer mx-auto my-8"></div>
                <div className="exp-container">
                    <div className="exp-header flex justify-between items-center">
                        <Image className="orga-logo" src="/images/orga/cegep.svg" alt="cegep-logo" width="32" height="32" />
                        <div>
                            <h1 className="exp-title text-3xl text-center">Collège pré-universitaire</h1>
                            <h4 className="exp-sub-title text-xl text-center mb-5">CEGEP de Chicoutimi - 2023</h4>
                        </div>
                        <Image onClick={() => {setDisplaySecondSchool(!displaySecondSchool)}} className="exp-header-arrow cursor-pointer" src="/icons/arrow-down.svg" alt="arrow-down-icon" width="32" height="32" />
                    </div>
                    <div className={`exp-content ${displaySecondSchool ? 'visible' : 'invisible'}`}>
                        <h5 className="text-xl underline">Description</h5>
                        <p className="exp-description mb-5">De janvier à avril 2023, j’ai participé à un programme d’échange au Canada, où j’ai étudié au CEGEP de Chicoutimi. En termes de niveau pur, les cours étaient légèrement en dessous de ceux de mon école actuelle, car beaucoup de notions m’étaient déjà familières. Cependant, l’approche était complètement différente, et certains sujets étaient explorés avec beaucoup plus de profondeur. L’expérience était formidable, avec de nombreux projets complets, beaucoup de travail autonome, et des enseignants accessibles qui aimaient vraiment enseigner.</p>
                        <div className="skills-container mb-5">
                            <h5 className="text-xl underline">Compétences apprises/utilisées</h5>
                            <ul className="skills-list flex flex-wrap gap-2">
                                <li>Full-Stack</li>
                                <li>Database - Plusieurs langages</li>
                                <li>C# & ASP.NET Core MVC</li>
                                <li>jQuery - PHP</li>
                                <li>GitLab</li>
                                <li className="non-technical">Utilisation quotidienne de l’anglais</li>
                            </ul>
                        </div>
                        <h5 className="text-xl underline">Retour personnel</h5>
                        <p>J’aimerais beaucoup repartir dans un autre pays, pour y travailler quelques mois ou peut-être plus longtemps, qui sait.</p>
                    </div>

                </div>
                <div className="exp-spacer mx-auto my-8"></div>
                <div className="exp-container">
                    <div className="exp-header flex justify-between items-center">
                        <Image className="orga-logo" src="/images/orga/isima.png" alt="isima-logo" width="32" height="32" />
                        <div>
                            <h1 className="exp-title text-3xl text-center">École d’ingénieurs Informatique</h1>
                            <h4 className="exp-sub-title text-xl text-center mb-5">ISIMA - 2024-2025</h4>
                        </div>
                        <Image onClick={() => {setDisplayThirdSchool(!displayThirdSchool)}} className="exp-header-arrow cursor-pointer" src="/icons/arrow-down.svg" alt="arrow-down-icon" width="32" height="32" />
                    </div>
                    <div className={`exp-content ${displayThirdSchool ? 'visible' : 'invisible'}`}>
                        <h5 className="text-xl underline">Description</h5>
                        <p className="exp-description mb-5">Je n’étais pas certain que ce soit vraiment ce que je voulais, mais j’ai quand même tenté ma chance en rejoignant une école d’ingénieurs via leur programme en alternance. L’école et les enseignants étaient très bien, mais j’avais souvent l’impression de ne pas apprendre de nouvelles compétences techniques. La plupart de ce que j’apprenais était soit dépassé (ou peu utile), même si intéressant pour la culture générale, soit centré sur la gestion et la communication liées au métier d’ingénieur. Ce n’était malheureusement pas la voie qui me correspondait, alors j’ai décidé de partir après un an.</p>
                        <div className="skills-container mb-5">
                            <h5 className="text-xl underline">Compétences apprises/révisées</h5>
                            <ul className="skills-list flex flex-wrap gap-2">
                                <li>Mathématiques avancées - IT</li>
                                <li>Full-Stack</li>
                                <li>Database - Plusieurs langages</li>
                                <li>C# & Unity</li>
                                <li>C++ & OpenGL</li>
                                <li>Angular JS & ASP.NET Core</li>
                                <li>GitLab</li>
                                <li className="non-technical">Communication</li>
                                <li className="non-technical">Management</li>
                            </ul>
                        </div>
                        <h5 className="text-xl underline">Retour personnel</h5>
                        <p>Ce fut une bonne expérience, plus simple que prévu mais aussi moins intéressante.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Studies
