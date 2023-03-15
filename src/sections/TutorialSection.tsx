import React from 'react'
import tokenIcon from '../../public/token.png'
import taskIcon from '../../public/task.png'
import walletIcon from '../../public/wallet.png'

export default function TutorialSection() {
    const dataTutorial = [
        {
            id: 1,
            icon: tokenIcon,
            title: 'Highest Rates',
            desc: 'Create a new account and login to get started.'
        },
        {
            id: 2,
            icon: walletIcon,
            title: 'No Popups',
            desc: `Create a new account and login to get started.`
        },
        {
            id: 3,
            icon: taskIcon,
            title: 'Easy for development',
            desc: 'Create a new account and login to get started.'
        },
    ]
    return (
        <section className="py-24">
            <div className="bg-sky-400 py-20">
                <div className="flex flex-col text-center items-center justify-center">
                    <h1 className="text-4xl font-semibold mb-6">How Does it Works?</h1>
                    <p className="text-white mx-20">We have worked hard to provide you with the best experience when compared to other similar sites! We are actively developing and improving our site, adding new and exciting features for you!</p>
                    <div className="flex justify-between gap-20 mx-28">
                        {dataTutorial.map(({ id, desc, title, icon }) => (
                            <div key={id} className="text-left flex flex-col mt-10">
                                <div className="flex items-center space-x-2 mb-3">
                                    <img src={icon} alt="feature-1" />
                                    <h2 className="text-xl font-semibold">{title}</h2>
                                </div>
                                <p className="text-white">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
