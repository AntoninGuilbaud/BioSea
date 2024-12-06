"use client";

import { useEffect, useState } from "react";

export function GameCaptcha({ onSuccess }: { onSuccess: () => void }) {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * 90, // Position horizontale aléatoire (en %)
        y: Math.random() * 90, // Position verticale aléatoire (en %)
      });
    }, 1000); // Change de position toutes les secondes
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setScore(score + 1);
    if (score + 1 === 5) {
      onSuccess();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
      style={{ position: "fixed" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg relative">
        <h2 className="text-xl font-bold text-black mb-4">
          Captcha : Cliquez sur le cercle 5 fois
        </h2>
        <div className="relative w-[300px] h-[300px] bg-gray-200 rounded-lg overflow-hidden">
          <div
            onClick={handleClick}
            style={{
              top: `${position.y}%`,
              left: `${position.x}%`,
              position: "absolute",
              width: "50px",
              height: "50px",
              backgroundColor: "blue",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          ></div>
        </div>
        <p className="text-center mt-4 text-black">
          Score : {score} / 5
        </p>
      </div>
    </div>
  );
}
