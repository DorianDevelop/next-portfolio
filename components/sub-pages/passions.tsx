import React from 'react'
import Image from "next/image";

const Passions = () => {
    return (
        <section id="window-content">
            <div className="content">
                <section className="passions-container flex flex-col gap-10">
                    <div className="passion">
                        <h1 className="text-xl font-bold underline text-center mb-2">Programmation</h1>
                        <Image src="/icons/programming.svg" alt="programming-icon" width={32} height={32} className="passion-icon"/>
                        <Image src="/icons/code.svg" alt="code-icon" width={32} height={32} className="passion-icon-2"/>
                        <p>J’adore coder et je suis toujours à la recherche de nouveaux défis. <br/>Depuis mes 12 ans, je sais que je voulais en faire mon métier. Ce que j’aime vraiment, c’est pouvoir créer presque n’importe quoi par moi-même, avec très peu de ressources, juste beaucoup d’imagination.</p>

                        <p className="passion-time-badge">10 ans</p>
                    </div>
                    <div className="passion">
                        <h1 className="text-xl font-bold underline text-center mb-2">Musculation</h1>
                        <Image src="/icons/barbell.svg" alt="barbell-icon" width={32} height={32} className="passion-icon"/>
                        <Image src="/icons/weight.svg" alt="weight-icon" width={32} height={32} className="passion-icon-2"/>
                        <p>
                            La musculation est l’une de mes grandes passions. Elle m’a appris la résilience, la patience, et une vraie appréciation du progrès sur le long terme. Ces valeurs influencent beaucoup la façon dont j’aborde les défis dans ma carrière.
                        </p>

                        <p className="passion-time-badge">4 ans</p>
                    </div>
                    <div className="passion">
                        <h1 className="text-xl font-bold underline text-center mb-2">Nourriture</h1>
                        <Image src="/icons/burger.svg" alt="burger-icon" width={32} height={32} className="passion-icon"/>
                        <Image src="/icons/pizza.svg" alt="pizza-icon" width={32} height={32} className="passion-icon-2 alt"/>
                        <p>
                            Si l’enthousiasme est synonyme de passion, alors la nourriture en est clairement une pour moi. L’attente d’un repas gourmand pourrait presque être un sport à part entière chez moi.
                        </p>

                        <p className="passion-time-badge ever">Pour toujours</p>
                    </div>
                </section>
            </div>
        </section>
    )
}
export default Passions
