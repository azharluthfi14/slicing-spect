import React from 'react'
import highRate from '../../public/highRate.png'
import noPop from '../../public/noPop.png'
import easyDev from '../../public/easyDev.png'

export const FeatureSection = () => {

    const dataFeature = [
        {
            id: 1,
            icon: highRate,
            title: 'Highest Rates',
            desc: 'We offer the highest rates around. Your rates will keep increasing as you use our site and level up!'
        },
        {
            id: 2,
            icon: noPop,
            title: 'No Popups',
            desc: `We only show non-intrusive advertisements on our website, and don't display any annoying popups!`
        },
        {
            id: 3,
            icon: easyDev,
            title: 'Easy for development',
            desc: 'the goal of easy development is to reduce the complexity and barriers to entry associated with software development'
        },
    ]

    return (
        <section className="py-24 layout">
            <div className="mb-10 text-center mx-10">
                <h1 className="bg-clip-text font-semibold text-5xl mb-10 text-transparent 
                    bg-gradient-to-r from-[#A4EFF1] to-[#33BBCF]">Fire Faucet’s Top Features</h1>
                <p className="text-secondary-grey ">We have worked hard to provide you with the best experience when compared to other similar sites! We are actively developing and improving our site, adding new and exciting features for you!</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mx-28">
                {dataFeature.map(({ id, desc, title, icon }) => (
                    <div key={id} className="p-5 text-center flex flex-col items-center mt-10">
                        <img src={icon} alt="feature-1" className="mb-5" />
                        <h2 className="mb-5 text-white text-xl">{title}</h2>
                        <p className="text-secondary-grey">{desc}</p>
                    </div>
                ))}

            </div>
        </section>
    )
}
