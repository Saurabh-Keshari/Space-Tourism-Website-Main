import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="home px-5">
        <div className="overlay">
          <article className="lg:max-w-120">
            <h1 className="text-2xl text-gray-400 uppercase">
              So, you want to travel to{" "}
              <span className="block text-[80px] text-white mt-5 mb-10">
                SPACE
              </span>
            </h1>
            <p className="text-gray-400">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </article>
          <article className="mt-20">
            <button className="explore-btn w-48 h-48 rounded-full bg-white text-gray-800 uppercase text-4xl lg:w-55 lg:h-55 animate-pulse">
              <Link to="/destination" className="justify-center">Explore</Link>
            </button>
          </article>
        </div>
      </section>
    </>
  );
}
