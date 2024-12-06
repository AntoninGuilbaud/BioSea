import Podcasts from "@/components/podcasts";
import InfoComponents from "../../components/info";
import Hero from "@/components/Hero";
import Apropos from "@/components/Apropos";
import LinkToCookie from "@/components/linkToCookie";
import { AppleCardsCarouselDemo } from "@/components/ui/AppleCaroussel";
import Calcul from "@/components/Calcul";
import Form from "@/components/Form";

function Home() {
  const infos = [
    {
      title:
        "Vous savez que les océans représentent 71% de la surface de la Terre ?",
      number: 71,
    },
    {
      title:
        "Savez-vous combien d’oxygène l’océan produit pour nous ?",
      number: 50,
    },
    {
      title:
        "Savez-vous quel pourcentage des sols océaniques n’a jamais été exploré par l’homme ?",
      number: 95,
    },

  ];
  return (
    <div className="flex flex-col">
      <Hero />
      <AppleCardsCarouselDemo />
      <div>
        <InfoComponents data={infos[0]} />
      </div>
      <Podcasts />
      <div>
        <InfoComponents data={infos[1]} />
      </div>
      <LinkToCookie />
      <Apropos />
      <div className=" mt-10">
        <InfoComponents data={infos[2]} />
      </div>
      <Calcul />
      <Form />
    </div>
  );
}

export default Home;
