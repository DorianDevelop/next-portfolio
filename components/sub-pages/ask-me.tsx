import React from 'react'

const AskMe = () => {
    return (
        <section id="window-content">
            <div className="content">
                <h1 className="text-4xl text-center font-bold mt-10">Intéressé par mon profil ?</h1>
                <h4 className="mt-10 text-lg text-center">Posez-moi une question</h4>
                <form className="flex flex-col gap-4 justify-center items-center mt-2 ask-form">
                    <input id="question" type="text" placeholder="ex : Comment tu ferais une animation de chargement..."/>
                    <button type="submit" className="double-border-button">Demander</button>
                </form>
            </div>
        </section>
    )
}
export default AskMe
