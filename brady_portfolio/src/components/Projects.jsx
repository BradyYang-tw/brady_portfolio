import brady_movie from "../assets/brady_movie.png";
import tic_tac_toe from "../assets/game-logo.png"
const Projects = () => {
  const projects = [
    {
      image: brady_movie,
      title: "Brady Movie ",
      url: "https://bradyyang-tw.github.io/react-search-movie/",
      description:
        "This is movie search website, using React and the Movie Database API. It allows users to search for movies and view their details.",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
    },
    {
      image: tic_tac_toe,
      title: "Tic Tac Toe ",
      url: "https://bradyyang-tw.github.io/tic-tac-toe/",
      description:" This is the little game TIC TAC TOE",
        technologies: ["React", "JavaScript", "HTML", "CSS"],
    },
  ];
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <a href={project.url} target="_blank">
                <img
                  className="mb-6 rounded"
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                />
              </a>
            </div>
            <div className="w-full lg:w-3/4">
              <h6 className="mb-2 font-semibold"><a href={project.url} target="_blank">{project.title}</a></h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded border-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
