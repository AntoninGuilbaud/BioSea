"use client";
import { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

import Image from "@/assets/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();
    const navigate = useNavigate();

    // set true for the initial state so that nav bar is visible in the hero section
    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                // also set true for the initial state
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-[1200px] w-[calc(100%-125px)] fixed z-[5000] top-10 inset-x-0 mx-4 sm:mx-6 md:mx-8 lg:mx-auto px-4 py-3 rounded-lg border border-slate-100 items-center justify-between space-x-4",
                    className
                )}
                style={{
                    backdropFilter: "blur(16px) saturate(180%)",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderRadius: "12px",
                    border: "1px solid #D3D3D3",
                }}
            >
                <a href="/"> {/* Ajout d'une marge à droite de l'image */}
                    <img src={Image} alt="Logo" className="h-4 sm:h-10" />
                </a>
                <div className="flex space-x-4">
                    {navItems.map((navItem: any, idx: number) => (
                        <a
                            key={`link=${idx}`}
                            href={navItem.link}
                            className={cn(
                                "relative text-black items-center flex space-x-1 hover:text-blue-800 transition-all hover:font-bold"
                            )}
                        >
                            {/* hide icon on desktop */}
                            <span className="block md:hidden">{navItem.icon}</span>
                            {/* add !cursor-pointer */}
                            {/* remove hidden sm:block for the mobile responsive */}
                            <span className="hidden sm:block text-base !cursor-pointer ">{navItem.name}</span>
                        </a>

                    ))}
                    <button onClick={() => navigate("/vision")} className="border text-base font-medium relative border-neutral-200 dark:border-white/[0.2] text-black px-4 py-2 rounded-xl hover:border-blue-600 transition-all duration-700">
                        <span className="hidden sm:block text-base !cursor-pointer ">Se connecter</span>
                        <FaUserCircle className="block md:hidden" />
                        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
