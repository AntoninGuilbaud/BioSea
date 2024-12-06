import CookieButton from "@/components/cookie";

function Cookie() {
  return <div className=" h-[100vh] w-[100%] mx-auto my-auto mt-40 max-w-[1200px]">
    <div>
      <h1 className="text-center font-bold text-[#3A2EE7] text-[50px] mt-10 mx-5">
        Dechets Clicker
      </h1>
    </div>
    <div className="mt-10">
      <blockquote className="my-6 border-l-2 pl-6 italic mx-10">
        Enlevez tous les dechets dans cette zone de l'océan. Pour réussir il
        faut atteindre le nombre de 30. Bonne Chance !
      </blockquote>
    </div>
    <CookieButton />
  </div>
    ;
}

export default Cookie;
