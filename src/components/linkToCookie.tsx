import { useNavigate } from "react-router-dom";
import { P, Title1 } from "./typographie";
import { PiBeerBottleDuotone } from "react-icons/pi";

function LinkToCookie() {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1200px] mx-auto px-[20px] text-center sm:mt-64">
      <div className="flex flex-col items-center gap-6">
        <Title1>
          Un Clic pour Sauver l’Océan ?
        </Title1>
        <P style={{ marginTop: 0 }}>
          Chaque année, 8 millions de tonnes de déchets polluent nos océans. Participez à la lutte en jouant à notre jeu inspiré de “cookie clicker”. Collectez des déchets, découvrez des faits surprenants et aidez à sensibiliser sur cette urgence écologique. Un clic pour vous, un grand geste pour notre planète !

        </P>
        <div className="flex items-center gap-6">
          <button
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-5 md:mt-0"
            onClick={() => navigate("/cookie")}
          >
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1e40af_0%,#ffffee_50%,#1e40af_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-[17px] font-medium text-black backdrop-blur-3xl">
              En savoir plus
              <PiBeerBottleDuotone className="ml-[10px] text-[24px]" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LinkToCookie;
