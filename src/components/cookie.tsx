import { useEffect, useState } from "react";
import cookieImage from "../assets/Trash 512x512.png";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

function CookieButton() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState("");
  const [position, setPosition] = useState({ top: 200, left: 200 });
  const [showForm, setShowForm] = useState(false); // État pour afficher le formulaire d'email
  const [showEquationForm, setShowEquationForm] = useState(false); // État pour afficher le formulaire d'équation
  const [equationAnswer, setEquationAnswer] = useState(""); // Réponse à l'équation
  const [equation, setEquation] = useState(""); // L'équation à résoudre
  const [email, setEmail] = useState(""); // État pour le champ d'email
  const [isBlocked, setIsBlocked] = useState(false); // État pour bloquer les clics
  const [remainingTime, setRemainingTime] = useState(0); // Temps restant en secondes
  const [showCatchButton, setShowCatchButton] = useState(false); // Bouton "Attrape-moi"
  const [catchButtonPosition, setCatchButtonPosition] = useState({
    top: 300,
    left: 300,
  });
  const [cookieDisabled, setCookieDisabled] = useState(false); // Empêcher le clic sur le cookie
  const [timeAddedMessage, setTimeAddedMessage] = useState(""); // Message affiché lorsqu'on ajoute du temps
  const [showPopup, setShowPopup] = useState(false); // État pour afficher le pop-up
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // État pour afficher le pop-up de succès
  const [showSuccessPopupEq, setShowSuccessPopupEq] = useState(false); // État pour afficher le pop-up de succès
  const [showErrorPopup, setShowErrorPopup] = useState(false); // État pour afficher le pop-up d'erreur

  function intToRomanExtended(num: number): string {
    if (num <= 0) {
      throw new Error("Le nombre doit être strictement positif.");
    }

    const romanNumerals: { value: number; symbol: string }[] = [
      { value: 1000, symbol: "M" },
      { value: 900, symbol: "CM" },
      { value: 500, symbol: "D" },
      { value: 400, symbol: "CD" },
      { value: 100, symbol: "C" },
      { value: 90, symbol: "XC" },
      { value: 50, symbol: "L" },
      { value: 40, symbol: "XL" },
      { value: 10, symbol: "X" },
      { value: 9, symbol: "IX" },
      { value: 5, symbol: "V" },
      { value: 4, symbol: "IV" },
      { value: 1, symbol: "I" },
    ];

    let result = "";
    let remaining = num;

    for (const { value, symbol } of romanNumerals) {
      while (remaining >= value) {
        result += symbol;
        remaining -= value;
      }
    }

    return result;
  }

  function handleClick() {
    if (isBlocked || cookieDisabled) return; // Empêcher le clic sur le cookie si le bouton n'est pas attrapé

    setCount((prevCount) => prevCount + 1);
    setResult(intToRomanExtended(count + 1));

    const randomTop = Math.floor(Math.random() * (window.innerHeight - 200));
    const randomLeft = Math.floor(Math.random() * (window.innerWidth - 200));
    setPosition({
      top: Math.max(0, randomTop),
      left: Math.max(0, randomLeft),
    });

    // Afficher le formulaire si count atteint 3
    if (count + 1 === 3) {
      setShowForm(true);
    }

    // Afficher le bouton "Attrape-moi" si count atteint 13
    if (count + 1 === 13) {
      setShowCatchButton(true);
      setCookieDisabled(true); // Désactiver le cookie tant que le bouton n'est pas cliqué
    }

    // Bloquer les clics après chaque tranche de 10 cookies
    if ((count + 1) % 10 === 0 && count + 1 != 30) {
      setIsBlocked(true);
      setRemainingTime(30); // Initialiser le compte à rebours à 30 secondes
      const countdown = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(countdown); // Arrêter le compte à rebours
            setIsBlocked(false); // Débloquer les clics
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  }

  function handleMouseOverCatchButton() {
    // Déplacer le bouton à un emplacement aléatoire
    const randomTop = Math.floor(Math.random() * (window.innerHeight - 50));
    const randomLeft = Math.floor(Math.random() * (window.innerWidth - 100));
    setCatchButtonPosition({
      top: Math.max(0, randomTop),
      left: Math.max(0, randomLeft),
    });
  }

  function handleCatchButtonClick() {
    setShowCatchButton(false); // Cacher le bouton "Attrape-moi"
    setCookieDisabled(false); // Activer à nouveau le clic sur le cookie
  }

  function handleCookieClickDuringCooldown() {
    // Ajouter 30 secondes à chaque clic pendant le cooldown
    if (isBlocked) {
      setRemainingTime((prevTime) => prevTime + 30); // Ajouter 30 secondes au timer
      setTimeAddedMessage("30 secondes ajoutées ! Je t'avais dis frérot ");

      // Masquer le message après 3 secondes
      setTimeout(() => {
        setTimeAddedMessage("");
      }, 3000);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 0) {
      }
    }, 1000);

    if (count % 10 === 0 && count !== 0) {
    }

    return () => clearInterval(interval);
  }, [count]);


  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShowSuccessPopup(true);
    setShowForm(false);
    return false;
  };

  const handleEquationSubmit = (e: any) => {
    e.preventDefault();
    if (equationAnswer === "1") {
      setShowSuccessPopupEq(true);
    } else {
      setShowErrorPopup(true);
    }
    setShowEquationForm(false);
  };

  const generateEquation = () => {
    setEquation(`\\int_{0}^{\\sqrt{\\pi}} \\ x \\sin(x^2) \\, dx`);
  };

  useEffect(() => {
    if (count === 29) {
      generateEquation(); // Générer une équation après 29 cookies
      setShowEquationForm(true);
    }

    if (count === 30) {
      setShowPopup(true); // Afficher le pop-up lorsque count atteint 30
    }
  }, [count]);

  return (
    <div>
      <div
        className="relative"
        style={{ position: "relative", height: "100vh", width: "100vw" }}
      >
        <img
          src={cookieImage}
          onClick={() => {
            handleClick();
            handleCookieClickDuringCooldown(); // Ajouter du temps à chaque clic pendant le cooldown
          }}
          className={`cursor-pointer h-[200px] w-[200px] absolute ${isBlocked || cookieDisabled ? "opacity-50" : ""
            }`}
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            transition: "all 0.3s ease-in-out",
          }}
          alt="Cookie"
        />
        <p className="text-[1.5rem] font-semibold text-[#3A2EE7] mt-10 mx-5">
          Déchets Enlevées : {result}
        </p>
        {isBlocked && (
          <p className="text-[#3A2EE7] text-[1.5rem] mt-5">
            Patientez encore {remainingTime} secondes avant de cliquer !{" "}
            <br></br>Essaye même pas de cliquer sur le Déchet
          </p>
        )}

        {/* Afficher le message lorsque du temps est ajouté */}
        {timeAddedMessage && (
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white p-3 rounded-xl font-bold">
            {timeAddedMessage}
          </div>
        )}

        {showCatchButton && (
          <button
            onMouseOver={handleMouseOverCatchButton}
            onClick={handleCatchButtonClick}
            className="absolute bg-blue-500 text-white px-4 py-2 rounded-xl font-bold"
            style={{
              top: `${catchButtonPosition.top}px`,
              left: `${catchButtonPosition.left}px`,
              transition: "all 1s ease-in-out", // Animation lente pour le déplacement
            }}
          >
            Attrape-moi !
          </button>
        )}
      </div>

      {/* Formulaire affiché conditionnellement */}
      {showForm && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
          style={{ zIndex: 10 }}
        >
          <div className="bg-white p-6 shadow-lg rounded-lg w-96">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
                <svg
                  className="w-6 h-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                  />
                </svg>
              </div>
              <h2 className="ml-3 text-lg font-semibold text-gray-900">
                Qui es tu ?
              </h2>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom
                </label>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom
                </label>
              </div>
              <div className="flex justify-center space-x-2">
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Soumettre
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Formulaire d'équation */}
      {showEquationForm && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
          style={{ zIndex: 10 }}
        >
          <div className="bg-white p-6 shadow-lg rounded-lg w-96">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
                <svg
                  className="w-6 h-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                  />
                </svg>
              </div>
              <h2 className="ml-3 text-lg font-semibold text-gray-900">
                Résoudre l'équation
              </h2>
            </div>
            <form onSubmit={(e) => handleEquationSubmit(e)}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Résolvez cette équation :
                </label>
                <div className="text-xl font-bold mb-3">
                  <BlockMath math={equation} />
                </div>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                  value={equationAnswer}
                  onChange={(e) => setEquationAnswer(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-center space-x-2">
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Soumettre
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Pop-up de succès */}
      {showSuccessPopup && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
          style={{ zIndex: 10 }}
        >
          <div className="bg-white p-6 shadow-lg rounded-lg w-96 text-center">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Force à toi {email}, c'est que le début
            </h2>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="px-4 py-2 text-sm font-medium text-white  bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* Pop-up de succès */}
      {showSuccessPopupEq && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
          style={{ zIndex: 10 }}
        >
          <div className="bg-white p-6 shadow-lg rounded-lg w-96 text-center">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              T'es Chauuuudddd !
            </h2>
            <button
              onClick={() => setShowSuccessPopupEq(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded-xl font-bold"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* Pop-up d'erreur */}
      {showErrorPopup && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
          style={{ zIndex: 10 }}
        >
          <div className="bg-white p-6 shadow-lg rounded-lg w-96 text-center">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Réponse incorrecte. Désolé !
            </h2>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
      {/* Pop-up affiché conditionnellement */}

      {showPopup && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
          style={{ zIndex: 10 }}
        >
          <div className="bg-white p-6 shadow-lg rounded-lg w-96 text-center">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Bravo tu as nettoyé toute la zone !
            </h2>
            <div className="flex justify-center space-x-2">
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Souffrir à nouveau ?
              </button>
              <button
                onClick={() => window.history.back()}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Page précédente
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CookieButton;
