import { useState } from "react";
import { crew } from "../../public/data.json";

export default function Crew() {
  const [astronaut] = useState(crew);
  const [value, setValue] = useState(0);
  const { name, images, role, bio } = astronaut[value];
  return (
    <>
      <section className="home destination crew text-white px-5 text-center">
        <div className="overlay pb-[30px] lg:items-start">
          <article className="lg:max-w-120">
            <h1 className="mb-14 md:text-xl md:text-left lg:text-3xl lg:mb-37 uppercase">
              <span className="opacity-25 mr-3 font-bold tracking-[15%]">
                02
              </span>{" "}
              Meet your crew
            </h1>

            <h2 className="uppercase text-2xl md:text-4xl mt-8 mb-6">
              <span className="block md:mb-4 text-lg md:text-2xl opacity-50">
                {role}{" "}
              </span>
              {name}
            </h2>
            <p className="blueText lg:text-lg  pb-6 lg:mb-50">{bio}</p>
            {crew.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setValue(index);
                }}
                className={`h-3 w-3 rounded-full bg-white mx-3 cursor-pointer ${index === value ? "opacity-100" : " opacity-20 hover:opacity-50"}`}
              ></button>
            ))}
          </article>
          <article>
            <img
              src={images.png}
              alt={name}
              title={name}
              className="h-[340px] mt-8 mx-auto md:h-[560px] lg:h-[675px] lg:mb-0 lg:ml-10"
            />
          </article>
        </div>
      </section>
    </>
  );
}
