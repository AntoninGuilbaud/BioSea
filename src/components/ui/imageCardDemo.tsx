"use client";
import * as React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Boat from "../../assets/boat.jpg" ;

export function ImageCardDemo() {
  const radius = 200; // Rayon de l'effet au survol
  const [visible, setVisible] = React.useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${visible ? `${radius}px` : "0px"} circle at ${mouseX}px ${mouseY}px,
            var(--blue-500),
            transparent 80%
          )
        `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="flex h-full w-full md:rounded-2xl p-4 shadow-input bg-white dark:bg-black transition duration-300"
    >
      <div className="flex-1 h-[520px] flex flex-col items-center justify-center">
        {/* Image */}
        <div className="w-full h-full overflow-hidden rounded-md md:rounded-xl bg-gray-200 dark:bg-zinc-800">
          <img
            src={Boat}
            alt="Example"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </motion.div>
  );
}
