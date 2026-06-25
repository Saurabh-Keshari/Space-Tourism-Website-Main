import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="home px-5">
        <div className="overlay pb-[144px] md:pt-[50px]">
          <article className="lg:max-w-150">
            <h1 className="blueText text-xl uppercase">
              So, you want to travel to{" "}
              <span className="block text-[75px] md:text-[120px] font-normal text-white mb-5">
                SPACE
              </span>
            </h1>
            <p className="blueText">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </article>
          <article className="mt-20 w-40 h-40 md:h-48 md:w-48 lg:w-55 lg:h-55">
            <Link
              to="/destination"
              className="explore-btn flex items-center justify-center w-48 h-48 rounded-full bg-white text-gray-800 uppercase text-4xl transition-all duration-200 ease-in-out"
            >
              Explore
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
