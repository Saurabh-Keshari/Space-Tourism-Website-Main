import { useState } from "react";
import { destinations } from "../../public/data.json";

export default function Destination() {
  const [planets] = useState(destinations);
  const [value, setValue] = useState(0);
  const { name, images, description, distance, travel } = planets[value];
  return (
    <>
      <section className="home destination text-white px-5 text-center">
        <div className="overlay pb-[30px]">
          <article>
            <h1 className="mb-14 md:text-xl md:text-left lg:text-3xl lg:mb-37 uppercase">
              <span className="opacity-25 mr-3 font-bold tracking-[15%]">
                01
              </span>{" "}
              Pick your destination
            </h1>
            <img
              src={images.png}
              alt={name}
              title={name}
              className="h-[200px] block mx-auto mb-14 md:h-[300px] lg:h-[400px] lg:mb-0 lg:ml-10"
            />
          </article>
          <article className="lg:max-w-97">
            {planets.map((item, index) => (
              // <button
              //   key={index}
              //   onClick={() => {
              //     setValue(index);
              //   }}
              //   className={`borderHover uppercase text-xl pb-2 mx-3 ${index === value && "text-white border-b-4 border-white"} text-[#d0d6f9]`}
              // >
              //   {item.name}
              // </button>

              <button
                key={index}
                onClick={() => {
                  setValue(index);
                }}
                className={`uppercase text-xl pb-2 mx-3 cursor-pointer border-b-4 transition-colors duration-200 ${
                  index === value
                    ? "text-white border-white"
                    : "text-[#d0d6f9] border-transparent hover:border-white/50 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            ))}

            <h2 className="uppercase text-6xl md:text-7xl mt-8 mb-6">{name}</h2>
            <p className="blueText lg:text-lg border-b pb-6 mb-6">{description}</p>
            <ul>
              <li className="blueText text-sm uppercase mb-6 lg:mb-0">
                avg. distance{" "}
                <p className="text-white text-3xl">{distance}</p>
              </li>
              <li className="blueText text-sm uppercase">
                est. travel time <p className="text-white text-3xl">{travel}</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
