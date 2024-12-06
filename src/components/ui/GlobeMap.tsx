"use client";
import { motion } from "framer-motion";
import { World } from "./globe";



export function GlobeDemo() {
    const globeConfig = {
        pointSize: 4,
        globeColor: "#1c3fb0",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#0a3a7e",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };
    const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
    const sampleArcs = [
        {
            order: 1,
            startLat: 48.8566,
            startLng: 2.3522,
            endLat: 40.7128,
            endLng: -74.0060,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 2,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 3,
            startLat: 34.0522,
            startLng: -118.2437,
            endLat: 37.7749,
            endLng: -122.4194,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 4,
            startLat: 40.7128,
            startLng: -74.0060,
            endLat: 48.8566,
            endLng: 2.3522,
            arcAlt: 0.4,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 5,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 6,
            startLat: 35.6762,
            startLng: 139.6503,
            endLat: 52.52,
            endLng: 13.405,
            arcAlt: 0.6,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 7,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 8,
            startLat: 31.2304,
            startLng: 121.4737,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * colors.length)],
        }
    ];




    return (
        <div className="w-full h-[60vh] relative">
            {/* World globe component */}
            <World globeConfig={globeConfig} data={sampleArcs} />

            {/* Motion animation example */}
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            >
                {/* Your animated text content */}
            </motion.div>
        </div>
    );

}
