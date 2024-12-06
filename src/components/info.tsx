import { Title1 } from "./typographie";
import NumberTicker from "@/components/ui/number-ticker";

interface InfoProps {
  data: {
    title: string;
    number: number;
  };
}

function InfoComponents({ data }: InfoProps) {
  return (
    <div className="relative px-[20px] py-[100px] max-w-[1200px] mx-auto">
      <div className="flex flex-col space-y-8">
        {/* Titre principal */}
        <Title1 className="text-left text-lg sm:text-lg md:text-2xl lg:text-4xl">
          Vous savez combien représentent les océans de la surface de la Terre ?
        </Title1>

        {/* Pourcentage avec un style responsive */}
        <Title1
          className="text-right text-[#3A2EE7] right-0 mr-4 sm:mr-0"
          style={{
            fontSize: "5rem", // Taille par défaut
          }}
        >
          <NumberTicker
            value={data.number}
            className="text-[#3A2EE7]"
          />
          %
        </Title1>
      </div>
    </div>
  );
}

export default InfoComponents;
