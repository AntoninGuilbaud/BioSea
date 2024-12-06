import React, { useState } from "react";
import { Title1, P, Title2 } from "./typographie";
import NumberTicker from "@/components/ui/number-ticker";

const Calcul = () => {
  const [nbbouteilles, setBouteille] = useState(0);
  const [nbmegots, setMegots] = useState(0);
  const [nbpolystyrene, setPolystyrene] = useState(0);
  const [nbbatterie, setBatterie] = useState(0);
  const [nbaccident, setAccident] = useState(0);
  const [nbpetrolier, setPetrolier] = useState(0);

  const calculer =
    0 +
    nbbouteilles * 500 +
    nbmegots * 150 +
    nbpolystyrene * 3000 +
    nbbatterie * 30000 +
    nbaccident * 1000000 +
    nbpetrolier * 200000000;

  function formatWaterAmount(t: number) {
    console.log(t);
    if (t !== 0) {
      if (t >= 1000000) {
        return (t / 1000000).toFixed(2);
      } else if (t >= 1000) {
        return (t / 1000).toFixed(2);
      } else {
        return t;
      }
    } else {
      return 0;
    }
  }

  function formatWaterString(t: number) {
    if (t >= 1000000) {
      return `millions de litres`;
    } else if (t >= 1000) {
      return `milliers de litres`;
    } else {
      return `litres`;
    }
  }

  const renderCounter = (
    label: string,
    multiplier: number,
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
  ) => (
    <div className="flex items-center justify-between border-b py-[15px]">
      <P style={{ marginTop: 0 }} className="text-[20px]">
        {label}
      </P>
      <P style={{ marginTop: 0 }} className="text-[20px] hidden md:block">
        x {multiplier}L d'eau
      </P>
      <div>
        <div className="w-1/4 flex justify-between items-center">
          <button
            className="flex items-center justify-center px-2 py-1 rounded border min-w-[30px] w-[30px] h-[30px] "
            onClick={() => setValue(Math.max(0, value - 1))}
          >
            -
          </button>
          <span className="px-4">{value}</span>
          <button
            className="flex items-center justify-center px-2 py-1 rounded border min-w-[30px] w-[30px] h-[30px] "
            onClick={() => setValue(value + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="my-20 mx-auto max-w-[1200px] w-[100%] px-[20px]">
      <Title1 className="pt-20 text-4xl text-left pb-10">
        Calculateur d'impact sur l'eau des océans
      </Title1>
      <div>
        <P className=" italic text-sm">Pollution individuelle</P>
        {renderCounter(
          "Bouteilles jetées dans la nature",
          500,
          nbbouteilles,
          setBouteille
        )}
        {renderCounter("Mégots jetés dans la nature", 150, nbmegots, setMegots)}
        {renderCounter(
          "Morceau de polystyrène",
          3000,
          nbpolystyrene,
          setPolystyrene
        )}
        {renderCounter(
          "Batterie jetée dans l'océan",
          30000,
          nbbatterie,
          setBatterie
        )}
        <P className=" italic text-sm">Pollution à grande échelle</P>
        {renderCounter(
          "Un accident industriel (1000L de produit chimique)",
          1000000,
          nbaccident,
          setAccident
        )}
        {renderCounter(
          "Un accident de pétrolier",
          200000000,
          nbpetrolier,
          setPetrolier
        )}
        <Title2 className="text-end mt-4 border-none">
          ={" "}
          {Number(formatWaterAmount(calculer)) === 0 ? (
            0
          ) : (
            <NumberTicker value={Number(formatWaterAmount(calculer))} />
          )}
          {" " + formatWaterString(calculer)}
        </Title2>
      </div>
    </div>
  );
};

export default Calcul;
