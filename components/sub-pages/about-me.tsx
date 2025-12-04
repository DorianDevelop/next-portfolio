import React from 'react'
import Image from "next/image";

const AboutMe = () => {
    return (
        <section id="window-content">
            <div className="content">
                <h1 className="text-4xl text-center font-bold mt-3">Bonjour ! Je suis Dorian</h1>
                <h5 className="text-2xl text-center font-bold">Développeur Web & App</h5>
                <div className="selfie-container">
                    <svg width="202" height="350" viewBox="0 0 455 417" fill="none" xmlns="http://www.w3.org/2000/svg" className="selfie-outline">
                        <path d="M7 389.5L0 416.5L455 416V412.5L453.5 410L424 390L410 375.5L374 344L349.5 325L319 303L302.5 288L286 271.5H283.5L282.5 268.5L289.5 261.5L295.5 252L300 242L302.5 230.5L308 214.5L314 206L321 194.5L326.5 180L335 164L339 161.5L345 155L350 157L354 148.5L359 144L360 137L363.5 133L367 129.5L368.5 124L369 117V111.5L367 104L366 95L363.5 88L357.5 79L354.5 73L353 67.5L346 61L344.5 53L342 45.5L333 35L321 26L313 20.5L307 18L300 16L290 16.5L282 18L276 20.5V16.5L277 13L273 10V4L268 0L255.5 3H245.5H237.5L233 7L226 8L212.5 10.5L196 14.5L180.5 23L172 35.5L157 54.5L156 62L148.5 74L145 84L144 92L139.5 102L143 106.5L141 113L133 124V140L136 156L136.5 184.5L132 198L129 205L132.5 209L133 216L136 228L145 245V248L131.5 254L113 256L90.5 261L76 265L67.5 275L53 284L34 298L26 311.5L17 329L11 356L7 389.5Z" fill="currentColor"/>
                    </svg>

                    <Image className={"m-auto mt-10 selfie"} src={"/images/selfie.png"} alt={"selfie"} width={200} height={400}/>
                </div>
                <p className="text-center px-14 mt-10">
                    Si vous cherchez quelqu’un capable de créer le site ou l’application dont vous avez besoin et que vous méritez, ce serait un plaisir de vous aider et de vous accompagner tout au long du processus.
                </p>
                <p className="text-xs text-center mt-10 text-gray-500">(Ce site est encore en développement, il se peut qu’il y ait des bugs. Le responsive n’a pas encore été conçu pour les petits appareils. Merci de votre compréhension.)</p>
            </div>
        </section>
    )
}
export default AboutMe
