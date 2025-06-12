import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="relative h-screen w-full">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1647140656295-61486627df99?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Gentleman's Lab background"
                    fill
                    className="object-cover"
                    quality={100}
                    priority
                />
                <div className="absolute inset-0 bg-black opacity-60" />
            </div>

            <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-white">
                <div className="max-w-4xl text-center space-y-6 px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        Welcome to <span className="text-amber-500">The Gentleman&apos;s Lab</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                        Premium grooming and lifestyle services for the modern gentleman.
                        Experience luxury, style, and relaxation in every visit.
                    </p>
                    <div className="pt-8">
                        <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300 transform hover:scale-105">
                            Book an Appointment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;