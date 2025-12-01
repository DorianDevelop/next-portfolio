import React from 'react'
import Image from "next/image";

const Passions = () => {
    return (
        <section id="window-content">
            <div className="content">
                <section className="passions-container flex flex-col gap-10">
                    <div className="passion">
                        <h1 className="text-xl font-bold underline text-center mb-2">Programming</h1>
                        <Image src="/icons/programming.svg" alt="programming-icon" width={32} height={32} className="passion-icon"/>
                        <Image src="/icons/code.svg" alt="code-icon" width={32} height={32} className="passion-icon-2"/>
                        <p>I love to code, and I’m always looking for new challenges.
                            <br />
                            Since I was 12, I’ve known that I wanted to make it my job. What I really like is being able to create almost anything on my own, with minimal resources, just a lot of imagination.</p>

                        <p className="passion-time-badge">10 Years</p>
                    </div>
                    <div className="passion">
                        <h1 className="text-xl font-bold underline text-center mb-2">Bodybuilding</h1>
                        <Image src="/icons/barbell.svg" alt="barbell-icon" width={32} height={32} className="passion-icon"/>
                        <Image src="/icons/weight.svg" alt="weight-icon" width={32} height={32} className="passion-icon-2"/>
                        <p>
                            Bodybuilding is one of my key passions. It’s helped me develop resilience, patience, and a deep appreciation for long-term progress. These values strongly influence the way I approach challenges in my career.
                        </p>

                        <p className="passion-time-badge">4 Years</p>
                    </div>
                    <div className="passion">
                        <h1 className="text-xl font-bold underline text-center mb-2">Food</h1>
                        <Image src="/icons/burger.svg" alt="burger-icon" width={32} height={32} className="passion-icon"/>
                        <Image src="/icons/pizza.svg" alt="pizza-icon" width={32} height={32} className="passion-icon-2 alt"/>
                        <p>
                            If enthusiasm counts as passion, then food is definitely one of mine. The way I look forward to a cheat meal could be a sport in itself.
                        </p>

                        <p className="passion-time-badge">4 Ever</p>
                    </div>
                </section>
            </div>
        </section>
    )
}
export default Passions
