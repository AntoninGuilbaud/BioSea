import { P, Title1, Title3 } from "./typographie";
import HeroVideoDialog from "./ui/hero-video-dialog";
import VideoDialog from "./ui/video-dialog";

function Podcasts() {
  const dataFirst = {
    title: "Épisode 1 des folies de la nuit de l'info",
    description:
      "Dans cette épisode, nous allons parler de notre nuit de l'info",
    videoSrc: "https://www.youtube.com/embed/OCq-h-Z3Ax4",
    thumbnailSrc:
      "https://media.discordapp.net/attachments/1308508490452566107/1314431110989742152/image.png?ex=6753bedd&is=67526d5d&hm=8093780047135631521edef3be0abe1ec201e85c420c1b0617c16197349c00f8&=&format=webp&quality=lossless&width=2182&height=1226",
  };
  const data = [
    {
      title: "Épisode 2 des folies de la nuit de l'info",
      description:
        "Dans cette épisode, nous allons parler de notre nuit de l'info",
      videoSrc: "https://www.youtube.com/embed/cIk9vxeS-Xc",
      thumbnailSrc:
        "https://media.discordapp.net/attachments/1308508490452566107/1314431184289140807/Capture_decran_2024-12-06_041855.png?ex=6753beef&is=67526d6f&hm=81e37a17089761a5da7b0515e8a8d48ce273b0b8bd2f1eeaf16ec72ca724ef3e&=&format=webp&quality=lossless&width=1100&height=620",
    },
    {
      title: "L'intelligence artificielle en action",
      description:
        "L'utilisation de l'IA - Groupe",
      videoSrc: "https://www.youtube.com/embed/tIp6A9LCYy0",
      thumbnailSrc:
        "https://media.discordapp.net/attachments/1308508490452566107/1314431184289140807/Capture_decran_2024-12-06_041855.png?ex=6753beef&is=67526d6f&hm=81e37a17089761a5da7b0515e8a8d48ce273b0b8bd2f1eeaf16ec72ca724ef3e&=&format=webp&quality=lossless&width=1100&height=620",
    },
  ];
  return (
    <div className="relative px-[20px] max-w-[1200px] mx-auto">
      <Title1>Nos podcasts</Title1>
      <P>
        Découvrez nos différents podcasts sur l'océan !
      </P>
      <div className="flex flex-col mt-10 gap-6 sm:flex-row">
        <div className="relative sm:w-1/2 w-full border rounded-lg p-4 flex gap-2 mb-3 sm:mb-0">
          <div>
            <HeroVideoDialog
              className="dark:hidden block"
              animationStyle="from-center"
              videoSrc={dataFirst.videoSrc!}
              thumbnailSrc={dataFirst.thumbnailSrc!}
            />
            <Title3 className="mt-6">{dataFirst.title}</Title3>
            <P className="text-lg" style={{ marginTop: 5 }}>
              {dataFirst.description}
            </P>
          </div>
        </div>
        <div className="flex flex-col sm:w-1/2 w-full gap-4">
          {data.map((podcast, index) => (
            <div key={index} className="w-[100%] gap-4 flex flex-col">
              <VideoDialog
                videoSrc={podcast.videoSrc!}
                thumbnailSrc={podcast.thumbnailSrc!}
                thumbnailTitle={podcast.title!}
                thumbnailDescription={podcast.description!}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Podcasts;
