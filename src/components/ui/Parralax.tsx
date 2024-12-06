"use client";
import { HeroParallax } from "../ui/hero-parallax";
import Image1 from "../../assets/img-modx70-1.jpg";
import Image2 from "../../assets/img-modx70-2.jpg";
import Image3 from "../../assets/img-modx70-3.webp";
import Image4 from "../../assets/img-modx70-4.jpg";
import Image5 from "../../assets/img-modx70-5.jpg";
import Image6 from "../../assets/img-modx70-6.jpg";
import Image7 from "../../assets/img-modx70-7.jpg";
import Image8 from "../../assets/img-modx70-8.jpg";
import Image9 from "../../assets/img-modx70-9.jpg";
import Image10 from "../../assets/img-modx70-10.jpg";
import Image33 from "../../assets/img-modx70-3.jpg";
import Image11 from "../../assets/img-modx70-11.jpg";
import Image12 from "../../assets/img-modx70-12.jpg";
import Image13 from "../../assets/img-modx70-13.jpg";

export function HeroParallaxDemo() {
    return <HeroParallax products={products} />;
}
export const products = [
    {
        title: "Une révolution",
        link: "https://gomoonbeam.com",
        thumbnail:
            Image1,
    },
    {
        title: "Expérience unique",
        link: "https://cursor.so",
        thumbnail:
            Image2,
    },
    {
        title: "Finitions parfaites",
        link: "https://userogue.com",
        thumbnail:
            Image3,
    },

    {
        title: "100 % énergies renouvelables",
        link: "https://editorially.org",
        thumbnail:
            Image4,
    },
    {
        title: "Zéro émission de CO2",
        link: "https://editrix.ai",
        thumbnail:
            Image5,
    },
    {
        title: "Propulsion entièrement automatisé aile/moteur.",
        link: "https://app.pixelperfect.quest",
        thumbnail:
            Image6,
    },

    {
        title: "8 / 10 personnes",
        link: "https://algochurn.com",
        thumbnail:
            Image7,
    },
    {
        title: "100% électrique",
        link: "https://ui.aceternity.com",
        thumbnail:
            Image8,
    },
    {
        title: "Respect de l’Océan",
        link: "https://tailwindmasterkit.com",
        thumbnail:
            Image9,
    },
    {
        title: "Luxe",
        link: "https://smartbridgetech.com",
        thumbnail:
            Image10,
    },
    {
        title: "Innovation",
        link: "https://renderwork.studio",
        thumbnail:
            Image33,
    },

    {
        title: "Le bateau du futur",
        link: "https://cremedigital.com",
        thumbnail:
            Image11,
    },
    {
        title: "MODX 70",
        link: "https://goldenbellsacademy.com",
        thumbnail:
            Image12,
    },
    {
        title: "Technologies",
        link: "https://invoker.lol",
        thumbnail:
            Image33,
    },
    {
        title: "40% bio-sourcés, 15% carbone",
        link: "https://efreeinvoice.com",
        thumbnail:
            Image13,
    },
];
