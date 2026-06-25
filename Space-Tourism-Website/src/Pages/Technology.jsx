import { useState } from "react";
import { technology } from "../../starter-code/data.json";

export default function Technology() {
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
          <div className="tech w-full">
            <article>
              <picture>
                <source media="(min-width: 1024px)" srcSet={images.portrait} />
              <img
                src={images.landscape}
                alt={name}
                title={name}
                className="w-full object-cover block mb-14 lg:mb-0 lg:max-h-170"
              />
              </picture>
            </article>
            <article className="lg:max-w-150 px-8 gap-8">
              <div className="mb-12 lg:mb-0">
                {tech.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setValue(index);
                    }}
                    className={`text-xl mx-3 cursor-pointer border border-white/25 transition-colors duration-200 ${index === value ? "bg-white text-black" : "hover:border-white"}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div>
                <h2 className="uppercase text-4xl md:text-6xl mb-6">
                  <span className="block text-2xl mb-4 opacity-50">
                    THE TERMINOLOGY…
                  </span>
                  {name}
                </h2>
                <p className="blueText max-w-140 mx-auto lg:text-lg mb-12 lg:mb-0">
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
