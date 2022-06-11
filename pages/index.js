import { useRef } from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";

// Local Data
import data from "../yourData";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mx-auto mb-10">
      <Header
        handleWorkScroll={handleWorkScroll}
        handleAboutScroll={handleAboutScroll}
      />
      <div className="laptop:mt-20 laptop:mb-3 laptop:pl-0 mob:mt-10 mob:mb-3 mob:pl-3">
        <h1 className="mt-5 text-8xl mob:text-3xl laptop:text-8xl mob:pr-10 text-bold w-4/5 mob:w-full laptop:w-4/5">
          <div className="header">
            {data.headerTaglineOne}
            <img
              className="header-image mob:w-16 laptop:w-36"
              src={data.headerImage}
              alt="my-image"
            />
          </div>
          {data.headerTaglineTwo}
        </h1>
      </div>
      {/* resume button start */}
      <div className="center">
        <a
          href="https://drive.google.com/file/d/1aO8nyjhuI5rG3UZUj34eIPl948WnoXs8/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          <button className="btn">
            <svg viewBox="0 0 180 60" className="border">
              <polyline
                points="179,1 179,59 1,59 1,1 179,1"
                className="bg-line"
              />
              <polyline
                points="179,1 179,59 1,59 1,1 179,1"
                className="hl-line"
              />
            </svg>
            <span>Download Resume</span>
          </button>
        </a>
      </div>
      {/* resume button end */}
      <div className="laptop:mt-20 mob:p-2 laptop:p-0">
        <Socials />
      </div>
      <div
        className="mt-28 mob:mt-10 laptop:mt-28 mob:p-2 laptop:p-0"
        ref={workRef}
      >
        <h1 className="mob:text-2xl laptop:text-5xl text-bold pl-2">Project.</h1>
        <div className="mt-10 mob:mt-5 laptop:mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-4">
          {data.projects.map((project, index) => (
            <WorkCard
              key={index}
              img={project.imageSrc}
              name={project.title}
              description={project.description}
              onClick={() => window.open(project.url)}
            />
          ))}
        </div>
      </div>
      {/* <div
        className="mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0"
        ref={aboutRef}
      >
        <h1 className="text-2xl text-bold">About.</h1>
        <p className="m-5 mob:m-0 laptop:m-5 mob:mt-2 laptop:ml-0 ml-0 text-3xl mob:text-xl laptop:text-3xl w-3/5 mob:w-full laptop:w-3/5">
          {data.aboutpara}
        </p>
      </div> */}
    </div>
  );
}
