import React from 'react'
import heroBg from '../../public/bgHero.png'

export default function HeroSection() {
    return (
        <section className="py-16 px-5 layout">
            <div className="banner-hero p-10 flex flex-col text-center items-center justify-center">
                <h1 className="text-white z-10 text-5xl font-semibold mb-5">Earn Free Crypto use</h1>
                <h1 className="bg-clip-text z-10 text-5xl mb-10 text-transparent 
                    bg-gradient-to-r from-[#A4EFF1] to-[#33BBCF] font-semibold">Specta Blockchain Faucet</h1>
                <p className="text-white font-light z-10 w-11/12 text-base mb-10 leading-relaxed">
                    Earn your favorite cryptocurrencies by doing multiple tasks such as filling out Surveys, offerwalls, watching videos and much more! Additional features like achievements, daily bonuses, and a rewarding level system await!
                </p>
                <button type="button" className="z-10 bg-gradient-to-r from-[#A4EFF1] to-[#33BBCF]  focus:outline-none
                      font-bold rounded-lg text-base px-28 py-4 text-center inline-flex items-center
                       ">
                    Get Started Now
                    <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </section>
    )
}
