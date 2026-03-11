import React from 'react'
import { motion } from "framer-motion";
import { Plane, ShieldCheck, Route } from "lucide-react";
import { BiSolidPlaneAlt } from "react-icons/bi";
const YourJourney = () => {
    return (
        <section className="py-16 px-4 md:px-0">
            <div className="mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Images */}
                <div className="relative flex flex-col w-full items-center lg:items-start">
                    <div className="relative w-full max-w-md md:max-w-4xl -ml-14 md:ml-0">
                        <img src="/img/Group-68.png" alt="travel" />
                    </div>

                    <img
                        src="/img/suitcase-2.png"
                        className="hidden lg:block absolute md:h-52 right-0 -top-40 md:right-[-750px] z-20"
                    />
                    {/* ✅ Counter moved heare */}
                    <div className="flex items-center gap-4 pt-6 md:ml-24">
                        <BiSolidPlaneAlt className="text-[#0061E0]" size={40} />
                        <h3 className="text-2xl sm:text-[36px] font-goodly font-medium">
                            <span className="text-[#FFB724]">250+</span> Tour Packages
                        </h3>
                    </div>
                </div>

                {/* Right Content */}
                <div className="space-y-6 text-center lg:text-left">
                    <h2 className="text-xl sm:text-[36px] -mt-6 leading-snug font-goodly font-medium">
                        Your <span className="text-[#FC8605]">Journey</span>, Our
                        <br className="hidden lg:block" />
                        <span className="text-blue-600">Commitment</span>
                    </h2>

                    {/* Subheading - Responsive content */}
                    <p className="hidden lg:block text-gray-600 font-poppins max-w-lg mx-auto font-medium lg:mx-0 text-[15px] sm:text-[17px]">
                        We don’t just plan trips  we craft seamless travel<br /> experiences
                        designed around your comfort, preferences,<br /> and peace of mind.
                    </p>

                    <p className="lg:hidden text-gray-500 font-poppins max-w-2xl  mx-auto font-medium lg:mx-0 text-[15px] sm:text-[17px]">
                        We don’t just plan trips; we craft seamless travel experiences designed around your comfort, preferences, and peace of mind.
                    </p>

                    {/* Features */}
                    <div className="space-y-8 pt-4">
                        <div className="flex items-start gap-4 text-left">
                            <div className="flex-shrink-0 p-4 bg-[#E3F2FD] text-[#0644A0] rounded-2xl">
                                <Route size={24} />
                            </div>
                            <div className="font-poppins">
                                <h4 className="font-medium text-[17px] text-[#FC8605] mb-1">
                                    Personalized Travel Planning
                                </h4>
                                <p className="text-gray-700 text-[13px] sm:text-[15px] leading-relaxed">
                                    Every trip is thoughtfully designed based on your interests, budget, and travel style—no generic itineraries.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 text-left">
                            <div className="flex-shrink-0 p-4 bg-[#E3F2FD] text-[#0644A0] rounded-2xl">
                                <ShieldCheck size={24} />
                            </div>
                            <div className="font-poppins">
                                <h4 className="font-medium text-[17px] text-[#FC8605] mb-1">
                                    Trusted Travel Experts
                                </h4>
                                <p className="text-gray-700 text-[13px] sm:text-[15px] leading-relaxed">
                                    Our experienced team ensures smooth coordination, reliable bookings, and expert guidance at every step.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default YourJourney
