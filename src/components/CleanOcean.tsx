import { Title1, Title2, P } from "./typographie";

const CleanOcean = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="my-100">
        <Title1 className="text-[#3A2EE7]">NETTOYEZ L'OCEAN !</Title1>
        <P>
          Grace a nos web-applications, apprenez en plus sur les océans et
          comment aider Race For Water !
        </P>
      </div>
      <div className="flex justify-around	">
        <div className="w-[45%]">
          <a href="">
            <Title2>
              Un Dechet Clicker pour comprendre la difficulté de dépolluer
            </Title2>
            <img src="" alt="" />
          </a>
        </div>
        <div className="w-[45%]">
          <a href="">
            <Title2>
              Un Calculateur Automatique pour la pollution des océans
            </Title2>
            <img src="" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CleanOcean;
