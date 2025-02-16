"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <section className="py-28 overflow-hidden relative">
            <div className="container relative text-center">

                {/* Attention-Grabbing Banner */}
                <div className="flex justify-center">
                    <div className="inline-flex py-2 px-4 text-sm bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full text-neutral-950 font-semibold shadow-lg">
                        🚀 Powering Founders to Secure Funding Faster!
                    </div>
                </div>

                {/* Main Headline */}
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mt-8 leading-tight">
                    Find Investors.<br />
                    <span className="text-lime-500">Secure Funding.</span><br />
                    Scale Your Startup.
                </h1>

                {/* Subheadline - Responsive text & spacing */}
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-6 sm:mt-8 md:mt-10 max-w-2xl md:max-w-3xl mx-auto font-light leading-relaxed sm:leading-loose">
                    Discover{' '}
                    <strong className="font-semibold text-gray-100">5,000+ investor profiles</strong>,
                    track your outreach, and close deals —{' '}
                    <strong className="font-semibold text-gray-100">all in one powerful platform</strong>.
                    The smarter way to raise capital,{' '}
                    <strong className="font-semibold text-gray-100">for free.</strong>
                </p>

            </div>
        </section>
    );
}
