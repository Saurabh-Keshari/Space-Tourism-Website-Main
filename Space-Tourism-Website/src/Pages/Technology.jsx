import { useState } from "react";
import { technology } from "../../starter-code/data.json";

export default function Destination() {
  const [tech] = useState(technology);
  const [value, setValue] = useState(0);
  const { name, images, description } = tech[value];
  return (
    <>
      <section className="home destination technology text-white text-center">
        <div className="overlay">
          <h1 className="mb-20 text-xl md:text-2xl md:self-start md:ml-10 lg:text-3xl lg:mb-37 uppercase">
            <span className="opacity-25 mr-3 font-bold tracking-[15%]">03</span>{" "}
            Space launch 101
          </h1>
          <div className="tech">
            <article>
              <img
                src={images.portrait}
                alt={name}
                title={name}
                className="w-[100vw] h-150 md:h-150 object-cover block mb-14 lg:h-[400px] lg:mb-0"
              />
            </article>
            <article className="lg:max-w-145 px-8 gap-16">
              <div className="mb-12">
                {tech.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setValue(index);
                    }}
                    className={`text-xl mx-3 ${index === value && "bg-white text-black"}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div>
                <h2 className="uppercase text-4xl md:text-7xl mb-6">
                  <span className="block text-2xl mb-4 opacity-50">
                    THE TERMINOLOGY…
                  </span>
                  {name}
                </h2>
                <p className="blueText max-w-140 mx-auto lg;text-lg mb-12">
                  {description}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
