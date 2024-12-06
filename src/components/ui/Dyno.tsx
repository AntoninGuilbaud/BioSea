import { useEffect, useRef, useState } from "react";
import Dino from "../../assets/dino.png"; // Import your Dino image
import Cactus from "../../assets/cactus.png"; // Import your Cactus image

const Game = ({ onGameEnd }: { onGameEnd: (success: boolean) => void }) => {
  const [obstacles, setObstacles] = useState<{ id: number; left: number; speed: number }[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false);
  const [baseSpeed, setBaseSpeed] = useState(60); // Vitesse de base des obstacles
  const dinoRef = useRef<HTMLDivElement>(null);
  const gameInterval = useRef<NodeJS.Timeout | null>(null);
  const obstacleSpawnInterval = useRef<NodeJS.Timeout | null>(null);
  const timerInterval = useRef<NodeJS.Timeout | null>(null);
  const obstacleIdRef = useRef(0);

  const startGame = () => {
    setIsGameRunning(true);
    setIsGameOver(false);
    setIsGameWon(false);
    setTimer(0);
    setObstacles([]);
    setBaseSpeed(60); // Réinitialiser la vitesse de base
    obstacleIdRef.current = 0;
  };

  useEffect(() => {
    if (isGameRunning) {
      // Mouvement des obstacles
      gameInterval.current = setInterval(() => {
        setObstacles((prevObstacles) =>
          prevObstacles
            .map((obstacle) => ({ ...obstacle, left: obstacle.left - obstacle.speed }))
            .filter((obstacle) => obstacle.left > 0) // Supprimer les obstacles hors de l'écran
        );
      }, 50);

      // Ajouter des obstacles périodiquement avec un intervalle aléatoire
      const spawnObstacles = () => {
        const randomInterval = Math.random() < 0.5 ? 2500 : 1750; // 1.5s ou 0.75s
        obstacleSpawnInterval.current = setTimeout(() => {
          setObstacles((prevObstacles) => [
            ...prevObstacles,
            { id: obstacleIdRef.current++, left: window.innerWidth, speed: baseSpeed },
          ]);
          spawnObstacles();
        }, randomInterval);
      };
      spawnObstacles();

      // Timer
      timerInterval.current = setInterval(() => {
        setTimer((prevTimer) => {
          const newTime = prevTimer + 1;
          if (newTime >= 10) {
            setIsGameRunning(false);
            setIsGameWon(!isGameOver); // Si pas de collision, on gagne
            clearAllIntervals();
          }

          // Augmenter la vitesse toutes les 3 secondes
          if (newTime % 3 === 0) {
            setBaseSpeed((prevSpeed) => prevSpeed + 0.5);
          }
          return newTime;
        });
      }, 1000); // Mettre à jour chaque seconde
    }

    return () => {
      clearAllIntervals();
    };
  }, [isGameRunning]);

  const clearAllIntervals = () => {
    if (gameInterval.current) clearInterval(gameInterval.current);
    if (obstacleSpawnInterval.current) clearTimeout(obstacleSpawnInterval.current);
    if (timerInterval.current) clearInterval(timerInterval.current);
  };

  useEffect(() => {
    const checkCollision = () => {
      const dino = dinoRef.current;
      if (!dino) return;

      const dinoBounds = dino.getBoundingClientRect();

      for (const obstacle of obstacles) {
        const obstacleElement = document.getElementById(`obstacle-${obstacle.id}`);
        if (!obstacleElement) continue;

        const obstacleBounds = obstacleElement.getBoundingClientRect();

        if (
          dinoBounds.left < obstacleBounds.right &&
          dinoBounds.right > obstacleBounds.left &&
          dinoBounds.top < obstacleBounds.bottom &&
          dinoBounds.bottom > obstacleBounds.top
        ) {
          setIsGameOver(true);
          setIsGameRunning(false);
          clearAllIntervals();
          break;
        }
      }
    };

    const collisionInterval = setInterval(checkCollision, 10);
    return () => clearInterval(collisionInterval);
  }, [obstacles]);

  const handleKeyPress = (e: KeyboardEvent) => {
    if (isGameRunning) {
      if (e.key === " " || e.key === "ArrowUp") {
        e.preventDefault(); // Empêche le défilement de la fenêtre
        if (!isJumping) {
          setIsJumping(true);
          setTimeout(() => setIsJumping(false), 350); // Prolonger le saut
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isGameRunning, isJumping]);

  useEffect(() => {
    if (isGameWon) {
      onGameEnd(true); // Si on gagne, fermer la page
    } else if (isGameOver) {
      onGameEnd(false); // Si on perd, ne rien faire
    }
  }, [isGameWon, isGameOver]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="game-container relative w-[90%] max-w-[800px] h-[600px] bg-gray-100 overflow-hidden rounded-md">
        {/* Timer */}
        <div className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded-md">
          Timer: {timer}s
        </div>

        {/* Dino */}
        <div
          ref={dinoRef}
          className={`dino ${isJumping ? "jump-animation" : ""}`}
          style={{
            bottom: isJumping ? "200px" : "50px",
            left: "50px",
            transition: "bottom 0.25s ease-in-out",
            width: "80px",
            height: "80px",
            backgroundImage: `url(${Dino})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Obstacles */}
        {obstacles.map((obstacle) => (
          <div
            key={obstacle.id}
            id={`obstacle-${obstacle.id}`}
            className="obstacle"
            style={{
              bottom: "50px", // Fixé sur le même axe des abscisses
              left: `${obstacle.left}px`,
              width: "100px",
              backgroundImage: `url(${Cactus})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "100px",
            }}
          ></div>
        ))}

        {/* Game Over or Win Overlay */}
        {!isGameRunning && (
          <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 text-white">
            {isGameOver && <h1 className="text-4xl font-bold mb-4">Game Over</h1>}
            {isGameWon && <h1 className="text-4xl font-bold mb-4">You Win!</h1>}
            {!isGameWon && (
              <button
                onClick={startGame}
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md"
              >
                Retry
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
