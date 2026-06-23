import { useState } from "react";
import { destinations } from "../../starter-code/data.json";
// import Image from "../../starter-code/assets/destination/image-moon.png"

export default function Destination() {
  const [planets] = useState(destinations);
  const [value, setValue] = useState(0);
  const { name, images, description, distance, travel } = planets[value];
  return (
    <>
      <section className="home destination text-white px-5 text-center">
        <div className="flex flex-col lg:items-start">
          <h1 className="mb-14 text-xl uppercase">
            <span className="opacity-25 mx-3 font-bold tracking-[15%]">01</span>{" "}
            Pick your destination
          </h1>
          <div className="card">
            <article>
              <img
                src={images.png}
                alt={name}
                title={name}
                className="block mx-auto h-[200px] mb-14"
              />
            </article>
            <article className="max-w-100 mx-auto">
              {planets.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setValue(index);
                  }}
                  className={`blueText uppercase text-xl pb-2 mx-3 ${index === value && "border-b-3 border-white"}`}
                >
                  {item.name}
                </button>
              ))}

              <h2 className="uppercase text-6xl mt-8 mb-6">{name}</h2>
              <p className="blueText text-xl border-b pb-6 mb-6">
                {description}
              </p>
              <ul className="lg:items-start">
                <li className="blueText text-lg uppercase">
                  avg. distance{" "}
                  <p className="text-white text-3xl mb-6">{distance}</p>
                </li>
                <li className="blueText text-lg uppercase">
                  est. travel time{" "}
                  <p className="text-white text-3xl">{travel}</p>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
