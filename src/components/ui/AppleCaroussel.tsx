"use client";


import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full pt-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Les organes du monde
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-700 dark:text-neutral-200">
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{" "}
                            Keep a journal, quickly jot down a grocery list, and take amazing
                            class notes. Want to convert those notes to text? No problem.
                            Langotiya jeetu ka mara hua yaar is ready to capture every
                            thought.
                        </p>
                        <img
                            src="https://assets.aceternity.com/macbook.png"
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                    </div>
                );
            })}
        </>
    );
};

const data = [
    {
        category: "Les courants océaniques",
        title: "Le coeur",
        src: "https://i0.wp.com/ocean-climate.org/wp-content/uploads/2015/03/FichesP%C3%87dagogiques_CirculationOc%C3%87aniqueGlobale.jpg?fit=800%2C515&ssl=1",
        content: <DummyContent />,
    },
    {
        category: "Le Phytoplancton",
        title: "Les poumons",
        src: "https://newsroom.univ-grenoble-alpes.fr/medias/photo/phytoplanctonweb_1497967576639-jpg",
        content: <DummyContent />,
    },
    {
        category: "Les récifs coralliens",
        title: "Le foie",
        src: "https://cdn.shopify.com/s/files/1/0009/4381/6751/files/4_053af056-0fd1-4df1-9634-f93782ccd099_1024x1024.jpg?v=1680783374",
        content: <DummyContent />,
    },

    {
        category: "Les zones d'upwelling",
        title: "Le système digestif",
        src: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Upwelling_image1.jpg",
        content: <DummyContent />,
    },
    {
        category: "Les marées",
        title: "Les reins",
        src: "https://www.encyclopedie-environnement.org/app/uploads/2016/02/1280px-Mont-Saint-Michel_Drone_reduit-1.jpg",
        content: <DummyContent />,
    },
];
