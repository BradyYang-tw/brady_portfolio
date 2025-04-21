import logo from '../assets/react.svg'
const Projects = () => {
  const projects = [
    {
      image: logo,
      title: "Portfolio",
      description:
        "This is my portfolio website, where I showcase my projects and skills. It is built with React and Tailwind CSS.",
    },
  ];
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img className='mb-6 rounded' src={project.image} width={150} height={150} alt={project.title} />
            </div>
            <div className="w-full lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
