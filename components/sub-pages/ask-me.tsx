import React from 'react'

const AskMe = () => {
    return (
        <section id="window-content">
            <div className="content">
                <h1 className="text-4xl text-center font-bold mt-10">Interested in my profile?</h1>
                <h4 className="mt-10 text-lg text-center">Ask me anything</h4>
                <form className="flex flex-col gap-4 justify-center items-center mt-2 ask-form">
                    <input id="question" type="text" placeholder="ex: Can you do mobile app.." className="input-email"/>
                    <button type="submit" className="btn-send">Ask Me
                    <div className="double-border"></div>
                    </button>
                </form>
            </div>
        </section>
    )
}
export default AskMe
